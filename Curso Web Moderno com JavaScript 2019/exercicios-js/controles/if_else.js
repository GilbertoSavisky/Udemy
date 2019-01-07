const imprimir_resultado = function(nota) {
    if(nota >= 7){
        console.log('Aprovado com a nota =', nota)
    }
    else{
        console.log('Reprovado com a nota =', nota)
    }
}

imprimir_resultado(8)
imprimir_resultado(5)
imprimir_resultado('Epa')