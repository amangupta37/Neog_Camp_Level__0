//--------------------------Pyramid Pattern Printing in CLI-------------------------------
var num = "";
var size = 5;
for(var i=1; i<=size; i++)
{
  num = num + "*";
  console.log(num);
}


//-------------------------Pyramid Pattern Printing in webpage-----------------------------

for(var i=0;i<5;i++)
{
    for(var j=0;j<=i;j++)
    {
        document.write("*");
         
    }
   document.write("<br>");
}
