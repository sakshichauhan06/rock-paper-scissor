
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
    var compImage = document.getElementById('comp-img');

    if (x == 1) {
        computerSelection = "Rock";
        compImage.src = "img/rock.png";
    } else if(x == 2) {
        computerSelection = "Paper";
        compImage.src = "img/paper.png";
    } else {
        computerSelection = "Scissor";
        compImage.src = "img/scissor.png";
    }
    
    return computerSelection;
}

const compScore = document.getElementById('comp-score');
const playerScore = document.getElementById('player-score');
const commentBox = document.getElementById('comment-box');
var playerSelection = document.getElementById('btn').addEventListener("click", play);


function play(e) {
    computerPlay();
    const p = e.target.className;
    // if(x && (x.className == "rock" || x.className == "paper" || x.className == "scissor")) {
    //     playerScore.innerHTML++;
    // }
    if((p == "Rock" && computerSelection == "Rock") || (p == "Paper" && computerSelection == "Paper") || (p == "Scissor" && computerSelection == "Scissor")) {
        if(playerScore == 5 || compScore == 5) {
            commentBox.innerHTML = "";
            commentBox.innerHTML = "This round is finished!" +"<br><br>The overall Score is :- " + "<br>You: " + playerScore + "<br>Computer: " + compScore;
            playerScore = 0;
            compScore = 0;
        } else {
            commentBox.innerHTML = "It's a tie!"
        }
    } else if((p == "Rock" && computerSelection == "Scissor") || (p == "Scissor" && computerSelection == "Paper") || (p == "Paper" && computerSelection == "Rock")) {
        playerScore.innerHTML++;
        commentBox.innerHTML = "You won!";
        if(playerScore == 5) {
            commentBox.innerHTML = "";
            commentBox.innerHTML = "This round is finished!" +"<br><br>The overall Score is :- " + "<br>You: " + playerScore + "<br>Computer: " + compScore;
            playerScore = 0;
            compScore = 0;
        }
    } else {
        compScore.innerHTML++;
        commentBox.innerHTML = "Oh no, you lost.";
        if(compScore == 5) {
            commentBox.innerHTML = "";
            commentBox.innerHTML = "This round is finished!" +"<br><br>The overall Score is :- " + "<br>You: " + playerScore + "<br>Computer: " + compScore;
            playerScore = 0;
            compScore = 0;
        }
    }
}


console.log(playerScore);

let rockBtn = document.querySelector('.Rock');
let paperBtn = document.querySelector('.Paper');
let scissorBtn = document.querySelector('.Scissor');


function changeImage() {
    var playerImage = document.getElementById('player-img');
    
    rockBtn.addEventListener('click', () => {
        playerImage.src = "img/rock.png";
    })
    
    paperBtn.addEventListener('click', () => {
        playerImage.src = "img/paper.png";
    })
    
    scissorBtn.addEventListener('click', () => {
        playerImage.src = "img/scissor.png";
    })
}