//array for questions
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

//variables to store answers and current question
let currentQuestionIndex = 0; 
let userAnswers = []; 

//linking to HTML
const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".button-style");
const submitButton = document.querySelector(".submit-button");


//load question and cycle through questions
function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answerButtons.forEach((button, index) => {
        button.textContent = currentQuestion.options[index];
        button.classList.remove("selected");
    });
}

answerButtons.forEach((button) => {
    button.addEventListener("click", () => {
        answerButtons.forEach((btn) => btn.classList.remove("selected"));
        button.classList.add("selected");
        userAnswers[currentQuestionIndex] = parseInt(button.getAttribute("data-value"));
    });
});

//submit button 
submitButton.addEventListener("click", () => {
    if (userAnswers[currentQuestionIndex] == null) {
        alert("Oops! No answer selected.");
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    let correctCount = 0;

    quizData.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            correctCount++;
        }
    });

    alert(`You got ${correctCount} out of ${quizData.length} correct!`);

    location.reload();
}


//start the quiz
loadQuestion();