const aoc = require('../../lib/aoc.js');
const instructions = inputfile('input.txt','split');

let x = 0
let y = 0
let z = 0
instructions.forEach(step => {
  if (step.length == 1){
    if (step == "n"){
      y -= 1;
    } else {
      y += 1;
    }
  } else {
    if (step.charAt(0) == "n" && x % 2 != 0) {
      y -= 1;
    } else if (step.charAt(0) == "s" && x % 2 != 0){
      y += 1;
    }
    x += (step.charAt(1) == "e")? +1: -1;
  }    
})
let ax = Math.abs(x),
    ay = Math.abs(y);

if(ax > ay) {
  if (ay < Math.round(ax/2)) z = ax;
} else if (ay > ax){
  z = (ay - ax/2) + ax;
} else {
  z = ax * 1.5;
}
console.log(z);
// Answer: 687