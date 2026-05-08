import { fecharIO, perguntar } from "./IO";
import { entre, obrigatorio, parseNumeroInteiro, definirValidarTurma } from "./validators";

type Turma = "1TADS" | "2TADS" | "3TADS";

interface Aluno {
    nome: string;
    idade: number;
    turma: Turma;
}

console.log("\n=== Cadastro de Aluno (CLI) ===\n");

async function main() {
    const nome = (await perguntar("Informe o nome do aluno: ")).trim();
    obrigatorio(nome, "NOME");

    const idadeStr = (await perguntar("Informe a idade do aluno: ")). trim();
    const idade = parseNumeroInteiro(idadeStr, "IDADE");
    entre(idade, 0, 120, "IDADE");

    const turmaInput = Number((await perguntar("[1] 1ºTADS\n[2] 2ºTADS\n[3] 3ºTADS\nInforme a turma do aluno: ")).trim());
    let turma: Turma;
    turma = definirValidarTurma(turmaInput);

    const aluno: Aluno = {
        nome,
        idade,
        turma
    };

    console.log("\nAluno cadastrado! Dados do aluno:\n")
    console.log(aluno);
}

main().catch((err) => console.error(err.message)).finally(() => fecharIO());