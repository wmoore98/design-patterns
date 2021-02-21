interface Strategy {
  doOperation(operand1: number, operand2: number): number;
}

class OperationAdd implements Strategy {
  doOperation(operand1: number, operand2: number): number {
    return operand1 + operand2;
  }
}

class OperationSubtract implements Strategy {
  doOperation(operand1: number, operand2: number): number {
    return operand1 - operand2;
  }
}

class OperationMultiply implements Strategy {
  doOperation(operand1: number, operand2: number): number {
    return operand1 * operand2;
  }
}

class OperationDivide implements Strategy {
  doOperation(operand1: number, operand2: number): number {
    return operand1 / operand2;
  }
}

class Context {
  constructor(private strategy: Strategy) {}

  executeStrategy(operand1: number, operand2: number) {
    return this.strategy.doOperation(operand1, operand2);
  }
}

const operand1 = 10;
const operand2 = 5;

const contextAdd = new Context(new OperationAdd());
console.log(
  `${operand1} + ${operand2} = ${contextAdd.executeStrategy(
    operand1,
    operand2
  )}`
);

const contextSubtract = new Context(new OperationSubtract());
console.log(
  `${operand1} - ${operand2} = ${contextSubtract.executeStrategy(
    operand1,
    operand2
  )}`
);

const contextMultiply = new Context(new OperationMultiply());
console.log(
  `${operand1} * ${operand2} = ${contextMultiply.executeStrategy(
    operand1,
    operand2
  )}`
);

const contextDivide = new Context(new OperationDivide());
console.log(
  `${operand1} / ${operand2} = ${contextDivide.executeStrategy(
    operand1,
    operand2
  )}`
);
