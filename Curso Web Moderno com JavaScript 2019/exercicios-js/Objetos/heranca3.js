const pai = { nome: 'Pedro', cor_cabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.cor_cabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.cor_cabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let k in filha2){
    filha2.hasOwnProperty(k) ? console.log(k) : console.log(`por herança: ${k}`)
}