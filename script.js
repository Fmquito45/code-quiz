var questions = [
    {
        question: "What year was Michael Jordan born?",
        options:["Janurary 17, 1963","February 17, 1963", "November 17, 1963","December 17, 1963"],
        correct: "February 17, 1963",
    },
    {
        question: "When was Michael Jordan's first Air Jordan shoe released?",
        options:["February 1, 1985", "March 1, 1985", "April 1, 1985", "May 1, 1985"],
        correct: "April 1, 1985",
    },
    {
        question: "Whats the last Air Jordan Line # ? (How many Air Jordan styles are there?",
        options:["Air Jordan XXXVII", "Air Jordan XX3", "Air Jordan XXX", "Air Jordan V"],
        correct: "Air Jordan XXXVII",
    },
    {
        question: "What does 'SB' stand for in Nike SB?",
        options:["Swoosh brand", "Swag Bucks", "SkateBoarding", "Super Boujee"],
        correct: "SkateBoarding",
    }
];

var highScore = [];
var score = 0;

var startQuiz = document.getElementById('start');
var questionTitle = document.getElementById('title');
var questionAnswers = document.getElementById('buttons');
var countDown = document.querySelector('.timer');
var x = 0;
var secondsLeft= 20;
var timerStarter = false;


function start(){
    countDownTimer();
    startQuiz.innerHTML= '';
    questionAnswers.innerHTML = '';
    questionTitle.textContent = questions[x].question;
    
    for (var i = 0; i<4; i++){
        var buttons = document.createElement('button');
        buttons.setAttribute('id', i);
        buttons.textContent= questions[x].options[i];
        buttons.addEventListener('click', increase);
        questionAnswers.append(buttons);

    };
}

function increase(event){
    var answer = questions[x].correct;
    var index = event.target.id;
    var answerSelected = questions[x].options[index];

    if ( answer === answerSelected){
        score ++;
    } else {
        secondsLeft -=3
    }
    
   
    x++;
    start();
    
};
 

function countDownTimer(){
    if(timerStarter === true) return;
    function setTimer() {
        
          secondsLeft--;
          countDown.textContent = secondsLeft + "UNTIL GAME OVER!!!";
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            
          }
    
        };
        var timerInterval = setInterval(setTimer,1000);
        timerStarter = true
}


function begin() {
    var btnStart = document.createElement('button');
    btnStart.textContent= "Are you a SneakerHead?";
    startQuiz.innerHTML= '';
    questionTitle.innerHTML= '';
    questionAnswers.innerHTML= '';
    btnStart.addEventListener('click', start);

    startQuiz.appendChild(btnStart);
}

begin();