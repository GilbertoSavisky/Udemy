// par nome/valor
const saudacao = 'Olá' // constexto léxico 1

function exec(){
    const saudacao = 'Fala aew' // contexto léxico 2 
    return saudacao
}

console.log(exec())

//Objetos são grupos aninhados de pares nome/ valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro : 'Rua Muito legal',
        numero: 10
    }
}

console.log(cliente.endereco.logradouro)