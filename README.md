
Interactive Quiz Game

A simple, clean, and interactive quiz game built with vanilla HTML, CSS, and JavaScript. This project demonstrates fundamental web development concepts by creating a quiz application that supports various question formats, tracks progress, and displays final results.

## 🚀 Features

Multiple Question Types: Supports three different kinds of questions:

Single Choice (radio buttons)

Multiple Choice (checkboxes)

Fill-in-the-Blanks (text input)

User-Friendly Interface: A clean and centered layout with three distinct views: a start screen, the main quiz area, and a results summary.

Progress Tracking: A visual progress bar updates in real-time to show the user's completion status.

Question Navigation: Users can move between questions using "Next" and "Previous" buttons.

Dynamic Content: All questions are loaded dynamically from a JavaScript array, making it easy to add, remove, or modify questions.

Scoring System: Automatically calculates and displays the final score as a percentage, along with a count of correct and incorrect answers.

Restart Functionality: Allows users to easily "Try Again" after completing the quiz, which resets the game state.

🛠️ Technologies Used
HTML5: For the structure and content of the web page.

CSS3: For styling the user interface, including the layout, colors, and animations.

JavaScript (ES6): For all the client-side logic, including question rendering, answer validation, navigation, and scoring.

📁 File Structure
The project is organized into three simple files:

.
├── index.html      # The main HTML file containing the structure for all screens.
├── style.css       # The CSS file for all styling and layout.
└── script.js       # The JavaScript file with the quiz logic, questions, and state management.
🎮 How to Use
No special setup or dependencies are required. Simply follow these steps:

Clone the repository:

Bash

git clone https://github.com/your-username/interactive-quiz-game.git
Navigate to the project directory:

Bash

cd interactive-quiz-game
Open the index.html file in your favorite web browser (e.g., Chrome, Firefox, Safari).

That's it! You can now start the quiz.

💡 Code Overview
The core logic of the application resides in script.js.

quizData: An array of question objects. Each object contains the type, question text, available options (if applicable), and the correct answer(s).

loadQuestion(): This function dynamically generates the HTML for the current question based on its type and injects it into the DOM. It also updates the progress bar and question counter.

saveAnswer(): Before navigating to another question, this function captures the user's input and stores it in the global answers array. It handles different logic for single-choice, multiple-choice, and fill-in-the-blank questions.

nextQuestion() & previousQuestion(): These functions manage the currentQuestion index to navigate through the quiz.

finishQuiz(): Called after the final question is answered. It iterates through the user's answers, compares them to the correct answers in quizData, calculates the final score, and displays the results screen.

startQuiz() & restartQuiz(): These functions control the visibility of the different screens (start, quiz, results) and reset the quiz state for a new attempt.
