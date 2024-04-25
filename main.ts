#! /usr/bin/env node
// this is percentage % calculator

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "enter your total number",
    type: "number",
    name: "percantage",
  },
  {
    message:"out of",
    tppe:"number",
    name:"operation"
  }
]);
let percantage = answer.percantage/answer.operation*100;
console.log(`Congratulation your % is ${percantage}!`);