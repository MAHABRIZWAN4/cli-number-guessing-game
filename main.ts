#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 15 + 1);
const answer = await inquirer.prompt([
  {
    message: "Please Guess a number between 1-15:",
    type: "number",
    name: "userGuessedNumber",
  },
]);
const userGuess = answer.userGuessedNumber;
if (answer.userGuessedNumber === randomNumber) {
  console.log("Congratulations!You are Genius,You guessed a correct number");
} else {
  console.log(
    `You lost,It's Okay try again.The correct number was ${randomNumber}`
  );
}
 