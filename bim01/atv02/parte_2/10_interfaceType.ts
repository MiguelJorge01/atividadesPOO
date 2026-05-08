interface Aluno {
  id: number;
  nome: string;
  email?: string;  // o ? significa que é opcional
  ativo: boolean;
}

type Turma = "1TADS" | "2TADS" | "3TADS";

const aluno: Aluno = {
  id: 1,
  nome: "João",
  email: "joao@email.com",
  ativo: true
};

function matricular(aluno: Aluno, turma: Turma): void {
  console.log(`Aluno ${aluno.nome} matriculado na turma ${turma}.`);
}

matricular(aluno, "1TADS");