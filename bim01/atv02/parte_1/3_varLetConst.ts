var nome: string = "Miguel"
const idade: number = 19;
var numeroSomar: number = 10;
let resultado = somarIdade(idade, numeroSomar)

function somarIdade(idade: number, numeroSomar: number): number {
    let idadeSomada: number = idade + numeroSomar;
    return idadeSomada;
}

/* 
"var" é de escopo global, pode ser acessada em qualquer 
lugar do código, já "let" só pode ser acessada dentro do escopo {}
*/

// Não é possivel rodar:
// idadeSomada = 20; (porque está fora do escopo)

// Mas é possível rodar:
numeroSomar = 20; //
resultado = 30; // (porque estão dentro escopo)

/* 
"const" assim como "let" tem escopo de bloco, mas não pode 
ter reatribuiçao, ou seja, tem um valor constante
*/

// Não é possível rodar:
// idade = 20; (mesmo estando no mesmo escopo)

console.log(numeroSomar);
console.log(resultado);
console.log(idade);

export {}