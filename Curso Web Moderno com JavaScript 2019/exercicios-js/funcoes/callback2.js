const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem callback
let notas_baixas = []
for(let i in notas){
    if(notas[i] < 7){
        notas_baixas.push(notas[i])
    }
}

console.log(notas_baixas)

const notas_menor_que_7 = parametro => parametro < 7
notas_baixas = notas.filter(notas_menor_que_7)
console.log(notas_baixas)