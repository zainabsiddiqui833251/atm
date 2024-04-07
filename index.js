#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
let myBalance = 15000;
let myPin = 833251;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin:",
        type: "number",
    }
]);
if (pinAnswer.pin == myPin) {
    console.log(chalk.green.bgWhite("Correct pin code..."));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select action",
            type: "list",
            choices: [
                "Withdraw",
                "CheckBalance",
            ]
        }
    ]);
    if (operationAns.operation == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter amount to withdraw:",
                type: "number",
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log(chalk.red.bgWhite("Insufficient balance..."));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.green.bgWhite `Your remaining balance is ${myBalance}`);
        }
    }
    else if (operationAns.operation === "CheckBalance") {
        console.log("Your balance is: " + myBalance);
    }
}
else {
    console.log(chalk.red.bgMagenta("Incorrect pin code..."));
}
