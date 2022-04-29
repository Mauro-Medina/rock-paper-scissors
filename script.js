
let playerScore = 0
let pcScore = 0
let gameOn = false
const playerS = document.querySelector(".playerScore")
const pcS = document.querySelector(".pcScore")
const startBtn = document.querySelector("button")
startBtn.addEventListener("click", game)

const hands = ["rock", "paper", "scissors"]
function computerPlay() {
    return hands[~~(Math.random()*hands.length)]
}
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection.toLowerCase() === computerSelection):
            alert("It's a Tie")
            return "It's a Tie"
            break;
        case (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors"):
            playerScore++
            playerS.textContent = playerScore
            alert("You win! Rock beats Scissors")
            return "You win! Rock beats Scissors"
            break;
        case (playerSelection.toLowerCase() === "paper" && computerSelection === "rock"):
            playerScore++
            playerS.textContent = playerScore
            alert("You win! Paper beats Rock")
            return "You win! Paper beats Rock"            
            break;
        case (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper"):
            playerScore++
            playerS.textContent = playerScore
            alert("You win! Scissors beat Paper")
            return "You win! Scissors beat Paper"            
            break;
        case (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock"):
            pcScore++
            pcS.textContent = pcScore
            alert("You lose! Rock beats Scissors")
            return "You lose! Rock beats Scissors"            
            break;
        case (playerSelection.toLowerCase() === "rock" && computerSelection === "paper"):
            pcScore++
            pcS.textContent = pcScore
            alert("You lose! Paper beats Rock")
            return "You lose! Paper beats Rock"            
            break;
        case (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors"):
            pcScore++
            pcS.textContent = pcScore
            alert("You lose! Scissors beat Paper")
            return "You lose! Scissors beat Paper"            
            break;
    }
}
function game() {
    playerScore = 0
    pcScore = 0
    for (i = 0; i < 5; i++) {
        playRound(prompt("Choose: rock, paper or scissors?"), computerPlay())
    }
    result()
}
function result() {
    if (playerScore == pcScore) {
        alert("Tie. Nobody wins.")
    } else if (playerScore > pcScore) {
        alert("You won! Congrats!")
    } else {
        alert("PC won. Try again.")
    }
}
