//-------------Excersise -07 : function to add two numbers--------------------


var input = require('readline-sync');

function add(a,b)
{
    
    return a+b;
}

var num1 = parseInt(input.question("Input 1st Number"));
var num2 = parseInt(input.question("Input 2nd Number"));

var result =add(num1,num2);
console.log(result);
