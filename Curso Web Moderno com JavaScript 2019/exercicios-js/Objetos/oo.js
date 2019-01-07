// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Generica'
produto.preco = 200

console.log(produto)
delete produto.preco
delete produto['Marca do Produto']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco:{
            rua: 'Das Orquideas',
            numero: 15 
        }
    },
    condutores:[{
        nome: 'Junior',
        idade: 19
    },{
        nome: 'Ana',
        idade: 42
    }],
    calcular_valor_seguro: () =>  console.log('Aqui calcula o seguro'),

}

carro.proprietario.endereco.rua = 'Dos Santos'
carro['proprietario']['endereco']['numero'] = 158

console.log(carro)

delete carro.condutores

console.log(carro)


carro.calcular_valor_seguro()