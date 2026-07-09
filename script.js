// Database simulation (Array of Objects) with 20 Questions in English
const quizData = [
    {
        question: "What is the full form of HTML?",
        options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
        correct: 0
    },
    {
        question: "What is JavaScript primarily used for?",
        options: ["Styling", "Database management", "Adding interactivity", "Server configuration"],
        correct: 2
    },
    {
        question: "Which of the following is NOT a Database Management System?",
        options: ["MySQL", "MongoDB", "Oracle", "HTML"],
        correct: 3
    },
    {
        question: "What is the full form of CSS?",
        options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"],
        correct: 0
    },
    {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correct: 1
    },
    {
        question: "Which of the following is NOT a programming language?",
        options: ["Python", "Java", "HTML", "C++"],
        correct: 2
    },
    {
        question: "From which number does an array index start in JavaScript?",
        options: ["1", "0", "-1", "Depends on the array"],
        correct: 1
    },
    {
        question: "Bootstrap is a popular framework for which language?",
        options: ["JavaScript", "HTML", "Python", "CSS"],
        correct: 3
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correct: 3
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        correct: 2
    },
    {
        question: "What is the correct file extension for a JavaScript file?",
        options: [".js", ".java", ".script", ".xml"],
        correct: 0
    },
    {
        question: "Which tag is used for the largest heading in HTML?",
        options: ["<head>", "<h6>", "<heading>", "<h1>"],
        correct: 3
    },
    {
        question: "React.js is a library of which programming language?",
        options: ["Python", "PHP", "JavaScript", "Ruby"],
        correct: 2
    },
    {
        question: "How do you insert a comment in HTML?",
        options: ["// comment //", "", "/* comment */", "<! comment !>"],
        correct: 1
    },
    {
        question: "Which tag is used to link an external CSS file to an HTML document?",
        options: ["<style>", "<script>", "<link>", "<css>"],
        correct: 2
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["text-color", "font-color", "color", "text-style"],
        correct: 2
    },
    {
        question: "What is the main use of 'console.log()' in JavaScript?",
        options: ["To show an alert popup", "To print output in the console", "To fix syntax errors", "To change website styling"],
        correct: 1
    },
    {
        question: "What is it called when we write CSS directly inside an HTML tag?",
        options: ["Internal CSS", "External CSS", "Inline CSS", "Outline CSS"],
        correct: 2
    },
    {
        question: "How do you create a function in JavaScript?",
        options: ["function:myFunction()", "function myFunction()", "create myFunction()", "def myFunction()"],
        correct: 1
    },
    {
        question: "What is Git?",
        options: ["A programming language", "A version control system", "A text editor", "A database system"],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    selectedOption = null;
    nextBtn.style.display = "none";
    const currentQ = quizData[currentQuestionIndex];
    questionText.innerText = `${currentQuestionIndex + 1}. ${currentQ.question}`;
    
    optionsContainer.innerHTML = "";
    currentQ.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => selectOption(btn, index);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(btn, index) {
    // Remove 'selected' class from all other buttons
    Array.from(optionsContainer.children).forEach(child => {
        child.classList.remove("selected");
    });
    
    // Add 'selected' class to the clicked button for modern styling
    btn.classList.add("selected");
    
    selectedOption = index;
    nextBtn.style.display = "block";
    
    // Change button text if it is the very last question
    if(currentQuestionIndex === quizData.length - 1) {
        nextBtn.innerText = "Submit Quiz";
    }
}

function nextQuestion() {
    // Check if the selected answer is correct
    if (selectedOption === quizData[currentQuestionIndex].correct) {
        score++;
    }

    currentQuestionIndex++;

    // Load the next question or show the final result
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("quiz-box").style.display = "none";
    const resultBox = document.getElementById("result-box");
    resultBox.style.display = "block";
    document.getElementById("result-score").innerText = `You scored ${score} out of ${quizData.length}!`;
}

// Initialize and start the quiz
loadQuestion();