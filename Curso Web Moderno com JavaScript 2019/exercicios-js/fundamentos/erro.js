function imprimir_nome(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratar_erro(e)
    } finally {
        console.log("Final...")
    }
}

function tratar_erro(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name, 
        msg: erro.message,
        date: new Date
    }

}

const obj = { nome: 'Roberto'}
imprimir_nome(obj)
