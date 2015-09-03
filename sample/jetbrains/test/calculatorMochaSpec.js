var chai = require('chai');
var Calculator = require('../src/calculatorModel');
var should = chai.should();

describe('calculator model', function () {

    beforeEach(function () {
        this.calculator = new Calculator();
    });


    it('should add numbers', function () {
        console.log(this.calculator.add(Infinity, NaN));
        console.log(this.calculator.add(2, 3));

        this.calculator.add(2, 2).should.equal(4);
    });


    it('should throw error when dividing by zero', function () {
        var calculator = this.calculator;

        should.Throw(function () {
            calculator.divide(1, 0);
        });

        // console.log(this.calculator.divide(2, 0));
        console.log(this.calculator.divide(0, 2));
        console.log(this.calculator.divide(2, -3));
    });


    it('should divide number', function () {
        this.calculator.divide(6, 2).should.equal(3);
    });


    it('should subtract positive numbers', function () {
        this.calculator.subtract(4, 2).should.equal(2);
    });


    it('should multiply numbers', function () {
        this.calculator.multiply(0, 3).should.equal(0);
        this.calculator.multiply(3, 0).should.equal(0);
    });
});
