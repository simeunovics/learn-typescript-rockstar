"use strict";
exports.__esModule = true;
var integers_js_1 = require("./integers.js");
// console.log(parse("1+2+3+(4*5)"));
// console.log(parse("1+2"));
var ast = integers_js_1.parse("1+2+3+(4*5)");
console.log(ast);
console.log(ast.evaluate());
// console.log(evaluate(parse("1+2")));
