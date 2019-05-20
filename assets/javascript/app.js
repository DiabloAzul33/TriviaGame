var audio = new Audio("pig squeal.mp3");

var questions = [
    {
        question: "Question #1: A Narwhal tusk is actually a _____ .",
        answers: ["vestigial bone", "sensor rod", "front tooth", "hardened tail"],
        correctAnswer: "front tooth",
    },
    {
        question: "Question #2: Cats are unable to experience _____ foods because they lack the proper taste buds.",
        answers: ["sweet", "salty", "sour", "spicy"],
        correctAnswer: "sweet",
    },
    {
        question: "Question #3: Nine banded armadillos always give birth to _____ .",
        answers: ["identical twins", "triplets", "one offspring", "identical quadruplets"],
        correctAnswer: "identical quadruplets",
    },
    //     {
    //         question: "Question #1: A Narwhal tusk is actually a _____ .",
    //         answers: ["vestigial bone", "sensor rod", "front tooth", "hardened tail"],
    //         correctAnswer: "front tooth",
    //     }
    //     {
    //         question: "Question #1: A Narwhal tusk is actually a _____ .",
    //         answers: ["vestigial bone", "sensor rod", "front tooth", "hardened tail"],
    //         correctAnswer: "front tooth",
    //     }
]
var correctAnswers = [];

function appendQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#questions").append(`<input type='radio' name=${i} class=${i} value=${questions[i].answers[j]}> ${questions[i].answers[j]} </input>`);
        }
    }
    $("#questions").append("<div><button id='submit-quiz'>" + "Finish Quiz" + "</button></div>");
}
    appendQuestions();

function checkAnswers() {
    var q1 = $("input[name=0]:checked").val();
    console.log(q1);
    var q2 = $("input[name=1]:checked").val();
    console.log(q2);
    var q3 = $("input[name=2]:checked").val();
    console.log(q3); // add remaining questions to check if right answers console logged out
}
$("#submit-quiz").on("click", function(){
    checkAnswers();
})

// loop thru correctAnswers array, if statements for correct answers, adds ++ to score for right vs wrong answers
    setTimeout(thirtySeconds, 1000 * 30);
    setTimeout(oneMinute, 1000 * 20);
    setTimeout(twoMinutes, 1000 * 10);
    setTimeout(timeUp, 1000 * 45);

    function thirtySeconds() {  // 30 seconds left
        $("#time-left").append("<h2>About 30 Seconds Left!</h2>");
        console.log("30 seconds left");
    }
    function oneMinute() { // 1 minute left
        $("#time-left").append("<h2>About 1 Minute Left!</h2>");
        console.log("1 minute left");
    }
    function twoMinutes() { // in the element with an id of time-left add an h2 saying About 2 minutes Left!
        $("#time-left").append("<h2>About 2 Minutes Left!</h2>");
        console.log("2 minutes left");  // console log 10 seconds left
    }
    function timeUp() {
        console.log("done");
        $("#time-left").append("<h2>Time's Up!</h2>");
        console.log("time is up");
        audio.play(); // plays pig squeal once timer has run out
    }
