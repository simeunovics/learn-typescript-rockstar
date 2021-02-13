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
exports.OutputNode = exports.NumberNode = exports.MultiplicationNode = exports.AdditionNode = exports.NodeTypes = exports.BinaryNode = void 0;
var BinaryNode = /** @class */ (function () {
    function BinaryNode(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
    return BinaryNode;
}());
exports.BinaryNode = BinaryNode;
var NodeTypes;
(function (NodeTypes) {
    NodeTypes[NodeTypes["AdditionNode"] = 0] = "AdditionNode";
    NodeTypes[NodeTypes["MultiplicationNode"] = 1] = "MultiplicationNode";
    NodeTypes[NodeTypes["NumberNode"] = 2] = "NumberNode";
    NodeTypes[NodeTypes["OutputNode"] = 3] = "OutputNode";
})(NodeTypes = exports.NodeTypes || (exports.NodeTypes = {}));
var AdditionNode = /** @class */ (function (_super) {
    __extends(AdditionNode, _super);
    function AdditionNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   kind = NodeTypes.AdditionNode;
        _this.evaluate = function () { return _this.lhs.evaluate() + _this.rhs.evaluate(); };
        return _this;
    }
    return AdditionNode;
}(BinaryNode));
exports.AdditionNode = AdditionNode;
var MultiplicationNode = /** @class */ (function (_super) {
    __extends(MultiplicationNode, _super);
    function MultiplicationNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //   kind = NodeTypes.MultiplicationNode;
        _this.evaluate = function () { return _this.lhs.evaluate() * _this.rhs.evaluate(); };
        return _this;
    }
    return MultiplicationNode;
}(BinaryNode));
exports.MultiplicationNode = MultiplicationNode;
var NumberNode = /** @class */ (function () {
    //   kind: NodeTypes.NumberNode;
    function NumberNode(value) {
        var _this = this;
        this.value = value;
        this.evaluate = function () { return _this.value; };
    }
    return NumberNode;
}());
exports.NumberNode = NumberNode;
var OutputNode = /** @class */ (function () {
    //   kind: NodeTypes.OutputNode;
    function OutputNode(expr) {
        var _this = this;
        this.expr = expr;
        this.evaluate = function () { return console.log(_this.expr.evaluate()); };
    }
    return OutputNode;
}());
exports.OutputNode = OutputNode;
