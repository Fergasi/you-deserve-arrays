const prompt = require('prompt-sync')();

var n = new Array();

n = (prompt("Enter a couple of numbers seperated by commas and hit enter: ").split(","));

let last = n[n.length-1];

console.log(n[3] || last);