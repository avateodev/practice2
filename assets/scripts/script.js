var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const paper_div = document.getElementById("p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['p', 'r', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
   if (letter === "r") return "Rock";
   if (letter === "p") return "Paper";
     return "Scissors";

}

function win(userChoice, computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + "! " + " You Win! "
}

function lose(userChoice, computerChoice) {

    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToWord(computerChoice) + " beats " +convertToWord(userChoice) + "! " + " You Lose! "
}

function draw(userChoice, computerChoice) {

    result_div.innerHTML = convertToWord(userChoice) + " Equals " + convertToWord(computerChoice) + "! " + " It's A Draw! "


}
function game(userChoice) {
  let computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {

    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
        break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
  }


}


function main() {

paper_div.addEventListener('click', function() {
    game("p")

})

rock_div.addEventListener('click', function() {
    game("r")

})

scissors_div.addEventListener('click', function() {
    game("s")

})

}

main()