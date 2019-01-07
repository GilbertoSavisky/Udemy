const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 15
}

console.log('Keys =>',Object.keys(pessoa))
console.log('Values =>',Object.values(pessoa))
console.log('Entries =>',Object.entries(pessoa))

Object.entries(pessoa).forEach(elemento => {
    console.log(`${elemento[0]} ${elemento[1]}`)
}) //simples ou..

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} ${valor}`)
})// usando destructiring

Object.defineProperty(pessoa, 'data_nascimento',{
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.data_nascimento = '01/01/2017'
console.log(pessoa)

// Object.assign (ES 2015)
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a:4 }
const obj = Object.assign(destino, o1, o2)
console.log(obj)