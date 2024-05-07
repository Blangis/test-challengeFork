
const expect = require("expect").default;

const {
    factorial
} = require('../factorial.js');

describe('factorial'), () => {
    it("It should return the factorial of the positive number", (n) => {
        expect(factorial(5)).toBe(120);
        expect(factorial(1)).toBe(1);

    });

    it("It should return error to a negative number", (n) => {
        expect(factorial(-5).toBe("Número no válido"))
    })

};