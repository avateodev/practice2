const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");

function main() {

paper_div.addEventListener('click', function() {
     console.log("Hey you clicked on paper");

})

rock_div.addEventListener('click', function() {
     console.log("Hey you clicked on rock");

})

scissors_div.addEventListener('click', function() {
     console.log("Hey you clicked on scissors");

})

}