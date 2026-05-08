import * as readline from "readline-sync";

const entrada = readline.question("Digite sua idade: ");
const idade: number = Number(entrada);

if (isNaN(idade) || idade < 0 || idade > 120) {
  console.log("Erro: idade deve ser um número entre 0 e 120.");
} else {
  console.log(`Idade válida: ${idade}`);
}