export type InfixOperator =
  | '^'
  | '*'
  | '/'
  | '+'
  | '-'
  | '&'
  | '='
  | '<>'
  | '<'
  | '<='
  | '>'
  | '>='
  | ':'
  | ','
  | ' ';

export type PostfixOperator = '%' | '#';
export type PrefixOperator = '+' | '-' | '@';

export enum Kind {
  INFIX,
  PREFIX,
  POSTFIX,
  VALUE,
  LIST,
  NAME,
  FCALL,
  MISSING,
  SINGLE_SHEET,
  SHEET_RANGE,
  COLUMN_RANGE,
  ROW_RANGE,
  CELL,
  AREA,
  EXTERNAL_CELL_REFERENCE,
  TABLE_IDENTIFIER,
  TABLE_COLUMN,
  TABLE_COLUMN_RANGE,
  TABLE_SPECIFIER,
  STRUCTURED_REFERENCE,
  FUNCTION_NAME,
}

export class Node {
  kind: Kind;
  constructor(kind: Kind) {
    this.kind = kind;
  }
}

export class InfixNode extends Node {
  op: InfixOperator;
  lhs: Node;
  rhs: Node;
  constructor(lhs: Node, op: InfixOperator, rhs: Node) {
    super(Kind.INFIX);
    this.op = op;
    this.lhs = lhs;
    this.rhs = rhs;
  }
}

export class PrefixNode extends Node {
  op: PrefixOperator;
  expr: Node;
  constructor(op: PrefixOperator, expr: Node) {
    super(Kind.PREFIX);
    this.op = op;
    this.expr = expr;
  }
}

export class PostfixNode extends Node {
  op: PostfixOperator;
  expr: Node;
  constructor(expr: Node, op: PostfixOperator) {
    super(Kind.POSTFIX);
    this.op = op;
    this.expr = expr;
  }
}

export enum ValueType {
  ERROR,
  LOGICAL,
  NUMBER,
  STRING,
  ARRAY
}

export class ValueNode extends Node {
  type: ValueType;
  constructor(type: ValueType) {
    super(Kind.VALUE);
    this.type = type;
  }
}

export enum ErrorValue {
  REF,
  DIV0,
  NA,
  NAME,
  NULL,
  NUM,
  VALUE,
  GETTING_DATA,
  SPILL
}

export class ErrorValueNode extends ValueNode {
  value: ErrorValue;
  constructor(value: ErrorValue) {
    super(ValueType.ERROR);
    this.value = value;
  }
}

export class LogicalValueNode extends ValueNode {
  value: boolean;
  constructor(value: boolean) {
    super(ValueType.LOGICAL);
    this.value = value;
  }
}

export class NumberValueNode extends ValueNode {
  value: number;
  constructor(value: number) {
    super(ValueType.NUMBER);
    this.value = value;
  }
}

export class StringValueNode extends ValueNode {
  value: string;
  constructor(value: string) {
    super(ValueType.STRING);
    this.value = value;
  }
}

export class ListNode extends Node {
  list: Node[];
  constructor(node?: Node) {
    super(Kind.LIST);
    this.list = [];
    if (node !== undefined) {
      this.list.push(node);
    }
  }
  push(node: Node) {
    this.list.push(node);
  }
}

export class ArrayValueNode extends ValueNode {
  value: ValueNode[][];
  constructor(row: ValueNode[]) {
    super(ValueType.ARRAY);
    this.value = [row];
  }
  push(row: ValueNode[]) {
    this.value.push(row);
  }
}

export class NameNode extends Node {
  name: string;
  constructor(name: string) {
    super(Kind.NAME);
    this.name = name;
  }
}

export class FunctionNameNode extends Node {
  name: string;
  constructor(name: string) {
    super(Kind.FUNCTION_NAME);
    this.name = name;
  }
}

// single-sheet = [workbook-index] sheet-name / apostrophe [workbook-index] sheet-name-special apostrophe
export class SingleSheetNode extends Node {
  sheet: string;
  workbook?: string;
  constructor(sheet: string, workbook?: string) {
    super(Kind.SINGLE_SHEET);
    this.sheet = sheet;
    this.workbook = workbook;
  }
}

