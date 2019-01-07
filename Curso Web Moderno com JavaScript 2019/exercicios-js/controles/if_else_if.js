Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimir_resultado = function (nota) {
    if (nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if(nota.entre(7, 8.99)){
        console.log("Aprovado")
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)){
        console.log("Reprovado")
    } else {
        console.log("Nota inválida")
    }
}

imprimir_resultado(10)
imprimir_resultado(8.9)
imprimir_resultado(6.55)
imprimir_resultado(2)
imprimir_resultado(11)
//imprimir_resultado('Teste')
//imprimir_resultado('8')