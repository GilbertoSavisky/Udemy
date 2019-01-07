function criar_produto(nome, preco = 0){
    const desc = 0.1
    preco = preco * (1 - desc)
    return {
        nome,
        preco
    }
}

console.log(criar_produto('Café', 2000))