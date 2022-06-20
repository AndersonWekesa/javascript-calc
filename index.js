function addition(num1, num2)
{
    return num1 + num2;
}

function subtraction(num1, num2)
{
    return num1 - num2;
}

function multiplication(num1, num2)
{
    return num1 * num2;
}

function division(num1, num2)
{
    return num1 / num2;
}





let num1 = prompt("Enter First Number:");    
let num2 = prompt("Enter Second Number:");
let operation = prompt("Select Operation (+ , - , * , / )");

if (operation == '+')
{
    alert("Answer is: " + addition(num1, num2))
}
else if (operation == '-')
{
    alert("Answer is: " + subtraction(num1, num2))
}
else if (operation == '*')
{
    alert("Answer is: " + multiplication(num1, num2))
}
else if (operation == '/')
{
    alert("Answer is: " + division(num1, num2)) 
}
else
{
    alert("Please Select a Valid Operation!")
}




