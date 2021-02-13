"use strict";
exports.__esModule = true;
var integers_js_1 = require("./integers.js");
// const ast = parse("1+2+3+(4*5)");
// console.log(ast);
// console.log(ast.evaluate());
var program1 = "\nlet x = 0\nloop {\n    if (x > 5) break\n    x = x + 1\n}\n";
var program2 = "1+2\n3+4\n(5+6)*(7+8+9)";
// const ast = parse(program2);
// console.log(ast);
// ast.forEach((node) => console.log(node.evaluate()));
var program3 = "say 1+2\nsay 3+4\nquit\nsay (1+3)*(3*4)+5";
var ast = integers_js_1.parse(program3);
// console.log(ast);
for (var _i = 0, ast_1 = ast; _i < ast_1.length; _i++) {
    var node = ast_1[_i];
    var result = node.evaluate();
    if ((result === null || result === void 0 ? void 0 : result.action) === "quit") {
        process.exit();
    }
}
