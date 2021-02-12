"use strict";
exports.__esModule = true;
exports.NumberNode = exports.MultiplicationNode = exports.AdditionNode = void 0;
var AdditionNode = /** @class */ (function () {
    function AdditionNode(lsh, rhs) {
        this.lsh = lsh;
        this.rhs = rhs;
    }
    return AdditionNode;
}());
exports.AdditionNode = AdditionNode;
var MultiplicationNode = /** @class */ (function () {
    function MultiplicationNode(lsh, rhs) {
        this.lsh = lsh;
        this.rhs = rhs;
    }
    return MultiplicationNode;
}());
exports.MultiplicationNode = MultiplicationNode;
var NumberNode = /** @class */ (function () {
    function NumberNode(value) {
        this.value = value;
    }
    return NumberNode;
}());
exports.NumberNode = NumberNode;
