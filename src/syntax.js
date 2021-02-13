"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.QuitNode = exports.OutputNode = exports.NumberNode = exports.MultiplicationNode = exports.AdditionNode = exports.BinaryNode = void 0;
var BinaryNode = /** @class */ (function () {
    function BinaryNode(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    return BinaryNode;
}());
exports.BinaryNode = BinaryNode;
var AdditionNode = /** @class */ (function (_super) {
    __extends(AdditionNode, _super);
    function AdditionNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdditionNode.prototype.evaluate = function () {
        return { result: this.lhs.evaluate().result + this.rhs.evaluate().result };
    };
    return AdditionNode;
}(BinaryNode));
exports.AdditionNode = AdditionNode;
var MultiplicationNode = /** @class */ (function (_super) {
    __extends(MultiplicationNode, _super);
    function MultiplicationNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiplicationNode.prototype.evaluate = function () {
        return { result: this.lhs.evaluate().result * this.rhs.evaluate().result };
    };
    return MultiplicationNode;
}(BinaryNode));
exports.MultiplicationNode = MultiplicationNode;
var NumberNode = /** @class */ (function () {
    function NumberNode(value) {
        this.value = value;
    }
    NumberNode.prototype.evaluate = function () {
        return { result: this.value };
    };
    return NumberNode;
}());
exports.NumberNode = NumberNode;
var OutputNode = /** @class */ (function () {
    function OutputNode(expr) {
        this.expr = expr;
    }
    OutputNode.prototype.evaluate = function () {
        var result = this.expr.evaluate().result;
        console.log(result);
        return { result: result };
    };
    return OutputNode;
}());
exports.OutputNode = OutputNode;
var QuitNode = /** @class */ (function () {
    function QuitNode(expr) {
        this.expr = expr;
    }
    QuitNode.prototype.evaluate = function () {
        return { action: "quit", result: null };
    };
    return QuitNode;
}());
exports.QuitNode = QuitNode;
