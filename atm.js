const readlineSync = require('readline-sync');

function displayMenu(){
    console.log('Choose a option:');
    console.log('1-Deposit Amount');
    console.log('2-Withdraw Amount');
    console.log('3-Check Balance');
    console.log('4-Exit');
}

let balance=1000.00;

let transactions = []; 

function getFormattedDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString('en-IN');
    const time = now.toLocaleTimeString('en-IN');
    return `${date} ${time}`;
}

function recordTransaction(type, amount, newBalance) {
    const transactionTime = getFormattedDateTime();
    transactions.push({
        type: type,
        amount: amount,
        time: transactionTime,
        currentBalance: newBalance
    });
}

function deposit(){
    const amount=parseFloat(readlineSync.question('Enter the amount: Rs'));
    if(isNaN(amount)||amount<=0){
        console.log('Please enter valid amount');
        return;
    }
    balance=balance+amount;
    const time = getFormattedDateTime();
    console.log(`Successfully deposited Rs${amount} at ${time}`);
    recordTransaction('Deposit', amount, balance);
}

function withdraw(){
    const amount=parseFloat(readlineSync.question('Enter the amount: Rs'));
    if(isNaN(amount)||amount<=0){
        console.log('Please enter valid amount');
        return;
    }

    if(amount>balance){
        console.log('Insufficient balance');
        return;
    }

    balance=balance-amount;
    console.log(`Successfully withdrawn Rs${amount} at ${time}`);
    const time = getFormattedDateTime();
    recordTransaction('Withdrawal', amount, balance);
}

function checkBalance(){
    console.log(`Your current balance is:Rs${balance}`);
    console.log('Transaction History');
    if (transactions.length === 0) {
        console.log('No transactions yet.');
    } else {
        transactions.forEach(transaction => {
            console.log(`${transaction.time}: ${transaction.type} of Rs${transaction.amount}. New Balance: Rs${transaction.currentBalance}`);
        });
    }
}

function atm(){
    let running=true;
    while(running){
        displayMenu();
        const choice=parseInt(readlineSync.question('Enter your choice:'));
        switch(choice){
            case 1:
                deposit();
                break;
            case 2:
                withdraw();
                break;
            case 3:
                checkBalance();
                break;
            case 4:
                console.log('Thank you for using the ATM');
                running=false;
                break;
            default:
                console.log('Please select the valid operation');
        }
    }
}

atm();