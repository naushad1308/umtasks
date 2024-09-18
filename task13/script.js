//    Write JavaScript functions that perform the following operations on an array:
// Find the maximum number in the array.
// Calculate the sum of all elements in the array.
// Count the number of odd numbers in the array.
// Use a dummy array for testing purposes.
// Display the results of each operation to the user on Console.log.


// maximum number in the array.
let dummyArray = [10, 15, 38, 20, 13, 7];
function largestElement(arr) {
    arr.sort((a, b) => b - a)
    return (arr[0])
}

console.log("Maximum Number in the Array :" + largestElement(dummyArray));

// sum of all elements in the array.
let sumofElements = (arr) => {
    return arr.reduce((acc, curr, array) => {
        return acc + curr
    })
}
console.log("Sum of Array elements :" + sumofElements(dummyArray))



// Count the number of odd numbers in the array.
let countOfOddNum = function (arr) {
    let count = 0
    arr.map(elem => {
        if (elem % 2 !== 0) {
            count++
        }
    })
    return count
}
console.log("Count of Odd Number :" + countOfOddNum(dummyArray)) 