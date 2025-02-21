function getComputerChoice(){
    var escolha = ['pedra','papel','tesoura'];
    var sorteioPalavra = escolha[Math.floor(Math.random() * escolha.length )] ;
    return sorteioPalavra ;
}
console.log(getComputerChoice())

function getHumanChoice(){
    let escolhaHumano =  prompt('Escolha entre pedra, papel ou tesoura!')
    return escolhaHumano.toLocaleLowerCase();
}
console.log(getHumanChoice())