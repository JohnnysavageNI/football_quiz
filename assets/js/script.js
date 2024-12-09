const quizData = [
    {
        question: "Who won the last world cup?",
        options: ["Argentina", "France", "Brazil", "England"],
        answer: 1, 
    },
    {
        question: "Who won Euro 2024?",
        options: ["Italy", "France", "Germany", "Spain"],
        answer: 4,
    },
    {
        question: "Which league is the top tier in England?",
        options: ["Championship", "Premier League", "League Two", "League One"],
        answer: 2,
    },
    {
        question: "Which team is based in Italy?",
        options: ["Ajax", "Lyon", "AC Milan", "Dortmund"],
        answer: 3,
    },
    {
        question: "Which team is based in Germany",
        options: ["Bayern Munich", "Juventus", "Barcelona", "Liverpool"],
        answer: 1,
    }
];

let currentQuestionIndex = 0; 
let userAnswers = []; 

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".button-style");
const submitButton = document.querySelector(".submit-button");
const resultElement = document.getElementById("result");
