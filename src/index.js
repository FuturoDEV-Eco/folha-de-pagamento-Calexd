const calcularInss = require('./calculo_inss')
const calcularImpostoRenda = require('./calculo_imposto_renda')
const calcularSalarioLiquido = require('./calculo_salario_liquido')
const readline = require('readline')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);


let nome = ''
let cpf = ''
let salarioBruto = ''
let salarioLiquido = 0
let inss = 0
let impostoRenda = 0


function formatarCpf(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
}
    

input.question("Qual é seu nome?: ", (nomeDigitado) => {
    nome = nomeDigitado;
    input.question("Digite seu CPF: ", (cpfDigitado) => {
        cpf = formatarCpf(cpfDigitado)
        input.question('Digite o valor de seu salario bruto: ', (salarioBrutoDigitado) => {
            salarioBruto = salarioBrutoDigitado
                inss = calcularInss(salarioBruto)
                impostoRenda = calcularImpostoRenda(salarioBruto)
                salarioLiquido = calcularSalarioLiquido(salarioBruto, inss, impostoRenda)
                console.log('---- FOLHA DE PAGAMENTO ----\n',
                            'nome: ', nome, '\n',
                            'CPF:', cpf, '\n',
                            'Salário Bruto: R$', salarioBruto, '\n',
                            'INSS: R$', inss, '\n',
                            'Imposto de Renda: R$', impostoRenda, '\n',
                            'Salário Líquido: R$', salarioLiquido)
                input.close()
            })
        })
    })
    





