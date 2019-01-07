var numero = 1
{
    var numero = 2
    console.log('Dentro = ', numero)
}

console.log('Fora = ', numero)

var num2 = 1 
{
    let num2 = 2
    console.log('Dentro = ', num2)
}
console.log('Fora = ', num2)