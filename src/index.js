const calcularInss = require('./calculo_inss')
const calcularImpostoRenda = require('./calculo_imposto_renda')
const calcularSalarioLiquido = require('./calculo_salario_liquido')



console.log('calculo INSS: ', calcularInss(2300))

console.log('Calculo Imposto renda: ', calcularImpostoRenda(2300))

console.log('Salario liquido: ', calcularSalarioLiquido(2300, 207, 14.10))