
// var playerSelection = document.getElementById('btn').addEventListener("click", btnClick);

// function btnClick(e) {
//     var  x = e.target.className;
//     if(x == "rock" || x == "paper" || x == "scissor") {
//         return e.target.className;
//     }
//     return "no";
// }

// console.log(playerSelection);

function computerPlay() {
    let x = Math.floor(Math.random() * 3) + 1;

    if (x == 1) {
        computerSelection = "Rock";
    } else if(x == 2) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissor";
    }
    
    return computerSelection;
}

computerPlay();
const compScore = document.getElementById('comp-score');
const playerScore = document.getElementById('player-score');
const commentBox = document.getElementById('comment-box');
var playerSelection = document.getElementById('btn').addEventListener("click", function(e) {
    const x = e.target.className;
    // if(x && (x.className == "rock" || x.className == "paper" || x.className == "scissor")) {
    //     playerScore.innerHTML++;
    // }
    if((x == "Rock" && computerSelection == "Rock") || (x == "Paper" && computerSelection == "Paper") || (x == "Scissor" && computerSelection == "Scissor")) {
        commentBox.innerHTML = "It's a tie!"
    } else if((x == "Rock" && computerSelection == "Scissor") || (x == "Scissor" && computerSelection == "Paper") || (x == "Paper" && computerSelection == "Rock")) {
        playerScore.innerHTML++;
        commentBox.innerHTML = "";
    } else {
        compScore.innerHTML++;
        commentBox.innerHTML = "";
    }
})

console.log(playerScore);

let playerImg = document.querySelector('.player-img');
let rockBtn = document.querySelector('.Rock');
let paperBtn = document.querySelector('.Paper');
let scissorBtn = document.querySelector('.Scissor');

rockBtn.addEventListener('click', () => {
    playerImg.src = "img/rock.png";
})

paperBtn.addEventListener('click', () => {
    playerImg.src = "img/paper.png";
})

scissorBtn.addEventListener('click', () => {
    playerImg.src = "img/scissor.png";
})


