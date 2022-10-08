let expect = require('chai').expect;
const {parkCar} = require('../helpers/functions');

describe('park RS-01-SS-1111',  function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 1';
    var result =  parkCar('RS-01-SS-1111');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park RS-01-SS-2222',  function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 2';
    var result =  parkCar('RS-01-SS-2222');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park RS-01-SS-3333', function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 3';
    var result =  parkCar('RS-01-SS-3333');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});


describe('park RS-01-SS-4444',  function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 4';
    var result =  parkCar('RS-01-SS-4444');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park RS-01-SS-5555',  function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 5';
    var result =  parkCar('RS-01-SS-5555');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park RS-01-SS-6666',  function () {
  it('should park the car',  function () {
    var preResult = 'Allocated slot number: 6';
    var result =  parkCar('RS-01-SS-6666');
    console.log(result);
    expect(result).to.be.equal(preResult);

  });
});

describe('park RS-01-SS-7777',  function () {
    it('should not allow to park the cark as its full',  function () {
      var preResult = 'Sorry, parking lot is full';
      var result =  parkCar('RS-01-SS-7777');
      console.log(result);
      expect(result).to.be.equal(preResult);
  
    });
  });