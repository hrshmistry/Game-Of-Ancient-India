var readlineSync = require('readline-sync');
const chalk = require('chalk');

var userName = readlineSync.question(chalk.bold("May I have your name? "));
console.log("Welcome " + chalk.bold(userName) + ", to " + chalk.bold.bgRedBright(" GAME OF ANCIENT INDIA "));
console.log("\nFor" + chalk.bold(" answers,") + " only use" + chalk.bold(" a, b, c, ") + "and" + chalk.bold(" d."));
console.log();

var score = 0;

var questionsList = [{
  question: chalk.bold.cyanBright
("(1) _____ was the residence of Akbar?\n\n") + " a. Allahabad\n b. Delhi\n c. Agra\n d. Lucknow\n\n" + chalk.bold(" -> "),
  answer: "c",
}, {
  question: chalk.bold.cyanBright("(2) Charminar in Hyderabad was built in?\n\n") + " a. 1591\n b. 1951\n c. 1681\n d. 1861\n\n" + chalk.bold(" -> "),
  answer: "a",
},
{
  question: chalk.bold.cyanBright("(3) Who was the last Mughal emperor?\n\n") + " a. Babar\n b. Tipu Sultan\n c. Aurangzeb\n d. Bahadur Shah II\n\n" + chalk.bold(" -> "),
  answer: "d",
},
{
  question: chalk.bold.cyanBright("(4) In which year, Ashoka invaded Kalinga?\n\n") + " a. 261 BC\n b. 235 BC\n c. 285 BC\n d. 275 BC\n\n" + chalk.bold(" -> "),
  answer: "a",
},
{
  question: chalk.bold.cyanBright("(5) Which of the following are called forest books?\n\n") + " a. Brahmanas\n b. Aranyakas\n c. Upanishads\n d. Vedanta\n\n" + chalk.bold(" -> "),
  answer: "b",
},];

for (var i = 0; i < questionsList.length; i++) {
  question = questionsList[i].question;
  answer = questionsList[i].answer;
  play(question, answer);
}

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toLowerCase() === answer) {
    console.log(chalk.bold.green("right"));
    score = score + 1;
  } else {
    console.log(chalk.bold.red("wrong"));
  }
  console.log("current score: " + chalk.keyword('orange').bold(score) + "\n");
}

console.log(chalk.bold("Congrats!🎉  You Scored ") + chalk.keyword('orange').bold(score) + "!");