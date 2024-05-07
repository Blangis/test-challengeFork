/** 
 * 
 * Create a function to validate DNA strings as canonical DNA structure (e.g., 'CTAGGGTA').
Allow only canonical DNA bases ('C', 'T', 'A', 'G').
The function should be case-sensitive. Only accept uppercase bases.
Return empty string for invalid or empty inputs.
Return true if the string is a valid DNA sequence.
*/

const isValidDNA = require('./isValidDNA');

describe('isValidDNA', () => {
  it(" It should return true for valid DNA sequences", () => {
    expect(isValidDNA("CTAG")).toBe(true);
    expect(isValidDNA("CTAGCTAG")).toBe(true);
  });

  it("It should return false for invalid DNA sequences", () => {
    expect(isValidDNA("CTXG")).toBe(false); // contains X, a invalid character
    expect(isValidDNA("ctag")).toBe(false); // contains lowercase character
    expect(isValidDNA("")).toBe(false); // empty string
  });
});

