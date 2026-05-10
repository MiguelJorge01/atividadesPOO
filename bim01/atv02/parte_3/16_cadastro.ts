import * as readline from "readline-sync";

function obrigatorio(valor: string, nomeCampo: string): boolean {
  if (valor.trim() === "") {
    console.log(`Erro: o campo "${nomeCampo}" é obrigatório.`);
    return false;
  }
  return true;
}

function validarIdade(valor: string): number | null {
  const numero = Number(valor);
  if (isNaN(numero) || !Number.isInteger(numero) || numero < 0 || numero > 120) {
    console.log("Erro: idade deve ser um número inteiro entre 0 e 120.");
    return null;
  }
  return numero;
}

function validarNota(valor: string): number | null {
  const numero = Number(valor);
  if (isNaN(numero) || numero < 0 || numero > 10) {
    console.log("Erro: nota deve ser um número entre 0 e 10.");
    return null;
  }
  return numero;
}

const nome = readline.question("Digite seu nome: ");
const entradaIdade = readline.question("Digite sua idade: ");
const entradaNota = readline.question("Digite sua nota final: ");

const nomeValido = obrigatorio(nome, "nome");
const idade = validarIdade(entradaIdade);
const nota = validarNota(entradaNota);

if (nomeValido && idade !== null && nota !== null) {
  console.log(`\nCadastro realizado com sucesso!`);
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Nota final: ${nota}`);
}

export {}