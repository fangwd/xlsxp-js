import Lexer from "./lexer";
import { Formula, Node } from "./node";
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
