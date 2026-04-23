const assert = require('assert');

describe('Basic Test', function () {

  it('should return true', function () {
    assert.strictEqual(true, true);
  });

  it('should add numbers correctly', function () {
    const sum = 2 + 3;
    assert.strictEqual(sum, 5);
  });

});
