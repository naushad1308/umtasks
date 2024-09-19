// Implement a function that takes two numbers as input and returns a Promise.
//   Within the function, perform division of the first number by the second number.
// If the second number is zero, reject the Promise with an appropriate error message.
//     Otherwise, resolve the Promise with the result of the division.
// Handle any errors gracefully and provide meaningful error messages.
// Demonstrate the usage of this function by calling it with different input values and         handling the resolved or rejected Promise accordingly.

let divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num2 === 0) {
            reject("Error: Division by zero is not allowed");
        } else {
            let result = num1 / num2;
            resolve(result);
        }
    })
}
// Test the function with different input values
divideNumbers(10, 2).then(result => console.log(result)).catch(error => console.log(error))
divideNumbers(10, 0).then(result => console.log(result)).catch(error => console.log(error))
divideNumbers(10, 7).then(result => console.log(result)).catch(error => console.log(error))
divideNumbers(0, 10).then(result => console.log(result)).catch(error => console.log(error))