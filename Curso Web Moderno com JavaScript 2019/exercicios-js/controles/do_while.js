function get_numero_entre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = get_numero_entre(0, 10)
    console.log(`O numero sorteado é = ${opcao}.`)
} while(opcao != 0)