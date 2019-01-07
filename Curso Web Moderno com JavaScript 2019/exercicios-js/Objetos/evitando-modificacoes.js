// Object.preventExtensions ==>> altera, deleta attr, mas não add
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal ==>> somente altera attr, não deleta e nem add
const pessoa = {nome: 'Julia', idade: 15}
Object.seal(pessoa)
console.log(pessoa)
console.log('Selado :', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 26
console.log(pessoa)

//Objct.freeze ==>> não (altera, delta, add) attr
