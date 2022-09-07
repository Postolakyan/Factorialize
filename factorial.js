var express = require("express");
var app = express();
app.get("/:factorial" ,function(req,res)
{
  let x = req.params["factorial"];
  let Factorial_of_x = Factorial(x*1);
  res.send(Factorial_of_x.toString())
})
app.listen(8080);

function Factorial( number)
{
	if(number==0)	
	{
		return 1;
	}	else
		{
			return number * Factorial(number-1);
    }
}



