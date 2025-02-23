function getComputerChoice() {
    var escolha = ['pedra', 'papel', 'tesoura'];
    var sorteioPalavra = escolha[Math.floor(Math.random() * escolha.length)];
    return sorteioPalavra;
}

function getHumanChoice() {
    let escolhaHumano = prompt('Escolha entre pedra, papel ou tesoura!')
    return escolhaHumano.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLocaleLowerCase();
    computerChoice = computerChoice.toLocaleLowerCase();

    if ((computerChoice === 'tesoura' && humanChoice === 'pedra') || (computerChoice === 'papel' && humanChoice === 'tesoura') || (computerChoice === 'pedra' && humanChoice === 'papel')) {
        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, voce venceu`);
        humanScore ++;
    } else if (computerChoice === humanChoice) {

        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, empate`);

    } else if ((computerChoice === 'tesoura' && humanChoice === 'papel') || (computerChoice === 'papel' && humanChoice === 'pedra') || (computerChoice === 'pedra' && humanChoice === 'tesoura')) {
        console.log(`Voce escolheu ${humanChoice} o computador escolheu ${computerChoice}, voce perdeu`);
        computerScore ++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Rodada ${i + 1}`);
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log('\nResultado:');
    if(humanScore===computerScore){
        console.log('Empate!!!');
    }else if(humanScore > computerScore){
        console.log('Parabéns você venceu !!!');
    }else{
        console.log('O compuatdor venceu!!!');
    }
}
let humanScore = 0;
let computerScore = 0;

playGame();