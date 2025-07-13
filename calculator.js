const readlineSync = require('readline-sync');

function displayMenu() {
console.log('Choose a number to perform the operation');
console.log('1-Addition');
console.log('2-Subtraction');
console.log('3-Multiplication');
console.log('4-Division');
console.log('5-Exit');
}

function performOperation(choice, num1, num2) {
    switch (choice) {
        case '1':
            console.log(`Result:${num1}+${num2}=${num1+num2}`);
            break;
        case '2':
            console.log(`Result:${num1}-${num2}=${num1-num2}`);
            break;
        case '3':
            console.log(`Result:${num1}*${num2}=${num1*num2}`);
            break;
        case '4':
            console.log(`Result: ${num1}/${num2}=${num1/num2}`);
            break;
        default:
            console.log('Please select the valid operation');
    }
  }

function startCalculator() {
    while (true) {
        displayMenu();
        const choice = readlineSync.question('Enter your choice: ');

        if (choice === '5') {
            console.log('Exiting calculator...');
            break;
        }

        if (!['1', '2', '3', '4'].includes(choice)) {
            console.log('Invalid choice. Please enter a number between 1 and 5.');
            continue;
        }

        const input1 = readlineSync.question('Enter the first number: ');
        const num1 = parseFloat(input1);
        if (isNaN(num1)) {
            console.log('Invalid first number. Please enter a valid number.');
            continue;
        }

        const input2 = readlineSync.question('Enter the second number: ');
        const num2 = parseFloat(input2);
        if (isNaN(num2)) {
            console.log('Invalid second number. Please enter a valid number.');
            continue;
        }

        performOperation(choice, num1, num2);
    }
}

startCalculator();
