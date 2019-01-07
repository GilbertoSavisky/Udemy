class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome não é ${this.nome}`)
    }
}

const p1 = new Pessoa('Jhony')
p1.falar()

const criar_pessoa = nome => {
    return{
        falar:() => console.log(`My name is ${nome}`)
    }
}

const p2 = criar_pessoa('Jhoby')
p2.falar()