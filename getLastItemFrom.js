const prompt = require('prompt-sync')();

var n = new Array();
let last = n[n.length-1];

n = (prompt("Enter a couple of numbers seperated by commas and hit enter: ").split(","));

console.log(last);