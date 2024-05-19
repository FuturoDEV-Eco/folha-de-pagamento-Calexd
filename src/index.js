const calcularInss = require("./calculo_inss");
const calcularImpostoRenda = require("./calculo_imposto_renda");
const calcularSalarioLiquido = require("./calculo_salario_liquido");
const fs = require("fs");
const PdfDocument = require("pdfkit");
const readline = require("readline");

const input = readline.createInterface(process.stdin, process.stdout);

let nome = ""
let cpf = ""
let salarioBruto = ""
let salarioLiquido = 0
let inss = 0
let impostoRenda = 0
let resposta = ''

function formatarCpf(cpf) {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

input.question("Digite o nome do funcionario: ", (nomeDigitado) => {
  nome = nomeDigitado;
  input.question("Digite seu CPF: ", (cpfDigitado) => {
    cpf = formatarCpf(cpfDigitado);
    input.question(
      "Digite o valor de seu salario bruto: ",
      (salarioBrutoDigitado) => {
        salarioBruto = salarioBrutoDigitado;
        inss = calcularInss(salarioBruto);
        impostoRenda = calcularImpostoRenda(salarioBruto);
        salarioLiquido = calcularSalarioLiquido(
          salarioBruto,
          inss,
          impostoRenda
        );
        console.log(
          "---- FOLHA DE PAGAMENTO ----\n",
          "nome: ", nome, "\n",
          "CPF:", cpf, "\n",
          "Salário Bruto: R$", salarioBruto, "\n",
          "INSS: R$", inss, "\n",
          "Imposto de Renda: R$", impostoRenda, "\n",
          "Salário Líquido: R$", salarioLiquido
        );
        input.question(
          "Deseja gerar um PDF com as informações? (S/N): ",
          (respostaDigitada) => {
            resposta = respostaDigitada.toLowerCase()
            if (resposta === "n") {
              console.log('Programa finalizado')
            } else if (resposta === "s") {
              const doc = new PdfDocument();
              doc.pipe(fs.createWriteStream(`folha_pagamento_${nome}.pdf`));
              doc.fontSize(16);
              doc.text("-----Folha de Pagamento-----");
              doc.text(`Data de Geração: ${new Date().toDateString()}`);
              doc.text(`Funcionario: ${nome}`);
              doc.text(`CPF: ${cpf}`);
              doc.text(`--- ----`);
              doc.text(`Salário Bruto: ${salarioBruto}`);
              doc.text(`--- ----`);
              doc.text(`INSS: R$ ${inss}`);
              doc.text(`Imposto de Renda: R$ ${impostoRenda}`);
              doc.text(`Outros descontos: R$ 0,00`);
              doc.text(`--- ----`);
              doc.text(`Salário Líquido: R$ ${salarioLiquido}`);
              doc.end()
              input.close();
              console.log(`Folha de pagamento salva em folha_pagamento_${nome}.pdf`)
            } else {
              console.log("Resposta incorreta, finalizando o programa");
            }
          }
        );
      }
    );
  });
});
