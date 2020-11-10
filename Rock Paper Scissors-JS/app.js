let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter == "r") return "Rock";
    else if (letter == "p") return "Paper";
    return "Scissors";
}

function win(user,computer) {
    const uid = document.getElementById(user);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(user)}  beats  ${convertToWord(computer)} . You Win!`;
    uid.classList.add("green-glow");
    setTimeout(() => uid.classList.remove("green-glow"), 300);
}


function lose(user,computer) {
    const uid = document.getElementById(user);
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computer)}  beats  ${convertToWord(user)} . You lose!`;
    // result_div.textContent = `${convertToWord(computer)}  beats  ${convertToWord(user)} . You lose!`;
    uid.classList.add("red-glow");
    setTimeout(() =>  uid.classList.remove("red-glow"), 300);
}

function draw(user,computer) {
    const uid = document.getElementById(user);
    result_div.innerHTML = `${convertToWord(user)}  draws  ${convertToWord(computer)} !!`;
    uid.classList.add("grey-glow");
    setTimeout(() => uid.classList.remove("grey-glow"), 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice,computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice,computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click',() => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click',() => game("s"));
}
main();