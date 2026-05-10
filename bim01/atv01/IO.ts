import * as readline from "readline";

let rl: readline.Interface | null = null;

function getRL(): readline.Interface {
  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }
  return rl;
}

export function perguntar(texto: string): Promise<string> {
  return new Promise((resolve) => {
    getRL().question(texto, (resposta: string) => resolve(resposta));
  });
}

export function fecharIO(): void {
  rl?.close();
  rl = null;
}