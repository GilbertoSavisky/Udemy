function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Area maior que o permitido ${area}-m²`)
    } else { return area }
}

console.log(area())
console.log(area(2))
console.log(area(2,3))
console.log(area(2, 3, 5, 8))
console.log(area(5, 5))