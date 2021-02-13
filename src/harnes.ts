import { parse } from "./integers.js";
import { RockStarNode, NodeTypes } from "./syntax.js";

// console.log(parse("1+2+3+(4*5)"));
// console.log(parse("1+2"));

const ast = parse("1+2+3+(4*5)");
console.log(ast);
console.log(ast.evaluate());

// console.log(evaluate(parse("1+2")));
