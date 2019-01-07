// Cadeia de prototipos (prototype chain)

const avo = { attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = { __proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3)

const carro = {
    vel_atual: 0,
    vel_max: 200,
    acelerarMais(delta){
        if (this.vel_atual + delta <= this.vel_max){
            this.vel_atual += delta

        }
        else {
            this.vel_atual = this.vel_max
        }
    },
    status(){
        return `${this.vel_atual}Km/h de ${this.vel_max}km/h`
    }//Shadowing
}

const ferrari = {
    modelo: 'F40',
    vel_max: 325
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(65)

console.log(volvo.status())