import * as readline from "readline-sync";

const entrada1 = readline.question("Digite o primeiro número: ");
const entrada2 = readline.question("Digite o segundo número: ");

const num1: number = Number(entrada1);
const num2: number = Number(entrada2);

console.log(`Soma: ${num1 + num2}`);

export {}