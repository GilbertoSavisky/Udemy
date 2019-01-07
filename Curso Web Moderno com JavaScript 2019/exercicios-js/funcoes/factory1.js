// Factory simples
// Factory(fábrica) retorna(cria) sempre um obj 
function criarPessoa() {
    return {
        nome: 'Ana',
        idade: 15
    }
}

console.log(criarPessoa())