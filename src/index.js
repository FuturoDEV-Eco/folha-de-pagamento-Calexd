const calcularInss = require('./calculo_inss')
const calcularImpostoRenda = require('./calculo_imposto_renda')

console.log('calculo INSS: ', calcularInss(2826))

console.log('Calculo Imposto renda: ', calcularImpostoRenda(8000))