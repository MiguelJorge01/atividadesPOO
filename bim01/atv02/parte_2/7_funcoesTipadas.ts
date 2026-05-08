function somar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Erro: divisão por zero.");
    return 0;
  }
  return a / b;
}

console.log(somar(10, 5));
console.log(subtrair(10, 5));
console.log(multiplicar(10, 5));
console.log(dividir(10, 5));