import Lexer from "./lexer";
import {
  Formula,
  Node,
  InfixOperator,
  PostfixOperator,
  PrefixOperator,
  Kind,
  InfixNode,
  PrefixNode,
  PostfixNode,
  ValueType,
  ValueNode,
  ErrorValue,
  ErrorValueNode,
  LogicalValueNode,
  NumberValueNode,
  StringValueNode,
  ListNode,
  ArrayValueNode,
  NameNode,
  FunctionNameNode,
  SingleSheetNode,
  SheetRangeNode,
  ColumnRangeNode,
  RowRangeNode,
  CellNode,
  AreaNode,
  ExternalCellReference,
  TableIdentifierNode,
  TableColumnNode,
  TableColumnRangeNode,
  TableSpecifierNode,
  StructuredReferenceNode,
  FunctionCallNode,
  MissingNode,
} from "./node";

import { Parser, YYEOF, YYPUSH_MORE } from "./parser";

export function parse(formula: string): Node | undefined {
  const lexer = new Lexer(formula);
  const result: Formula = {};
  const parser = new Parser(lexer, result);
  do {
    const token = lexer.lex();
    const yyloc = lexer.getLocation();
    if (parser.push_parse(token, lexer.value, yyloc) !== YYPUSH_MORE) {
      return token === YYEOF ? result.node : undefined;
    }
  } while (true);
}

export {
  Formula,
  Node,
  InfixOperator,
  PostfixOperator,
  PrefixOperator,
  Kind,
  InfixNode,
  PrefixNode,
  PostfixNode,
  ValueType,
  ValueNode,
  ErrorValue,
  ErrorValueNode,
  LogicalValueNode,
  NumberValueNode,
  StringValueNode,
  ListNode,
  ArrayValueNode,
  NameNode,
  FunctionNameNode,
  SingleSheetNode,
  SheetRangeNode,
  ColumnRangeNode,
  RowRangeNode,
  CellNode,
  AreaNode,
  ExternalCellReference,
  TableIdentifierNode,
  TableColumnNode,
  TableColumnRangeNode,
  TableSpecifierNode,
  StructuredReferenceNode,
  FunctionCallNode,
  MissingNode,
};
