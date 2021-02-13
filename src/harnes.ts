import { parse } from "./integers.js";
import { RockStarNode } from "./syntax.js";

// const ast = parse("1+2+3+(4*5)");
// console.log(ast);
// console.log(ast.evaluate());
const program1 = `
let x = 0
loop {
    if (x > 5) break
    x = x + 1
}
`;
const program2 = `1+2
3+4
(5+6)*(7+8+9)`;
// const ast = parse(program2);
// console.log(ast);
// ast.forEach((node) => console.log(node.evaluate()));

const program3 = `say 1+2
say 3+4
quit
say (1+3)*(3*4)+5`;
const ast: RockStarNode[] = parse(program3);
// console.log(ast);
for (let node of ast) {
  const result = node.evaluate();
  if (result?.action === "quit") {
    process.exit();
  }
}
