#! /usr/bin/env node

import inquirer from "inquirer"

//user Input
let answers = await inquirer.prompt ([
    {
    name: "num1",
    type: "number",
    message: "please enter your first number",
},
{
    name: "num2",
    type: "number",
    message: "please enter your second number",
},
{
    name: "operator",
    type: "list",
    message: "please select the operato: ",
    choices:["+","-","*", "/"]
}
])

//variable declartion
let number1:number = answers.num1
let number2:number = answers.num2
let opt:string = answers.operator

//conditional statements
if (opt === "+"){
    console.log(`${number1} ${opt} ${number2} = ${number1+number2}`)
}
else if (opt === "-"){
    console.log(`${number1} ${opt} ${number2} = ${number1-number2}`)
}
else if (opt === "*"){
    console.log(`${number1} ${opt} ${number2} = ${number1*number2}`)
}
else if (opt === "/"){
    console.log(`${number1} ${opt} ${number2} = ${number1/number2}`)
}