// sheet-range = [workbook-index] sheet-name ":" sheet-name / apostrophe [workbook-index] sheet-name-special ":" sheet-name-special apostrophe
export class SheetRangeNode extends Node {
  start: string;
  end: string;
  workbook?: string;
  constructor(start: string, end: string, workbook?: string) {
    super(Kind.SHEET_RANGE);
    this.start = start;
    this.end = end;
    this.workbook = workbook;
  }
}

export class ColumnRangeNode extends Node {
  start: number;
  end: number;
  flags: number; // 0x01 -> startAbs, 0x02 -> endAbs
  constructor(start: number, end: number, flags: number = 0) {
    super(Kind.COLUMN_RANGE);
    this.start = start;
    this.end = end;
    this.flags = flags;
  }
}

export class RowRangeNode extends Node {
  start: number;
  end: number;
  flags: number; // 0x01 -> startAbs, 0x02 -> endAbs
  constructor(start: number, end: number, flags: number = 0) {
    super(Kind.ROW_RANGE);
    this.start = start;
    this.end = end;
    this.flags = flags;
  }
}

export class CellNode extends Node {
  row: number;
  column: number;
  flags: number; // 0x01 -> row, 0x02 -> column 0x04 -> spill
  constructor(row: number, column: number, flags: number = 0) {
    super(Kind.CELL);
    this.row = row;
    this.column = column;
    this.flags = flags;
  }
}

export class AreaNode extends Node {
  start: CellNode;
  end: CellNode;
  constructor(start: CellNode, end: CellNode) {
    super(Kind.AREA);
    this.start = start;
    this.end = end;
  }
}

export class ExternalCellReference extends Node {
  sheet: SingleSheetNode | SheetRangeNode;
  cell: CellNode | AreaNode;
  constructor(
    sheet: SingleSheetNode | SheetRangeNode,
    cell: CellNode | AreaNode
  ) {
    super(Kind.EXTERNAL_CELL_REFERENCE);
    this.sheet = sheet;
    this.cell = cell;
  }
}

export class TableIdentifierNode extends Node {
  workbook?: string;
  name: string;
  constructor(name: string, workbook?: string) {
    super(Kind.TABLE_IDENTIFIER);
    this.name = name;
    this.workbook = workbook;
  }
}

export class TableColumnNode extends Node {
  name: string;
  constructor(name: string) {
    super(Kind.TABLE_COLUMN);
    this.name = name;
  }
}

export class TableColumnRangeNode extends Node {
  first: TableColumnNode;
  last?: TableColumnNode | null;
  constructor(first: TableColumnNode, last?: TableColumnNode) {
    super(Kind.TABLE_COLUMN_RANGE);
    this.first = first;
    this.last = last;
  }
}

export const TABLE_ALL = 0x01;
export const TABLE_DATA = 0x02;
export const TABLE_HEADERS = 0x04;
export const TABLE_TOTALS = 0x08;
export const TABLE_THIS_ROW = 0x10;

export class TableSpecifierNode extends Node {
  value: number;
  constructor(value: number) {
    super(Kind.TABLE_SPECIFIER);
    this.value = value;
  }
}

export class StructuredReferenceNode extends Node {
  table?: TableIdentifierNode;
  column?: TableColumnRangeNode;
  specifier: number;
  constructor(specifier: number = 0, column?: TableColumnRangeNode) {
    super(Kind.STRUCTURED_REFERENCE);
    this.specifier = specifier;
    this.column = column;
  }
}

export class FunctionCallNode extends Node {
  name: NameNode;
  args: ListNode;
  constructor(name: Node, args: ListNode) {
    super(Kind.FCALL);
    this.name = name as NameNode;
    this.args = args;
  }
}

export class MissingNode extends Node {
  constructor() {
    super(Kind.MISSING);
  }
}

export class Formula {
  node?: Node;
}
