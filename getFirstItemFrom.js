const prompt = require('prompt-sync')();

var n = new Array();

n = (prompt("Enter a couple of numbers seperated by commas and hit enter: ").split(","));

console.log(n[0]);