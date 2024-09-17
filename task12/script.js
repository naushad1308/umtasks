class NumberOperations {
    constructor(userInput) {
        this.userInput = userInput;
    }

    generateMultiplicationTable() {
        for (let i = 0; i <= 10; i++) {
            console.log(`${this.userInput} X ${i} = ${this.userInput * i}`);
        }
    }

    calculateSumOfNumbers() {
        let arrayOfNum = this.userInput.split('');
        let sumOfNumbers = arrayOfNum.map(num => parseInt(num, 10)).reduce((acc, curr) => acc + curr, 0);
        console.log(`Sum of ${this.userInput} = ${sumOfNumbers}`);
    }

    checkArmstrongNumber() {
        let arrayOfNum = this.userInput.split('');
        let isArmStrong = arrayOfNum.map(num => parseInt(num, 10)).reduce((acc, curr) => acc + Math.pow(curr, 3), 0);
        if (isArmStrong === parseInt(this.userInput)) {
            console.log(`${this.userInput} is Armstrong Number ${true}`);
        } else {
            console.log(`${this.userInput} is not Armstrong Number ${false}`);
        }
    }

    checkPrimeNumber() {
        let isPrime = true;
        let factors = [];
        let num = parseInt(this.userInput, 10);

        for (let i = 2; i <= num / 2; i++) {
            if (num % i === 0) {
                isPrime = false;
                factors.push(i);
                while (num % i === 0) {
                    num = num / i;
                }
            }
        }

        if (num > 1) {
            factors.push(num);
            factors.map(fac => console.log(`Factor is ${fac}`));
        }

        if (isPrime) {
            console.log(`${this.userInput} is Prime Number ${true}`);
        } else {
            console.log(`${this.userInput} is not Prime Number ${false}`);
        }

        if (num === 1) {
            console.log("1 is neither prime nor composite number.");
        }
    }
}


const numberOps = new NumberOperations('153');
numberOps.generateMultiplicationTable();
numberOps.calculateSumOfNumbers();
numberOps.checkArmstrongNumber();
numberOps.checkPrimeNumber();