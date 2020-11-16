function check(ans)
{
    var score =0;
    console.log(ans);
    if(ans === "Bokaro")
    {
        score+=10;
        console.log('Correct Answer and Now Your Score is : ' +" "+score);

    }
    else
    {   
        
        console.log('Wrong Answer and Your Score is : ' +" "+score);
    }

}

var input = require('readline-sync');
var useranswer = input.question("What is the HomeTown of Tanay Prata ??");
var result =  check(useranswer);
