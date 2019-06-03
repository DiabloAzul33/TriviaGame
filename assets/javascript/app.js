var audio = new Audio("pig squeal.mp3");

var questions = [
    {
        question: "Question #1: A Narwhal tusk is actually a _____ .",
        answers: ["vestigial bone", "sensor rod", "front tooth", "hardened tail"],
    },
    {
        question: "Question #2: Cats are unable to experience _____ foods because they lack the proper taste buds.",
        answers: ["sweet", "salty", "sour", "spicy"],
    },
    {
        question: "Question #3: Nine banded armadillos always give birth to _____ .",
        answers: ["identical twins", "triplets", "one offspring", "identical quadruplets"],
    },
    {
        question: "Question #4: Capuchin monkeys use _____ to clean their feet.",
        answers: ["saliva", "sticks", "urine", "leaves"],
    },
    {
        question: "Question #5: The poop of a wombat is typically _____ .",
        answers: ["flat", "cube-shaped", "tube-shaped", "round"],
    },
    {
        question: "Question #6: Similar to humans, honeybees are also susceptible to _____ .",
        answers: ["allergies", "sexually transmitted diseases", "bad hair days", "depression"],
    },
    {
        question: "Question #7: All clownfish are born _____ .",
        answers: ["in even numbers", "blind", "without stripes", "male"],
    },
    {
        question: "Question #8: Female peacocks are actually named _____ .",
        answers: ["peacocks", "peahens", "peabrides", "peamisses"],
    },
    {
        question: "Question #9: The male platypus contains venomous _____ .",
        answers: ["spurs", "teeth", "saliva", "urine"],
    },
    {
        question: "Question #10: A peacock mantis shrimp is capable of delivering a strike as fast as _____ .",
        answers: ["30 mph", "45 mph", "50 mph", "60 mph"],
    }
    ]
    
var correctAnswers = ["front", "sweet", "identical", "urine", "cube-shaped",  "sexually", "male", "peahens", "spurs", "50"]; // array of correct anwers to loop thru with if/else if statements to determine score

function appendQuestions() {
    for (var i = 0; i < questions.length; i++) {
        $("#questions").append("<h4>" + questions[i].question + "</h4>");
        for (var j = 0; j < questions[i].answers.length; j++) {
            $("#questions").append(`<input type='radio' name=${i} class=${i} value=${questions[i].answers[j]}> ${questions[i].answers[j]} </input>`);
        }
    }
    $("#questions").append("<div><button id='submit-quiz'>" + "Finish Quiz" + "</button></div>");
}
appendQuestions();

function checkAnswers() { //console log of answers chosen
    var q1 = $("input[name=0]:checked").val();
    var q2 = $("input[name=1]:checked").val();
    var q3 = $("input[name=2]:checked").val();
    var q4 = $("input[name=3]:checked").val();
    var q5 = $("input[name=4]:checked").val();
    var q6 = $("input[name=5]:checked").val();
    var q7 = $("input[name=6]:checked").val();
    var q8 = $("input[name=7]:checked").val();
    var q9 = $("input[name=8]:checked").val();
    var q10 = $("input[name=9]:checked").val();
    var userAnswers = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10];

    var score = 0;
    for (var i=0; i < userAnswers.length; i++){
        if (correctAnswers[i] === userAnswers[i]){
            score++;
        }
    } 
    $("#score").html("<h1>Your Score: " + score + "/10</h1>");
}

$("#submit-quiz").on("click", function () { // on click event to check answers once quiz is submitted at the end
    checkAnswers();
})

// loop thru correctAnswers array, if statements for correct answers, adds ++ to score for right vs wrong answers

setTimeout(thirtySeconds, 1000 * 150);
setTimeout(oneMinute, 1000 * 120);
setTimeout(twoMinutes, 1000 * 60);
setTimeout(timeUp, 1000 * 180);

function thirtySeconds() {  // 30 seconds left
    $("#time-left").html("<h2>About 30 Seconds Left!</h2>");
    console.log("30 seconds left");
}
function oneMinute() { // 1 minute left
    $("#time-left").html("<h2>About 1 Minute Left!</h2>");
    console.log("1 minute left");
}
function twoMinutes() { // in the element with an id of time-left add an h2 saying About 2 minutes Left!
    $("#time-left").html("<h2>About 2 Minutes Left!</h2>");
    console.log("2 minutes left");  // console log 10 seconds left
}
function timeUp() {
    console.log("done");
    $("#time-left").html("<h2>Time's Up!</h2>");
    console.log("time is up");
    audio.play(); // plays pig squeal once timer has run out
}
