function get_inteiro_aleatorio_entre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

while (opcao != 0) {
    opcao = get_inteiro_aleatorio_entre(0, 15)
    console.log(`Opção escolhida foi = ${opcao}.`)
}
