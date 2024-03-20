#!//usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select an operator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "%"],
    },
]);
answer.operator === "+"
    ? console.log(answer.firstNumber + answer.secondNumber)
    : answer.operator === "-"
        ? console.log(answer.firstNumber - answer.secondNumber)
        : answer.operator === "*"
            ? console.log(answer.firstNumber * answer.secondNumber)
            : answer.operator === "/"
                ? console.log(answer.firstNumber / answer.secondNumber)
                : answer.operator === "%"
                    ? console.log(answer.firstNumber % answer.secondNumber)
                    : console.log("Invalid Operator");
