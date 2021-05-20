# xlsxp-js

An Excel formula parser in javascript/typescript.

See [grammar.txt](https://github.com/fangwd/xlsxp-js/blob/master/grammar.txt) for the detailed formula syntax. The file is part of the [official](https://docs.microsoft.com/en-us/openspecs/office_standards/ms-xlsx/3d025add-118d-4413-9856-ab65712ec1b0) Excel formula syntax.

## Usage

### Installation

`npm i xlsxp`

### Parsing

```js
import { parse } from "xlsxp";
const expr = parse('A1 + B2');
// expect(expr.op).toBe("+");
```

### Evaluating

How to evaluate an expression depends on how your workbook data is stored.

Here is an extremely simplified/hyperthetical example.

```js
// We'll use a global query function to return a cell value.
function getCellValue(row: number, column: number) {
  // it's unreal!
  return row + column;
}

// Parses a formula string into an expression and evaluates!
function evaluate(formula: string) {
  return _evaluate(parse(formula)!);
}

// Only handles numbers, cells, and '+', '-'', '*' and '/'
function _evaluate(node: Node): number {
  if (node.kind === Kind.VALUE) {
    return (node as NumberValueNode).value;
  }

  if (node.kind === Kind.CELL) {
    const cell = node as CellNode;
    return getCellValue(cell.row, cell.column);
  }

  if (node.kind === Kind.INFIX) {
    const expr = node as InfixNode;
    switch (expr.op) {
      case "+":
        return _evaluate(expr.lhs) + _evaluate(expr.rhs);
      case "-":
        return _evaluate(expr.lhs) - _evaluate(expr.rhs);
      case "*":
        return _evaluate(expr.lhs) * _evaluate(expr.rhs);
      case "/":
        return _evaluate(expr.lhs) / _evaluate(expr.rhs);
      default:
        throw Error(`unsupported operator: ${expr.op}`);
    }
  }
  throw Error(`unknown expression: {node}`);
}

// Now try it:
// expect(evaluate("A1 + B2")).toBe(6);
```

## Other

- See [node.ts](https://github.com/fangwd/xlsxp-js/blob/master/src/node.ts) for all AST nodes.
- See [index.test.ts](https://github.com/fangwd/xlsxp-js/blob/master/src/index.test.ts) for examples.
