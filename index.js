

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
console.log(chalk.blueBright("Let's Play A Game------------- How Much You Know About Avengers"))
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
    question: `Who is the Metal-Clad Hero ?
    a. Ironman
    b. Hulk
    c. Natasha
    d. Thor \n
    Given Your Answer `,
    answer: "a",
}, 
{
    question: `Where does Rocket Raccoon spend most of his time?
    a. On Earth
    b. In Space
    c. Under the Sea
    d. In Rubbish Bins \n
    Given Your Answer `,
    answer: "b",
},
{
    question: `What is the strongest metal in the Marvel Universe?
    a. Frelunium
    b. veryStrongium
    c. stretchium
    d. vibranium \n
    Given Your Answer `,
    answer: "d",
}, 
{
    question: `Vision is a…what?
    a. Alien
    b. Ghost
    c. Android 
    d. Famous Artist \n
    Given Your Answer `,
    answer: "a",
}, 
{
    question: `Who is the leader of S.H.I.E.L.D?
    a. Nick Fury
    b. Tony Stark
    c. Bruce Banner
    d. Diana Prince \n
    Given Your Answer `,
    answer: "a",
}]

// Loop to check all 

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
    console.log(chalk.red("-----------------------------------"))
    console.log("Current Score  ", chalk.blue(score), "\n")
}

console.log("You Score: ",(score) + "/" + (questions.length))
