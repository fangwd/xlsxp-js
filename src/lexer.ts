import * as Node from "./node";
import * as Token from "./parser";
import Position from "./position";
import { atoi26 } from "./util";

enum YYCONDTYPE {
  Mode_INIT,
  Mode_TABLE,
}

const MODE_INIT = 1000;
const MODE_TABLE = 1001;

const sfcc = String.fromCharCode;

export default class Lexer implements Token.Lexer {
  source: string;
  cursor: number;
  token: number;
  mode: YYCONDTYPE;

  value: Node.Node;

  constructor(source: string) {
    this.source = source;
    this.cursor = 0;
    this.token = -1;
    this.mode = YYCONDTYPE.Mode_INIT;
    this.value = new Node.ErrorValueNode(Node.ErrorValue.NA);
  }

  lex(): number {
    let state = 1;
    let marker = this.cursor;
    let yych = "";
    let yyaccept = 0;
    let o1 = 0,
      o2 = 0;
    let yyt1 = 0;
    let yyt2 = 0;
    let yyt3 = 0;
    let yyt4 = 0;

    this.token = this.cursor;

    while (1) {
      switch (state) {
        case 1 /*var yych*/:
          yyaccept = 0;
          if (this.getMode() < 1) {
            {
              state = MODE_INIT;
              continue;
            }
          } else {
            {
              state = MODE_TABLE;
              continue;
            }
          }
        /* *********************************** */
        case MODE_INIT:
          yych = this.charAt(this.cursor);
          switch (yych) {
            case sfcc(0x0000):
            case "?":
            case "]": {
              state = 2;
              continue;
            }
            case sfcc(0x0001):
            case sfcc(0x0002):
            case sfcc(0x0003):
            case sfcc(0x0004):
            case sfcc(0x0005):
            case sfcc(0x0006):
            case sfcc(0x0007):
            case sfcc(0x0008):
            case "\t":
            case "\n":
            case "\v":
            case "\f":
            case "\r":
            case sfcc(0x000e):
            case sfcc(0x000f):
            case sfcc(0x0010):
            case sfcc(0x0011):
            case sfcc(0x0012):
            case sfcc(0x0013):
            case sfcc(0x0014):
            case sfcc(0x0015):
            case sfcc(0x0016):
            case sfcc(0x0017):
            case sfcc(0x0018):
            case sfcc(0x0019):
            case sfcc(0x001a):
            case sfcc(0x001b):
            case sfcc(0x001c):
            case sfcc(0x001d):
            case sfcc(0x001e):
            case sfcc(0x001f):
            case "`":
            case "|":
            case "~":
            case sfcc(0x007f): {
              state = 4;
              continue;
            }
            case " ": {
              state = 5;
              continue;
            }
            case "!": {
              state = 7;
              continue;
            }
            case '"': {
              state = 9;
              continue;
            }
            case "#": {
              state = 10;
              continue;
            }
            case "$": {
              state = 12;
              continue;
            }
            case "%": {
              state = 14;
              continue;
            }
            case "&": {
              state = 17;
              continue;
            }
            case "'": {
              state = 20;
              continue;
            }
            case "(": {
              state = 21;
              continue;
            }
            case ")": {
              state = 23;
              continue;
            }
            case "*": {
              state = 25;
              continue;
            }
            case "+": {
              state = 28;
              continue;
            }
            case ",": {
              state = 31;
              continue;
            }
            case "-": {
              state = 34;
              continue;
            }
            case ".": {
              state = 37;
              continue;
            }
            case "/": {
              state = 38;
              continue;
            }
            case "0": {
              state = 41;
              continue;
            }
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
              state = 44;
              continue;
            }
            case ":": {
              state = 46;
              continue;
            }
            case ";": {
              state = 49;
              continue;
            }
            case "<": {
              state = 51;
              continue;
            }
            case "=": {
              state = 53;
              continue;
            }
            case ">": {
              state = 56;
              continue;
            }
            case "@": {
              state = 58;
              continue;
            }
            case "A":
            case "B":
            case "C":
            case "D":
            case "E":
            case "G":
            case "H":
            case "I":
            case "J":
            case "K":
            case "L":
            case "M":
            case "N":
            case "O":
            case "P":
            case "Q":
            case "R":
            case "S":
            case "U":
            case "V":
            case "W":
            case "a":
            case "b":
            case "c":
            case "d":
            case "e":
            case "g":
            case "h":
            case "i":
            case "j":
            case "k":
            case "l":
            case "m":
            case "n":
            case "o":
            case "p":
            case "q":
            case "r":
            case "s":
            case "u":
            case "v":
            case "w": {
              state = 60;
              continue;
            }
            case "F":
            case "f": {
              state = 62;
              continue;
            }
            case "T":
            case "t": {
              state = 63;
              continue;
            }
            case "X":
            case "x": {
              state = 64;
              continue;
            }
            case "Y":
            case "Z":
            case "y":
            case "z": {
              state = 65;
              continue;
            }
            case "[": {
              state = 66;
              continue;
            }
            case "\\": {
              state = 68;
              continue;
            }
            case "^": {
              state = 70;
              continue;
            }
            case "{": {
              state = 75;
              continue;
            }
            case "}": {
              state = 77;
              continue;
            }
            default: {
              state = 73;
              continue;
            }
          }
        case 2:
          ++this.cursor;
        case 3: {
          if (this.token >= this.source.length) return Token.YYEOF;
          return Token.YYUNDEF;
        }
        case 4:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 3;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 3;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 3;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
              {
                state = 3;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych == "/") {
                state = 3;
                continue;
              }
              {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 3;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych <= "^") {
                state = 3;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 5:
          yyaccept = 1;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ".") {
            if (yych <= "$") {
              if (yych <= sfcc(0x001f)) {
                state = 6;
                continue;
              }
              if (yych <= "!") {
                state = 87;
                continue;
              }
            } else {
              if (yych <= "&") {
                state = 87;
                continue;
              }
              if (yych <= "(") {
                state = 6;
                continue;
              }
              if (yych <= "-") {
                state = 87;
                continue;
              }
            }
          } else {
            if (yych <= "]") {
              if (yych <= "/") {
                state = 87;
                continue;
              }
              if (yych <= "9") {
                state = 6;
                continue;
              }
              if (yych <= ">") {
                state = 87;
                continue;
              }
            } else {
              if (yych <= "^") {
                state = 87;
                continue;
              }
              if (yych == "}") {
                state = 87;
                continue;
              }
            }
          }
        case 6: {
          return Token.SPACE;
        }
        case 7:
          yyaccept = 2;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 8;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 88;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 8;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 8;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 8: {
          return Token.BANG;
        }
        case 9:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= sfcc(0x0000)) {
            state = 3;
            continue;
          }
          {
            state = 95;
            continue;
          }
        case 10:
          yyaccept = 3;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "Q") {
            if (yych <= "/") {
              if (yych <= "$") {
                if (yych <= sfcc(0x0000)) {
                  state = 11;
                  continue;
                }
                if (yych != " ") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= ")") {
                  if (yych >= "(") {
                    state = 80;
                    continue;
                  }
                } else {
                  if (yych == ".") {
                    state = 80;
                    continue;
                  }
                }
              }
            } else {
              if (yych <= "D") {
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                if (yych <= "?") {
                  state = 11;
                  continue;
                }
                if (yych <= "C") {
                  state = 80;
                  continue;
                }
                {
                  state = 103;
                  continue;
                }
              } else {
                if (yych <= "G") {
                  if (yych <= "F") {
                    state = 80;
                    continue;
                  }
                  {
                    state = 104;
                    continue;
                  }
                } else {
                  if (yych == "N") {
                    state = 105;
                    continue;
                  }
                  {
                    state = 80;
                    continue;
                  }
                }
              }
            }
          } else {
            if (yych <= "f") {
              if (yych <= "V") {
                if (yych <= "R") {
                  state = 106;
                  continue;
                }
                if (yych <= "S") {
                  state = 107;
                  continue;
                }
                if (yych <= "U") {
                  state = 80;
                  continue;
                }
                {
                  state = 108;
                  continue;
                }
              } else {
                if (yych <= "^") {
                  if (yych <= "Z") {
                    state = 80;
                    continue;
                  }
                } else {
                  if (yych == "d") {
                    state = 103;
                    continue;
                  }
                  {
                    state = 80;
                    continue;
                  }
                }
              }
            } else {
              if (yych <= "q") {
                if (yych <= "g") {
                  state = 104;
                  continue;
                }
                if (yych == "n") {
                  state = 105;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "s") {
                  if (yych <= "r") {
                    state = 106;
                    continue;
                  }
                  {
                    state = 107;
                    continue;
                  }
                } else {
                  if (yych == "v") {
                    state = 108;
                    continue;
                  }
                  {
                    state = 80;
                    continue;
                  }
                }
              }
            }
          }
        case 11: {
          return Token.HASH;
        }
        case 12:
          yyaccept = 4;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "9") {
            if (yych <= "'") {
              if (yych <= sfcc(0x001f)) {
                if (yych >= sfcc(0x0001)) {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 13;
                  continue;
                }
                if (yych <= "$") {
                  state = 80;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych >= ".") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 13;
                  continue;
                }
                if (yych <= "0") {
                  state = 80;
                  continue;
                }
                {
                  state = 109;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "Z") {
              if (yych <= "@") {
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                if (yych >= "@") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "W") {
                  state = 111;
                  continue;
                }
                if (yych <= "X") {
                  state = 112;
                  continue;
                }
                {
                  state = 113;
                  continue;
                }
              }
            } else {
              if (yych <= "w") {
                if (yych <= "^") {
                  state = 13;
                  continue;
                }
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 111;
                  continue;
                }
              } else {
                if (yych <= "x") {
                  state = 112;
                  continue;
                }
                if (yych <= "z") {
                  state = 113;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          }
        case 13: {
          return Token.DOLLAR;
        }
        case 14:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 14;
            continue;
          }
          {
            return Token.PERCENT;
          }
        case 17:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 17;
            continue;
          }
          {
            return Token.AMPER;
          }
        case 20:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 3;
                continue;
              }
              if (yych <= "&") {
                state = 114;
                continue;
              }
              {
                state = 3;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 3;
                continue;
              }
              if (yych <= ".") {
                state = 114;
                continue;
              }
              {
                state = 3;
                continue;
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 3;
                continue;
              }
              if (yych <= ">") {
                state = 114;
                continue;
              }
              {
                state = 3;
                continue;
              }
            } else {
              if (yych <= "Z") {
                state = 114;
                continue;
              }
              if (yych <= "[") {
                state = 116;
                continue;
              }
              if (yych <= "]") {
                state = 3;
                continue;
              }
              {
                state = 114;
                continue;
              }
            }
          }
        case 21:
          yyaccept = 5;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 22;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 117;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 22;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 22;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 22: {
          return Token.LPAREN;
        }
        case 23:
          yyaccept = 6;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 24;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 24;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 24;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 24: {
          return Token.RPAREN;
        }
        case 25:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 25;
            continue;
          }
          {
            return Token.STAR;
          }
        case 28:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 28;
            continue;
          }
          {
            return Token.PLUS;
          }
        case 31:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 31;
            continue;
          }
          {
            return Token.UNION;
          }
        case 34:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 34;
            continue;
          }
          {
            return Token.MINUS;
          }
        case 37:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 3;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 3;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 3;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
              {
                state = 3;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych <= ".") {
                state = 80;
                continue;
              }
              if (yych <= "/") {
                state = 3;
                continue;
              }
              if (yych <= "9") {
                state = 119;
                continue;
              }
              {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 3;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych <= "^") {
                state = 3;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 38:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 38;
            continue;
          }
          {
            return Token.SLASH;
          }
        case 41:
          yyaccept = 7;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 43;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych >= "!") {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 43;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 121;
                continue;
              }
              if (yych <= "/") {
                state = 43;
                continue;
              }
              if (yych <= "9") {
                state = 41;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych >= "_") {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 43: {
          return this._number();
        }
        case 44:
          yyaccept = 7;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 43;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych <= " ") {
                state = 43;
                continue;
              }
              {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 43;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
              {
                state = 43;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 121;
                continue;
              }
              if (yych <= "/") {
                state = 43;
                continue;
              }
              if (yych <= "9") {
                state = 44;
                continue;
              }
              {
                state = 122;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                {
                  state = 43;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych <= "^") {
                  state = 43;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 46:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 46;
            continue;
          }
          {
            return Token.RANGE;
          }
        case 49:
          yyaccept = 8;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 50;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 91;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 50;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 50;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 50: {
          return Token.SEMI;
        }
        case 51:
          yych = this.charAt(++this.cursor);
          if (yych <= "<") {
            state = 124;
            continue;
          }
          if (yych <= "=") {
            state = 125;
            continue;
          }
          if (yych <= ">") {
            state = 128;
            continue;
          }
          {
            state = 124;
            continue;
          }
        case 52: {
          return Token.LT;
        }
        case 53:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 53;
            continue;
          }
          {
            return Token.EQ;
          }
        case 56:
          yych = this.charAt(++this.cursor);
          if (yych == "=") {
            state = 133;
            continue;
          }
          {
            state = 132;
            continue;
          }
        case 57: {
          return Token.GT;
        }
        case 58:
          yyaccept = 9;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 59;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 59;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 59;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 59: {
          return Token.AT;
        }
        case 60:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "9") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 139;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= ">") {
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "Z") {
                  state = 65;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych >= "_") {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                if (yych <= "z") {
                  state = 65;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 61: {
          return this._name();
        }
        case 62:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ":") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych <= "-") {
                  state = 61;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                {
                  state = 142;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              } else {
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "A") {
                  state = 145;
                  continue;
                }
                if (yych <= "Z") {
                  state = 65;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "`") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "a") {
                  state = 145;
                  continue;
                }
                if (yych <= "z") {
                  state = 65;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 63:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "Q") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                {
                  state = 65;
                  continue;
                }
              } else {
                if (yych <= "R") {
                  state = 146;
                  continue;
                }
                if (yych <= "Z") {
                  state = 65;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "q") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 65;
                  continue;
                }
              } else {
                if (yych <= "r") {
                  state = 146;
                  continue;
                }
                if (yych <= "z") {
                  state = 65;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 64:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "E") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "F") {
                  state = 147;
                  continue;
                }
                if (yych <= "Z") {
                  state = 148;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "e") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "f") {
                  state = 147;
                  continue;
                }
                if (yych <= "z") {
                  state = 148;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 65:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "9") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                {
                  state = 61;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 139;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= ">") {
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "Z") {
                  state = 148;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                if (yych <= "z") {
                  state = 148;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 66:
          yyaccept = 11;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "#") {
            state = 153;
            continue;
          }
          if (yych != "]") {
            state = 152;
            continue;
          }
        case 67:
          this.setMode(YYCONDTYPE.Mode_TABLE);
          {
            return Token.LBRACK;
          }
        case 68:
          yych = this.charAt(++this.cursor);
          if (yych <= "@") {
            if (yych <= ".") {
              if (yych == "(") {
                state = 157;
                continue;
              }
              if (yych <= "-") {
                state = 61;
                continue;
              }
              {
                state = 68;
                continue;
              }
            } else {
              if (yych <= "9") {
                if (yych <= "/") {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              } else {
                if (yych == "?") {
                  state = 68;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "^") {
              if (yych == "[") {
                state = 143;
                continue;
              }
              if (yych <= "\\") {
                state = 68;
                continue;
              }
              {
                state = 61;
                continue;
              }
            } else {
              if (yych <= "`") {
                if (yych <= "_") {
                  state = 68;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "z") {
                  state = 68;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            }
          }
        case 70:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 70;
            continue;
          }
          {
            return Token.CARET;
          }
        case 73:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ":") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 79;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "!") {
                  state = 82;
                  continue;
                }
                if (yych <= "$") {
                  state = 79;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                if (yych <= ")") {
                  state = 79;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "9") {
                  state = 73;
                  continue;
                }
                {
                  state = 85;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              } else {
                if (yych <= "@") {
                  state = 79;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 79;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 79;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 75:
          yyaccept = 12;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 76;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
              {
                state = 158;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 76;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 76;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 76: {
          return Token.LBRACE;
        }
        case 77:
          yyaccept = 13;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 78;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 78;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 78;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 78: {
          return Token.RBRACE;
        }
        case 79:
          yych = this.charAt(++this.cursor);
        case 80:
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych >= "!") {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                state = 79;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych >= "_") {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 81:
          this.cursor = marker;
          if (yyaccept <= 18) {
            if (yyaccept <= 9) {
              if (yyaccept <= 4) {
                if (yyaccept <= 2) {
                  if (yyaccept <= 1) {
                    if (yyaccept == 0) {
                      {
                        state = 3;
                        continue;
                      }
                    } else {
                      {
                        state = 6;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 8;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 3) {
                    {
                      state = 11;
                      continue;
                    }
                  } else {
                    {
                      state = 13;
                      continue;
                    }
                  }
                }
              } else {
                if (yyaccept <= 7) {
                  if (yyaccept <= 6) {
                    if (yyaccept == 5) {
                      {
                        state = 22;
                        continue;
                      }
                    } else {
                      {
                        state = 24;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 43;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 8) {
                    {
                      state = 50;
                      continue;
                    }
                  } else {
                    {
                      state = 59;
                      continue;
                    }
                  }
                }
              }
            } else {
              if (yyaccept <= 14) {
                if (yyaccept <= 12) {
                  if (yyaccept <= 11) {
                    if (yyaccept == 10) {
                      {
                        state = 61;
                        continue;
                      }
                    } else {
                      {
                        state = 67;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 76;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 13) {
                    {
                      state = 78;
                      continue;
                    }
                  } else {
                    {
                      state = 84;
                      continue;
                    }
                  }
                }
              } else {
                if (yyaccept <= 16) {
                  if (yyaccept == 15) {
                    {
                      state = 101;
                      continue;
                    }
                  } else {
                    {
                      state = 138;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 17) {
                    {
                      state = 141;
                      continue;
                    }
                  } else {
                    {
                      state = 186;
                      continue;
                    }
                  }
                }
              }
            }
          } else {
            if (yyaccept <= 28) {
              if (yyaccept <= 23) {
                if (yyaccept <= 21) {
                  if (yyaccept <= 20) {
                    if (yyaccept == 19) {
                      {
                        state = 189;
                        continue;
                      }
                    } else {
                      {
                        state = 197;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 206;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 22) {
                    {
                      state = 232;
                      continue;
                    }
                  } else {
                    {
                      state = 246;
                      continue;
                    }
                  }
                }
              } else {
                if (yyaccept <= 26) {
                  if (yyaccept <= 25) {
                    if (yyaccept == 24) {
                      {
                        state = 248;
                        continue;
                      }
                    } else {
                      {
                        state = 258;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 261;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 27) {
                    {
                      state = 277;
                      continue;
                    }
                  } else {
                    {
                      state = 288;
                      continue;
                    }
                  }
                }
              }
            } else {
              if (yyaccept <= 33) {
                if (yyaccept <= 31) {
                  if (yyaccept <= 30) {
                    if (yyaccept == 29) {
                      {
                        state = 293;
                        continue;
                      }
                    } else {
                      {
                        state = 302;
                        continue;
                      }
                    }
                  } else {
                    {
                      state = 304;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 32) {
                    {
                      state = 313;
                      continue;
                    }
                  } else {
                    {
                      state = 315;
                      continue;
                    }
                  }
                }
              } else {
                if (yyaccept <= 35) {
                  if (yyaccept == 34) {
                    {
                      state = 332;
                      continue;
                    }
                  } else {
                    {
                      state = 336;
                      continue;
                    }
                  }
                } else {
                  if (yyaccept == 36) {
                    {
                      state = 340;
                      continue;
                    }
                  } else {
                    {
                      state = 343;
                      continue;
                    }
                  }
                }
              }
            }
          }
        case 82:
          yyaccept = 14;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 84;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych >= "!") {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 84;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 84;
                continue;
              }
              if (yych <= "9") {
                state = 79;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych >= "_") {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 84:
          this.cursor -= 1;
          {
            return this._single_sheet();
          }
        case 85:
          yych = this.charAt(++this.cursor);
          if (yych <= ".") {
            if (yych <= "$") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych == " ") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 160;
                continue;
              }
            } else {
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
              if (yych <= "-") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 160;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych <= "/") {
                state = 81;
                continue;
              }
              if (yych == ":") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 160;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
              if (yych <= "^") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 160;
                continue;
              }
            }
          }
        case 86:
          yych = this.charAt(++this.cursor);
        case 87:
          if (yych <= "-") {
            if (yych <= "&") {
              if (yych <= "!") {
                if (yych <= sfcc(0x001f)) {
                  state = 81;
                  continue;
                }
                if (yych <= " ") {
                  state = 86;
                  continue;
                }
              } else {
                if (yych <= "$") {
                  state = 81;
                  continue;
                }
                if (yych <= "%") {
                  state = 14;
                  continue;
                }
                {
                  state = 17;
                  continue;
                }
              }
            } else {
              if (yych <= "*") {
                if (yych <= "(") {
                  state = 81;
                  continue;
                }
                if (yych <= ")") {
                  state = 90;
                  continue;
                }
                {
                  state = 25;
                  continue;
                }
              } else {
                if (yych <= "+") {
                  state = 28;
                  continue;
                }
                if (yych <= ",") {
                  state = 31;
                  continue;
                }
                {
                  state = 34;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "<") {
              if (yych <= "9") {
                if (yych == "/") {
                  state = 38;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= ":") {
                  state = 46;
                  continue;
                }
                if (yych <= ";") {
                  state = 91;
                  continue;
                }
                {
                  state = 51;
                  continue;
                }
              }
            } else {
              if (yych <= "]") {
                if (yych <= "=") {
                  state = 53;
                  continue;
                }
                if (yych <= ">") {
                  state = 56;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "^") {
                  state = 70;
                  continue;
                }
                if (yych == "}") {
                  state = 93;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              }
            }
          }
        case 88:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 88;
            continue;
          }
          {
            state = 8;
            continue;
          }
        case 90:
          ++this.cursor;
          {
            state = 24;
            continue;
          }
        case 91:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 91;
            continue;
          }
          {
            state = 50;
            continue;
          }
        case 93:
          ++this.cursor;
          {
            state = 78;
            continue;
          }
        case 94:
          yych = this.charAt(++this.cursor);
        case 95:
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 94;
                continue;
              }
              if (yych >= "!") {
                state = 98;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych <= '"') {
                  state = 100;
                  continue;
                }
                {
                  state = 94;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 96;
                  continue;
                }
                if (yych <= ")") {
                  state = 94;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 96;
                continue;
              }
              if (yych <= "9") {
                state = 94;
                continue;
              }
              {
                state = 102;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 94;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 94;
                  continue;
                }
                if (yych >= "_") {
                  state = 94;
                  continue;
                }
              }
            }
          }
        case 96:
          yych = this.charAt(++this.cursor);
          if (yych <= sfcc(0x0000)) {
            state = 81;
            continue;
          }
          if (yych == '"') {
            state = 162;
            continue;
          }
          {
            state = 96;
            continue;
          }
        case 98:
          yyaccept = 14;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 84;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 94;
                continue;
              }
              if (yych <= " ") {
                state = 96;
                continue;
              }
              {
                state = 98;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych >= "#") {
                  state = 94;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 96;
                  continue;
                }
                if (yych <= ")") {
                  state = 94;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 96;
                continue;
              }
              if (yych <= "9") {
                state = 94;
                continue;
              }
              {
                state = 102;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 94;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 94;
                  continue;
                }
                if (yych <= "^") {
                  state = 96;
                  continue;
                }
                {
                  state = 94;
                  continue;
                }
              }
            }
          }
        case 100:
          yyaccept = 15;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 101;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych >= "!") {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych <= '"') {
                  state = 94;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 101;
                  continue;
                }
                if (yych <= ")") {
                  state = 79;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 101;
                continue;
              }
              if (yych <= "9") {
                state = 79;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych >= "_") {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 101: {
          return this._string();
        }
        case 102:
          yych = this.charAt(++this.cursor);
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych == " ") {
                state = 96;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 163;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych <= '"') {
                  yyt2 = this.cursor;
                  {
                    state = 165;
                    continue;
                  }
                }
                yyt2 = this.cursor;
                {
                  state = 163;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 96;
                  continue;
                }
                if (yych <= ")") {
                  yyt2 = this.cursor;
                  {
                    state = 163;
                    continue;
                  }
                }
                {
                  state = 96;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 96;
                continue;
              }
              if (yych <= "9") {
                yyt2 = this.cursor;
                {
                  state = 163;
                  continue;
                }
              }
              {
                state = 96;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt2 = this.cursor;
                  {
                    state = 163;
                    continue;
                  }
                }
                {
                  state = 96;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  yyt2 = this.cursor;
                  {
                    state = 163;
                    continue;
                  }
                }
                if (yych <= "^") {
                  state = 96;
                  continue;
                }
                yyt2 = this.cursor;
                {
                  state = 163;
                  continue;
                }
              }
            }
          }
        case 103:
          yych = this.charAt(++this.cursor);
          if (yych == "I") {
            state = 166;
            continue;
          }
          if (yych == "i") {
            state = 166;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 104:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 167;
            continue;
          }
          if (yych == "e") {
            state = 167;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 105:
          yych = this.charAt(++this.cursor);
          if (yych <= "T") {
            if (yych <= "/") {
              if (yych <= ".") {
                state = 80;
                continue;
              }
              {
                state = 168;
                continue;
              }
            } else {
              if (yych == "A") {
                state = 169;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= "a") {
              if (yych <= "U") {
                state = 170;
                continue;
              }
              if (yych <= "`") {
                state = 80;
                continue;
              }
              {
                state = 169;
                continue;
              }
            } else {
              if (yych == "u") {
                state = 170;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 106:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 171;
            continue;
          }
          if (yych == "e") {
            state = 171;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 107:
          yych = this.charAt(++this.cursor);
          if (yych == "P") {
            state = 172;
            continue;
          }
          if (yych == "p") {
            state = 172;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 108:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 173;
            continue;
          }
          if (yych == "a") {
            state = 173;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 109:
          yych = this.charAt(++this.cursor);
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych <= " ") {
                state = 81;
                continue;
              }
              {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 79;
                continue;
              }
              if (yych <= "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                state = 109;
                continue;
              }
              {
                state = 122;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 111:
          yych = this.charAt(++this.cursor);
          if (yych <= ":") {
            if (yych <= "$") {
              if (yych <= "#") {
                state = 80;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 136;
                continue;
              }
            } else {
              if (yych <= "0") {
                state = 80;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 174;
                  continue;
                }
              }
              {
                state = 142;
                continue;
              }
            }
          } else {
            if (yych <= "Z") {
              if (yych <= "@") {
                state = 80;
                continue;
              }
              {
                state = 113;
                continue;
              }
            } else {
              if (yych <= "`") {
                state = 80;
                continue;
              }
              if (yych <= "z") {
                state = 113;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 112:
          yych = this.charAt(++this.cursor);
          if (yych <= "E") {
            if (yych <= "0") {
              if (yych == "$") {
                yyt1 = this.cursor;
                {
                  state = 136;
                  continue;
                }
              }
              {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 174;
                  continue;
                }
              }
              if (yych <= ":") {
                state = 142;
                continue;
              }
              if (yych <= "@") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= "`") {
              if (yych <= "F") {
                state = 176;
                continue;
              }
              if (yych <= "Z") {
                state = 177;
                continue;
              }
              {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "e") {
                state = 113;
                continue;
              }
              if (yych <= "f") {
                state = 176;
                continue;
              }
              if (yych <= "z") {
                state = 177;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 113:
          yych = this.charAt(++this.cursor);
          if (yych <= ":") {
            if (yych <= "$") {
              if (yych <= "#") {
                state = 80;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 136;
                continue;
              }
            } else {
              if (yych <= "0") {
                state = 80;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 174;
                  continue;
                }
              }
              {
                state = 142;
                continue;
              }
            }
          } else {
            if (yych <= "Z") {
              if (yych <= "@") {
                state = 80;
                continue;
              }
              {
                state = 177;
                continue;
              }
            } else {
              if (yych <= "`") {
                state = 80;
                continue;
              }
              if (yych <= "z") {
                state = 177;
                continue;
              }
              {
                state = 80;
                continue;
              }
            }
          }
        case 114:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 114;
                continue;
              }
              {
                state = 178;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 114;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 179;
                continue;
              }
              {
                state = 114;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 114;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 114;
                continue;
              }
            }
          }
        case 116:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 81;
            continue;
          }
          {
            state = 181;
            continue;
          }
        case 117:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 117;
            continue;
          }
          {
            state = 22;
            continue;
          }
        case 119:
          yyaccept = 7;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "/") {
            if (yych <= "$") {
              if (yych <= sfcc(0x001f)) {
                if (yych <= sfcc(0x0000)) {
                  state = 43;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 43;
                  continue;
                }
                if (yych <= "!") {
                  state = 82;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            } else {
              if (yych <= ")") {
                if (yych <= "'") {
                  state = 43;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              } else {
                if (yych == ".") {
                  state = 79;
                  continue;
                }
                {
                  state = 43;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "D") {
              if (yych <= ":") {
                if (yych <= "9") {
                  state = 119;
                  continue;
                }
                {
                  state = 85;
                  continue;
                }
              } else {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                if (yych <= "?") {
                  state = 43;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            } else {
              if (yych <= "^") {
                if (yych <= "E") {
                  state = 182;
                  continue;
                }
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                {
                  state = 43;
                  continue;
                }
              } else {
                if (yych == "e") {
                  state = 182;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 121:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            state = 80;
            continue;
          }
          if (yych <= "9") {
            state = 119;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 122:
          yych = this.charAt(++this.cursor);
          if (yych <= ".") {
            if (yych <= "#") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych == " ") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 160;
                continue;
              }
            } else {
              if (yych <= "'") {
                if (yych <= "$") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 183;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= ")") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                if (yych <= "-") {
                  state = 81;
                  continue;
                }
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= "/") {
                state = 81;
                continue;
              }
              if (yych <= "0") {
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
              if (yych <= "9") {
                yyt1 = yyt2 = this.cursor;
                {
                  state = 184;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 123:
          yych = this.charAt(++this.cursor);
        case 124:
          if (yych == " ") {
            state = 123;
            continue;
          }
          {
            state = 52;
            continue;
          }
        case 125:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 125;
            continue;
          }
          {
            return Token.LE;
          }
        case 128:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 128;
            continue;
          }
          {
            return Token.NE;
          }
        case 131:
          yych = this.charAt(++this.cursor);
        case 132:
          if (yych == " ") {
            state = 131;
            continue;
          }
          {
            state = 57;
            continue;
          }
        case 133:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 133;
            continue;
          }
          {
            return Token.GE;
          }
        case 136:
          yych = this.charAt(++this.cursor);
          if (yych <= "0") {
            state = 80;
            continue;
          }
          if (yych <= "9") {
            state = 174;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 137:
          yyaccept = 16;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 138;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 138;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 138;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 138:
          this.cursor -= 1;
          {
            return this._function_name();
          }
        case 139:
          yyaccept = 17;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ":") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 141;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= "!") {
                  state = 82;
                  continue;
                }
                if (yych <= "$") {
                  state = 79;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                if (yych <= ")") {
                  state = 79;
                  continue;
                }
              } else {
                if (yych <= ".") {
                  state = 73;
                  continue;
                }
                if (yych <= "/") {
                  state = 141;
                  continue;
                }
                if (yych <= "9") {
                  state = 139;
                  continue;
                }
                {
                  state = 85;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                if (yych >= "?") {
                  state = 68;
                  continue;
                }
              } else {
                if (yych <= "@") {
                  state = 79;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych >= "_") {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 79;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 79;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 141:
          o1 = yyt1;
          {
            return this._cell(o1);
          }
        case 142:
          yych = this.charAt(++this.cursor);
          if (yych <= ":") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 81;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                if (yych <= "$") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 187;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                if (yych <= "-") {
                  state = 81;
                  continue;
                }
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 81;
                  continue;
                }
                if (yych <= "9") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "Z") {
              if (yych <= "@") {
                if (yych <= ";") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                if (yych <= "?") {
                  state = 81;
                  continue;
                }
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              } else {
                if (yych <= "W") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 188;
                    continue;
                  }
                }
                if (yych <= "X") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 190;
                    continue;
                  }
                }
                yyt1 = yyt2 = this.cursor;
                {
                  state = 191;
                  continue;
                }
              }
            } else {
              if (yych <= "w") {
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                if (yych <= "`") {
                  yyt2 = this.cursor;
                  {
                    state = 160;
                    continue;
                  }
                }
                yyt1 = yyt2 = this.cursor;
                {
                  state = 188;
                  continue;
                }
              } else {
                if (yych <= "x") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 190;
                    continue;
                  }
                }
                if (yych <= "z") {
                  yyt1 = yyt2 = this.cursor;
                  {
                    state = 191;
                    continue;
                  }
                }
                yyt2 = this.cursor;
                {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 143:
          ++this.cursor;
          this.cursor -= 1;
          {
            return this._table_identifier();
          }
        case 145:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "K") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                {
                  state = 148;
                  continue;
                }
              } else {
                if (yych <= "L") {
                  state = 192;
                  continue;
                }
                if (yych <= "Z") {
                  state = 148;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "k") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 148;
                  continue;
                }
              } else {
                if (yych <= "l") {
                  state = 192;
                  continue;
                }
                if (yych <= "z") {
                  state = 148;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 146:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "T") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                {
                  state = 148;
                  continue;
                }
              } else {
                if (yych <= "U") {
                  state = 193;
                  continue;
                }
                if (yych <= "Z") {
                  state = 148;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "t") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 148;
                  continue;
                }
              } else {
                if (yych <= "u") {
                  state = 193;
                  continue;
                }
                if (yych <= "z") {
                  state = 148;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 147:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ":") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych <= "-") {
                  state = 61;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                {
                  state = 142;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              } else {
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "D") {
                  state = 148;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "`") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "d") {
                  state = 148;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 148:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "9") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                {
                  state = 61;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 61;
                  continue;
                }
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 139;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= ">") {
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                {
                  state = 143;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 80;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 149:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "&") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych == "#") {
                state = 194;
                continue;
              }
              {
                state = 149;
                continue;
              }
            } else {
              if (yych <= ")") {
                if (yych <= "'") {
                  state = 154;
                  continue;
                }
                {
                  state = 149;
                  continue;
                }
              } else {
                if (yych <= "*") {
                  state = 155;
                  continue;
                }
                if (yych <= ".") {
                  state = 149;
                  continue;
                }
                {
                  state = 155;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 155;
                continue;
              }
              if (yych <= ">") {
                state = 149;
                continue;
              }
              {
                state = 155;
                continue;
              }
            } else {
              if (yych <= "[") {
                if (yych <= "Z") {
                  state = 149;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "\\") {
                  state = 155;
                  continue;
                }
                if (yych <= "]") {
                  state = 196;
                  continue;
                }
                {
                  state = 149;
                  continue;
                }
              }
            }
          }
        case 151:
          yyaccept = 11;
          yych = this.charAt((marker = ++this.cursor));
        case 152:
          if (yych <= ".") {
            if (yych <= "#") {
              if (yych <= sfcc(0x001f)) {
                if (yych <= sfcc(0x0000)) {
                  state = 67;
                  continue;
                }
                yyt3 = this.cursor;
                {
                  state = 149;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 151;
                  continue;
                }
                if (yych <= '"') {
                  yyt3 = this.cursor;
                  {
                    state = 149;
                    continue;
                  }
                }
                {
                  state = 194;
                  continue;
                }
              }
            } else {
              if (yych <= "'") {
                if (yych <= "&") {
                  yyt3 = this.cursor;
                  {
                    state = 149;
                    continue;
                  }
                }
                yyt3 = this.cursor;
                {
                  state = 154;
                  continue;
                }
              } else {
                if (yych == "*") {
                  yyt3 = this.cursor;
                  {
                    state = 155;
                    continue;
                  }
                }
                yyt3 = this.cursor;
                {
                  state = 149;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "?") {
              if (yych <= "9") {
                if (yych <= "/") {
                  yyt3 = this.cursor;
                  {
                    state = 155;
                    continue;
                  }
                }
                yyt3 = this.cursor;
                {
                  state = 149;
                  continue;
                }
              } else {
                if (yych <= ":") {
                  yyt3 = this.cursor;
                  {
                    state = 155;
                    continue;
                  }
                }
                if (yych <= ">") {
                  yyt3 = this.cursor;
                  {
                    state = 149;
                    continue;
                  }
                }
                yyt3 = this.cursor;
                {
                  state = 155;
                  continue;
                }
              }
            } else {
              if (yych <= "[") {
                if (yych <= "Z") {
                  yyt3 = this.cursor;
                  {
                    state = 149;
                    continue;
                  }
                }
                {
                  state = 67;
                  continue;
                }
              } else {
                if (yych <= "\\") {
                  yyt3 = this.cursor;
                  {
                    state = 155;
                    continue;
                  }
                }
                if (yych <= "]") {
                  state = 198;
                  continue;
                }
                yyt3 = this.cursor;
                {
                  state = 149;
                  continue;
                }
              }
            }
          }
        case 153:
          yych = this.charAt(++this.cursor);
          if (yych <= "T") {
            if (yych <= "D") {
              if (yych == "A") {
                state = 199;
                continue;
              }
              if (yych <= "C") {
                state = 195;
                continue;
              }
              {
                state = 200;
                continue;
              }
            } else {
              if (yych == "H") {
                state = 201;
                continue;
              }
              if (yych <= "S") {
                state = 195;
                continue;
              }
              {
                state = 202;
                continue;
              }
            }
          } else {
            if (yych <= "d") {
              if (yych == "a") {
                state = 199;
                continue;
              }
              if (yych <= "c") {
                state = 195;
                continue;
              }
              {
                state = 200;
                continue;
              }
            } else {
              if (yych <= "h") {
                if (yych <= "g") {
                  state = 195;
                  continue;
                }
                {
                  state = 201;
                  continue;
                }
              } else {
                if (yych == "t") {
                  state = 202;
                  continue;
                }
                {
                  state = 195;
                  continue;
                }
              }
            }
          }
        case 154:
          yych = this.charAt(++this.cursor);
          if (yych <= "'") {
            if (yych == "#") {
              state = 155;
              continue;
            }
            if (yych <= "&") {
              state = 81;
              continue;
            }
          } else {
            if (yych <= "[") {
              if (yych <= "Z") {
                state = 81;
                continue;
              }
            } else {
              if (yych != "]") {
                state = 81;
                continue;
              }
            }
          }
        case 155:
          yych = this.charAt(++this.cursor);
          if (yych <= "'") {
            if (yych <= '"') {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              {
                state = 155;
                continue;
              }
            } else {
              if (yych <= "#") {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 155;
                continue;
              }
              {
                state = 154;
                continue;
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "Z") {
                state = 155;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "]") {
                state = 203;
                continue;
              }
              {
                state = 155;
                continue;
              }
            }
          }
        case 157:
          ++this.cursor;
          {
            state = 138;
            continue;
          }
        case 158:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 158;
            continue;
          }
          {
            state = 76;
            continue;
          }
        case 160:
          yych = this.charAt(++this.cursor);
        case 161:
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 160;
                continue;
              }
              if (yych <= " ") {
                state = 81;
                continue;
              }
              {
                state = 204;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 160;
                continue;
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                state = 160;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                state = 160;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 160;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 160;
                  continue;
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 162:
          yyaccept = 15;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == '"') {
            state = 96;
            continue;
          }
          {
            state = 101;
            continue;
          }
        case 163:
          yych = this.charAt(++this.cursor);
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 163;
                continue;
              }
              if (yych <= " ") {
                state = 96;
                continue;
              }
              {
                state = 207;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych >= "#") {
                  state = 163;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 96;
                  continue;
                }
                if (yych <= ")") {
                  state = 163;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 96;
                continue;
              }
              if (yych <= "9") {
                state = 163;
                continue;
              }
              {
                state = 96;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 163;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 163;
                  continue;
                }
                if (yych <= "^") {
                  state = 96;
                  continue;
                }
                {
                  state = 163;
                  continue;
                }
              }
            }
          }
        case 165:
          yyaccept = 15;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 101;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 160;
                continue;
              }
              if (yych <= " ") {
                state = 101;
                continue;
              }
              {
                state = 204;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych <= '"') {
                  state = 163;
                  continue;
                }
                {
                  state = 160;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 101;
                  continue;
                }
                if (yych <= ")") {
                  state = 160;
                  continue;
                }
                {
                  state = 101;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 101;
                continue;
              }
              if (yych <= "9") {
                state = 160;
                continue;
              }
              {
                state = 101;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 160;
                  continue;
                }
                {
                  state = 101;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 160;
                  continue;
                }
                if (yych <= "^") {
                  state = 101;
                  continue;
                }
                {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 166:
          yych = this.charAt(++this.cursor);
          if (yych == "V") {
            state = 209;
            continue;
          }
          if (yych == "v") {
            state = 209;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 167:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 210;
            continue;
          }
          if (yych == "t") {
            state = 210;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 168:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 211;
            continue;
          }
          if (yych == "a") {
            state = 211;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 169:
          yych = this.charAt(++this.cursor);
          if (yych == "M") {
            state = 213;
            continue;
          }
          if (yych == "m") {
            state = 213;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 170:
          yych = this.charAt(++this.cursor);
          if (yych <= "M") {
            if (yych <= "K") {
              state = 80;
              continue;
            }
            if (yych <= "L") {
              state = 214;
              continue;
            }
            {
              state = 215;
              continue;
            }
          } else {
            if (yych <= "k") {
              state = 80;
              continue;
            }
            if (yych <= "l") {
              state = 214;
              continue;
            }
            if (yych <= "m") {
              state = 215;
              continue;
            }
            {
              state = 80;
              continue;
            }
          }
        case 171:
          yych = this.charAt(++this.cursor);
          if (yych == "F") {
            state = 216;
            continue;
          }
          if (yych == "f") {
            state = 216;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 172:
          yych = this.charAt(++this.cursor);
          if (yych == "I") {
            state = 217;
            continue;
          }
          if (yych == "i") {
            state = 217;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 173:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 218;
            continue;
          }
          if (yych == "l") {
            state = 218;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 174:
          yyaccept = 17;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 141;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych <= " ") {
                state = 141;
                continue;
              }
              {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 141;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
              {
                state = 141;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 79;
                continue;
              }
              if (yych <= "/") {
                state = 141;
                continue;
              }
              if (yych <= "9") {
                state = 174;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                {
                  state = 141;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych <= "^") {
                  state = 141;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 176:
          yych = this.charAt(++this.cursor);
          if (yych <= ":") {
            if (yych <= "$") {
              if (yych <= "#") {
                state = 80;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 136;
                continue;
              }
            } else {
              if (yych <= "0") {
                state = 80;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 174;
                  continue;
                }
              }
              {
                state = 142;
                continue;
              }
            }
          } else {
            if (yych <= "D") {
              if (yych <= "@") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "`") {
                state = 80;
                continue;
              }
              if (yych >= "e") {
                state = 80;
                continue;
              }
            }
          }
        case 177:
          yych = this.charAt(++this.cursor);
          if (yych <= "0") {
            if (yych == "$") {
              yyt1 = this.cursor;
              {
                state = 136;
                continue;
              }
            }
            {
              state = 80;
              continue;
            }
          } else {
            if (yych <= "9") {
              yyt1 = this.cursor;
              {
                state = 174;
                continue;
              }
            }
            if (yych <= ":") {
              state = 142;
              continue;
            }
            {
              state = 80;
              continue;
            }
          }
        case 178:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 219;
            continue;
          }
          if (yych == "'") {
            state = 221;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 179:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                yyt1 = this.cursor;
                {
                  state = 222;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                yyt1 = this.cursor;
                {
                  state = 222;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 222;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                yyt1 = this.cursor;
                {
                  state = 222;
                  continue;
                }
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 222;
                continue;
              }
            }
          }
        case 180:
          yych = this.charAt(++this.cursor);
        case 181:
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 180;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 180;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              if (yych <= ">") {
                state = 180;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "Z") {
                state = 180;
                continue;
              }
              if (yych <= "\\") {
                state = 81;
                continue;
              }
              if (yych <= "]") {
                state = 224;
                continue;
              }
              {
                state = 180;
                continue;
              }
            }
          }
        case 182:
          yych = this.charAt(++this.cursor);
          if (yych <= ",") {
            if (yych == "+") {
              state = 225;
              continue;
            }
            {
              state = 80;
              continue;
            }
          } else {
            if (yych <= "-") {
              state = 225;
              continue;
            }
            if (yych <= "/") {
              state = 80;
              continue;
            }
            if (yych <= "9") {
              state = 226;
              continue;
            }
            {
              state = 80;
              continue;
            }
          }
        case 183:
          yych = this.charAt(++this.cursor);
          if (yych <= "0") {
            state = 161;
            continue;
          }
          if (yych >= ":") {
            state = 161;
            continue;
          }
        case 184:
          yyaccept = 18;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 186;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 160;
                continue;
              }
              if (yych >= "!") {
                state = 204;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 160;
                continue;
              }
              if (yych <= "'") {
                state = 186;
                continue;
              }
              if (yych <= ")") {
                state = 160;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 160;
                continue;
              }
              if (yych <= "/") {
                state = 186;
                continue;
              }
              if (yych <= "9") {
                state = 184;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 160;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 160;
                  continue;
                }
                if (yych >= "_") {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 186:
          o1 = yyt1;
          {
            return this._row_range(o1);
          }
        case 187:
          yych = this.charAt(++this.cursor);
          if (yych <= "Z") {
            if (yych <= "@") {
              state = 161;
              continue;
            }
            if (yych <= "W") {
              state = 188;
              continue;
            }
            if (yych <= "X") {
              state = 190;
              continue;
            }
            {
              state = 191;
              continue;
            }
          } else {
            if (yych <= "w") {
              if (yych <= "`") {
                state = 161;
                continue;
              }
            } else {
              if (yych <= "x") {
                state = 190;
                continue;
              }
              if (yych <= "z") {
                state = 191;
                continue;
              }
              {
                state = 161;
                continue;
              }
            }
          }
        case 188:
          yyaccept = 19;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "/") {
            if (yych <= "$") {
              if (yych <= sfcc(0x0000)) {
                state = 189;
                continue;
              }
              if (yych != " ") {
                state = 161;
                continue;
              }
            } else {
              if (yych <= ")") {
                if (yych >= "(") {
                  state = 161;
                  continue;
                }
              } else {
                if (yych == ".") {
                  state = 161;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "@") {
              if (yych <= ":") {
                if (yych <= "9") {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= ";") {
                  state = 161;
                  continue;
                }
                if (yych >= "@") {
                  state = 161;
                  continue;
                }
              }
            } else {
              if (yych <= "^") {
                if (yych <= "Z") {
                  state = 191;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 161;
                  continue;
                }
                if (yych <= "z") {
                  state = 191;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              }
            }
          }
        case 189:
          o1 = yyt1;
          {
            return this._column_range(o1);
          }
        case 190:
          yyaccept = 19;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ":") {
            if (yych <= "'") {
              if (yych <= sfcc(0x001f)) {
                if (yych <= sfcc(0x0000)) {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 189;
                  continue;
                }
                if (yych <= "$") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 161;
                  continue;
                }
                if (yych <= "-") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 189;
                  continue;
                }
                if (yych <= "9") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "Z") {
              if (yych <= "@") {
                if (yych <= ";") {
                  state = 161;
                  continue;
                }
                if (yych <= "?") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= "E") {
                  state = 191;
                  continue;
                }
                if (yych <= "F") {
                  state = 228;
                  continue;
                }
                {
                  state = 229;
                  continue;
                }
              }
            } else {
              if (yych <= "e") {
                if (yych <= "^") {
                  state = 189;
                  continue;
                }
                if (yych <= "`") {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= "f") {
                  state = 228;
                  continue;
                }
                if (yych <= "z") {
                  state = 229;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              }
            }
          }
        case 191:
          yyaccept = 19;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "/") {
            if (yych <= "$") {
              if (yych <= sfcc(0x0000)) {
                state = 189;
                continue;
              }
              if (yych == " ") {
                state = 189;
                continue;
              }
              {
                state = 161;
                continue;
              }
            } else {
              if (yych <= ")") {
                if (yych <= "'") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych == ".") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "@") {
              if (yych <= ":") {
                if (yych <= "9") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              } else {
                if (yych <= ";") {
                  state = 161;
                  continue;
                }
                if (yych <= "?") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              }
            } else {
              if (yych <= "^") {
                if (yych <= "Z") {
                  state = 229;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 161;
                  continue;
                }
                if (yych <= "z") {
                  state = 229;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              }
            }
          }
        case 192:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "R") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "S") {
                  state = 230;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "r") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych == "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "s") {
                  state = 230;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 193:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "#") {
                  state = 80;
                  continue;
                }
                if (yych <= "$") {
                  yyt1 = this.cursor;
                  {
                    state = 136;
                    continue;
                  }
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "0") {
                  state = 73;
                  continue;
                }
                if (yych <= "9") {
                  yyt1 = this.cursor;
                  {
                    state = 139;
                    continue;
                  }
                }
                if (yych <= ":") {
                  state = 142;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "D") {
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "E") {
                  state = 231;
                  continue;
                }
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "d") {
                if (yych <= "^") {
                  state = 61;
                  continue;
                }
                if (yych == "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "e") {
                  state = 231;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 194:
          yych = this.charAt(++this.cursor);
        case 195:
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 194;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 194;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              if (yych <= ">") {
                state = 194;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "Z") {
                state = 194;
                continue;
              }
              if (yych <= "\\") {
                state = 81;
                continue;
              }
              if (yych <= "]") {
                state = 198;
                continue;
              }
              {
                state = 194;
                continue;
              }
            }
          }
        case 196:
          yyaccept = 20;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 197;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 197;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 197;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 197:
          o1 = yyt3;
          {
            return this._table_column(o1);
          }
        case 198:
          yych = this.charAt(++this.cursor);
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= " ") {
                state = 81;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 235;
                continue;
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          }
        case 199:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 236;
            continue;
          }
          if (yych == "l") {
            state = 236;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 200:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 237;
            continue;
          }
          if (yych == "a") {
            state = 237;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 201:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 238;
            continue;
          }
          if (yych == "e") {
            state = 238;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 202:
          yych = this.charAt(++this.cursor);
          if (yych <= "O") {
            if (yych == "H") {
              state = 239;
              continue;
            }
            if (yych <= "N") {
              state = 195;
              continue;
            }
            {
              state = 240;
              continue;
            }
          } else {
            if (yych <= "h") {
              if (yych <= "g") {
                state = 195;
                continue;
              }
              {
                state = 239;
                continue;
              }
            } else {
              if (yych == "o") {
                state = 240;
                continue;
              }
              {
                state = 195;
                continue;
              }
            }
          }
        case 203:
          ++this.cursor;
          {
            state = 197;
            continue;
          }
        case 204:
          yyaccept = 21;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 206;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 160;
                continue;
              }
              if (yych >= "!") {
                state = 204;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 160;
                continue;
              }
              if (yych <= "'") {
                state = 206;
                continue;
              }
              if (yych <= ")") {
                state = 160;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 206;
                continue;
              }
              if (yych <= "9") {
                state = 160;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 160;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 160;
                  continue;
                }
                if (yych >= "_") {
                  state = 160;
                  continue;
                }
              }
            }
          }
        case 206:
          o1 = yyt2;
          this.cursor -= 1;
          {
            return this._sheet_range(o1);
          }
        case 207:
          yyaccept = 21;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 206;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 163;
                continue;
              }
              if (yych <= " ") {
                state = 96;
                continue;
              }
              {
                state = 207;
                continue;
              }
            } else {
              if (yych <= "$") {
                if (yych <= '"') {
                  state = 165;
                  continue;
                }
                {
                  state = 163;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 96;
                  continue;
                }
                if (yych <= ")") {
                  state = 163;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 96;
                continue;
              }
              if (yych <= "9") {
                state = 163;
                continue;
              }
              {
                state = 96;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 163;
                  continue;
                }
                {
                  state = 96;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 163;
                  continue;
                }
                if (yych <= "^") {
                  state = 96;
                  continue;
                }
                {
                  state = 163;
                  continue;
                }
              }
            }
          }
        case 209:
          yych = this.charAt(++this.cursor);
          if (yych == "/") {
            state = 241;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 210:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 242;
            continue;
          }
          if (yych == "t") {
            state = 242;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 211:
          ++this.cursor;
          {
            return this._error(Node.ErrorValue.NA);
          }
        case 213:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 243;
            continue;
          }
          if (yych == "e") {
            state = 243;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 214:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 244;
            continue;
          }
          if (yych == "l") {
            state = 244;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 215:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 245;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 216:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 247;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 217:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 249;
            continue;
          }
          if (yych == "l") {
            state = 249;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 218:
          yych = this.charAt(++this.cursor);
          if (yych == "U") {
            state = 250;
            continue;
          }
          if (yych == "u") {
            state = 250;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 219:
          ++this.cursor;
          this.cursor -= 1;
          {
            return this._single_sheet();
          }
        case 221:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 114;
                continue;
              }
              {
                state = 251;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 114;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 114;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 114;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 114;
                continue;
              }
            }
          }
        case 222:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 222;
                continue;
              }
              {
                state = 252;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 222;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 222;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 222;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 222;
                continue;
              }
            }
          }
        case 224:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                yyt1 = this.cursor;
                {
                  state = 253;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                yyt1 = this.cursor;
                {
                  state = 253;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 253;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                yyt1 = this.cursor;
                {
                  state = 253;
                  continue;
                }
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              yyt1 = this.cursor;
              {
                state = 253;
                continue;
              }
            }
          }
        case 225:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            state = 81;
            continue;
          }
          if (yych <= "9") {
            state = 255;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 226:
          yyaccept = 7;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 43;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 79;
                continue;
              }
              if (yych <= " ") {
                state = 43;
                continue;
              }
              {
                state = 82;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 79;
                continue;
              }
              if (yych <= "'") {
                state = 43;
                continue;
              }
              if (yych <= ")") {
                state = 79;
                continue;
              }
              {
                state = 43;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych <= ".") {
                state = 79;
                continue;
              }
              if (yych <= "/") {
                state = 43;
                continue;
              }
              if (yych <= "9") {
                state = 226;
                continue;
              }
              {
                state = 85;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 79;
                  continue;
                }
                {
                  state = 43;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 79;
                  continue;
                }
                if (yych <= "^") {
                  state = 43;
                  continue;
                }
                {
                  state = 79;
                  continue;
                }
              }
            }
          }
        case 228:
          yyaccept = 19;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "9") {
            if (yych <= "'") {
              if (yych <= sfcc(0x001f)) {
                if (yych <= sfcc(0x0000)) {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 189;
                  continue;
                }
                if (yych <= "$") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= ")") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "D") {
              if (yych <= ";") {
                if (yych <= ":") {
                  state = 189;
                  continue;
                }
                {
                  state = 161;
                  continue;
                }
              } else {
                if (yych <= "?") {
                  state = 189;
                  continue;
                }
                if (yych <= "@") {
                  state = 161;
                  continue;
                }
              }
            } else {
              if (yych <= "^") {
                if (yych <= "Z") {
                  state = 161;
                  continue;
                }
                {
                  state = 189;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 161;
                  continue;
                }
                if (yych >= "e") {
                  state = 161;
                  continue;
                }
              }
            }
          }
        case 229:
          yyaccept = 19;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ".") {
            if (yych <= "$") {
              if (yych <= sfcc(0x0000)) {
                state = 189;
                continue;
              }
              if (yych == " ") {
                state = 189;
                continue;
              }
              {
                state = 161;
                continue;
              }
            } else {
              if (yych <= "'") {
                state = 189;
                continue;
              }
              if (yych <= ")") {
                state = 161;
                continue;
              }
              if (yych <= "-") {
                state = 189;
                continue;
              }
              {
                state = 161;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych <= "/") {
                state = 189;
                continue;
              }
              if (yych == ":") {
                state = 189;
                continue;
              }
              {
                state = 161;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 189;
                continue;
              }
              if (yych <= "Z") {
                state = 161;
                continue;
              }
              if (yych <= "^") {
                state = 189;
                continue;
              }
              {
                state = 161;
                continue;
              }
            }
          }
        case 230:
          yyaccept = 10;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "?") {
            if (yych <= ")") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 61;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "$") {
                  state = 80;
                  continue;
                }
                if (yych <= "'") {
                  state = 61;
                  continue;
                }
                if (yych <= "(") {
                  state = 137;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            } else {
              if (yych <= "/") {
                if (yych == ".") {
                  state = 73;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              } else {
                if (yych <= "9") {
                  state = 73;
                  continue;
                }
                if (yych <= ";") {
                  state = 80;
                  continue;
                }
                if (yych <= ">") {
                  state = 61;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "^") {
              if (yych <= "E") {
                if (yych <= "@") {
                  state = 80;
                  continue;
                }
                if (yych <= "D") {
                  state = 73;
                  continue;
                }
                {
                  state = 257;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                if (yych <= "\\") {
                  state = 68;
                  continue;
                }
                {
                  state = 61;
                  continue;
                }
              }
            } else {
              if (yych <= "d") {
                if (yych == "`") {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "e") {
                  state = 257;
                  continue;
                }
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 231:
          yyaccept = 22;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 232;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "$") {
                  state = 80;
                  continue;
                }
                if (yych >= "(") {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych >= ".") {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 232;
                  continue;
                }
                if (yych <= "9") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "@") {
                if (yych <= ">") {
                  state = 232;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "`") {
                if (yych <= "^") {
                  state = 232;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 232: {
          return this._bool(true);
        }
        case 233:
          yych = this.charAt(++this.cursor);
        case 234:
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 233;
                continue;
              }
              if (yych <= " ") {
                state = 81;
                continue;
              }
              {
                state = 259;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 233;
                continue;
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                state = 233;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                state = 233;
                continue;
              }
              {
                state = 262;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 233;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 233;
                  continue;
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                {
                  state = 233;
                  continue;
                }
              }
            }
          }
        case 235:
          yych = this.charAt(++this.cursor);
          if (yych <= "^") {
            if (yych <= "Z") {
              if (yych <= "@") {
                state = 234;
                continue;
              }
              yyt2 = yyt4 = this.cursor;
              {
                state = 263;
                continue;
              }
            } else {
              if (yych == "\\") {
                yyt2 = yyt4 = this.cursor;
                {
                  state = 265;
                  continue;
                }
              }
              {
                state = 234;
                continue;
              }
            }
          } else {
            if (yych <= "`") {
              if (yych <= "_") {
                yyt2 = yyt4 = this.cursor;
                {
                  state = 263;
                  continue;
                }
              }
              {
                state = 234;
                continue;
              }
            } else {
              if (yych <= "z") {
                yyt2 = yyt4 = this.cursor;
                {
                  state = 263;
                  continue;
                }
              }
              if (yych <= sfcc(0x007f)) {
                state = 234;
                continue;
              }
              yyt2 = yyt4 = this.cursor;
              {
                state = 263;
                continue;
              }
            }
          }
        case 236:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 267;
            continue;
          }
          if (yych == "l") {
            state = 267;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 237:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 268;
            continue;
          }
          if (yych == "t") {
            state = 268;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 238:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 269;
            continue;
          }
          if (yych == "a") {
            state = 269;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 239:
          yych = this.charAt(++this.cursor);
          if (yych == "I") {
            state = 270;
            continue;
          }
          if (yych == "i") {
            state = 270;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 240:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 271;
            continue;
          }
          if (yych == "t") {
            state = 271;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 241:
          yych = this.charAt(++this.cursor);
          if (yych == "0") {
            state = 272;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 242:
          yych = this.charAt(++this.cursor);
          if (yych == "I") {
            state = 273;
            continue;
          }
          if (yych == "i") {
            state = 273;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 243:
          yych = this.charAt(++this.cursor);
          if (yych == "?") {
            state = 274;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 244:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 276;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 245:
          yyaccept = 23;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 246;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 246;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 246;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 246: {
          return this._error(Node.ErrorValue.NUM);
        }
        case 247:
          yyaccept = 24;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 248;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 248;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 248;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 248: {
          return this._error(Node.ErrorValue.REF);
        }
        case 249:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 278;
            continue;
          }
          if (yych == "l") {
            state = 278;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 250:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 279;
            continue;
          }
          if (yych == "e") {
            state = 279;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 251:
          yych = this.charAt(++this.cursor);
          if (yych == "'") {
            state = 221;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 252:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 280;
            continue;
          }
          if (yych == "'") {
            state = 282;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 253:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 253;
                continue;
              }
              {
                state = 283;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 253;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 284;
                continue;
              }
              {
                state = 253;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 253;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 253;
                continue;
              }
            }
          }
        case 255:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            state = 43;
            continue;
          }
          if (yych <= "9") {
            state = 255;
            continue;
          }
          {
            state = 43;
            continue;
          }
        case 257:
          yyaccept = 25;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ";") {
            if (yych <= "(") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 258;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "$") {
                  state = 80;
                  continue;
                }
                if (yych >= "(") {
                  state = 137;
                  continue;
                }
              }
            } else {
              if (yych <= ".") {
                if (yych <= ")") {
                  state = 80;
                  continue;
                }
                if (yych >= ".") {
                  state = 73;
                  continue;
                }
              } else {
                if (yych <= "/") {
                  state = 258;
                  continue;
                }
                if (yych <= "9") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "\\") {
              if (yych <= "@") {
                if (yych <= ">") {
                  state = 258;
                  continue;
                }
                if (yych <= "?") {
                  state = 68;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 73;
                  continue;
                }
                if (yych <= "[") {
                  state = 143;
                  continue;
                }
                {
                  state = 68;
                  continue;
                }
              }
            } else {
              if (yych <= "`") {
                if (yych <= "^") {
                  state = 258;
                  continue;
                }
                if (yych <= "_") {
                  state = 73;
                  continue;
                }
                {
                  state = 80;
                  continue;
                }
              } else {
                if (yych <= "z") {
                  state = 73;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 80;
                  continue;
                }
                {
                  state = 73;
                  continue;
                }
              }
            }
          }
        case 258: {
          return this._bool(false);
        }
        case 259:
          yyaccept = 26;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 261;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 233;
                continue;
              }
              if (yych >= "!") {
                state = 259;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 233;
                continue;
              }
              if (yych <= "'") {
                state = 261;
                continue;
              }
              if (yych <= ")") {
                state = 233;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 261;
                continue;
              }
              if (yych <= "9") {
                state = 233;
                continue;
              }
              {
                state = 262;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 233;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 233;
                  continue;
                }
                if (yych >= "_") {
                  state = 233;
                  continue;
                }
              }
            }
          }
        case 261:
          o1 = yyt1;
          this.cursor -= 1;
          {
            return this._single_sheet(o1);
          }
        case 262:
          yych = this.charAt(++this.cursor);
          if (yych <= ".") {
            if (yych <= "$") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych == " ") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 285;
                continue;
              }
            } else {
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                yyt2 = this.cursor;
                {
                  state = 285;
                  continue;
                }
              }
              if (yych <= "-") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 285;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych <= "/") {
                state = 81;
                continue;
              }
              if (yych == ":") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 285;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                yyt2 = this.cursor;
                {
                  state = 285;
                  continue;
                }
              }
              if (yych <= "^") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 285;
                continue;
              }
            }
          }
        case 263:
          yych = this.charAt(++this.cursor);
          if (yych <= ":") {
            if (yych <= "'") {
              if (yych <= " ") {
                if (yych <= sfcc(0x0000)) {
                  state = 81;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 233;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "!") {
                  state = 259;
                  continue;
                }
                if (yych <= "$") {
                  state = 233;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              }
            } else {
              if (yych <= "-") {
                if (yych <= "(") {
                  state = 287;
                  continue;
                }
                if (yych <= ")") {
                  state = 233;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych == "/") {
                  state = 81;
                  continue;
                }
                if (yych <= "9") {
                  state = 263;
                  continue;
                }
                {
                  state = 262;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 233;
                  continue;
                }
                if (yych <= ">") {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "@") {
                  state = 233;
                  continue;
                }
                if (yych <= "Z") {
                  state = 263;
                  continue;
                }
                {
                  state = 289;
                  continue;
                }
              }
            } else {
              if (yych <= "_") {
                if (yych <= "\\") {
                  state = 265;
                  continue;
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                {
                  state = 263;
                  continue;
                }
              } else {
                if (yych <= "`") {
                  state = 233;
                  continue;
                }
                if (yych <= "z") {
                  state = 263;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 233;
                  continue;
                }
                {
                  state = 263;
                  continue;
                }
              }
            }
          }
        case 265:
          yych = this.charAt(++this.cursor);
          if (yych <= "@") {
            if (yych <= ".") {
              if (yych == "(") {
                state = 291;
                continue;
              }
              if (yych <= "-") {
                state = 81;
                continue;
              }
              {
                state = 265;
                continue;
              }
            } else {
              if (yych <= "9") {
                if (yych <= "/") {
                  state = 81;
                  continue;
                }
                {
                  state = 265;
                  continue;
                }
              } else {
                if (yych == "?") {
                  state = 265;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "^") {
              if (yych == "[") {
                state = 289;
                continue;
              }
              if (yych <= "\\") {
                state = 265;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "`") {
                if (yych <= "_") {
                  state = 265;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "z") {
                  state = 265;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 81;
                  continue;
                }
                {
                  state = 265;
                  continue;
                }
              }
            }
          }
        case 267:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 292;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 268:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 294;
            continue;
          }
          if (yych == "a") {
            state = 294;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 269:
          yych = this.charAt(++this.cursor);
          if (yych == "D") {
            state = 295;
            continue;
          }
          if (yych == "d") {
            state = 295;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 270:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 296;
            continue;
          }
          if (yych == "s") {
            state = 296;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 271:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 297;
            continue;
          }
          if (yych == "a") {
            state = 297;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 272:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 298;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 273:
          yych = this.charAt(++this.cursor);
          if (yych == "N") {
            state = 300;
            continue;
          }
          if (yych == "n") {
            state = 300;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 274:
          ++this.cursor;
          {
            return this._error(Node.ErrorValue.NAME);
          }
        case 276:
          yyaccept = 27;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 277;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 277;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 277;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 277: {
          return this._error(Node.ErrorValue.NULL);
        }
        case 278:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 301;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 279:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 303;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 280:
          ++this.cursor;
          o1 = yyt1;
          this.cursor -= 1;
          {
            return this._sheet_range(o1);
          }
        case 282:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 222;
                continue;
              }
              {
                state = 305;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 222;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 222;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 222;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 222;
                continue;
              }
            }
          }
        case 283:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 306;
            continue;
          }
          if (yych == "'") {
            state = 308;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 284:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                yyt2 = this.cursor;
                {
                  state = 309;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                yyt2 = this.cursor;
                {
                  state = 309;
                  continue;
                }
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 309;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                yyt2 = this.cursor;
                {
                  state = 309;
                  continue;
                }
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 309;
                continue;
              }
            }
          }
        case 285:
          yych = this.charAt(++this.cursor);
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 285;
                continue;
              }
              if (yych <= " ") {
                state = 81;
                continue;
              }
              {
                state = 311;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 285;
                continue;
              }
              if (yych <= "'") {
                state = 81;
                continue;
              }
              if (yych <= ")") {
                state = 285;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 81;
                continue;
              }
              if (yych <= "9") {
                state = 285;
                continue;
              }
              {
                state = 81;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 285;
                  continue;
                }
                {
                  state = 81;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 285;
                  continue;
                }
                if (yych <= "^") {
                  state = 81;
                  continue;
                }
                {
                  state = 285;
                  continue;
                }
              }
            }
          }
        case 287:
          yyaccept = 28;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 288;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 234;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 234;
                continue;
              }
              if (yych <= "'") {
                state = 288;
                continue;
              }
              if (yych <= ")") {
                state = 234;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 234;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 288;
                continue;
              }
              if (yych <= "Z") {
                state = 234;
                continue;
              }
              if (yych >= "_") {
                state = 234;
                continue;
              }
            }
          }
        case 288:
          o1 = yyt4;
          this.cursor -= 1;
          {
            return this._function_name(o1);
          }
        case 289:
          ++this.cursor;
          o1 = yyt2;
          this.cursor -= 1;
          {
            return this._table_identifier(o1);
          }
        case 291:
          ++this.cursor;
          {
            state = 288;
            continue;
          }
        case 292:
          yyaccept = 29;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 293;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 293;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 293;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 293: {
          return Token.ALL;
        }
        case 294:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 314;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 295:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 316;
            continue;
          }
          if (yych == "e") {
            state = 316;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 296:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 317;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 297:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 318;
            continue;
          }
          if (yych == "l") {
            state = 318;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 298:
          ++this.cursor;
          {
            return this._error(Node.ErrorValue.DIV0);
          }
        case 300:
          yych = this.charAt(++this.cursor);
          if (yych == "G") {
            state = 319;
            continue;
          }
          if (yych == "g") {
            state = 319;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 301:
          yyaccept = 30;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 302;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 302;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 302;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 302: {
          return this._error(Node.ErrorValue.SPILL);
        }
        case 303:
          yyaccept = 31;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 304;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 304;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 304;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 304: {
          return this._error(Node.ErrorValue.VALUE);
        }
        case 305:
          yych = this.charAt(++this.cursor);
          if (yych == "'") {
            state = 282;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 306:
          ++this.cursor;
          o1 = yyt1;
          this.cursor -= 1;
          {
            return this._single_sheet(o1);
          }
        case 308:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 253;
                continue;
              }
              {
                state = 320;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 253;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 253;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 253;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 253;
                continue;
              }
            }
          }
        case 309:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 309;
                continue;
              }
              {
                state = 321;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 309;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 309;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 309;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 309;
                continue;
              }
            }
          }
        case 311:
          yyaccept = 32;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 313;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 285;
                continue;
              }
              if (yych >= "!") {
                state = 311;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 285;
                continue;
              }
              if (yych <= "'") {
                state = 313;
                continue;
              }
              if (yych <= ")") {
                state = 285;
                continue;
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 313;
                continue;
              }
              if (yych <= "9") {
                state = 285;
                continue;
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  state = 285;
                  continue;
                }
              } else {
                if (yych <= "Z") {
                  state = 285;
                  continue;
                }
                if (yych >= "_") {
                  state = 285;
                  continue;
                }
              }
            }
          }
        case 313:
          o1 = yyt1;
          o2 = yyt2;
          this.cursor -= 1;
          {
            return this._sheet_range(o1, o2);
          }
        case 314:
          yyaccept = 33;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 315;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 315;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 315;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 315: {
          return Token.DATA;
        }
        case 316:
          yych = this.charAt(++this.cursor);
          if (yych == "R") {
            state = 322;
            continue;
          }
          if (yych == "r") {
            state = 322;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 317:
          yych = this.charAt(++this.cursor);
          if (yych == "R") {
            state = 323;
            continue;
          }
          if (yych == "r") {
            state = 323;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 318:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 324;
            continue;
          }
          if (yych == "s") {
            state = 324;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 319:
          yych = this.charAt(++this.cursor);
          if (yych == "_") {
            state = 325;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 320:
          yych = this.charAt(++this.cursor);
          if (yych == "'") {
            state = 308;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 321:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 326;
            continue;
          }
          if (yych == "'") {
            state = 328;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 322:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 329;
            continue;
          }
          if (yych == "s") {
            state = 329;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 323:
          yych = this.charAt(++this.cursor);
          if (yych == "O") {
            state = 330;
            continue;
          }
          if (yych == "o") {
            state = 330;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 324:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 331;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 325:
          yych = this.charAt(++this.cursor);
          if (yych == "D") {
            state = 333;
            continue;
          }
          if (yych == "d") {
            state = 333;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 326:
          ++this.cursor;
          o1 = yyt1;
          o2 = yyt2;
          this.cursor -= 1;
          {
            return this._sheet_range(o1, o2);
          }
        case 328:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 81;
                continue;
              }
              if (yych <= "&") {
                state = 309;
                continue;
              }
              {
                state = 334;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 81;
                continue;
              }
              if (yych <= ".") {
                state = 309;
                continue;
              }
              {
                state = 81;
                continue;
              }
            }
          } else {
            if (yych <= ">") {
              if (yych == ":") {
                state = 81;
                continue;
              }
              {
                state = 309;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 81;
                continue;
              }
              if (yych <= "Z") {
                state = 309;
                continue;
              }
              if (yych <= "]") {
                state = 81;
                continue;
              }
              {
                state = 309;
                continue;
              }
            }
          }
        case 329:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 335;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 330:
          yych = this.charAt(++this.cursor);
          if (yych == "W") {
            state = 337;
            continue;
          }
          if (yych == "w") {
            state = 337;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 331:
          yyaccept = 34;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 332;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 332;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 332;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 332: {
          return Token.TOTALS;
        }
        case 333:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 338;
            continue;
          }
          if (yych == "a") {
            state = 338;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 334:
          yych = this.charAt(++this.cursor);
          if (yych == "'") {
            state = 328;
            continue;
          }
          {
            state = 81;
            continue;
          }
        case 335:
          yyaccept = 35;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 336;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 336;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 336;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 336: {
          return Token.HEADERS;
        }
        case 337:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 339;
            continue;
          }
          {
            state = 195;
            continue;
          }
        case 338:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 341;
            continue;
          }
          if (yych == "t") {
            state = 341;
            continue;
          }
          {
            state = 80;
            continue;
          }
        case 339:
          yyaccept = 36;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= "!") {
              if (yych <= sfcc(0x0000)) {
                state = 340;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych >= "!") {
                yyt1 = this.cursor;
                {
                  state = 235;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
              if (yych <= "'") {
                state = 340;
                continue;
              }
              if (yych <= ")") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            }
          } else {
            if (yych <= ":") {
              if (yych == "/") {
                state = 340;
                continue;
              }
              if (yych <= "9") {
                yyt1 = this.cursor;
                {
                  state = 233;
                  continue;
                }
              }
            } else {
              if (yych <= "?") {
                if (yych <= ";") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              } else {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
                if (yych >= "_") {
                  yyt1 = this.cursor;
                  {
                    state = 233;
                    continue;
                  }
                }
              }
            }
          }
        case 340: {
          return Token.THIS_ROW;
        }
        case 341:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 342;
            continue;
          }
          if (yych != "a") {
            state = 80;
            continue;
          }
        case 342:
          yyaccept = 37;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "-") {
            if (yych <= " ") {
              if (yych <= sfcc(0x0000)) {
                state = 343;
                continue;
              }
              if (yych <= sfcc(0x001f)) {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "$") {
                state = 80;
                continue;
              }
              if (yych <= "'") {
                state = 343;
                continue;
              }
              if (yych <= ")") {
                state = 80;
                continue;
              }
            }
          } else {
            if (yych <= ";") {
              if (yych != "/") {
                state = 80;
                continue;
              }
            } else {
              if (yych <= "?") {
                state = 343;
                continue;
              }
              if (yych <= "Z") {
                state = 80;
                continue;
              }
              if (yych >= "_") {
                state = 80;
                continue;
              }
            }
          }
        case 343: {
          return this._error(Node.ErrorValue.GETTING_DATA);
        }
        /* *********************************** */
        case MODE_TABLE:
          yych = this.charAt(this.cursor);
          if (yych <= ",") {
            if (yych <= " ") {
              if (yych <= "\n") {
                if (yych <= sfcc(0x0000)) {
                  state = 346;
                  continue;
                }
                if (yych <= sfcc(0x0008)) {
                  state = 348;
                  continue;
                }
              } else {
                if (yych == "\r") {
                  state = 346;
                  continue;
                }
                if (yych <= sfcc(0x001f)) {
                  state = 348;
                  continue;
                }
                {
                  state = 351;
                  continue;
                }
              }
            } else {
              if (yych <= "%") {
                if (yych <= "!") {
                  state = 348;
                  continue;
                }
                if (yych >= "%") {
                  state = 348;
                  continue;
                }
              } else {
                if (yych <= "'") {
                  state = 346;
                  continue;
                }
                if (yych <= ")") {
                  state = 348;
                  continue;
                }
                if (yych >= ",") {
                  state = 352;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= ":") {
                if (yych <= "/") {
                  state = 346;
                  continue;
                }
                if (yych <= "9") {
                  state = 348;
                  continue;
                }
                {
                  state = 355;
                  continue;
                }
              } else {
                if (yych <= ";") {
                  state = 348;
                  continue;
                }
                if (yych <= ">") {
                  state = 346;
                  continue;
                }
                if (yych <= "Z") {
                  state = 348;
                  continue;
                }
                {
                  state = 358;
                  continue;
                }
              }
            } else {
              if (yych <= "z") {
                if (yych <= "\\") {
                  state = 348;
                  continue;
                }
                if (yych <= "]") {
                  state = 359;
                  continue;
                }
                if (yych >= "_") {
                  state = 348;
                  continue;
                }
              } else {
                if (yych == "|") {
                  state = 348;
                  continue;
                }
                if (yych >= "~") {
                  state = 348;
                  continue;
                }
              }
            }
          }
        case 346:
          ++this.cursor;
        case 347: {
          if (this.token >= this.source.length) return Token.YYEOF;
          return Token.YYUNDEF;
        }
        case 348:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= sfcc(0x001f)) {
              if (yych <= "\n") {
                if (yych <= sfcc(0x0000)) {
                  state = 350;
                  continue;
                }
                if (yych <= sfcc(0x0008)) {
                  state = 348;
                  continue;
                }
              } else {
                if (yych != "\r") {
                  state = 348;
                  continue;
                }
              }
            } else {
              if (yych <= "$") {
                if (yych == "!") {
                  state = 348;
                  continue;
                }
              } else {
                if (yych <= "%") {
                  state = 348;
                  continue;
                }
                if (yych <= "'") {
                  state = 350;
                  continue;
                }
                if (yych <= ")") {
                  state = 348;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= ";") {
                if (yych != ":") {
                  state = 348;
                  continue;
                }
              } else {
                if (yych <= ">") {
                  state = 350;
                  continue;
                }
                if (yych <= "Z") {
                  state = 348;
                  continue;
                }
              }
            } else {
              if (yych <= "z") {
                if (yych <= "\\") {
                  state = 348;
                  continue;
                }
                if (yych >= "_") {
                  state = 348;
                  continue;
                }
              } else {
                if (yych == "|") {
                  state = 348;
                  continue;
                }
                if (yych >= "~") {
                  state = 348;
                  continue;
                }
              }
            }
          }
        case 350: {
          return this._table_column();
        }
        case 351:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= ",") {
            if (yych == " ") {
              state = 361;
              continue;
            }
            if (yych <= "+") {
              state = 347;
              continue;
            }
          } else {
            if (yych <= ":") {
              if (yych <= "9") {
                state = 347;
                continue;
              }
              {
                state = 355;
                continue;
              }
            } else {
              if (yych == "]") {
                state = 359;
                continue;
              }
              {
                state = 347;
                continue;
              }
            }
          }
        case 352:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 352;
            continue;
          }
          {
            return Token.UNION;
          }
        case 355:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 355;
            continue;
          }
          {
            return Token.RANGE;
          }
        case 358:
          yyaccept = 0;
          yych = this.charAt((marker = ++this.cursor));
          if (yych <= "Z") {
            if (yych <= sfcc(0x0000)) {
              state = 347;
              continue;
            }
            if (yych == "#") {
              state = 368;
              continue;
            }
            {
              state = 367;
              continue;
            }
          } else {
            if (yych == "\\") {
              state = 367;
              continue;
            }
            if (yych <= "]") {
              state = 347;
              continue;
            }
            {
              state = 367;
              continue;
            }
          }
        case 359:
          ++this.cursor;
          this.setMode(YYCONDTYPE.Mode_INIT);
          {
            return Token.RBRACK;
          }
        case 361:
          yych = this.charAt(++this.cursor);
          if (yych <= ",") {
            if (yych == " ") {
              state = 361;
              continue;
            }
            if (yych >= ",") {
              state = 352;
              continue;
            }
          } else {
            if (yych <= ":") {
              if (yych >= ":") {
                state = 355;
                continue;
              }
            } else {
              if (yych == "]") {
                state = 359;
                continue;
              }
            }
          }
        case 363:
          this.cursor = marker;
          if (yyaccept <= 3) {
            if (yyaccept <= 1) {
              if (yyaccept == 0) {
                {
                  state = 347;
                  continue;
                }
              } else {
                {
                  state = 375;
                  continue;
                }
              }
            } else {
              if (yyaccept == 2) {
                {
                  state = 398;
                  continue;
                }
              } else {
                {
                  state = 404;
                  continue;
                }
              }
            }
          } else {
            if (yyaccept <= 5) {
              if (yyaccept == 4) {
                {
                  state = 414;
                  continue;
                }
              } else {
                {
                  state = 416;
                  continue;
                }
              }
            } else {
              {
                state = 419;
                continue;
              }
            }
          }
        case 364:
          yych = this.charAt(++this.cursor);
          if (yych <= "/") {
            if (yych <= "&") {
              if (yych <= sfcc(0x0000)) {
                state = 363;
                continue;
              }
              if (yych == "#") {
                state = 372;
                continue;
              }
              {
                state = 364;
                continue;
              }
            } else {
              if (yych <= ")") {
                if (yych <= "'") {
                  state = 369;
                  continue;
                }
                {
                  state = 364;
                  continue;
                }
              } else {
                if (yych <= "*") {
                  state = 370;
                  continue;
                }
                if (yych <= ".") {
                  state = 364;
                  continue;
                }
                {
                  state = 370;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 370;
                continue;
              }
              if (yych <= ">") {
                state = 364;
                continue;
              }
              {
                state = 370;
                continue;
              }
            } else {
              if (yych <= "[") {
                if (yych <= "Z") {
                  state = 364;
                  continue;
                }
                {
                  state = 363;
                  continue;
                }
              } else {
                if (yych <= "\\") {
                  state = 370;
                  continue;
                }
                if (yych <= "]") {
                  state = 374;
                  continue;
                }
                {
                  state = 364;
                  continue;
                }
              }
            }
          }
        case 366:
          yych = this.charAt(++this.cursor);
        case 367:
          if (yych <= ".") {
            if (yych <= "#") {
              if (yych <= sfcc(0x001f)) {
                if (yych <= sfcc(0x0000)) {
                  state = 363;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 364;
                  continue;
                }
              } else {
                if (yych <= " ") {
                  state = 366;
                  continue;
                }
                if (yych <= '"') {
                  yyt1 = this.cursor;
                  {
                    state = 364;
                    continue;
                  }
                }
                {
                  state = 372;
                  continue;
                }
              }
            } else {
              if (yych <= "'") {
                if (yych <= "&") {
                  yyt1 = this.cursor;
                  {
                    state = 364;
                    continue;
                  }
                }
                yyt1 = this.cursor;
                {
                  state = 369;
                  continue;
                }
              } else {
                if (yych == "*") {
                  yyt1 = this.cursor;
                  {
                    state = 370;
                    continue;
                  }
                }
                yyt1 = this.cursor;
                {
                  state = 364;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "?") {
              if (yych <= "9") {
                if (yych <= "/") {
                  yyt1 = this.cursor;
                  {
                    state = 370;
                    continue;
                  }
                }
                yyt1 = this.cursor;
                {
                  state = 364;
                  continue;
                }
              } else {
                if (yych <= ":") {
                  yyt1 = this.cursor;
                  {
                    state = 370;
                    continue;
                  }
                }
                if (yych <= ">") {
                  yyt1 = this.cursor;
                  {
                    state = 364;
                    continue;
                  }
                }
                yyt1 = this.cursor;
                {
                  state = 370;
                  continue;
                }
              }
            } else {
              if (yych <= "[") {
                if (yych <= "Z") {
                  yyt1 = this.cursor;
                  {
                    state = 364;
                    continue;
                  }
                }
                {
                  state = 363;
                  continue;
                }
              } else {
                if (yych <= "\\") {
                  yyt1 = this.cursor;
                  {
                    state = 370;
                    continue;
                  }
                }
                if (yych <= "]") {
                  state = 376;
                  continue;
                }
                yyt1 = this.cursor;
                {
                  state = 364;
                  continue;
                }
              }
            }
          }
        case 368:
          yych = this.charAt(++this.cursor);
          if (yych <= "T") {
            if (yych <= "D") {
              if (yych == "A") {
                state = 377;
                continue;
              }
              if (yych <= "C") {
                state = 373;
                continue;
              }
              {
                state = 378;
                continue;
              }
            } else {
              if (yych == "H") {
                state = 379;
                continue;
              }
              if (yych <= "S") {
                state = 373;
                continue;
              }
              {
                state = 380;
                continue;
              }
            }
          } else {
            if (yych <= "d") {
              if (yych == "a") {
                state = 377;
                continue;
              }
              if (yych <= "c") {
                state = 373;
                continue;
              }
              {
                state = 378;
                continue;
              }
            } else {
              if (yych <= "h") {
                if (yych <= "g") {
                  state = 373;
                  continue;
                }
                {
                  state = 379;
                  continue;
                }
              } else {
                if (yych == "t") {
                  state = 380;
                  continue;
                }
                {
                  state = 373;
                  continue;
                }
              }
            }
          }
        case 369:
          yych = this.charAt(++this.cursor);
          if (yych <= "'") {
            if (yych == "#") {
              state = 370;
              continue;
            }
            if (yych <= "&") {
              state = 363;
              continue;
            }
          } else {
            if (yych <= "[") {
              if (yych <= "Z") {
                state = 363;
                continue;
              }
            } else {
              if (yych != "]") {
                state = 363;
                continue;
              }
            }
          }
        case 370:
          yych = this.charAt(++this.cursor);
          if (yych <= "'") {
            if (yych <= '"') {
              if (yych <= sfcc(0x0000)) {
                state = 363;
                continue;
              }
              {
                state = 370;
                continue;
              }
            } else {
              if (yych <= "#") {
                state = 363;
                continue;
              }
              if (yych <= "&") {
                state = 370;
                continue;
              }
              {
                state = 369;
                continue;
              }
            }
          } else {
            if (yych <= "[") {
              if (yych <= "Z") {
                state = 370;
                continue;
              }
              {
                state = 363;
                continue;
              }
            } else {
              if (yych == "]") {
                state = 381;
                continue;
              }
              {
                state = 370;
                continue;
              }
            }
          }
        case 372:
          yych = this.charAt(++this.cursor);
        case 373:
          if (yych <= "/") {
            if (yych <= "'") {
              if (yych <= sfcc(0x0000)) {
                state = 363;
                continue;
              }
              if (yych <= "&") {
                state = 372;
                continue;
              }
              {
                state = 363;
                continue;
              }
            } else {
              if (yych == "*") {
                state = 363;
                continue;
              }
              if (yych <= ".") {
                state = 372;
                continue;
              }
              {
                state = 363;
                continue;
              }
            }
          } else {
            if (yych <= "?") {
              if (yych == ":") {
                state = 363;
                continue;
              }
              if (yych <= ">") {
                state = 372;
                continue;
              }
              {
                state = 363;
                continue;
              }
            } else {
              if (yych <= "Z") {
                state = 372;
                continue;
              }
              if (yych <= "\\") {
                state = 363;
                continue;
              }
              if (yych <= "]") {
                state = 376;
                continue;
              }
              {
                state = 372;
                continue;
              }
            }
          }
        case 374:
          yyaccept = 1;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 375:
          o1 = yyt1;
          {
            return this._table_column(o1);
          }
        case 376:
          yych = this.charAt(++this.cursor);
          if (yych == "!") {
            state = 382;
            continue;
          }
          {
            state = 363;
            continue;
          }
        case 377:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 383;
            continue;
          }
          if (yych == "l") {
            state = 383;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 378:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 384;
            continue;
          }
          if (yych == "a") {
            state = 384;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 379:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 385;
            continue;
          }
          if (yych == "e") {
            state = 385;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 380:
          yych = this.charAt(++this.cursor);
          if (yych <= "O") {
            if (yych == "H") {
              state = 386;
              continue;
            }
            if (yych <= "N") {
              state = 373;
              continue;
            }
            {
              state = 387;
              continue;
            }
          } else {
            if (yych <= "h") {
              if (yych <= "g") {
                state = 373;
                continue;
              }
              {
                state = 386;
                continue;
              }
            } else {
              if (yych == "o") {
                state = 387;
                continue;
              }
              {
                state = 373;
                continue;
              }
            }
          }
        case 381:
          ++this.cursor;
          {
            state = 375;
            continue;
          }
        case 382:
          yych = this.charAt(++this.cursor);
          if (yych <= "^") {
            if (yych <= "Z") {
              if (yych <= "@") {
                state = 363;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 388;
                continue;
              }
            } else {
              if (yych == "\\") {
                yyt2 = this.cursor;
                {
                  state = 388;
                  continue;
                }
              }
              {
                state = 363;
                continue;
              }
            }
          } else {
            if (yych <= "`") {
              if (yych <= "_") {
                yyt2 = this.cursor;
                {
                  state = 388;
                  continue;
                }
              }
              {
                state = 363;
                continue;
              }
            } else {
              if (yych <= "z") {
                yyt2 = this.cursor;
                {
                  state = 388;
                  continue;
                }
              }
              if (yych <= sfcc(0x007f)) {
                state = 363;
                continue;
              }
              yyt2 = this.cursor;
              {
                state = 388;
                continue;
              }
            }
          }
        case 383:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 390;
            continue;
          }
          if (yych == "l") {
            state = 390;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 384:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 391;
            continue;
          }
          if (yych == "t") {
            state = 391;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 385:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 392;
            continue;
          }
          if (yych == "a") {
            state = 392;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 386:
          yych = this.charAt(++this.cursor);
          if (yych == "I") {
            state = 393;
            continue;
          }
          if (yych == "i") {
            state = 393;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 387:
          yych = this.charAt(++this.cursor);
          if (yych == "T") {
            state = 394;
            continue;
          }
          if (yych == "t") {
            state = 394;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 388:
          yych = this.charAt(++this.cursor);
          if (yych <= "@") {
            if (yych <= ".") {
              if (yych == "(") {
                state = 395;
                continue;
              }
              if (yych <= "-") {
                state = 363;
                continue;
              }
              {
                state = 388;
                continue;
              }
            } else {
              if (yych <= "9") {
                if (yych <= "/") {
                  state = 363;
                  continue;
                }
                {
                  state = 388;
                  continue;
                }
              } else {
                if (yych == "?") {
                  state = 388;
                  continue;
                }
                {
                  state = 363;
                  continue;
                }
              }
            }
          } else {
            if (yych <= "^") {
              if (yych == "[") {
                state = 363;
                continue;
              }
              if (yych <= "\\") {
                state = 388;
                continue;
              }
              {
                state = 363;
                continue;
              }
            } else {
              if (yych <= "`") {
                if (yych <= "_") {
                  state = 388;
                  continue;
                }
                {
                  state = 363;
                  continue;
                }
              } else {
                if (yych <= "z") {
                  state = 388;
                  continue;
                }
                if (yych <= sfcc(0x007f)) {
                  state = 363;
                  continue;
                }
                {
                  state = 388;
                  continue;
                }
              }
            }
          }
        case 390:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 397;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 391:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 399;
            continue;
          }
          if (yych == "a") {
            state = 399;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 392:
          yych = this.charAt(++this.cursor);
          if (yych == "D") {
            state = 400;
            continue;
          }
          if (yych == "d") {
            state = 400;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 393:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 401;
            continue;
          }
          if (yych == "s") {
            state = 401;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 394:
          yych = this.charAt(++this.cursor);
          if (yych == "A") {
            state = 402;
            continue;
          }
          if (yych == "a") {
            state = 402;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 395:
          ++this.cursor;
          o1 = yyt2;
          this.cursor -= 1;
          {
            return this._function_name(o1);
          }
        case 397:
          yyaccept = 2;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 398: {
          return Token.ALL;
        }
        case 399:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 403;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 400:
          yych = this.charAt(++this.cursor);
          if (yych == "E") {
            state = 405;
            continue;
          }
          if (yych == "e") {
            state = 405;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 401:
          yych = this.charAt(++this.cursor);
          if (yych == " ") {
            state = 406;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 402:
          yych = this.charAt(++this.cursor);
          if (yych == "L") {
            state = 407;
            continue;
          }
          if (yych == "l") {
            state = 407;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 403:
          yyaccept = 3;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 404: {
          return Token.DATA;
        }
        case 405:
          yych = this.charAt(++this.cursor);
          if (yych == "R") {
            state = 408;
            continue;
          }
          if (yych == "r") {
            state = 408;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 406:
          yych = this.charAt(++this.cursor);
          if (yych == "R") {
            state = 409;
            continue;
          }
          if (yych == "r") {
            state = 409;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 407:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 410;
            continue;
          }
          if (yych == "s") {
            state = 410;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 408:
          yych = this.charAt(++this.cursor);
          if (yych == "S") {
            state = 411;
            continue;
          }
          if (yych == "s") {
            state = 411;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 409:
          yych = this.charAt(++this.cursor);
          if (yych == "O") {
            state = 412;
            continue;
          }
          if (yych == "o") {
            state = 412;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 410:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 413;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 411:
          yych = this.charAt(++this.cursor);
          if (yych == "]") {
            state = 415;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 412:
          yych = this.charAt(++this.cursor);
          if (yych == "W") {
            state = 417;
            continue;
          }
          if (yych == "w") {
            state = 417;
            continue;
          }
          {
            state = 373;
            continue;
          }
        case 413:
          yyaccept = 4;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 414: {
          return Token.TOTALS;
        }
        case 415:
          yyaccept = 5;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 416: {
          return Token.HEADERS;
        }
        case 417:
          yych = this.charAt(++this.cursor);
          if (yych != "]") {
            state = 373;
            continue;
          }
          yyaccept = 6;
          yych = this.charAt((marker = ++this.cursor));
          if (yych == "!") {
            state = 382;
            continue;
          }
        case 419: {
          return Token.THIS_ROW;
        }
      }
    }
    return Token.YYUNDEF;
  }

  private _error(value: Node.ErrorValue) {
    this.value = new Node.ErrorValueNode(value);
    return Token.ERROR;
  }

  private _bool(value: boolean) {
    this.value = new Node.LogicalValueNode(value);
    return Token.LOGICAL;
  }

  private _number() {
    this.value = new Node.NumberValueNode(parseFloat(this.yytext()));
    return Token.NUMBER;
  }

  private _string() {
    const value = this.yytext().replace(/^"|"$/g, "").replace(/""/g, '"');
    this.value = new Node.StringValueNode(value);
    return Token.STRING;
  }

  private _name() {
    this.value = new Node.NameNode(this.yytext());
    return Token.NAME;
  }

  private _single_sheet(start: number = 0) {
    const quote = this.source[this.cursor - 1] === "'" ? 1 : 0;

    if (start > 0) {
      const workbook = this.source.substring(this.token + 1 + quote, start - 1);
      const sheet = this._sheet_name(start, this.cursor - quote, quote);
      this.value = new Node.SingleSheetNode(sheet, workbook);
    } else {
      const sheet = this._sheet_name(this.token + quote, this.cursor - quote, quote);
      this.value = new Node.SingleSheetNode(sheet);
    }

    return Token.SINGLE_SHEET;
  }

  private _sheet_range(o1: number, o2?: number) {
    const quote = this.source[this.cursor - 1] === "'" ? 1 : 0;

    if (o2 === undefined) {
      const start = this._sheet_name(this.token + quote, o1 - 1, quote);
      const end = this._sheet_name(o1, this.cursor - quote, quote);
      this.value = new Node.SheetRangeNode(start, end);
    } else {
      const workbook = this.source.substring(this.token + 1 + quote, o1 - 1);
      const start = this._sheet_name(o1, o2 - 1, quote);
      const end = this._sheet_name(o2, this.cursor - quote, quote);
      this.value = new Node.SheetRangeNode(start, end, workbook);
    }

    return Token.SHEET_RANGE;
  }

  private _table_identifier(o1: number = 0) {
    if (o1 > 0) {
      const workbook = this.source.substring(this.token + 1, o1 - 2);
      const name = this.source.substring(o1, this.cursor);
      this.value = new Node.TableIdentifierNode(name, workbook);
    } else {
      const name = this.source.substring(this.token, this.cursor);
      this.value = new Node.TableIdentifierNode(name);
    }

    return Token.TABLE_IDENTIFIER;
  }

  private _column_range(o1: number) {
    const [start, end, flags] = this._number_range(o1, atoi26);
    this.value = new Node.ColumnRangeNode(start, end, flags);
    return Token.COLUMN_RANGE;
  }

  private _row_range(o1: number) {
    const [start, end, flags] = this._number_range(o1, parseInt);
    this.value = new Node.RowRangeNode(start, end, flags);
    return Token.ROW_RANGE;
  }

  private _cell(o1: number) {
    let start = this.token;
    let flags = 0;

    if (this.source.charAt(start) === "$") {
      start++;
      flags |= 0x02;
    }

    const column = atoi26(this.source.substring(start, o1));

    if (this.source.charAt(o1) === "$") {
      o1++;
      flags |= 0x01;
    }

    const row = parseInt(this.source.substring(o1, this.cursor));

    this.value = new Node.CellNode(row, column, flags);

    return Token.CELL;
  }

  private _number_range(o1: number, parse: (s: string) => number) {
    let flags = 0;
    const do_parse = (start: number, end: number, flag: number) => {
      if (this.source.charAt(start) === "$") {
        flags |= flag;
        return parse(this.source.substring(start + 1, end));
      }
      return parse(this.source.substring(start, end));
    };
    const start = do_parse(this.token, o1 - 1, 0x01);
    const end = do_parse(o1, this.cursor, 0x02);
    return [start, end, flags];
  }

  private _sheet_name(start: number, end: number, quote: number) {
    const source = this.source;

    if (quote === 0) {
      return source.substring(start, end);
    }

    let name = "";

    for (let i = start; i < end; ) {
      let ch = source.charAt(i);
      if (ch === "'") {
        if (++i === end) {
          break;
        }
        ch = source.charAt(i);
      }
      name += ch;
      i++;
    }

    return name;
  }

  private _table_column(o1?: number) {
    let o2: number;
    if (o1 === undefined) {
      o1 = this.token;
      o2 = this.cursor;
    } else {
      o2 = this.cursor - 1;
    }
    const name = this.source.substring(o1, o2).replace(/'(.)/g, "$1").trim();
    this.value = new Node.TableColumnNode(name);
    return Token.TABLE_COLUMN;
  }

  private _function_name(o1?: number) {
    if (o1 === undefined) {
      o1 = this.token;
    }
    const name = this.source.substring(o1, this.cursor);
    this.value = new Node.FunctionNameNode(name);
    return Token.FUNCTION_NAME;
  }

  getMode() {
    return this.mode;
  }

  setMode(mode: YYCONDTYPE) {
    this.mode = mode;
  }

  charAt(cursor: number) {
    if (cursor < this.source.length) {
      return this.source.charAt(cursor);
    }
    if (cursor > this.source.length) {
      throw Error("Illegal.");
    }
    return "\0";
  }

  yytext() {
    return this.source.substring(this.token, this.cursor);
  }

  yyerror(loc: Token.Location, msg: String) {
    console.error("ERROR", loc, msg);
  }

  reportSyntaxError(ctx: Token.Context) {
    console.error(ctx);
  }

  getLocation() {
    return new Token.Location(new Position(1, this.token), new Position(1, this.cursor));
  }
}
