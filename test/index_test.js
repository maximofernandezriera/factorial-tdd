var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns the correct value of 5!', () => {
        assert.equal(Calculate.factorial(5), 120);
      });

  });
});