import * as readline from "readline";

type Turma = "1TADS" | "2TADS" | "3TADS";

export function obrigatorio(valor: string, nomeCampo: string): string {
  const v = valor.trim();
  if (v.length === 0) {
    throw new Error(`Campo obrigatório: ${nomeCampo}`);
  }
  return v;
}

export function parseNumeroInteiro(valor: string, nomeCampo: string): number {
  const v = obrigatorio(valor, nomeCampo);
  const n = Number(v);

  if (!Number.isInteger(n)) {
    throw new Error(`"${nomeCampo}" deve ser um número inteiro. Você informou: ${valor}`);
  }

  return n;
}

export function entre(n: number, min: number, max: number, nomeCampo: string): number {
  if (n < min || n > max) {
    throw new Error(`"${nomeCampo}" deve estar entre ${min} e ${max}. Você informou: ${n}`);
  }
  return n;
}

export function definirValidarTurma(turmaInput: number): Turma {
    let turma: Turma;

    if (turmaInput === 1) turma = "1TADS";
    else if (turmaInput === 2) turma = "2TADS";
    else if (turmaInput === 3) turma = "3TADS";
    else throw new Error("\nTurma inválida. Digite '1', '2' ou '3'")

    return turma;
}

async function main() {
  // IO local só para o demo (não afeta quem importa este módulo)
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const perguntar = (texto: string): Promise<string> =>
    new Promise((resolve) => rl.question(texto, (resposta: string) => resolve(resposta)));

  try {
    console.log("=== Demo: validators.ts (validação de entrada) ===");

    const nome = obrigatorio(await perguntar("Digite seu nome: "), "nome");

    const idadeStr = await perguntar("Digite sua idade (0–120): ");
    const idade = entre(parseNumeroInteiro(idadeStr, "idade"), 0, 120, "idade");

    const turmaInput = Number((await perguntar("[1] 1ºTADS\n[2] 2ºTADS\n[3] 3ºTADS\nInforme a turma do aluno: ")).trim());
    let turma: Turma;
    turma = definirValidarTurma(turmaInput);

    console.log("\n✅ Dados válidos!");
    console.log({ nome, idade, turma });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("\n❌ Erro de validação:", msg);
  } finally {
    rl.close();
  }
}


if (require.main === module) {
  main().catch((err) => {
    console.error("Erro inesperado:", err);
    process.exitCode = 1;
  });
}