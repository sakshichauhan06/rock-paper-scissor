// let computerSelection, playerSelection;

// function computerPlay() {
//     let x = Math.floor(Math.random() * 3) + 1;

//     if (x == 1) {
//         computerSelection = "Rock";
//     } else if(x == 2) {
//         computerSelection = "Paper";
//     } else {
//         computerSelection = "Scissor";
//     }
    
//     return computerSelection;
// }

// function playRound(playerSelection, computerSelection) {
//     let ans = "not played";
//     if(playerSelection == "Rock" && computerSelection == "Rock") {
//         ans = "It's a tie!";
//     } else if(playerSelection == "Paper" && computerSelection == "Paper") {
//         ans = "It's a tie!";
//     } else if(playerSelection == "Scissor" && computerSelection == "Scissor") {
//         ans = "It's a tie!";
//     } else if(playerSelection == "Rock" && computerSelection == "Paper") {
//         ans = "You Lose! Paper beats Rock";
//     } else if(playerSelection == "Rock" && computerSelection == "Scissor") {
//         ans = "You Win! Rock beats Scissor";
//     } else if(playerSelection == "Paper" && computerSelection == "Rock") {
//         ans = "You Win! Paper beats Rock";
//     } else if(playerSelection == "Paper" && computerSelection == "Scissor") {
//         ans = "You Loose! Scissor beats Paper";
//     } else if(playerSelection == "Scissor" && computerSelection == "Rock") {
//         ans = "You Lose! Rock beats Scissor";
//     } else if(playerSelection == "Scissor" && computerSelection == "Paper") {
//         ans = "You Win! Scissor beats Paper";
//     }
//     return ans;
// }

// function game() {
//     for(let i = 0; i<5; i++) {
//         playerSelection = window.prompt();
//         console.log(computerPlay());
//         console.log(playerSelection);
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

// game();
