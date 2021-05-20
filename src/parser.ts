import {
  Formula,
  Node,
  InfixNode,
  PrefixNode,
  PostfixNode,
  ValueNode,
  MissingNode,
  ListNode,
  ArrayValueNode,
  CellNode,
  AreaNode,
  ExternalCellReference,
  SingleSheetNode,
  SheetRangeNode,
  TableColumnNode,
  TableColumnRangeNode,
  TableSpecifierNode,
  StructuredReferenceNode,
  TableIdentifierNode,
  FunctionCallNode,
  TABLE_ALL,
  TABLE_DATA,
  TABLE_HEADERS,
  TABLE_TOTALS,
  TABLE_THIS_ROW,
} from "./node";
import * as util from "./util";
import Position from "./position";
type int = number;
type short = number;
type byte = number;
type float = number;
const new_any = (n: number) => {
  const array: any[] = [];
  for (let i = 0; i < n; i++) {
    array.push(null);
  }
  return array;
};

const bisonVersion: String = "3.7.6";
const bisonSkeleton: String = "lalr1.java";
export const YYACCEPT: int = 0;
const YYABORT: int = 1;
export const YYPUSH_MORE: int = 4;
const YYERROR: int = 2;
const YYERRLAB: int = 3;
const YYNEWSTATE: int = 4;
const YYDEFAULT: int = 5;
const YYREDUCE: int = 6;
const YYERRLAB1: int = 7;
const YYRETURN: int = 8;
const YYGETTOKEN: int = 9;
function yyPactValueIsDefault(yyvalue: int): boolean {
  return yyvalue == yypact_ninf_;
}
function yyTableValueIsError(yyvalue: int): boolean {
  return yyvalue == yytable_ninf_;
}
const yypact_ninf_: short = -52;
const yytable_ninf_: byte = -1;
const yypact_: short[] = yypact_init();
function yypact_init(): short[] {
  return [
    154, 154, 154, 154, 154, -52, -52, -52, -52, -52, -52, -52, -52, -52, -51, -43, -40, -8, -52,
    -52, -16, -3, -19, 40, 229, -52, -52, -52, -52, -52, -52, -52, -52, 202, 271, 271, 271, 80, -52,
    -14, 1, -52, 3, 4, -52, -10, 2, -52, -52, -6, -52, 22, -52, 23, -52, 154, -52, -52, 154, 154,
    154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, 154, -52, -52, 229, -48, -52, -52, -52,
    -52, -52, 21, -52, -3, -3, -52, 258, 34, -52, 256, 271, 270, -52, 270, 271, -52, 71, 71, 71,
    271, 71, 71, 71, 117, -52, 2, -52, -52, -52, -52, 154, 229, 229,
  ];
}
const yydefact_: byte[] = yydefact_init();
function yydefact_init(): byte[] {
  return [
    0, 0, 0, 0, 0, 62, 63, 64, 65, 66, 30, 31, 32, 33, 27, 0, 0, 0, 44, 45, 46, 0, 0, 0, 2, 4, 25,
    40, 41, 26, 28, 55, 57, 0, 20, 21, 22, 0, 48, 0, 0, 54, 0, 0, 38, 0, 36, 71, 58, 0, 67, 59, 61,
    69, 1, 0, 24, 23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 49, 51, 0, 35, 42, 29, 43, 47, 0,
    34, 0, 0, 56, 0, 0, 17, 10, 7, 5, 19, 6, 8, 18, 12, 16, 15, 9, 13, 11, 14, 0, 50, 37, 39, 68,
    60, 70, 0, 52, 53,
  ];
}
const yypgoto_: byte[] = yypgoto_init();
function yypgoto_init(): byte[] {
  return [-52, -52, -1, -11, -52, -2, -52, -52, 11, -52, -52, -52, 49, 73, -52, -15, -52, 5, 6];
}
const yydefgoto_: byte[] = yydefgoto_init();
function yydefgoto_init(): byte[] {
  return [0, 23, 24, 25, 45, 46, 26, 27, 28, 29, 38, 75, 30, 31, 49, 32, 51, 52, 53];
}
const yytable_: byte[] = yytable_init();
function yytable_init(): byte[] {
  return [
    33, 34, 35, 36, 37, 103, 39, 50, 104, 40, 44, 5, 6, 7, 8, 9, 5, 6, 7, 8, 9, 76, 5, 6, 7, 8, 9,
    47, 17, 18, 19, 20, 10, 11, 12, 13, 74, 43, 42, 48, 54, 82, 83, 22, 18, 19, 20, 21, 80, 22, 77,
    79, 85, 81, 88, 84, 76, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 107, 44, 106,
    55, 86, 56, 87, 57, 58, 47, 105, 59, 60, 61, 62, 63, 64, 78, 1, 41, 108, 2, 109, 3, 68, 0, 0, 0,
    0, 0, 4, 111, 0, 0, 0, 0, 0, 0, 112, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    1, 0, 0, 2, 21, 3, 0, 0, 0, 0, 73, 22, 4, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19, 20, 1, 0, 0, 2, 21, 3, 0, 110, 0, 0, 0, 22, 4, 0, 0, 0, 0, 0, 0, 0, 0,
    5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 0, 0, 0, 0, 21, 55, 0, 56, 0, 57, 58,
    22, 72, 59, 60, 61, 62, 63, 64, 0, 65, 66, 67, 0, 0, 0, 68, 0, 0, 69, 70, 71, 55, 0, 56, 0, 57,
    58, 0, 0, 59, 60, 61, 62, 63, 64, 0, 65, 66, 67, 0, 0, 0, 68, 0, 0, 69, 70, 71, 55, 0, 56, 0,
    57, 0, 0, 0, 59, 60, 61, 62, 63, 64, 55, 55, 56, 56, 57, 57, 0, 68, 59, 0, 61, 61, 63, 64, 64,
    5, 6, 7, 8, 9, 0, 68, 68, 0, 0, 0, 0, 0, 0, 0, 0, 47,
  ];
}
const yycheck_: byte[] = yycheck_init();
function yycheck_init(): byte[] {
  return [
    1, 2, 3, 4, 55, 53, 49, 22, 56, 49, 21, 30, 31, 32, 33, 34, 30, 31, 32, 33, 34, 35, 30, 31, 32,
    33, 34, 46, 42, 43, 44, 45, 35, 36, 37, 38, 37, 40, 54, 58, 0, 51, 52, 57, 43, 44, 45, 50, 45,
    57, 39, 40, 58, 49, 55, 53, 35, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 86, 83,
    84, 3, 53, 5, 54, 7, 8, 46, 83, 11, 12, 13, 14, 15, 16, 39, 9, 17, 86, 12, 87, 14, 24, -1, -1,
    -1, -1, -1, 21, 103, -1, -1, -1, -1, -1, -1, 110, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 9, -1, -1, 12, 50, 14, -1, -1, -1, -1, 56, 57, 21, -1, -1, -1, -1, -1, -1,
    -1, -1, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 9, -1, -1, 12, 50, 14,
    -1, 53, -1, -1, -1, 57, 21, -1, -1, -1, -1, -1, -1, -1, -1, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45, -1, -1, -1, -1, 50, 3, -1, 5, -1, 7, 8, 57, 10, 11, 12, 13, 14, 15,
    16, -1, 18, 19, 20, -1, -1, -1, 24, -1, -1, 27, 28, 29, 3, -1, 5, -1, 7, 8, -1, -1, 11, 12, 13,
    14, 15, 16, -1, 18, 19, 20, -1, -1, -1, 24, -1, -1, 27, 28, 29, 3, -1, 5, -1, 7, -1, -1, -1, 11,
    12, 13, 14, 15, 16, 3, 3, 5, 5, 7, 7, -1, 24, 11, -1, 13, 13, 15, 16, 16, 30, 31, 32, 33, 34,
    -1, 24, 24, -1, -1, -1, -1, -1, -1, -1, -1, 46,
  ];
}
const yystos_: byte[] = yystos_init();
function yystos_init(): byte[] {
  return [
    0, 9, 12, 14, 21, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 50, 57, 60,
    61, 62, 65, 66, 67, 68, 71, 72, 74, 61, 61, 61, 61, 55, 69, 49, 49, 72, 54, 40, 62, 63, 64, 46,
    58, 73, 74, 75, 76, 77, 0, 3, 5, 7, 8, 11, 12, 13, 14, 15, 16, 18, 19, 20, 24, 27, 28, 29, 10,
    56, 61, 70, 35, 67, 71, 67, 45, 49, 51, 52, 53, 58, 53, 54, 61, 61, 61, 61, 61, 61, 61, 61, 61,
    61, 61, 61, 61, 61, 61, 53, 56, 64, 62, 74, 76, 77, 53, 61, 61,
  ];
}
const yyr1_: byte[] = yyr1_init();
function yyr1_init(): byte[] {
  return [
    0, 59, 60, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61, 61,
    61, 61, 61, 61, 61, 61, 62, 62, 62, 62, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 67, 67,
    68, 69, 69, 70, 70, 70, 71, 71, 72, 72, 72, 73, 73, 73, 74, 74, 74, 74, 74, 75, 75, 76, 76, 77,
  ];
}
const yyr2_: byte[] = yyr2_init();
function yyr2_init(): byte[] {
  return [
    0, 2, 1, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 1, 1, 1, 3, 1, 1,
    1, 1, 3, 3, 1, 3, 1, 3, 1, 1, 3, 3, 1, 1, 1, 3, 2, 2, 3, 1, 3, 4, 2, 1, 3, 1, 2, 1, 3, 1, 1, 1,
    1, 1, 1, 1, 3, 1, 3, 1,
  ];
}
const yyrline_: short[] = yyrline_init();
function yyrline_init(): short[] {
  return [
    0, 96, 96, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 129, 130, 131, 132, 133, 134, 138, 139, 143,
    144, 148, 149, 153, 154, 158, 159, 160, 161, 165, 169, 170, 174, 175, 176, 180, 181, 185, 186,
    187, 191, 192, 193, 197, 198, 199, 200, 201, 205, 206, 210, 211, 215,
  ];
}
function yytranslate_(t: int): SymbolKind {
  var code_max: int = 303;
  if (t <= 0) return SymbolKind.S_YYEOF;
  else if (t <= code_max) return SymbolKind.get(yytranslate_table_[t]);
  else return SymbolKind.S_YYUNDEF;
}
const yytranslate_table_: byte[] = yytranslate_table_init();
function yytranslate_table_init(): byte[] {
  return [
    0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 49, 2, 2, 2, 2, 2, 2, 55, 56, 2, 2, 53, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 54, 52, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 57, 2,
    58, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 50,
    2, 51, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
    24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    48,
  ];
}
const YYLAST_: int = 304;
const YYEMPTY_: int = -2;
const YYFINAL_: int = 54;
const YYNTOKENS_: int = 59;
function i18n(s: String): String {
  return s;
}
export class Parser {
  yylloc_set(rhs: YYStack, n: int): Location {
    if (0 < n) return new Location(rhs.locationAt(n - 1).begin, rhs.locationAt(0).end);
    else return new Location(rhs.locationAt(0).end);
  }
  yylexer: Lexer;
  formula: Formula;
  constructor(yylexer: Lexer, formula: Formula) {
    this.yylexer = yylexer;
    this.formula = formula;
  }
  yyDebugStream: util.PrintStream = util.printStream;
  getDebugStream(): util.PrintStream {
    return this.yyDebugStream;
  }
  setDebugStream(s: util.PrintStream): void {
    this.yyDebugStream = s;
  }
  yydebug: int = 0;
  getDebugLevel(): int {
    return this.yydebug;
  }
  setDebugLevel(level: int): void {
    this.yydebug = level;
  }
  yynerrs: int = 0;
  getNumberOfErrors(): int {
    return this.yynerrs;
  }
  yyerror(msg: String): void {
    this.yylexer.yyerror(null as any, msg);
  }
  yyerror_1(loc: Location, msg: String): void {
    this.yylexer.yyerror(loc, msg);
  }
  yyerror_2(pos: Position, msg: String): void {
    this.yylexer.yyerror(new Location(pos), msg);
  }
  yycdebug(s: String): void {
    if (0 < this.yydebug) this.yyDebugStream.println(s);
  }
  yyerrstatus_: int = 0;
  yychar: int = YYEMPTY_;
  yytoken: SymbolKind = null as any;
  yyn: int = 0;
  yylen: int = 0;
  yystate: int = 0;
  yystack: YYStack = new YYStack();
  label: int = YYNEWSTATE;
  yyerrloc: Location = null as any;
  yylloc: Location = new Location(null as any, null as any);
  yylval: Node = null as any;
  recovering(): boolean {
    return this.yyerrstatus_ == 0;
  }
  yyLRGotoState(yystate: int, yysym: int): int {
    var yyr: int = yypgoto_[yysym - YYNTOKENS_] + yystate;
    if (0 <= yyr && yyr <= YYLAST_ && yycheck_[yyr] == yystate) return yytable_[yyr];
    else return yydefgoto_[yysym - YYNTOKENS_];
  }
  yyaction(yyn: int, yystack: YYStack, yylen: int): int {
    var yyval: Node = 0 < yylen ? this.yystack.valueAt(yylen - 1) : this.yystack.valueAt(0);
    var yyloc: Location = this.yylloc_set(yystack, yylen);
    this.yyReducePrint(yyn, yystack);
    switch (yyn) {
      case 2:
        if (yyn == 2) {
          this.formula.node = this.yystack.valueAt(0);
        }
        break;
      case 3:
        if (yyn == 3) {
          yyval = this.yystack.valueAt(1);
        }
        break;
      case 4:
        if (yyn == 4) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 5:
        if (yyn == 5) {
          yyval = new InfixNode(this.yystack.valueAt(2), "+", this.yystack.valueAt(0));
        }
        break;
      case 6:
        if (yyn == 6) {
          yyval = new InfixNode(this.yystack.valueAt(2), "-", this.yystack.valueAt(0));
        }
        break;
      case 7:
        if (yyn == 7) {
          yyval = new InfixNode(this.yystack.valueAt(2), "*", this.yystack.valueAt(0));
        }
        break;
      case 8:
        if (yyn == 8) {
          yyval = new InfixNode(this.yystack.valueAt(2), "/", this.yystack.valueAt(0));
        }
        break;
      case 9:
        if (yyn == 9) {
          yyval = new InfixNode(this.yystack.valueAt(2), "^", this.yystack.valueAt(0));
        }
        break;
      case 10:
        if (yyn == 10) {
          yyval = new InfixNode(this.yystack.valueAt(2), "&", this.yystack.valueAt(0));
        }
        break;
      case 11:
        if (yyn == 11) {
          yyval = new InfixNode(this.yystack.valueAt(2), "<>", this.yystack.valueAt(0));
        }
        break;
      case 12:
        if (yyn == 12) {
          yyval = new InfixNode(this.yystack.valueAt(2), "<", this.yystack.valueAt(0));
        }
        break;
      case 13:
        if (yyn == 13) {
          yyval = new InfixNode(this.yystack.valueAt(2), "<=", this.yystack.valueAt(0));
        }
        break;
      case 14:
        if (yyn == 14) {
          yyval = new InfixNode(this.yystack.valueAt(2), ">=", this.yystack.valueAt(0));
        }
        break;
      case 15:
        if (yyn == 15) {
          yyval = new InfixNode(this.yystack.valueAt(2), ">", this.yystack.valueAt(0));
        }
        break;
      case 16:
        if (yyn == 16) {
          yyval = new InfixNode(this.yystack.valueAt(2), "=", this.yystack.valueAt(0));
        }
        break;
      case 17:
        if (yyn == 17) {
          yyval = new InfixNode(this.yystack.valueAt(2), " ", this.yystack.valueAt(0));
        }
        break;
      case 18:
        if (yyn == 18) {
          yyval = new InfixNode(this.yystack.valueAt(2), ":", this.yystack.valueAt(0));
        }
        break;
      case 19:
        if (yyn == 19) {
          yyval = new InfixNode(this.yystack.valueAt(2), ",", this.yystack.valueAt(0));
        }
        break;
      case 20:
        if (yyn == 20) {
          yyval = new PrefixNode("+", this.yystack.valueAt(0));
        }
        break;
      case 21:
        if (yyn == 21) {
          yyval = new PrefixNode("-", this.yystack.valueAt(0));
        }
        break;
      case 22:
        if (yyn == 22) {
          yyval = new PrefixNode("@", this.yystack.valueAt(0));
        }
        break;
      case 23:
        if (yyn == 23) {
          yyval = new PostfixNode(this.yystack.valueAt(1), "%");
        }
        break;
      case 24:
        if (yyn == 24) {
          yyval = new PostfixNode(this.yystack.valueAt(1), "#");
        }
        break;
      case 25:
        if (yyn == 25) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 26:
        if (yyn == 26) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 27:
        if (yyn == 27) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 28:
        if (yyn == 28) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 29:
        if (yyn == 29) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 30:
        if (yyn == 30) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 31:
        if (yyn == 31) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 32:
        if (yyn == 32) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 33:
        if (yyn == 33) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 34:
        if (yyn == 34) {
          yyval = this.yystack.valueAt(1);
        }
        break;
      case 35:
        if (yyn == 35) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 36:
        if (yyn == 36) {
          yyval = new ArrayValueNode((this.yystack.valueAt(0) as ListNode).list as ValueNode[]);
        }
        break;
      case 37:
        if (yyn == 37) {
          yyval = this.yystack.valueAt(2);
          (this.yystack.valueAt(2) as ArrayValueNode).push(
            (this.yystack.valueAt(0) as ListNode).list as ValueNode[]
          );
        }
        break;
      case 38:
        if (yyn == 38) {
          yyval = new ListNode(this.yystack.valueAt(0));
        }
        break;
      case 39:
        if (yyn == 39) {
          yyval = this.yystack.valueAt(2);
          (this.yystack.valueAt(2) as ListNode).push(this.yystack.valueAt(0));
        }
        break;
      case 40:
        if (yyn == 40) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 41:
        if (yyn == 41) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 42:
        if (yyn == 42) {
          yyval = new ExternalCellReference(
            this.yystack.valueAt(2) as SingleSheetNode,
            this.yystack.valueAt(0) as AreaNode
          );
        }
        break;
      case 43:
        if (yyn == 43) {
          yyval = new ExternalCellReference(
            this.yystack.valueAt(2) as SheetRangeNode,
            this.yystack.valueAt(0) as AreaNode
          );
        }
        break;
      case 44:
        if (yyn == 44) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 45:
        if (yyn == 45) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 46:
        if (yyn == 46) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 47:
        if (yyn == 47) {
          yyval = new AreaNode(
            this.yystack.valueAt(2) as CellNode,
            this.yystack.valueAt(0) as CellNode
          );
        }
        break;
      case 48:
        if (yyn == 48) {
          yyval = new FunctionCallNode(
            this.yystack.valueAt(1),
            this.yystack.valueAt(0) as ListNode
          );
        }
        break;
      case 49:
        if (yyn == 49) {
          yyval = new ListNode();
        }
        break;
      case 50:
        if (yyn == 50) {
          yyval = this.yystack.valueAt(1);
        }
        break;
      case 51:
        if (yyn == 51) {
          yyval = new ListNode(this.yystack.valueAt(0));
        }
        break;
      case 52:
        if (yyn == 52) {
          yyval = this.yystack.valueAt(2);
          (yyval as ListNode).push(this.yystack.valueAt(0));
        }
        break;
      case 53:
        if (yyn == 53) {
          yyval = this.yystack.valueAt(3);
          (yyval as ListNode).push(new MissingNode());
          (yyval as ListNode).push(this.yystack.valueAt(0));
        }
        break;
      case 54:
        if (yyn == 54) {
          yyval = this.yystack.valueAt(0);
          (this.yystack.valueAt(0) as StructuredReferenceNode).table = this.yystack.valueAt(
            1
          ) as TableIdentifierNode;
        }
        break;
      case 55:
        if (yyn == 55) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 56:
        if (yyn == 56) {
          yyval = this.yystack.valueAt(1);
        }
        break;
      case 57:
        if (yyn == 57) {
          yyval = new StructuredReferenceNode(
            (this.yystack.valueAt(0) as TableSpecifierNode).value
          );
        }
        break;
      case 58:
        if (yyn == 58) {
          yyval = new StructuredReferenceNode(0);
        }
        break;
      case 59:
        if (yyn == 59) {
          yyval = new StructuredReferenceNode(
            (this.yystack.valueAt(0) as TableSpecifierNode).value
          );
        }
        break;
      case 60:
        if (yyn == 60) {
          yyval = new StructuredReferenceNode(
            (this.yystack.valueAt(2) as TableSpecifierNode).value,
            this.yystack.valueAt(0) as TableColumnRangeNode
          );
        }
        break;
      case 61:
        if (yyn == 61) {
          yyval = new StructuredReferenceNode(0, this.yystack.valueAt(0) as TableColumnRangeNode);
        }
        break;
      case 62:
        if (yyn == 62) {
          yyval = new TableSpecifierNode(TABLE_ALL);
        }
        break;
      case 63:
        if (yyn == 63) {
          yyval = new TableSpecifierNode(TABLE_DATA);
        }
        break;
      case 64:
        if (yyn == 64) {
          yyval = new TableSpecifierNode(TABLE_HEADERS);
        }
        break;
      case 65:
        if (yyn == 65) {
          yyval = new TableSpecifierNode(TABLE_TOTALS);
        }
        break;
      case 66:
        if (yyn == 66) {
          yyval = new TableSpecifierNode(TABLE_THIS_ROW);
        }
        break;
      case 67:
        if (yyn == 67) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      case 68:
        if (yyn == 68) {
          (this.yystack.valueAt(2) as TableSpecifierNode).value |= (
            this.yystack.valueAt(0) as TableSpecifierNode
          ).value;
          yyval = this.yystack.valueAt(2);
        }
        break;
      case 69:
        if (yyn == 69) {
          yyval = new TableColumnRangeNode(this.yystack.valueAt(0) as TableColumnNode);
        }
        break;
      case 70:
        if (yyn == 70) {
          yyval = new TableColumnRangeNode(
            this.yystack.valueAt(2) as TableColumnNode,
            this.yystack.valueAt(0) as TableColumnNode
          );
        }
        break;
      case 71:
        if (yyn == 71) {
          yyval = this.yystack.valueAt(0);
        }
        break;
      default:
        break;
    }
    this.yySymbolPrint("-> $$ =", SymbolKind.get(yyr1_[yyn]), yyval, yyloc);
    this.yystack.pop_1(yylen);
    yylen = 0;
    var yystate: int = this.yyLRGotoState(this.yystack.stateAt(0), yyr1_[yyn]);
    this.yystack.push(yystate, yyval, yyloc);
    return YYNEWSTATE;
  }
  yySymbolPrint(s: String, yykind: SymbolKind, yyvalue: Node, yylocation: Location): void {
    if (0 < this.yydebug) {
      this.yycdebug(
        s +
          (yykind.getCode() < YYNTOKENS_ ? " token " : " nterm ") +
          yykind.getName() +
          " (" +
          yylocation +
          ": " +
          (yyvalue == (null as any) ? "(null)" : yyvalue.toString()) +
          ")"
      );
    }
  }
  push_parse(yylextoken: int, yylexval: Node, yylexloc: Location): int {
    var yyloc: Location;
    if (!this.push_parse_initialized) {
      this.push_parse_initialize();
      this.yycdebug("Starting parse");
      this.yyerrstatus_ = 0;
    } else this.label = YYGETTOKEN;
    var push_token_consumed: boolean = true;
    for (;;)
      switch (this.label) {
        case YYNEWSTATE:
          this.yycdebug("Entering state " + this.yystate);
          if (0 < this.yydebug) this.yystack.print(this.yyDebugStream);
          if (this.yystate == YYFINAL_) {
            this.label = YYACCEPT;
            break;
          }
          this.yyn = yypact_[this.yystate];
          if (yyPactValueIsDefault(this.yyn)) {
            this.label = YYDEFAULT;
            break;
          }
        case YYGETTOKEN:
          if (this.yychar == YYEMPTY_) {
            if (!push_token_consumed) return YYPUSH_MORE;
            this.yycdebug("Reading a token");
            this.yychar = yylextoken;
            this.yylval = yylexval;
            this.yylloc = yylexloc;
            push_token_consumed = false;
          }
          this.yytoken = yytranslate_(this.yychar);
          this.yySymbolPrint("Next token is", this.yytoken, this.yylval, this.yylloc);
          if (this.yytoken == SymbolKind.S_YYerror) {
            this.yychar = YYUNDEF;
            this.yytoken = SymbolKind.S_YYUNDEF;
            this.yyerrloc = this.yylloc;
            this.label = YYERRLAB1;
          } else {
            this.yyn += this.yytoken.getCode();
            if (this.yyn < 0 || YYLAST_ < this.yyn || yycheck_[this.yyn] != this.yytoken.getCode())
              this.label = YYDEFAULT;
            else if ((this.yyn = yytable_[this.yyn]) <= 0) {
              if (yyTableValueIsError(this.yyn)) this.label = YYERRLAB;
              else {
                this.yyn = -this.yyn;
                this.label = YYREDUCE;
              }
            } else {
              this.yySymbolPrint("Shifting", this.yytoken, this.yylval, this.yylloc);
              this.yychar = YYEMPTY_;
              if (this.yyerrstatus_ > 0) --this.yyerrstatus_;
              this.yystate = this.yyn;
              this.yystack.push(this.yystate, this.yylval, this.yylloc);
              this.label = YYNEWSTATE;
            }
          }
          break;
        case YYDEFAULT:
          this.yyn = yydefact_[this.yystate];
          if (this.yyn == 0) this.label = YYERRLAB;
          else this.label = YYREDUCE;
          break;
        case YYREDUCE:
          this.yylen = yyr2_[this.yyn];
          this.label = this.yyaction(this.yyn, this.yystack, this.yylen);
          this.yystate = this.yystack.stateAt(0);
          break;
        case YYERRLAB:
          if (this.yyerrstatus_ == 0) {
            ++this.yynerrs;
            if (this.yychar == YYEMPTY_) this.yytoken = null as any;
            this.yyreportSyntaxError(new Context(this.yystack, this.yytoken, this.yylloc));
          }
          this.yyerrloc = this.yylloc;
          if (this.yyerrstatus_ == 3) {
            if (this.yychar <= YYEOF) {
              if (this.yychar == YYEOF) {
                this.label = YYABORT;
                break;
              }
            } else this.yychar = YYEMPTY_;
          }
          this.label = YYERRLAB1;
          break;
        case YYERROR:
          this.yyerrloc = this.yystack.locationAt(this.yylen - 1);
          this.yystack.pop_1(this.yylen);
          this.yylen = 0;
          this.yystate = this.yystack.stateAt(0);
          this.label = YYERRLAB1;
          break;
        case YYERRLAB1:
          this.yyerrstatus_ = 3;
          for (;;) {
            this.yyn = yypact_[this.yystate];
            if (!yyPactValueIsDefault(this.yyn)) {
              this.yyn += SymbolKind.S_YYerror.getCode();
              if (
                0 <= this.yyn &&
                this.yyn <= YYLAST_ &&
                yycheck_[this.yyn] == SymbolKind.S_YYerror.getCode()
              ) {
                this.yyn = yytable_[this.yyn];
                if (0 < this.yyn) break;
              }
            }
            if (this.yystack.height == 0) {
              this.label = YYABORT;
              break;
            }
            this.yyerrloc = this.yystack.locationAt(0);
            this.yystack.pop();
            this.yystate = this.yystack.stateAt(0);
            if (0 < this.yydebug) this.yystack.print(this.yyDebugStream);
          }
          if (this.label == YYABORT) break;
          this.yystack.push(0, null as any, this.yylloc);
          this.yystack.push(0, null as any, this.yyerrloc);
          yyloc = this.yylloc_set(this.yystack, 2);
          this.yystack.pop_1(2);
          this.yySymbolPrint("Shifting", SymbolKind.get(yystos_[this.yyn]), this.yylval, yyloc);
          this.yystate = this.yyn;
          this.yystack.push(this.yyn, this.yylval, yyloc);
          this.label = YYNEWSTATE;
          break;
        case YYACCEPT:
          this.push_parse_initialized = false;
          return YYACCEPT;
        case YYABORT:
          this.push_parse_initialized = false;
          return YYABORT;
      }
  }
  push_parse_initialized: boolean = false;
  push_parse_initialize(): void {
    this.yychar = YYEMPTY_;
    this.yytoken = null as any;
    this.yyn = 0;
    this.yylen = 0;
    this.yystate = 0;
    this.yystack = new YYStack();
    this.label = YYNEWSTATE;
    this.yynerrs = 0;
    this.yyerrloc = null as any;
    this.yylloc = new Location(null as any, null as any);
    this.yylval = null as any;
    this.yystack.push(this.yystate, this.yylval, this.yylloc);
    this.push_parse_initialized = true;
  }
  push_parse_1(yylextoken: int, yylexval: Node, yylexpos: Position): int {
    return this.push_parse(yylextoken, yylexval, new Location(yylexpos));
  }
  yyreportSyntaxError(yyctx: Context): void {
    this.yylexer.reportSyntaxError(yyctx);
  }
  yyReducePrint(yyrule: int, yystack: YYStack): void {
    if (this.yydebug == 0) return;
    var yylno: int = yyrline_[yyrule];
    var yynrhs: int = yyr2_[yyrule];
    this.yycdebug("Reducing stack by rule " + (yyrule - 1) + " (line " + yylno + "):");
    for (let yyi: int = 0; yyi < yynrhs; yyi++)
      this.yySymbolPrint(
        "   $" + (yyi + 1) + " =",
        SymbolKind.get(yystos_[this.yystack.stateAt(yynrhs - (yyi + 1))]),
        this.yystack.valueAt(yynrhs - (yyi + 1)),
        this.yystack.locationAt(yynrhs - (yyi + 1))
      );
  }
}
export class Location {
  constructor(...args: any[]) {
    if (args.length === 1 && (args[0] instanceof Position || args[0] === null)) {
      this.constructor_0(args[0] as Position);
    } else if (
      args.length === 2 &&
      (args[0] instanceof Position || args[0] === null) &&
      (args[1] instanceof Position || args[1] === null)
    ) {
      this.constructor_1(args[0] as Position, args[1] as Position);
    } else throw Error("Unknown type(s)");
  }
  begin!: Position;
  end!: Position;
  constructor_0(loc: Position) {
    this.begin = this.end = loc;
  }
  constructor_1(begin: Position, end: Position) {
    this.begin = begin;
    this.end = end;
  }
  toString(): String {
    if (this.begin.equals(this.end)) return this.begin.toString();
    else return this.begin.toString() + "-" + this.end.toString();
  }
}
class SymbolKind {
  static S_YYEOF: SymbolKind = new SymbolKind(0);
  static S_YYerror: SymbolKind = new SymbolKind(1);
  static S_YYUNDEF: SymbolKind = new SymbolKind(2);
  static S_SPACE: SymbolKind = new SymbolKind(3);
  static S_BANG: SymbolKind = new SymbolKind(4);
  static S_HASH: SymbolKind = new SymbolKind(5);
  static S_DOLLAR: SymbolKind = new SymbolKind(6);
  static S_PERCENT: SymbolKind = new SymbolKind(7);
  static S_AMPER: SymbolKind = new SymbolKind(8);
  static S_LPAREN: SymbolKind = new SymbolKind(9);
  static S_RPAREN: SymbolKind = new SymbolKind(10);
  static S_STAR: SymbolKind = new SymbolKind(11);
  static S_PLUS: SymbolKind = new SymbolKind(12);
  static S_UNION: SymbolKind = new SymbolKind(13);
  static S_MINUS: SymbolKind = new SymbolKind(14);
  static S_SLASH: SymbolKind = new SymbolKind(15);
  static S_RANGE: SymbolKind = new SymbolKind(16);
  static S_SEMI: SymbolKind = new SymbolKind(17);
  static S_LT: SymbolKind = new SymbolKind(18);
  static S_EQ: SymbolKind = new SymbolKind(19);
  static S_GT: SymbolKind = new SymbolKind(20);
  static S_AT: SymbolKind = new SymbolKind(21);
  static S_LBRACK: SymbolKind = new SymbolKind(22);
  static S_RBRACK: SymbolKind = new SymbolKind(23);
  static S_CARET: SymbolKind = new SymbolKind(24);
  static S_LBRACE: SymbolKind = new SymbolKind(25);
  static S_RBRACE: SymbolKind = new SymbolKind(26);
  static S_LE: SymbolKind = new SymbolKind(27);
  static S_NE: SymbolKind = new SymbolKind(28);
  static S_GE: SymbolKind = new SymbolKind(29);
  static S_ALL: SymbolKind = new SymbolKind(30);
  static S_DATA: SymbolKind = new SymbolKind(31);
  static S_HEADERS: SymbolKind = new SymbolKind(32);
  static S_TOTALS: SymbolKind = new SymbolKind(33);
  static S_THIS_ROW: SymbolKind = new SymbolKind(34);
  static S_ERROR: SymbolKind = new SymbolKind(35);
  static S_LOGICAL: SymbolKind = new SymbolKind(36);
  static S_NUMBER: SymbolKind = new SymbolKind(37);
  static S_STRING: SymbolKind = new SymbolKind(38);
  static S_NAME: SymbolKind = new SymbolKind(39);
  static S_SINGLE_SHEET: SymbolKind = new SymbolKind(40);
  static S_SHEET_RANGE: SymbolKind = new SymbolKind(41);
  static S_TABLE_IDENTIFIER: SymbolKind = new SymbolKind(42);
  static S_COLUMN_RANGE: SymbolKind = new SymbolKind(43);
  static S_ROW_RANGE: SymbolKind = new SymbolKind(44);
  static S_CELL: SymbolKind = new SymbolKind(45);
  static S_TABLE_COLUMN: SymbolKind = new SymbolKind(46);
  static S_FUNCTION_NAME: SymbolKind = new SymbolKind(47);
  static S_NEG: SymbolKind = new SymbolKind(48);
  static S_49_: SymbolKind = new SymbolKind(49);
  static S_50_: SymbolKind = new SymbolKind(50);
  static S_51_: SymbolKind = new SymbolKind(51);
  static S_52_: SymbolKind = new SymbolKind(52);
  static S_53_: SymbolKind = new SymbolKind(53);
  static S_54_: SymbolKind = new SymbolKind(54);
  static S_55_: SymbolKind = new SymbolKind(55);
  static S_56_: SymbolKind = new SymbolKind(56);
  static S_57_: SymbolKind = new SymbolKind(57);
  static S_58_: SymbolKind = new SymbolKind(58);
  static S_YYACCEPT: SymbolKind = new SymbolKind(59);
  static S_start: SymbolKind = new SymbolKind(60);
  static S_expr: SymbolKind = new SymbolKind(61);
  static S_constant: SymbolKind = new SymbolKind(62);
  static S_constant_list_rows: SymbolKind = new SymbolKind(63);
  static S_constant_list_row: SymbolKind = new SymbolKind(64);
  static S_cell_reference: SymbolKind = new SymbolKind(65);
  static S_external_cell_reference: SymbolKind = new SymbolKind(66);
  static S_a1_reference: SymbolKind = new SymbolKind(67);
  static S_function_call: SymbolKind = new SymbolKind(68);
  static S_argument_list: SymbolKind = new SymbolKind(69);
  static S_non_empty_argument_list: SymbolKind = new SymbolKind(70);
  static S_structure_reference: SymbolKind = new SymbolKind(71);
  static S_intra_table_reference: SymbolKind = new SymbolKind(72);
  static S_inner_reference: SymbolKind = new SymbolKind(73);
  static S_keyword: SymbolKind = new SymbolKind(74);
  static S_keyword_list: SymbolKind = new SymbolKind(75);
  static S_column_range: SymbolKind = new SymbolKind(76);
  static S_column: SymbolKind = new SymbolKind(77);
  yycode_: int;
  constructor(n: int) {
    this.yycode_ = n;
  }
  static values_: SymbolKind[] = [
    SymbolKind.S_YYEOF,
    SymbolKind.S_YYerror,
    SymbolKind.S_YYUNDEF,
    SymbolKind.S_SPACE,
    SymbolKind.S_BANG,
    SymbolKind.S_HASH,
    SymbolKind.S_DOLLAR,
    SymbolKind.S_PERCENT,
    SymbolKind.S_AMPER,
    SymbolKind.S_LPAREN,
    SymbolKind.S_RPAREN,
    SymbolKind.S_STAR,
    SymbolKind.S_PLUS,
    SymbolKind.S_UNION,
    SymbolKind.S_MINUS,
    SymbolKind.S_SLASH,
    SymbolKind.S_RANGE,
    SymbolKind.S_SEMI,
    SymbolKind.S_LT,
    SymbolKind.S_EQ,
    SymbolKind.S_GT,
    SymbolKind.S_AT,
    SymbolKind.S_LBRACK,
    SymbolKind.S_RBRACK,
    SymbolKind.S_CARET,
    SymbolKind.S_LBRACE,
    SymbolKind.S_RBRACE,
    SymbolKind.S_LE,
    SymbolKind.S_NE,
    SymbolKind.S_GE,
    SymbolKind.S_ALL,
    SymbolKind.S_DATA,
    SymbolKind.S_HEADERS,
    SymbolKind.S_TOTALS,
    SymbolKind.S_THIS_ROW,
    SymbolKind.S_ERROR,
    SymbolKind.S_LOGICAL,
    SymbolKind.S_NUMBER,
    SymbolKind.S_STRING,
    SymbolKind.S_NAME,
    SymbolKind.S_SINGLE_SHEET,
    SymbolKind.S_SHEET_RANGE,
    SymbolKind.S_TABLE_IDENTIFIER,
    SymbolKind.S_COLUMN_RANGE,
    SymbolKind.S_ROW_RANGE,
    SymbolKind.S_CELL,
    SymbolKind.S_TABLE_COLUMN,
    SymbolKind.S_FUNCTION_NAME,
    SymbolKind.S_NEG,
    SymbolKind.S_49_,
    SymbolKind.S_50_,
    SymbolKind.S_51_,
    SymbolKind.S_52_,
    SymbolKind.S_53_,
    SymbolKind.S_54_,
    SymbolKind.S_55_,
    SymbolKind.S_56_,
    SymbolKind.S_57_,
    SymbolKind.S_58_,
    SymbolKind.S_YYACCEPT,
    SymbolKind.S_start,
    SymbolKind.S_expr,
    SymbolKind.S_constant,
    SymbolKind.S_constant_list_rows,
    SymbolKind.S_constant_list_row,
    SymbolKind.S_cell_reference,
    SymbolKind.S_external_cell_reference,
    SymbolKind.S_a1_reference,
    SymbolKind.S_function_call,
    SymbolKind.S_argument_list,
    SymbolKind.S_non_empty_argument_list,
    SymbolKind.S_structure_reference,
    SymbolKind.S_intra_table_reference,
    SymbolKind.S_inner_reference,
    SymbolKind.S_keyword,
    SymbolKind.S_keyword_list,
    SymbolKind.S_column_range,
    SymbolKind.S_column,
  ];
  static get(code: int): SymbolKind {
    return SymbolKind.values_[code];
  }
  getCode(): int {
    return this.yycode_;
  }
  static yynames_: String[] = SymbolKind.yynames_init();
  static yynames_init(): String[] {
    return [
      i18n("end of file"),
      i18n("error"),
      i18n("invalid token"),
      " ",
      "!",
      "#",
      "$",
      "%",
      "&",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "@",
      "[",
      "]",
      "^",
      "{",
      "}",
      "<=",
      "<>",
      ">=",
      "[#All]",
      "[#Data]",
      "[#Headers]",
      "[#Totals]",
      "[#This Row]",
      i18n("error constant"),
      i18n("logical constant"),
      i18n("numeric constant"),
      i18n("string constant"),
      i18n("name"),
      i18n("single sheet"),
      i18n("sheet range"),
      i18n("table identifier"),
      i18n("column range"),
      i18n("row range"),
      i18n("cell"),
      i18n("table column"),
      i18n("function name"),
      "NEG",
      "'!'",
      "'{'",
      "'}'",
      "';'",
      "','",
      "':'",
      "'('",
      "')'",
      "'['",
      "']'",
      "$accept",
      "start",
      "expr",
      "constant",
      "constant_list_rows",
      "constant_list_row",
      "cell_reference",
      "external_cell_reference",
      "a1_reference",
      "function_call",
      "argument_list",
      "non_empty_argument_list",
      "structure_reference",
      "intra_table_reference",
      "inner_reference",
      "keyword",
      "keyword_list",
      "column_range",
      "column",
      null as any,
    ];
  }
  getName(): String {
    return SymbolKind.yynames_[this.yycode_];
  }
}
export const YYEOF: int = 0;
export const YYerror: int = 256;
export const YYUNDEF: int = 257;
export const SPACE: int = 258;
export const BANG: int = 259;
export const HASH: int = 260;
export const DOLLAR: int = 261;
export const PERCENT: int = 262;
export const AMPER: int = 263;
export const LPAREN: int = 264;
export const RPAREN: int = 265;
export const STAR: int = 266;
export const PLUS: int = 267;
export const UNION: int = 268;
export const MINUS: int = 269;
export const SLASH: int = 270;
export const RANGE: int = 271;
export const SEMI: int = 272;
export const LT: int = 273;
export const EQ: int = 274;
export const GT: int = 275;
export const AT: int = 276;
export const LBRACK: int = 277;
export const RBRACK: int = 278;
export const CARET: int = 279;
export const LBRACE: int = 280;
export const RBRACE: int = 281;
export const LE: int = 282;
export const NE: int = 283;
export const GE: int = 284;
export const ALL: int = 285;
export const DATA: int = 286;
export const HEADERS: int = 287;
export const TOTALS: int = 288;
export const THIS_ROW: int = 289;
export const ERROR: int = 290;
export const LOGICAL: int = 291;
export const NUMBER: int = 292;
export const STRING: int = 293;
export const NAME: int = 294;
export const SINGLE_SHEET: int = 295;
export const SHEET_RANGE: int = 296;
export const TABLE_IDENTIFIER: int = 297;
export const COLUMN_RANGE: int = 298;
export const ROW_RANGE: int = 299;
export const CELL: int = 300;
export const TABLE_COLUMN: int = 301;
export const FUNCTION_NAME: int = 302;
export const NEG: int = 303;
export const EOF: int = YYEOF;
export interface Lexer {
  yyerror(loc: Location, msg: String): void;
  reportSyntaxError(ctx: Context): void;
}
class YYStack {
  stateStack: int[] = new_any(16);
  locStack: Location[] = new_any(16);
  valueStack: Node[] = new_any(16);
  size: int = 16;
  height: int = -1;
  push(state: int, value: Node, loc: Location): void {
    this.height++;
    if (this.size == this.height) {
      var newStateStack: int[] = new_any(this.size * 2);
      util.arraycopy(this.stateStack, 0, newStateStack, 0, this.height);
      this.stateStack = newStateStack;
      var newLocStack: Location[] = new_any(this.size * 2);
      util.arraycopy(this.locStack, 0, newLocStack, 0, this.height);
      this.locStack = newLocStack;
      var newValueStack: Node[] = new_any(this.size * 2);
      util.arraycopy(this.valueStack, 0, newValueStack, 0, this.height);
      this.valueStack = newValueStack;
      this.size *= 2;
    }
    this.stateStack[this.height] = state;
    this.locStack[this.height] = loc;
    this.valueStack[this.height] = value;
  }
  pop(): void {
    this.pop_1(1);
  }
  pop_1(num: int): void {
    if (0 < num) {
      util.fill(this.valueStack, this.height - num + 1, this.height + 1, null as any);
      util.fill(this.locStack, this.height - num + 1, this.height + 1, null as any);
    }
    this.height -= num;
  }
  stateAt(i: int): int {
    return this.stateStack[this.height - i];
  }
  locationAt(i: int): Location {
    return this.locStack[this.height - i];
  }
  valueAt(i: int): Node {
    return this.valueStack[this.height - i];
  }
  print(out: util.PrintStream): void {
    out.print("Stack now");
    for (let i: int = 0; i <= this.height; i++) {
      out.print(" ");
      out.print(this.stateStack[i]);
    }
    out.println();
  }
}
const NTOKENS: int = YYNTOKENS_;
export class Context {
  constructor(stack: YYStack, token: SymbolKind, loc: Location) {
    this.yystack = stack;
    this.yytoken = token;
    this.yylocation = loc;
  }
  yystack: YYStack;
  getToken(): SymbolKind {
    return this.yytoken;
  }
  yytoken: SymbolKind;
  getLocation(): Location {
    return this.yylocation;
  }
  yylocation: Location;
  getExpectedTokens(yyarg: SymbolKind[], yyargn: int): int {
    return this.getExpectedTokens_1(yyarg, 0, yyargn);
  }
  getExpectedTokens_1(yyarg: SymbolKind[], yyoffset: int, yyargn: int): int {
    var yycount: int = yyoffset;
    var yyn: int = yypact_[this.yystack.stateAt(0)];
    if (!yyPactValueIsDefault(yyn)) {
      var yyxbegin: int = yyn < 0 ? -yyn : 0;
      var yychecklim: int = YYLAST_ - yyn + 1;
      var yyxend: int = yychecklim < NTOKENS ? yychecklim : NTOKENS;
      for (let yyx: int = yyxbegin; yyx < yyxend; ++yyx)
        if (
          yycheck_[yyx + yyn] == yyx &&
          yyx != SymbolKind.S_YYerror.getCode() &&
          !yyTableValueIsError(yytable_[yyx + yyn])
        ) {
          if (yyarg == (null as any)) yycount += 1;
          else if (yycount == yyargn) return 0;
          else yyarg[yycount++] = SymbolKind.get(yyx);
        }
    }
    if (yyarg != (null as any) && yycount == yyoffset && yyoffset < yyargn)
      yyarg[yycount] = null as any;
    return yycount - yyoffset;
  }
}
