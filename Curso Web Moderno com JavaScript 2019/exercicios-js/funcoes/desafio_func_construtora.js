// Função construtora
function Pessoa(nome) {
    this.nome = nome
    
        this.falar= () => console.log(`Meu nome é ${this.nome}`)
}

const p1 = new Pessoa('Gil')
p1.falar()