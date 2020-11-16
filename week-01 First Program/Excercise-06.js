//-------------Excersise -06 : increment score if the right answer--------------------
var input = require('readline-sync');

var userhometown =input.question("Whats Your Hometown??");

var score =0;

if(userhometown == "RANCHI"||"Ranchi"||"ranchi")
{
    score+=10;
}

console.log("Your Score is : " + score);
