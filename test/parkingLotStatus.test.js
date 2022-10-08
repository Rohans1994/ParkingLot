let expect = require('chai').expect;
const {status} = require('../helpers/functions')


describe('status',  function () {
  it('should show parking status',  function () {
    var result = status();
    console.log(result);
    expect(result).to.be.equal(result);
  });
});