//-------------Excersise-09 : print your name 5 times--------------------

var input = require('readline-sync');
var username = input.question("Enter Your Name");

console.log("Printing Username 5 Times")
for(i=0;i<5;i++)
{
   console.log(username);
}
