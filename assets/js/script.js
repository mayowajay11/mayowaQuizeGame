// Array of quiz questions, options, and the index of the correct answer
let quizData = [
    {
        question: "How many Legs does a Spider Have?", // Question text
        options: ["Nine", "Four", "Eight", "Six"], // Answer options
        correct: 2 // Index of the correct answer
    },
    {
        question: "What is the colour of Emerald?", // Question text
        options: ["Red", "Green", "Blue", "Yellow"], // Answer options
        correct: 1 // Index of the correct answer
    },
    {
        question: "What is the name of a place you go to see lot of animals?", // Question text
        options: ["Park", "Zoo", "Playing-Ground", "School"], // Answer options
        correct: 1 // Index of the correct answer
    },
    {
        question: "How many planets are in our solar system?", // Question text
        options: ["Eight", "Four", "Six", "Nine"], // Answer options
        correct: 0 // Index of the correct answer
    },
    {
        question: "What is the colour of a school bus?", // Question text
        options: ["Blue", "White", "Green", "Yellow"], // Answer options
        correct: 3 // Index of the correct answer
    },
    {
        question: "What do you use to write on a blackboard?", // Question text
        options: ["Pen", "Pencil", "Chalk", "Charcoal"], // Answer options
        correct: 2 // Index of the correct answer
    },
    {
        question: "How many days are in a year?", // Question text
        options: ["361", "365", "366", "368"], // Answer options
        correct: 1 // Index of the correct answer
    },
    {
        question: "How many sides does a triangle have?", // Question text
        options: ["Seven", "Four", "Three", "Two"], // Answer options
        correct: 2 // Index of the correct answer
    },
];

// Variables to track the current question index and the user's score
let currentQuestionIndex = 0;
let score = 0;
let timer; // Variable for the timer
let timeLeft = 600; // 10 minutes in seconds

// Function to load the current quiz question and options
function loadQuiz() {
    let currentQuiz = quizData[currentQuestionIndex]; // Get the current question
    document.getElementById('question').innerText = currentQuiz.question; // Display the question
    let options = document.getElementsByClassName('option'); // Get all option buttons
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = currentQuiz.options[i]; // Set the text for each option
        options[i].classList.remove('selected'); // Remove 'selected' class from all options
    }
}

// Function to handle the selection of an option
function selectOption(index) {
    let options = document.getElementsByClassName('option'); // Get all option buttons
    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('selected'); // Remove 'selected' class from all options
    }
    options[index].classList.add('selected'); // Add 'selected' class to the chosen option

    let currentQuiz = quizData[currentQuestionIndex]; // Get the current question
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
    clearInterval(timer); // Stop the timer
    document.getElementById('quiz').classList.add('hidden'); // Hide the quiz container
    document.getElementById('result').classList.remove('hidden'); // Show the result container
    document.getElementById('score').innerText = score; // Display the user's score
}

// Function to restart the quiz
function restartQuiz() {
    currentQuestionIndex = 0; // Reset the question index
    score = 0; // Reset the score
    timeLeft = 600; // Reset the timer
    document.getElementById('quiz').classList.remove('hidden'); // Show the quiz container
    document.getElementById('result').classList.add('hidden'); // Hide the result container
    loadQuiz(); // Load the first question
    document.getElementById('next-button').style.display = 'none'; // Hide the Next Question button
    startTimer(); // Start the timer
}

// Function to start the timer
function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult(); // Show the result if time is up
        } else {
            timeLeft--;
            document.getElementById('timer').innerText = formatTime(timeLeft);
        }
    }, 1000);
}

// Function to format time in mm:ss
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event listener to load the first quiz question and start the timer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    startTimer(); // Start the timer
});
