console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('GILBERTO SAVISKY'.reverse())

Array.prototype.primeiro = function(){
    return this [0]
}

console.log([1,2.3,4,5.6,8].primeiro())

String.prototype.toString = function(){
    return 'Lascou tudo'
}// não sobreescrever atributos já existentes

console.log('Gilberto'.reverse())