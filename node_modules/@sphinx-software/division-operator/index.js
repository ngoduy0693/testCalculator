const RationalNumber = require('rational-number');

class Division {

    constructor(rational = true) {
        this.rational = rational;
    }

    setMessageWhenFailed(messageWhenFailed) {
        this.messageWhenFailed = messageWhenFailed;
    }

    runDivide(number1, number2) {

        if (number2 === 0) {
            throw new Error(this.messageWhenFailed);
        }

        if (this.rational) {
            return new RationalNumber(number1, number2);
        }

        return number1 / number2;
    }
}

module.exports = Division;
