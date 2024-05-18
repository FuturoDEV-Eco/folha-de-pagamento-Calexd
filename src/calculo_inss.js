function calcularInss (salarioBruto) {
    let inss = 0
    const tetoInss = 908.85
    if(salarioBruto <= 1412) {
        inss = (salarioBruto / 100) * 7.5
    } 
    else if(salarioBruto >= 1412 && salarioBruto <= 2666.68) {
        inss = (salarioBruto / 100) * 9
    }
    else if (salarioBruto >= 2666.68 && salarioBruto <= 4000.03){
        inss = (salarioBruto / 100) * 12
    }
    else {
        inss = (salarioBruto / 100) * 14
        if (inss >= tetoInss) {
            inss = tetoInss
        }
    }
    return inss.toFixed(2)
}

module.exports = calcularInss