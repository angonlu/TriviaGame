var totalRight =0;
var totalWrong =0;
var noAnswer =0;
var seconds = 70;
var myInterval = setInterval(function() {
    seconds--;
    $("#counter").html(seconds)
    if (seconds === 0){
    clearInterval(myInterval)
    checkAnswers();
    editHtml();

    };
    }, 1000);


function checkAnswers() {
    var answerOne = $("input[name='question-one']:checked").val();
    if (answerOne === "true"){
        totalRight ++;
    }
    else if (answerOne ==="false"){
        totalWrong ++;
    }
    else {
        noAnswer++
    };
    var answerTwo = $("input[name='question-two']:checked").val();
    if (answerTwo === "true"){
        totalRight ++;
    }
    else if (answerTwo === "false"){
        totalWrong ++;
    }
    else {
        noAnswer ++;
    }
    var answerThree = $("input[name='question-three']:checked").val();
    if (answerThree === "true") {
        totalRight ++;
    }
    else if (answerThree === "false") {
        totalWrong ++;
    }
    else {
        noAnswer ++;
    }
    var answerFour = $("input[name='question-four']:checked").val();
    if (answerFour === "true") {
        totalRight ++;
    }
    else if (answerFour ==="false") {
        totalWrong ++;
    }
    else {
        noAnswer ++;
    }
    var answerFive = $("input[name='question-five']:checked").val();
    if (answerFive === "true") {
        totalRight ++;
    }
    else if (answerFive === "false") {
        totalWrong ++;
    }
    else {
        noAnswer ++;
    }
    var answerSix = $("input[name='question-six']:checked").val();
    if (answerSix === "true") {
        totalRight ++;
    }
    else if (answerSix === "false") {
        totalWrong ++;
    }
    else {
        noAnswer ++;
    }
    console.log(totalWrong);
    console.log(totalRight);
    console.log(noAnswer);

}

function editHtml () {
    $("#q-a").html("<p class='test'>All Done!</p>" + "<br>" + "Correct: " + totalRight + "<br>" + "Incorrect: " + totalWrong + "<br>" + "Unanswered: " + noAnswer);
}





// if you can add classes, we can also edit fade in/out on the results using the class given
// with jquery. 

