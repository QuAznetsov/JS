/*
*MVP* Calculator

Data:
+
-
/
*

Exeption: 
Division at 0 = Infinity

Task:
Create a simple calculater with 2 variables and 1 operator.
*/

let num1 = "Input number"
let num2 = "Input number"
let operator = "-" // Choose the math's sign from data
if (operator === "+")
{
console.log(+`${num1}`+ +`${num2}`)
}
else if(operator === "-" )
{
console.log(`${num1}`-`${num2}`)
}
else if(operator === "*" )
{
console.log(`${num1}`*`${num2}`)
}
else if(operator === "/" )
{
console.log(`${num1}`/`${num2}`)
}

