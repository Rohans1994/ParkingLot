let expect = require('chai').expect;
const {leaveParking} = require('../helpers/functions')

describe('leave RS-01-SS-6666 4', async function () {
  it('should free slot of car with registration number RS-01-SS-6666',  function () {
    var preResult = 'Registration Number RS-01-SS-6666 from Slot 6 has left with Charge 30';
    var result = leaveParking('RS-01-SS-6666', 4);
    console.log('result from testing',result);
    expect(result).to.be.equal(preResult);
  });
});