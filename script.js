let name = prompt("Welcome to GC mini gold! What is your name?");
console.log(`Player Name : ${name}`);

let holeCount = prompt(
  `Hi ${name}! Would you like to play 3 or 6 holes today?`
);
console.log(`Desired Hole Count: ${holeCount}`);

let totalParForThree = 0;
let totalParForSix = 0;
const parThree = 9;
const parSix = 18;

if (holeCount == "3") {
  let holeOne = prompt("How many putts for hole 1? (Par is 3)");
  console.log(`Hole One: ${holeOne}`);
  totalParForThree = parseInt(holeOne) + totalParForThree;

  let holeTwo = prompt("How many putts for hole 2? (Par is 3)");
  console.log(`Hole Two: ${holeTwo}`);
  totalParForThree = parseInt(holeTwo) + totalParForThree;

  let holeThree = prompt("How many putts for hole 3? (Par is 3)");
  console.log(`Hole Three: ${holeThree}`);
  totalParForThree = parseInt(holeThree) + totalParForThree;

  if (totalParForThree > parThree) {
    console.log(
      `Nice try, ${name}... Your total par was: +${totalParForThree - parThree}`
    );
  } else if (totalParForThree < parThree) {
    console.log(
      `Great job, ${name}! Your total par was: ${totalParForThree - parThree}`
    );
  } else {
    console.log(
      `Good game, ${name}. Your total par was: ${totalParForThree - parThree}`
    );
  }
} else if (holeCount == "6") {
  let holeOne = prompt("How many putts for hole 1? (Par is 3)");
  console.log(`Hole One: ${holeOne}`);
  totalParForSix = parseInt(holeOne) + totalParForSix;

  let holeTwo = prompt("How many putts for hole 2? (Par is 3)");
  console.log(`Hole Two: ${holeTwo}`);
  totalParForSix = parseInt(holeTwo) + totalParForSix;

  let holeThree = prompt("How many putts for hole 3? (Par is 3)");
  console.log(`Hole Three: ${holeThree}`);
  totalParForSix = parseInt(holeThree) + totalParForSix;

  let holeFour = prompt("How many putts for hole 4? (Par is 3)");
  console.log(`Hole Four: ${holeFour}`);
  totalParForSix = parseInt(holeFour) + totalParForSix;

  let holeFive = prompt("How many putts for hole 5? (Par is 3)");
  console.log(`Hole Five: ${holeFive}`);
  totalParForSix = parseInt(holeFive) + totalParForSix;

  let holeSix = prompt("How many putts for hole 6? (Par is 3)");
  console.log(`Hole Six: ${holeSix}`);
  totalParForSix = parseInt(holeSix) + totalParForSix;

  if (totalParForSix > parSix) {
    console.log(
      `Nice try, ${name}... Your total par was: +${totalParForSix - parSix}`
    );
  } else if (totalParForSix < parSix) {
    console.log(
      `Great job, ${name}! Your total par was: ${totalParForSix - parSix}`
    );
  } else {
    console.log(
      `Good game, ${name}. Your total par was: ${totalParForSix - parSix}`
    );
  }
}
