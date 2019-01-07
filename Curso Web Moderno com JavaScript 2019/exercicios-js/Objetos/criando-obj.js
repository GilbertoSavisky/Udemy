// Usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.get_preco_com_desconto = () => preco * (1 - desc)
    this.get_preco = () => preco
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2850, 0.25)

console.log(p1.nome, p1.get_preco())
console.log(p2.nome, p2.get_preco())
console.log(p1.nome, p1.get_preco_com_desconto().toFixed(2))
console.log(p2.nome, p2.get_preco_com_desconto().toFixed(2))

// Função Factory
function criar_funcionario(nome, salario_base, faltas){
    return{
        nome, 
        salario_base,
        faltas,
        get_salario(){
            return(salario_base/30) * (30 - faltas)
        }
    }
}

const f1 = criar_funcionario('João', 7890, 5)
const f2 = criar_funcionario('Maria', 6540, 1)
console.log(f1.get_salario(), f2.get_salario())

// Object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto
const fromJSON = JSON.parse('{"info": "Sou um JOSON"}')
console.log(fromJSON.info)