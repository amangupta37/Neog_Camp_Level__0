//-------------Excersise -05 : print right/wrong if greater than 25--------------------
var input = require('readline-sync');

var userage =input.question("Your Age is greater than 25 ??")

if(userage == "YES"||"Yes"||"yes"||"Y"||"y")
{
    console.log("Right");
}
else
{
    console.log("Wrong");
}
