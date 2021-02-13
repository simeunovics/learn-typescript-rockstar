{
  var Syntax = require('./syntax.js');
  function makeInteger(o) {
    return parseInt(o.join(""), 10);
  }
}


program
  = head:line EOL tail:program { return [head].concat(tail); }
  / item:line { return [item]; }

line = output
// line = assign / output
// assign = 'let' _ v:variable _ '=' _ expression
output = 'say' _ node:expression { return new Syntax.OutputNode(node); }

expression = additive

additive
  = lhs:multiplicative "+" rhs:additive { return new Syntax.AdditionNode(lhs, rhs); }
  / multiplicative

multiplicative
  = lhs:primary "*" rhs:multiplicative { return new Syntax.MultiplicationNode(lhs, rhs); }
  / primary

primary
  = integer
  / "(" additive:additive ")" { return additive; }

integer "integer"
  = digits:[0-9]+ { return new Syntax.NumberNode(makeInteger(digits)); }

_ = [ \t]*
EOL = '\r'? '\n'
