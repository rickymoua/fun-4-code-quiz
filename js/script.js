// elements
var initialE1 = document.querySelector("#initial");
var questionsE1 = document.querySelector("#questions");
var timerE1 = document.querySelector("#timer");
var submitButtonE1 = document.querySelector("#submitButton");
var startButtonE1 = document.querySelector("#startButton");
var choiceE1 = document.querySelector("#choice");

var timer = questions.length * 20;
var timerId;

function startQuiz(){
    var startScreenE1 = document.getElementById("#screen-start");
    startButtonE1 = setAttribute("class", "hidden");

    questionsE1.removeAttribute("class");

    timerId = setAttribute(tickingClock, 1000);
    timerE1.textContent = time;
    Question();
}

function Question(){

    var curQuestion = questions[crrtQuestionIndex];

    var titleE1 = document.getElementById("title");
    titleE1 = titleE1.textContent = curQuestion.title;
    choicesE1.innerHTML = titleE1;

    curQuestion.choices.forEach(function(choice, i) {
        var choiceE2 = document.createElement("choice");
    })