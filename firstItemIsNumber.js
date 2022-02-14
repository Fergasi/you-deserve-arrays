const prompt = require('prompt-sync')();

var n = new Array();
var answer = false

n = (prompt("Enter a series of numbers seperated by commas and hit enter: ").split(","));

if (isNaN(n[0])) {
 let answer = false;

 console.log("The first number in your array is a number: ", answer);
} else

if (!isNaN(n[0])) {
    let answer = true;
   
    console.log("The first number in your array is a number: ", answer);
   } 
   