function getComputerChoice() {
    var escolha = ['pedra', 'papel', 'tesoura'];
    var sorteioPalavra = escolha[Math.floor(Math.random() * escolha.length)];
    return sorteioPalavra;
}

function getHumanChoice() {
    let escolhaHumano = prompt('Escolha entre pedra, papel ou tesoura!')
    return escolhaHumano.toLocaleLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice.toLocaleLowerCase();
    computerChoice.toLocaleLowerCase();

    if (computerChoice === 'tesoura' && humanChoice === 'pedra' || computerChoice === 'papel' && humanChoice === 'tesoura' || computerChoice === 'pedra' && humanChoice === 'papel') {
        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, voce venceu`);
        humanScore + 1;
    } else if (computerChoice === humanChoice) {

        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, empate`);

    } else if (computerChoice === 'tesoura' && humanChoice === 'papel' || computerChoice === 'papel' && humanChoice === 'pedra' || computerChoice === 'pedra' && humanChoice === 'tesoura') {
        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, voce perdeu`);
        computerScore + 1;
    }
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playGame() {
    playRound(humanSelection, computerSelection);
}

playGame();