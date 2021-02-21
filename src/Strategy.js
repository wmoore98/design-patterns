var OperationAdd = /** @class */ (function () {
    function OperationAdd() {
    }
    OperationAdd.prototype.doOperation = function (operand1, operand2) {
        return operand1 + operand2;
    };
    return OperationAdd;
}());
var OperationSubtract = /** @class */ (function () {
    function OperationSubtract() {
    }
    OperationSubtract.prototype.doOperation = function (operand1, operand2) {
        return operand1 - operand2;
    };
    return OperationSubtract;
}());
var OperationMultiply = /** @class */ (function () {
    function OperationMultiply() {
    }
    OperationMultiply.prototype.doOperation = function (operand1, operand2) {
        return operand1 * operand2;
    };
    return OperationMultiply;
}());
var OperationDivide = /** @class */ (function () {
    function OperationDivide() {
    }
    OperationDivide.prototype.doOperation = function (operand1, operand2) {
        return operand1 / operand2;
    };
    return OperationDivide;
}());
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.executeStrategy = function (operand1, operand2) {
        return this.strategy.doOperation(operand1, operand2);
    };
    return Context;
}());
var operand1 = 10;
var operand2 = 5;
var contextAdd = new Context(new OperationAdd());
console.log(operand1 + " + " + operand2 + " = " + contextAdd.executeStrategy(operand1, operand2));
var contextSubtract = new Context(new OperationSubtract());
console.log(operand1 + " - " + operand2 + " = " + contextSubtract.executeStrategy(operand1, operand2));
var contextMultiply = new Context(new OperationMultiply());
console.log(operand1 + " * " + operand2 + " = " + contextMultiply.executeStrategy(operand1, operand2));
var contextDivide = new Context(new OperationDivide());
console.log(operand1 + " / " + operand2 + " = " + contextDivide.executeStrategy(operand1, operand2));
