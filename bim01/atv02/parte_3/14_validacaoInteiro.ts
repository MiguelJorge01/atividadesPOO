import * as readline from "readline-sync";

function validarInteiro(valor: string): boolean {
  const numero = Number(valor);

  if (isNaN(numero)) {
    console.log("Erro: valor informado não é um número.");
    return false;
  }

  if (!Number.isInteger(numero)) {
    console.log("Erro: o número deve ser inteiro.");
    return false;
  }

  console.log(`Número válido: ${numero}`);
  return true;
}

const entrada = readline.question("Digite um número inteiro: ");
validarInteiro(entrada);