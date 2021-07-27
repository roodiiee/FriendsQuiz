

var readlineSync = require('readline-sync')
const chalk = require('chalk')


// Score Awarded
var score = 0;

// HighScore
var higherScore = 5;

// Entering the username
var userName = readlineSync.question("What is Your Name: ")
var greetUser = "Welcome " + userName
console.log(greetUser)
console.log(chalk.greenBright('-----------------------------------'))
console.log(chalk.blueBright("Let's Play A Game------------- How Much You Know About varun"))
console.log(chalk.greenBright('-----------------------------------'))
// // Asking permission if want to play
// var choice = readlineSync.question("Do you want to Play The Quiz: ")

// If user want to play
function play(question, answer) {
    var userAnswer = readlineSync.question(question, + "/n")
    if (userAnswer === answer){
        console.log("You are Right!", "\n")
        score = score + 1;
        if(score === higherScore){
            console.log("You Have Beaten HighScore")
        }
        else{
            console.log("Try One More Time To Beat HighScore")
        }
    }
    else {
        console.log("Wrong!")
    }
}

// Questions
var questions = [{
    question: `Is My name is Varun ?
    a. Yes
    b. No \n
    Given Your Answer `,
    answer: "a" || "yes" || "Yes",
}, 
{
    question: `When Is My Birthday celebrated??
    a. In the month of July 
    b. In the month of December \n
    Given Your Answer `,
    answer: "b",
},
{
    question: `Do I Like Mathematics whether it was in Engineering Or In HighSchool/Intermediate??
    a. No
    b. Yes
    c. MayBe
    Given Your Answer `,
    answer: "a" || "b" || "MayBe",
}, 
{
    question: `What I like to do most??
    a. Watching Youtube
    b. Programming
    c. Travelling
    d. None \n
    Given Your Answer `,
    answer: "a",
}, 
{
    question: `Did I make this Quiz by copy paste or by own?
    a. Copy Paste
    b. By Own \n
    Given Your Answer `,
    answer: "b",
}]

// Loop to check all 

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
    console.log(chalk.red("-----------------------------------"))
    console.log("Current Score  ", chalk.blue(score), "\n")
}

console.log("You Score: ",(score) + "/" + (questions.length))
