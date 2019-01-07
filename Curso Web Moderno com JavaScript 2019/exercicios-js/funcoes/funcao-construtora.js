function Carro(velocidade_max = 200, delta = 5){
    //atributo privado
    let velocidade_atual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidade_atual + delta <= velocidade_max){
            velocidade_atual += delta
        } else {
            velocidade_atual = velocidade_max
        }
    }
    // Metodo publico
    this.get_veloc_atual = retorno => velocidade_atual
}

const uno = new Carro()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.get_veloc_atual())

const ferrari = new Carro (350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()

console.log(ferrari.get_veloc_atual())