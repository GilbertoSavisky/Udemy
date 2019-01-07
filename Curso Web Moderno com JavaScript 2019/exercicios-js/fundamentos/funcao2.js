//Armazenando uma função em uma variavel
const imprimir_soma = function (a, b){
    console.log(a+b)
}
imprimir_soma(4,4)

//Armazenando uma função arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(2,5))

//Retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(1,3))