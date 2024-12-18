const roverX = 0;
const roverY = 0;
const heading = 0;
const instructions = 332331;

// The above input should leave the Mars Rover at 2 2 0

// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE

let roverXC = roverX;
let roverYC = roverY;
let roverHeading = heading;
let remainingInstructions = instructions;
let numberOfDigits = 1;

while ((10 ** numberOfDigits) < remainingInstructions) {
    numberOfDigits++;
}

while (remainingInstructions > 0) {
    numberOfDigits--;
    const currentInstruction = (remainingInstructions - (remainingInstructions % (10 ** numberOfDigits))) / (10 ** numberOfDigits);
    remainingInstructions = remainingInstructions % (10 ** numberOfDigits);

    roverXC = roverXC + ((((roverHeading - 1) / 2) * -2) + 1) * ((roverHeading) % 2) * (currentInstruction - (currentInstruction % 3)) / 3;
    roverYC = roverYC + ((((roverHeading) / 2) * -2) + 1) * ((roverHeading + 1) % 2) * (currentInstruction - (currentInstruction % 3)) / 3;
    roverHeading = (roverHeading + (((currentInstruction % 2) * 2) + 1) * ((currentInstruction % 3) / currentInstruction)) % 4;
}

console.log(roverXC, roverYC, roverHeading);