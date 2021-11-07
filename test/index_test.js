var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the correct value of 5!', () => {
      // Setup

      const inputNumber = 5;
      const expectedResult = 120;
      
      // Test logic

      const result = Calculate.factorial(inputNumber);

      // Verify
      
      assert.equal(result, expectedResult);
      });

      it('returns the correct value of 3!', () => {
        // Setup
  
        const inputNumber = 3;
        const expectedResult = 6;
        
        // Test logic
  
        const result = Calculate.factorial(inputNumber);
  
        // Verify
        
        assert.equal(result, expectedResult);
        });

  });
});