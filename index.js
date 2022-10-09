const fs = require("fs");
const readline = require("readline");
const {
  createParkingLot,
  parkCar,
  leaveParking,
  status,
} = require("./helpers/functions");

let main = () => {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  /* for await (const line of rl) {
      // Each line in input.txt will be successively available here as `line`.
      console.log(`Line from file: ${line}`);
    } */

  rl.on("line", async (input) => {
    //input = input.split(" ");
    input = input.match(/\S+/g) || []  //   Handle whitespaces in between string

    switch (input[0].toLowerCase()) {
        //  When 'create' line is encountered
      case "create":
        try {
          const res = createParkingLot(input[1]);
          console.log(res);
        } catch (err) {
          console.log(`error occured during parking lot creation ${err}`);
        }
        break;

        //  When 'park' line is encountered
      case "park":
        try {
          const res = parkCar(input[1]);
          console.log(res);
        } catch (err) {
          console.log(`error occured during parking car ${err}`);
        }
        break;

        //  When 'leave' line is encountered
      case "leave":
        try {
          const res = leaveParking(input[1], input[2]);
          console.log(res);
          /*  if (res) {
            console.log(
              `Registration Number ${res[0].value} from Slot ${res[0].key} has left with Charge ${res[1]}`
            );
          } else {
            console.log(`Registration Number ${input[1]} not found`);
          } */
        } catch (err) {
          console.log(`error occured while leaving the parking lot ${err}`);
        }
        break;

        //  When 'status' line is encountered
      case "status":
        try {
          status();
        } catch (err) {
          console.log(`error occured during status ${err}`);
        }
        break;

      case "exit":
        rl.pause();
        break;

      default:
        console.log(`Unexpected case detected, please verify the input file`);
    }
  });
};

main();
