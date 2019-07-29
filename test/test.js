const solution = require('../solution');
const assert = require('assert');


it('successfully finds the peak of [0,1,0]', () => {
  assert.equal(solution.peakIndexInMountainArray([0,1,0]),1);
})

it('successfully finds the peak of [0,2,1,0]', () => {
  assert.equal(solution.peakIndexInMountainArray([0,1,2,0]),1);
})
