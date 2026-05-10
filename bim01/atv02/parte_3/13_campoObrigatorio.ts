import * as readline from "readline-sync";

function obrigatorio(valor: string, nomeCampo: string): boolean {
  if (valor.trim() === "") {
    console.log(`Erro: o campo "${nomeCampo}" é obrigatório.`);
    return false;
  }
  return true;
}

const nome = readline.question("Digite seu nome: ");
obrigatorio(nome, "nome");

export {}