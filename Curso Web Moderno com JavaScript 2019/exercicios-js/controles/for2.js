const notas = [6.7, 5.3, 8.4, 3.1, 9.5]

for(let nota in notas){
    console.log(`Nota : ${notas[nota]}`)
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 30
}

for(let atbtos in pessoa){
    console.log(`${atbtos} = ${pessoa[atbtos]}`)
}