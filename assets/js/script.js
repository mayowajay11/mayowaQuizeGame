// script.js

// Array of quiz questions, options, and the index of the correct answer
const quizData = [
    {
        question: "What is the capital of France?", // Question text
        options: ["Berlin", "Madrid", "Paris", "Lisbon"], // Answer options
        correct: 2 // Index of the correct answer
    },
    {
        question: "What is the capital of Spain?", // Question text
        options: ["Berlin", "Madrid", "Paris", "Lisbon"], // Answer options
        correct: 1 // Index of the correct answer
    },
    // Additional questions can be added here
];

// Variables to track the current question index and the user's score
let currentQuestionIndex = 0;
let score = 0;

// Function to load the current quiz question and options
function loadQuiz() {
    const currentQuiz = quizData[currentQuestionIndex]; // Get the current question
    document.getElementById('question').innerText = currentQuiz.question; // Display the question
    const options = document.getElementsByClassName('option'); // Get all option buttons
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentQuiz.options[i]; // Set the text for each option
    }
}

// Function to handle the selection of an option
function selectOption(index) {
    const currentQuiz = quizData[currentQuestionIndex]; // Get the current question
    if (index === currentQuiz.correct) {
        score++; // Increment the score if the correct option is selected
    }
    document.getElementById('next-button').style.display = 'block'; // Show the Next Question button
}

// Function to move to the next question or show the result if all questions are answered
function nextQuestion() {
    currentQuestionIndex++; // Increment the question index
    if (currentQuestionIndex < quizData.length) {
        loadQuiz(); // Load the next question
        document.getElementById('next-button').style.display = 'none'; // Hide the Next Question button
    } else {
        showResult(); // Show the result if all questions are answered
    }
}

// Function to display the result
function showResult() {
    document.getElementById('quiz').classList.add('hidden'); // Hide the quiz container
    document.getElementById('result').classList.remove('hidden'); // Show the result container
    document.getElementById('score').innerText = score; // Display the user's score
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    document.getElementById('quiz').classList.remove('hidden'); // Show the quiz container
    document.getElementById('result').classList.add('hidden'); // Hide the result container
    loadQuiz(); // Load the first question
    document.getElementById('next-button').style.display = 'none'; // Hide the Next Question button
}

// Event listener to load the first quiz question when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
});
