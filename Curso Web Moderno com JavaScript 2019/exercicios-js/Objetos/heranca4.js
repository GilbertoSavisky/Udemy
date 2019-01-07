function meu_objeto() {}
console.log(meu_objeto.prototype)

const obj1 = new meu_objeto
const obj2 = new meu_objeto

console.log(obj1.__proto__ === obj2.__proto__)
console.log(meu_objeto.prototype === obj1.__proto__)

meu_objeto.prototype.nome = 'Anônimo'
meu_objeto.prototype.falar = function(){console.log(`Bom dia! Meu nome é ${this.nome}!`)}

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()
const obj3 = {}
obj3.__proto__ = meu_objeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new meu_objeto).__proto__ === meu_objeto.prototype)
console.log(meu_objeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)