function get_preco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 3200,
    desc: 0.1,
    get_preco
}

console.log(produto.get_preco())

const carro = { preco: 75000, desc: 0.2}


console.log(get_preco.call(carro, 0.1, '$'))
console.log(get_preco.apply(carro, [0.1, 'R$']))