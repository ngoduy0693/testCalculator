const Calculator   = require('./Calculator');
const addition     = require('./addition');
const subtruction  = require('./subtruction');
const multiply     = require('./multiply');
const divion       = require('./division');
const chai         = require('chai');
const FakeOperator  = require('./fakeOperator');

    describe('Test Calculator', () => {
        const calculator  = new Calculator();
        const Addition    = new addition();
        const Subtruction = new subtruction();
        const Multiply    = new multiply();
        const Division    = new divion();
        const fakeOperator = new FakeOperator();

        calculator.register('fake', fakeOperator)
        
        it('should return result from operator', () => {
            const result = calculator.calculate('fake', 1, 2);

            chai.assert.equal(result, 10);
            chai.assert(fakeOperator.execute.calledOnce);

            chai.assert(fakeOperator.execute.calledWith(1, 2));
        });
        
        it('should throw error if using unsupported operator', () => {
            chai.assert.throw(() => {
                calculator.calculate('opr', 2, 4);
            }, 'Operator [opr] does not supported');
        })

        it('shoud return result from addition', () => {
            const result = Addition.execute(2, 3);
            chai.assert.equal(result, 5);
        })

        it('shoud return result from subtruction', () => {
            const result = Subtruction.execute(3, 2);
            chai.assert.equal(result, 1);
        })

        it('shoud return result from multiply', () => {
            const result = Multiply.execute(2, 3);
            chai.assert.equal(result, 6);
        })

        it('shoud return result from divion', () => {
            const result = Division.execute(3, 3);
            chai.assert.equal(result, 1);
        })

        it('should be throw division by zero when numberB = 0', () => {
            chai.assert.throw(() => {
                Division.execute(5, 0);
            }, 'Division by zero');
        })
    })  
