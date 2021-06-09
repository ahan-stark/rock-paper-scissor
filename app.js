let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result> p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
function getcomputerchoice() {
    const choices = ['r', 'p', 's'];
    const randomnumber = Math.floor(Math.random() * 3);
    return choices[randomnumber];
}
function converttoword(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";

}

function win(userchoice, computerchoice) {
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = converttoword(userchoice) + " beats " + converttoword(computerchoice) + " .you win!";
}
function lose(userchoice, computerchoice) {
    computerscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore;
    result_p.innerHTML = converttoword(userchoice) + " looses to " + converttoword(computerchoice) + " .you lost!";

}
function draw(userchoice, computerchoice) {
    result_p.innerHTML = converttoword(userchoice) + " ties with " + converttoword(computerchoice) + " .its a draw";
}


function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice, computerscore);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userchoice, computerchoice);
            break;
        case "pp":
        case "rr":
        case "ss":
            draw(userchoice, computerchoice);
            break;
    }

}
function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })
    paper_div.addEventListener('click', function () {
        game("p");
    })
    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();