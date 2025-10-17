// Quiz Data - 10 Questions
const quizData = [
  { type: 'single', question: 'Which layer of Android architecture interacts directly with hardware?', options: ['Linux Kernel','Application Framework','Libraries','Applications'], correct: 0 },
  { type: 'multiple', question: 'Which are components of Android architecture?', options: ['Linux Kernel','Android Runtime','Application Framework','Applications'], correct: [0,1,2,3] },
  { type: 'fill', question: 'The Android Runtime (ART) executes apps written in ______.', correct: ['kotlin','java'] },
  { type: 'single', question: 'Which pattern is commonly used in Android apps with Kotlin?', options: ['MVC','MVP','MVVM','Layered'], correct: 2 },
  { type: 'multiple', question: 'Which belong to Android Application Framework?', options: ['Activity Manager','View System','Content Providers','Resource Manager'], correct: [0,1,2,3] },
  { type: 'single', question: 'Which company developed Android?', options: ['Apple','Microsoft','Google','Samsung'], correct: 2 },
  { type: 'fill', question: 'The default build tool for Android projects is ______.', correct: ['gradle'] },
  { type: 'single', question: 'Which virtual machine does Android use?', options: ['JVM','Dalvik','Hotspot','CLR'], correct: 1 },
  { type: 'single', question: 'Which language is officially supported for Android development?', options: ['Python','Kotlin','C++','Ruby'], correct: 1 },
  { type: 'fill', question: 'The UI in Android is mainly built using ______ files.', correct: ['xml'] }
];

let currentQuestion = 0;
let score = 0;
let answers = [];

// Start Quiz
function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quizContent").style.display = "block";
  loadQuestion();
}

// Load Question
function loadQuestion() {
  const container = document.getElementById("questionsContainer");
  container.innerHTML = "";

  const q = quizData[currentQuestion];
  const qElem = document.createElement("div");
  qElem.innerHTML = `<h3>${q.question}</h3>`;

  if (q.type === "single") {
    q.options.forEach((opt, i) => {
      qElem.innerHTML += `<label><input type="radio" name="answer" value="${i}"> ${opt}</label><br>`;
    });
  } else if (q.type === "multiple") {
    q.options.forEach((opt, i) => {
      qElem.innerHTML += `<label><input type="checkbox" value="${i}"> ${opt}</label><br>`;
    });
  } else if (q.type === "fill") {
    qElem.innerHTML += `<input type="text" id="fillAnswer" placeholder="Your answer">`;
  }

  container.appendChild(qElem);

  document.getElementById("questionInfo").innerText =
    `Question ${currentQuestion+1} of ${quizData.length}`;
  document.getElementById("prevBtn").disabled = currentQuestion === 0;

  const progress = ((currentQuestion+1)/quizData.length)*100;
  document.getElementById("progressFill").style.width = progress+"%";
}

// Save Answer
function saveAnswer() {
  const q = quizData[currentQuestion];
  let ans;

  if (q.type === "single") {
    const selected = document.querySelector("input[name='answer']:checked");
    ans = selected ? parseInt(selected.value) : null;
  } else if (q.type === "multiple") {
    ans = Array.from(document.querySelectorAll("input[type='checkbox']:checked"))
               .map(cb => parseInt(cb.value));
  } else if (q.type === "fill") {
    ans = document.getElementById("fillAnswer").value.trim().toLowerCase();
  }

  answers[currentQuestion] = ans;
}

// Navigation
function nextQuestion() {
  saveAnswer();
  if (currentQuestion < quizData.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function previousQuestion() {
  saveAnswer();
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion();
  }
}

// Finish Quiz
function finishQuiz() {
  saveAnswer();
  score = 0;
  quizData.forEach((q, i) => {
    const ans = answers[i];
    if (q.type === "single" && ans === q.correct) score++;
    else if (q.type === "multiple" && JSON.stringify(ans.sort()) === JSON.stringify(q.correct.sort())) score++;
    else if (q.type === "fill" && q.correct.includes(ans)) score++;
  });

  document.getElementById("quizContent").style.display = "none";
  document.getElementById("resultsContainer").style.display = "block";
  document.getElementById("correctCount").innerText = score;
  document.getElementById("incorrectCount").innerText = quizData.length - score;
  document.getElementById("totalQuestions").innerText = quizData.length;
  document.getElementById("scorePercentage").innerText = Math.round((score/quizData.length)*100) + "%";
}

// Restart Quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  answers = [];
  document.getElementById("resultsContainer").style.display = "none";
  document.getElementById("startScreen").style.display = "block";
}