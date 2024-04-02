#! /usr/bin/env node
// ATM Machine Using Inquirer

import inquirer from "inquirer";
import chalk from "chalk";
// Initialize user balance and pin code
let myBalance = 15000;
let myPin = 1505;
// Print welcome message
console.log(chalk.blueBright("\n \tWelcome to Code With Saba - ATM Machine\n"));

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: chalk.yellow("Enter your pin code:")
    }
])
if(pinAnswer.pin === myPin){
    console.log(chalk.green("\nCongratulations! your pin has been authenticated.Access granted.\n"));

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.yellow("Select an operation:"),
            choices: ["Withdraw Amount","Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: chalk.yellow("Select a withdrawl method:"),
                choices: ["Enter Amount","Fast Cash"]
            }
    ])
    if(withdrawAns.withdrawMethod === "Enter Amount"){ 
        let amountAns = await inquirer.prompt([
        {
            name : "amount",
            type: "number",
            message: chalk.yellow("Enter the amount to withdraw:")
        }
    ])
    if(amountAns.amount > myBalance){
        console.log(chalk.redBright("\nInsufficient Balance\n"));
    } 
    else {
        myBalance -= amountAns.amount;
        console.log(chalk.green(`\n${amountAns.amount} Withdraw Successfully!\n`));
        console.log(chalk.blue(`\nYour Remaining Balance is : ${myBalance}\n`));
        console.log(chalk.green("Thank you for choosing ATM service. We appreciate your trust and support!"));
    }
    }
    else if(withdrawAns.withdrawMethod === "Fast Cash"){
        let fastCashAns = await inquirer.prompt([
            {
                name : "fastCash",
                type: "list",
                message: chalk.yellow("Select Your Amount:"),
                choices: ["1000","2000","5000","10000","20000","40000"]
            }
    ])
    if(fastCashAns.fastCash > myBalance){
            console.log(chalk.redBright("\nInsufficient Balance\n"));
        } 
    else {
            myBalance -= fastCashAns.fastCash;
            console.log(chalk.green(`\n${fastCashAns.fastCash} Withdraw Successfully!\n`));
            console.log(chalk.blue(`\nYour Remaining Balance is : ${myBalance}\n`));
            console.log(chalk.green("Thank you for choosing ATM service. We appreciate your trust and support!"));
        }
    }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(chalk.blueBright(`\nYour Account Balance is: ${myBalance}\n`));
    }
} 
    else {
    console.log(chalk.redBright("\nSorry, the pin entered is Incorrect.Please try again.\n"))
    }


