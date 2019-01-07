function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(2, 5.3, 6.1).toFixed(2))
console.log(soma('b', 'd'))
console.log(soma(2, 4, 'Teste'))