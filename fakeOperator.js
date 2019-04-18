const sinon = require('sinon');

class fakeOperator {
    constructor() {
        this.execute = sinon.fake.returns(10);
    }
}

module.exports = fakeOperator;
