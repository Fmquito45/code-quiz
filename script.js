var questions = [
    {
        question: "What year was Michael Jordan born?",
        a: "Janurary 17, 1963",
        b: "February 17, 1963",
        c: "November 17, 1963",
        d: "December 17, 1963",
        correct: "b",
    }
    {
        question: "When was Michael Jordan's first Air Jordan shoe released?",
        a: "February 1, 1985",
        b: "March 1, 1985",
        c: "April 1, 1985",
        d: "May 1, 1985",
        correct: "c",
    }
    {
        question: "Whats the last Air Jordan Line # ? (How many Air Jordan styles are there?",
        a: "Air Jordan XXXVII",
        b: "Air Jordan XX3",
        c: "Air Jordan XXX",
        d: "Air Jordan V",
        correct: "a",
    }
    {
        question: "What does 'SB' stand for in Nike Sb?"
        a: "Swoosh brand",
        b: "Swag Bucks",
        c: "SkateBoarding",
        d: "Super Boujee",
        correct: "c"
    }
];


function nextQuestion(questionIndex) {
   console.log(questions[questionIndex]);
   document.getElementById('questions-asked').textContent= questions[questionIndex]
}

nextQuestion(0)
// nextQuestion(1)