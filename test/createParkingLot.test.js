let expect = require('chai').expect;
const {createParkingLot} = require('../helpers/functions')

describe('create_parking_lot 6',  function () {
 
    it('should create 6 parking slots', function () {
      var preResult = 'Created parking lot with 6 slots';
      var result = createParkingLot(6);
      console.log(result);
      expect(result).to.be.equal(preResult);
  
    });
});