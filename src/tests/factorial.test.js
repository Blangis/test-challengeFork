const { default: expect } = require('expect');
const {
    factorial
} = require('../factorial');

describe('factorial'), () => {
    it("It should return the factorial of the positive number"), () => {
        expect(factorial(5)).toBe(120);

    }

}