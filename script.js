var questions = [
    {
        question: "What year was Michael Jordan born?",
        a: "Janurary 17, 1963",
        b: "February 17, 1963",
        c: "November 17, 1963",
        d: "December 17, 1963",
        correct: "b",
    },
    {
        question: "When was Michael Jordan's first Air Jordan shoe released?",
        a: "February 1, 1985",
        b: "March 1, 1985",
        c: "April 1, 1985",
        d: "May 1, 1985",
        correct: "c",
    },
    {
        question: "Whats the last Air Jordan Line # ? (How many Air Jordan styles are there?",
        a: "Air Jordan XXXVII",
        b: "Air Jordan XX3",
        c: "Air Jordan XXX",
        d: "Air Jordan V",
        correct: "a",
    },
    {
        question: "What does 'SB' stand for in Nike SB?",
        a: "Swoosh brand",
        b: "Swag Bucks",
        c: "SkateBoarding",
        d: "Super Boujee",
        correct: "c"
    }
];

var startQuiz = document.getElementById('start');
var questionTitle = document.getElementById('title');
var questionAnswers = document.getElementById('buttons');
var countDown = document.querySelector('.timer')
var x = 0;
var secondsLeft= 20;
var timerStarter = false;


function start(){
    countDownTimer();
    startQuiz.innerHTML= ''
    questionAnswers.innerHTML = ''
    questionTitle.textContent = questions[x].question
    
    var buttonOne = document.createElement('button');
    var buttonTwo = document.createElement('button');
    var buttonThree = document.createElement('button');
    var buttonFour = document.createElement('button');
    
    buttonOne.textContent= questions[x].a;
    buttonTwo.textContent= questions[x].b;
    buttonThree.textContent= questions[x].c;
    buttonFour.textContent= questions[x].d;

    
    
    buttonOne.addEventListener('click',increase);
    buttonTwo.addEventListener('click',increase);
    buttonThree.addEventListener('click',increase);
    buttonFour.addEventListener('click',increase);
    
    questionAnswers.append(buttonOne,buttonTwo, buttonThree, buttonFour);
    console.log(x);
}

function increase(){
    x++;
    start();
    
};
 

function countDownTimer(){
    if(timerStarter === true) return
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