import * as readline from "readline-sync";

class Aluno {
  nome: string;
  matricula: string;
  idade: number;
  notaFinal: number;

  constructor(nome: string, matricula: string, idade: number, notaFinal: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.idade = idade;
    this.notaFinal = notaFinal;
  }

  calcularSituacao(): string {
    return this.notaFinal >= 6 ? "Aprovado" : "Reprovado";
  }

  exibirDados(): void {
    console.log(`\n[ Dados do Aluno ]`);
    console.log(`Nome:       ${this.nome}`);
    console.log(`Matricula:  ${this.matricula}`);
    console.log(`Idade:      ${this.idade}`);
    console.log(`Nota Final: ${this.notaFinal}`);
    console.log(`Situação:   ${this.calcularSituacao()}`);
  }
}

// funções de validação

function validarObrigatorio(valor: string, nomeCampo: string): boolean {
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

// lendo os dados

const nome = readline.question("Nome do aluno: ");
const matricula = readline.question("Matrícula: ");
const entradaIdade = readline.question("Idade: ");
const entradaNota = readline.question("Nota final: ");

// validação

const nomeValido = validarObrigatorio(nome, "nome");
const matriculaValida = validarObrigatorio(matricula, "matrícula");
const idade = validarIdade(entradaIdade);
const nota = validarNota(entradaNota);

// criando e exibindo objeto

if (nomeValido && matriculaValida && idade !== null && nota !== null) {
  const aluno = new Aluno(nome, matricula, idade, nota);
  aluno.exibirDados();
} else {
  console.log("\nCadastro não realizado devido a erros nos dados informados.");
}