import { FunctionCallNode, parse } from "./index";
import { CellNode, InfixNode, Kind, Node, NumberValueNode } from "./node";

test("plus", () => {
  const node = parse("A1+B2") as InfixNode;
  expect(node.kind).toBe(Kind.INFIX);
  expect(node.op).toBe("+");
  expect(node.lhs).toEqual(new CellNode(1, 1));
  expect(node.rhs).toEqual(new CellNode(2, 2));
});

test("fcall", () => {
  const node = parse("IF(A2=”Yes”,1,2)") as FunctionCallNode;
  expect(node.kind).toBe(Kind.FCALL);
  expect(node.name.name).toBe("IF");
  expect(node.args.list.length).toBe(3);
});

test("evaluate", () => {
  expect(evaluate("A1 + B2")).toBe(6);
  expect(evaluate("(A1 + B2) * 2")).toBe(12);
});

function getCellValue(row: number, column: number) {
  return row + column;
}

function evaluate(formula: string) {
  return _evaluate(parse(formula)!);
}

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
