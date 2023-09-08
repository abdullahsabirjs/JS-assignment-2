// ! chap 5


// ? Q 1
// * var input1 = +prompt("Enter your first number")
// * var input2 = +prompt("Enter your second number")

// * var result = input1 + input2

// * document.write ( "Your answer is" + result)


// ? Q 2
// * var num1 = parseFloat(prompt("Enter the first number:"));
// *         var num2 = parseFloat(prompt("Enter the second number:"));
// *         var operator = prompt("Enter the operator (+, -, *, /):");
// *        var result;

// *         switch (operator) {
// *             case "+":
// *                 result = num1 + num2;
// *                break;
// *            case "-":
// *                 result = num1 - num2;
// *                 break;
// *             case "*":
// *                 result = num1 * num2;
// *                break;
// *            case "/":
// *                 result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero.";
// *                break;
// *             default:
// *                result = "Error: Invalid operator. Please enter +, -, *, or /.";
// *                break;
// *        }
// *        document.write("Result: " + result);    



// ? Q 3
// * var myVariable;
// // Step b: Display the value after variable declaration
// * document.write("Value after variable declaration is: " + myVariable + "<br>");
// // Step c: Initialize the variable with some number
// * myVariable = 5;
// // Step d: Display the initial value
// * document.write("Initial value: " + myVariable + "<br>");
// // Step e: Increment the variable
// * myVariable++;
// // Step f: Display the value after increment
// * document.write("Value after increment is: " + myVariable + "<br>");
// // Step g: Add 7 to the variable
// * myVariable += 7;
// // Step h: Display the value after addition
// * document.write("Value after addition is: " + myVariable + "<br>");
// // Step i: Decrement the variable
// * myVariable--;
// // Step j: Display the value after decrement
// * document.write("Value after decrement is: " + myVariable + "<br>");
// // Step k: Show the remainder after dividing the variable's value by 3
// * var remainder = myVariable % 3;
// // Step l: Display the remainder
// * document.write("The remainder is: " + remainder);



// ? Q 4
//  *  var ticketPrice = 600;
// * var totalCost = ticketPrice * 5;
// * document.write("Cost of buying 5 movie tickets: " + totalCost + " PKR");



// ? Q 5
// * var number = prompt("Enter a number to display its multiplication table:");
// *     if (!isNaN(number)) {
// *         var table = "<h1>Multiplication Table for " + number + "</h1>";
// *        for (var i = 1; i <= 10; i++) {
// *             var result = number * i;
// *             table += number + " x " + i + " = " + result + "<br>";
// *         }
// *         document.write(table);
// *     } else {
// *        alert("Please enter a valid number.");
// *     }



// ? Q 6
// * var celsiusTemperature = 30;
// * var fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
// * document.write(celsiusTemperature + "°C is " + fahrenheitTemperature + "°F<br>");
// * var fahrenheitTemperature2 = 86;
// * var celsiusTemperature2 = (fahrenheitTemperature2 - 32) * 5/9;
// * document.write(fahrenheitTemperature2 + "°F is " + celsiusTemperature2 + "°C");


// ? Q 7
// * var priceItem1 = 50.00;
// * var priceItem2 = 30.00;
// * var quantityItem1 = 2;
// * var quantityItem2 = 3;
// * var shippingCharges = 10.00;
// * var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
// * document.write("<p>Price of Item 1: $" + priceItem1 + "</p>");
// * document.write("<p>Ordered Quantity of Item 1: " + quantityItem1 + "</p>");
// * document.write("<p>Price of Item 2: $" + priceItem2 + "</p>");
// * document.write("<p>Ordered Quantity of Item 2: " + quantityItem2 + "</p>");
// * document.write("<p>Shipping Charges: $" + shippingCharges + "</p>");
// * document.write("<p>Total Cost: $" + totalCost + "</p>");



// ? Q 8
// * var totalMarks = 500;
// * var marksObtained = 380;
// * var percentage = (marksObtained / totalMarks) * 100;
// * document.write("Total Marks: " + totalMarks + "<br>");
// * document.write("Marks Obtained: " + marksObtained + "<br>");
// * document.write("Percentage: " + percentage.toFixed(2) + "%");


// ? Q 9
// * var usdToPkrRate = 309;
// * var sarToPkrRate = 28;
// * var usdAmount = 10;
// * var sarAmount = 25;
// * var totalAmountInPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);
// * document.write("Total Amount in Pakistani Rupees: " + totalAmountInPkr + " PKR");


// ? Q 10
// * var number = 7;
// * var result = ((number + 5) * 10) / 2;
// * document.write("The result is: " + result);



// ? Q 11
//  * var currentYear = new Date().getFullYear();
//  * var birthYear =prompt("Enter your birth year:");
//  * var age1 = currentYear - birthYear;
//  * var age2 = age1 - 1;
//  * document.write("They are either " + age1 + " or " + age2 + " years old.");




// ? Q 12
// * var radius = prompt("Enter the radius of the circle:");
// * var circumference = 2 * Math.PI * radius;
// * var area = Math.PI * Math.pow(radius, 2);
// * document.write("The circumference is " + circumference.toFixed(2) + "<br>");
// * document.write("The area is " + area.toFixed(2) + "<br>");




// ? Q 13
// * var favoriteSnack = prompt("Enter your favorite snack:");
// * var currentAge = prompt("Enter your current age:");
// * var maximumAge = prompt("Enter your maximum age:");
// * var amountPerDay = prompt("Enter the estimated amount per day:");
// * var yearsRemaining = maximumAge - currentAge;
// * var totalAmountNeeded = Math.ceil(amountPerDay * 365 * yearsRemaining);
// * document.write("You will need " + totalAmountNeeded + " " + favoriteSnack + " to last you until the ripe old age of " + maximumAge + ".");


// todo                                         E N D