//-------------Excersise -10 : list grocery items to buy--------------------

//--------------Printing without using for loop-----------------

var grocery = ["Bread","Milk","Pasta","Egg","Oil"];

console.log(grocery[0]);

console.log(grocery[2]);

console.log(grocery[4]);


//------------Printing items by using for loop-----------------

var grocery = ["Bread","Milk","Pasta","Egg","Oil"];

for(var i=0;i<=grocery.length;i++)
{
    if(i%2==0)
    {
      console.log(grocery[i]);
    }
}
