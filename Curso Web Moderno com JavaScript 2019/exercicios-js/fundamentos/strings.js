const escola = "Cod3r"
console.log(escola.charAt(4)) // busca pelo indice
console.log(escola.charCodeAt(3)) // tabela ASC
console.log(escola.indexOf('r')) //  retorna o indice
console.log(escola.substring(1))
console.log(escola.substring(1, 3))

console.log('Escola '.concat(escola).concat("!")) // ou
console.log('Escola ' + escola + "!")

console.log(escola.replace('r','e'))

console.log('Ana, Maria, Pedro'.split(','))