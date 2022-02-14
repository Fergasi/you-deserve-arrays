const prompt = require('prompt-sync')();

var n = new Array();
var answer = false

n = (prompt("Enter a series of numbers seperated by commas and hit enter: ").split(","));

if (n.length >= 10) {
 let answer = true;

 console.log(answer);
} else

if (n.length < 10) {
   
    console.log(answer);
   }

