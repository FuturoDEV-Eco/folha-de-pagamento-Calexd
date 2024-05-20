function calcularImpostoRenda(salarioBruto) {
    let impostoRenda = 0

    if(salarioBruto >= 2112.01 && salarioBruto <= 2826.65) {
        impostoRenda = ((salarioBruto / 100) * 7.5) - 158.40
    } else if(salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
        impostoRenda = ((salarioBruto / 100) * 15) - 370.40
    } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
        impostoRenda = ((salarioBruto / 100) * 22.5) - 651.73
    } else if (salarioBruto > 4664.68) {
        impostoRenda = ((salarioBruto / 100) * 27.5) - 884.96
    } else {
        impostoRenda = 0
    }
    return impostoRenda.toFixed(2)
}

module.exports = calcularImpostoRenda