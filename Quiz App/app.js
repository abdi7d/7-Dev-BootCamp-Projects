const DEFAULT_TIME = 15;
const HIGH_SCORE_KEY = 'et_quiz_high_score';

const QUESTIONS = [
  { question: 'Which sentence is Present Simple?', choices: ['I have eaten.', 'I eat rice every day.', 'I am eating now.', 'I will eat later.'], correct: 'I eat rice every day.' },
  { question: 'Which is Present Continuous?', choices: ['She plays piano.', 'She is playing piano.', 'She has played piano.', 'She played yesterday.'], correct: 'She is playing piano.' },
  { question: 'Choose the Present Perfect example.', choices: ['They visited last year.', 'They have visited Paris.', 'They are visiting now.', 'They will visit tomorrow.'], correct: 'They have visited Paris.' },
  { question: 'Which shows Present Perfect Continuous?', choices: ['I have been working all day.', 'I worked yesterday.', 'I will be working tomorrow.', 'I work daily.'], correct: 'I have been working all day.' },
  { question: 'Which is Past Simple?', choices: ['I had finished my work.', 'I finish my work.', 'I finished my work yesterday.', 'I have finished my work.'], correct: 'I finished my work yesterday.' },
  { question: 'Choose Past Continuous.', choices: ['He was reading when I called.', 'He reads a lot.', 'He will read tomorrow.', 'He has read that book.'], correct: 'He was reading when I called.' },
  { question: 'Which is Past Perfect?', choices: ['She had left before I arrived.', 'She leaves at 6.', 'She was leaving.', 'She has been leaving.'], correct: 'She had left before I arrived.' },
  { question: 'Pick Past Perfect Continuous.', choices: ['They had been traveling for hours.', 'They traveled last year.', 'They travel often.', 'They will have traveled.'], correct: 'They had been traveling for hours.' },
  { question: 'Which is Future Simple?', choices: ['I will call you.', 'I call you now.', 'I am calling you.', 'I have called you.'], correct: 'I will call you.' },
  { question: 'Choose Future Continuous.', choices: ['I will be studying at 8pm.', 'I study at 8pm.', 'I studied at 8pm.', 'I have studied at 8pm.'], correct: 'I will be studying at 8pm.' },
  { question: 'Which is Future Perfect?', choices: ['By then I will have finished.', 'I finish then.', 'I have finished then.', 'I am finished then.'], correct: 'By then I will have finished.' },
  { question: 'Pick Future Perfect Continuous.', choices: ['She will have been working for years.', 'She will work tomorrow.', 'She is working now.', 'She has worked.'], correct: 'She will have been working for years.' }
];

let questionsQueue = [];
let currentQuestion = null;
let score = 0;
let timer = null;
let timeLeft = DEFAULT_TIME;

// DOM
const startBtn = document.getElementById('start');
const nextBtn = document.getElementById('next');
const restartBtn = document.getElementById('restart');
const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const resultEl = document.getElementById('result');

// Utils
function shuffle(array){
  for(let i = array.length-1; i>0; i--){
    const j = Math.floor(Math.random()* (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function loadHighScore(){ return Number(localStorage.getItem(HIGH_SCORE_KEY)) || 0; }
function saveHighScore(score){ if(score>loadHighScore()) localStorage.setItem(HIGH_SCORE_KEY, score); }

// Quiz functions
function startQuiz(){
  questionsQueue = QUESTIONS.map(q=>({...q}));
  shuffle(questionsQueue);
  score=0;
  resultEl.textContent='';
  startBtn.style.display='none';
  restartBtn.style.display='none';
  nextBtn.disabled=true;
  showNextQuestion();
}

function showNextQuestion(){
  if(questionsQueue.length===0){
    endQuiz();
    return;
  }
  currentQuestion = questionsQueue.shift();
  questionEl.textContent = currentQuestion.question;
  choicesEl.innerHTML='';
  progressEl.textContent = `Question ${QUESTIONS.length - questionsQueue.length} of ${QUESTIONS.length}`;

  const choices = currentQuestion.choices.slice();
  shuffle(choices);
  choices.forEach(choice=>{
    const btn=document.createElement('button');
    btn.textContent = choice;
    btn.addEventListener('click', ()=>selectAnswer(btn));
    choicesEl.appendChild(btn);
  });
  timeLeft = DEFAULT_TIME;
  updateTimer();
  startTimer();
}

function selectAnswer(btn){
  stopTimer();
  const isCorrect = btn.textContent === currentQuestion.correct;
  if(isCorrect) score++;
  [...choicesEl.children].forEach(b=>{
    b.disabled=true;
    if(b.textContent===currentQuestion.correct) b.classList.add('correct');
    else if(b===btn) b.classList.add('incorrect');
  });
  nextBtn.disabled=false;
  setTimeout(()=>showNextQuestion(),900);
}

function startTimer(){
  stopTimer();
  timer = setInterval(()=>{
    timeLeft--;
    updateTimer();
    if(timeLeft<=0){
      stopTimer();
      handleTimeout();
    }
  },1000);
}

function stopTimer(){ if(timer){ clearInterval(timer); timer=null; } }
function updateTimer(){ timerEl.textContent=`Time Left: ${timeLeft}s`; }
function handleTimeout(){
  [...choicesEl.children].forEach(b=>{
    b.disabled=true;
    if(b.textContent===currentQuestion.correct) b.classList.add('correct');
  });
  nextBtn.disabled=false;
  setTimeout(()=>showNextQuestion(),900);
}

function endQuiz(){
  stopTimer();
  questionEl.textContent='Quiz Complete!';
  choicesEl.innerHTML='';
  progressEl.textContent='Finished';
  const hs = loadHighScore();
  saveHighScore(score);
  resultEl.innerHTML = `Score: ${score} / ${QUESTIONS.length}<br>High Score: ${loadHighScore()} / ${QUESTIONS.length}`;
  restartBtn.style.display='inline-block';
  startBtn.style.display='inline-block';
  startBtn.textContent='Retake Quiz';
  nextBtn.disabled=true;
}

// Events
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', startQuiz);

// Initialize
progressEl.textContent=`Question 0 of ${QUESTIONS.length}`;
timerEl.textContent=`Time Left: ${DEFAULT_TIME}s`;
resultEl.innerHTML=`High Score: ${loadHighScore()} / ${QUESTIONS.length}`;
