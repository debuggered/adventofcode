const aoc = require('../lib/aoc.js');
const changelist = inputfile('./day01.txt', false);
let accum = 0;
    a = changelist.split("")
        .map(part => {return part == "("?1:-1})
        .reduce((accum, part) => accum + part)
    console.log(a)
