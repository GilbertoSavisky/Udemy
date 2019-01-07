const pessoa = {
    nome: 'Ana',
    idade: 13,
    endereco: {
        logradouro: 'Rua dos Marfins',
        numero: 123
    }
}

console.log(pessoa)
const { nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log (n, i)

const {endereco:{logradouro ='as', numero=0, cep}} = pessoa

console.log(logradouro, numero, cep)