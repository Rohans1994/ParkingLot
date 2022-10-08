const charge = 10;
let parkingSlots = [];
let cars = [];
let maxCarPark = 0;

let createParkingLot = (lotSize) => {
    try {
      maxCarPark = parseInt(lotSize);
    } catch (e) {
      return "Parameter is not a number!";
    }
    for (let i = 1; i <= maxCarPark; i++) {
      parkingSlots.push(i);
    }
    return `Created parking lot with ${parkingSlots.length} slots`;
  };
  
  let parkCar = (registratonNo) => {
    if (maxCarPark === 0) {
      return `parking lot is not initiated`;
    } else if (maxCarPark === cars.length) {
      //console.log(JSON.stringify(cars));
      return `Sorry, parking lot is full`;
    } else {
      let key = parkingSlots[0];
      cars.push({
        key: key,
        value: registratonNo,
      });
      // console.log("pushed to car",Car);
      parkingSlots.shift();
      return `Allocated slot number: ${key}`;
    }
  };
  
  let leaveParking = (registratonNo, hours) => {
    if (maxCarPark == 0) {
      return `Sorry, parking lot is empty`;
    }
    var slot = cars.find((car) => {
      return car.value == registratonNo;
    });
  
    if (!slot) return `Registration Number ${registratonNo} not found`;
  
    var parkingCharge = (hours - 1) * charge;
    cars = cars.filter((car) => {
      return car.value != registratonNo;
    });
    parkingSlots.push(slot.key);
    parkingSlots.sort();
    return `Registration Number ${registratonNo} from Slot ${slot.key} has left with Charge ${parkingCharge}`

    //return [slot, charge];
  };
  
  let status = () => {
    if (maxCarPark === 0) {
      return `Sorry, parking lot is empty`;
    } else if (cars.length > 0) {
      cars.sort((a,b)=> a.key - b.key)
      console.log("Slot No.\t Registration No.");
      cars.forEach(function (car) {
        console.log(car.key + "\t         " + car.value + "\t");
      });
    }
  };

  module.exports = {
    createParkingLot,
    parkCar,
    leaveParking,
    status
  }