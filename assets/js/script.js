var startingPage = document.getElementById("page");
var questionBox = document.getElementById('questions');
var submitButton = document.getElementById('submit');
var scoreCorrect = document.getElementById("score");
var scoreWrong = document.getElementById("incorrect"); 
var answerBox = document.getElementsByClassName("answ");
var answer1 = document.getElementById("opt0");
var answer2 = document.getElementById("opt1");
var answer3 = document.getElementById("opt2");
var answer4 = document.getElementById("opt3");
var gameOver = document.getElementById("endG");
var questionCount = 0;
var scorePlus = 0;
var scoreMinus = 0;
var gameTurn = 6;


/**
 *  The quiz questions, answers and correctanswers
 */

let QuizBox = [
    {
        question: "Which team won the World Cup in 1938?",
        
        answers: ["Italy", "Germany", "Spain", "France"],

        correctAnswer: "Italy"
    },
    {
        question: "Which player won the Ballon D'or in 2003?",

        answers: ["Pavel Nedved", "Zinadine Zidane", "Ronaldo", "Luis Figo"],

        correctAnswer: "Pavel Nedved"
    },
    {
        question: "Where did Cristiano Ronaldo play at 2007?",

        answers: ["Real Madrid", "Sporting Lisboan", "Juventus", "Manchester United"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Who did not play with Kaka in Ac Milan in 2006? ",

        answers: ["Clarence Seedorf", "Andrea Pirlo", "Filippo Inzaghi", "Ronaldinho"],

        correctAnswer: "Ronaldinho"
    },
    {
        question: "Which team won the Premier League in 2008? ",

        answers: ["Chelsea", "Manchester City", "Manchester United", "Arsenal"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Which brand sponsored Marco Di Vaio? ",

        answers: ["Puma", "Nike", "Adidas", "Mizuno"],

        correctAnswer: "Nike"
    },
    {
        question: "Which team won the most champions league? ",

        answers: ["Bayern Munchen", "Milan", "Liverpool", "Barcelona"],

        correctAnswer: "Milan"
    },
    {
        question: "Which team won the most Premier League? ",

        answers: ["Manchester United", "Chelsea", "Liverpool", "Arsenal"],

        correctAnswer: "Manchester United"
    },
    {
        question: "Which team won the most Serie A? ",

        answers: ["Juventus", "Milan", "Lazio", "Inter Milan"],

        correctAnswer: "Juventus"
    },
    {
        question: "Which player won Champions League with 3 different team? ",

        answers: ["Zinadine Zidane", "Clarence Seedorf", "Michael Laudrup", "Ronaldo"],

        correctAnswer: "Clarence Seedorf"
    },
    {
        question: "Who won Champions League as a player and a coach too? ",

        answers: ["Jurgen Klopp", "Carlo Ancelotti", "Thomas Tuchel", "Antonio Conte"],

        correctAnswer: "Carlo Ancelotti"
    }
];

submitButton.addEventListener("click", beginGame);

function beginGame() {
    submitButton.style.visibility = "hidden";
    displayQuestion();
}


/**
 *  DisplayQuestion function, displaying the questions,
 *  schuffle them, they will come up in a random order
 *  also checking if the answer is correct or not
 */

function displayQuestion(questionCount) {
    // The code random to schuffle question is from code institute love math javascript project
    let schuffleQuestion = Math.floor(Math.random() * QuizBox.length);
    questionBox.textContent = QuizBox[schuffleQuestion].question;
    for(let q=0; q<answerBox.length; q++){
        answerBox[q].textContent = QuizBox[schuffleQuestion].answers[q];
    
        answer1.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[0]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;
            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            next();
        };
        
        answer2.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[1]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;
            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            next();

        };
        
        answer3.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[2]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;

            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            next();

        };
        
        answer4.onclick = function() {
            if(QuizBox[schuffleQuestion].correctAnswer==QuizBox[schuffleQuestion].answers[3]){
                console.log("good");
                scorePlus++;
                scoreCorrect.textContent =+ scorePlus;

            }
            else{
                console.log("wrong");
                scoreMinus++;
                scoreWrong.textContent =+ scoreMinus;

            }
            next();

        };
    // submitButton.addEventListener("click", next);

    };
};


/**
 *  Eventlistener button "next"
 *  to run displayQuestion function
 */

let alerts = [
    {win: "Congratulations! You have a good football knwoledge!",
    lose: "Sorry you lost, but don't give up!"}
];
function next() {
    submitButton.addEventListener("click", displayQuestion);
    displayQuestion();
    questionCount++;
    if (questionCount==6){
        console.log("end")
        if(scorePlus>scoreMinus){
            gameOver.textContent = alerts[0].win;
        }
        else{
            gameOver.textContent = alerts[0].lose;       
        }
        
    }
    else{
        console.log("continue")
    };
}
/*
function endGame() {
    if (questionCount==6){
        gameOver.textContent;
        beginGame();
    }
    else {
        next();
    }
}
*/
