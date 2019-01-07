function so_boa_noticia(nota){
    if(nota >= 7) {
        console.log('Passei')
    }
}

so_boa_noticia(8)

function seForVerdadeEuFalo(valor){
    if(valor){
        console.log(`É Verdade... ${valor}`)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(1)