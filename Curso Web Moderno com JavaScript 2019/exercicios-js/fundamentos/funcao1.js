// Funcao sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(4 , 3)
imprimirSoma(4)
imprimirSoma(4, 7, 5, 8, 9, 2)
imprimirSoma()

// função com retorno
function soma(a=2, b=0){
    return a + b
}

console.log(soma(3,6))
console.log(soma(3))
console.log(soma())