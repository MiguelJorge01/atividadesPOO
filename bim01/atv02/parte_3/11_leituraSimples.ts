import * as readline from "readline-sync";

const nome = readline.question("Digite seu nome: ");
const idade = readline.question("Digite sua idade: ");
const cidade = readline.question("Digite sua cidade: ");

console.log(`\nResumo:`);
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Cidade: ${cidade}`);