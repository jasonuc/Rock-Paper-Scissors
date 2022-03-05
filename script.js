var winOrLose = document.getElementById('win-or-lose')

var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var random = document.getElementById('random')


function rockPaperScissors(userChoice) {
    var choices = ['rock', 'scissors', 'paper']
    var computerChoice = choices[Math.floor(Math.random() * 3)]
    if (userChoice === computerChoice) {
        winOrLose.innerHTML = 'DRAW!' + ' Computer chose: ' + computerChoice
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice
        } else if (computerChoice === 'scissors') {
            winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice
        } else if (computerChoice === 'rock') {
            winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice
        } else if (computerChoice === 'paper') {
            winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice
        }
    }
}

function rockClicked() {
    rockPaperScissors('rock')
}

function scissorsClicked() {
    rockPaperScissors('scissors')
}

function paperClicked() {
    rockPaperScissors('paper')
}

function randomClicked() {
    var choices = ['rock', 'scissors', 'paper']
    var userChoice = choices[Math.floor(Math.random() * 3)]
    rockPaperScissors(userChoice)
}

rock.onclick = rockClicked
scissors.onclick = scissorsClicked
paper.onclick = paperClicked
random.onclick = randomClicked