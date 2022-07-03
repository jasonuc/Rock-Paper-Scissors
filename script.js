var winOrLose = document.getElementById('win-or-lose')

var rock = document.getElementById('rock')
var paper = document.getElementById('paper')
var scissors = document.getElementById('scissors')
var random = document.getElementById('random')

function rockPaperScissors(userChoice, chosenByRandom) {
    var choices = ['rock', 'scissors', 'paper']
    var computerChoice = choices[Math.floor(Math.random() * 3)]
    if (chosenByRandom === false) {
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
    } else if (chosenByRandom != false) {
        if (userChoice === computerChoice) {
            winOrLose.innerHTML = 'DRAW!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
        } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            } else if (computerChoice === 'scissors') {
                winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            } else if (computerChoice === 'rock') {
                winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winOrLose.innerHTML = 'You lost!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            } else if (computerChoice === 'paper') {
                winOrLose.innerHTML = 'You win!' + ' Computer chose: ' + computerChoice + ' Random chose: ' + userChoice
            }
        }
    }
}

function rockClicked() {
    rockPaperScissors('rock', false)
}

function scissorsClicked() {
    rockPaperScissors('scissors', false)
}

function paperClicked() {
    rockPaperScissors('paper', false)
}

function randomClicked() {
    var choices = ['rock', 'scissors', 'paper']
    var userChoice = choices[Math.floor(Math.random() * 3)]
    chosenByRandom = true
    rockPaperScissors(userChoice)

}

rock.onclick = rockClicked
scissors.onclick = scissorsClicked
paper.onclick = paperClicked
random.onclick = randomClicked