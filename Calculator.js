class Calculator {

    constructor() {
        this.operators = {};
    }

    register(name, operator) {
        this.operators[name] = operator;

        return this;
    }

    calculate(operatorName, number1, number2) {

        const operator = this.operators[operatorName];

        if (!operator) {
            throw new Error(`Operator [${operatorName}] does not supported`);
        }
        
        return operator.execute(number1, number2);
    }
}

module.exports = Calculator;
