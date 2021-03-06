const aoc = require('../../lib/aoc.js');
const links = inputfile('input.txt').map( Number );

let current = 0, 
    instruction = 0, 
    steps = 0;
        
while (current >= 0 && current < links.length ) {
    instruction = links[current];
    links[current] += (instruction >= 3)? -1 : 1;
    current += instruction;
    steps += 1;
}
console.log(steps);
//answer: 28372145