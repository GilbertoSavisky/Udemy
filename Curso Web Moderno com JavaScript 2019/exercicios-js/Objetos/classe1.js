class Lancamento{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor (mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    add_lancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 4500)
const conta_luz = new Lancamento('Luz', -220)

const contas = new CicloFinanceiro(12,2018)
contas.add_lancamentos(salario, conta_luz)
console.log(contas.sumario())