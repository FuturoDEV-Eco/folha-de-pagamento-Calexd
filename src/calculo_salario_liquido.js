function calcularSalarioLiquido (salarioBruto, inss, impostoRenda, outrosDesc) {
    salarioLiquido = (salarioBruto - inss) - impostoRenda
    return salarioLiquido
}

module.exports = calcularSalarioLiquido