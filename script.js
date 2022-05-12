
let playerScore = 0
let pcScore = 0
const playerS = document.querySelector(".playerScore")
const pcS = document.querySelector(".pcScore")
const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')
const results = document.querySelector('.results')
const restart = document.querySelector('.restart')
rock.addEventListener('click', function () {
    game("rock")
})
paper.addEventListener('click', function () {
    game("paper")
})
scissors.addEventListener('click', function () {
    game("scissors")
})
restart.addEventListener('click', function () {
    playerScore = 0
    pcScore = 0
    playerS.textContent = playerScore
    pcS.textContent = pcScore
    results.textContent = ""
})
const hands = ["rock", "paper", "scissors"]
function computerPlay() {
    return hands[~~(Math.random()*hands.length)]
}
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection === computerSelection):
            results.textContent = "It's a Tie"
            break;
        case (playerSelection === "rock" && computerSelection === "scissors"):
            playerScore++
            playerS.textContent = playerScore
            results.textContent = "You win! Rock beats Scissors"
            break;
        case (playerSelection === "paper" && computerSelection === "rock"):
            playerScore++
            playerS.textContent = playerScore
            results.textContent = "You win! Paper beats Rock"        
            break;
        case (playerSelection === "scissors" && computerSelection === "paper"):
            playerScore++
            playerS.textContent = playerScore
            results.textContent = "You win! Scissors beat Paper"         
            break;
        case (playerSelection === "scissors" && computerSelection === "rock"):
            pcScore++
            pcS.textContent = pcScore
            results.textContent = "You lose! Rock beats Scissors"         
            break;
        case (playerSelection === "rock" && computerSelection === "paper"):
            pcScore++
            pcS.textContent = pcScore
            results.textContent = "You lose! Paper beats Rock"          
            break;
        case (playerSelection === "paper" && computerSelection === "scissors"):
            pcScore++
            pcS.textContent = pcScore
            results.textContent = "You lose! Scissors beat Paper"          
            break;
    }
}
function game(choice) {
    playRound(choice, computerPlay())
}