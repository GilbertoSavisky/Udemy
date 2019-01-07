function compras(tb1, tb2){
    const comprar_sorvete = tb1 || tb2
    const comprar_tv_50 = tb1 && tb2
    const comprar_tv_32 = tb1 != tb2
    const manter_saudavel = !comprar_sorvete

    return { tb1, tb2, comprar_sorvete, comprar_tv_50, comprar_tv_32, manter_saudavel}
}

console.log(compras(true, true))
console.log('--------------------------------------')
console.log(compras(true, false))
console.log('--------------------------------------')
console.log(compras(false, true))
console.log('--------------------------------------')
console.log(compras(false, false))
console.log('--------------------------------------')