const nome = 'Rebeca'
const concatenacao = 'olá ' + nome + '!'
const template = `
    ${nome} 
        olá !`

console.log(concatenacao, template)

// expressões
console.log(`1 + 1 = ${1+1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)