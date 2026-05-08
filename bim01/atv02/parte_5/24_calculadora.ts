class Calculadora {
  somar(a: number, b: number): number {
    return a + b;
  }

  subtrair(a: number, b: number): number {
    return a - b;
  }

  multiplicar(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculadora();
console.log(calc.somar(10, 5));
console.log(calc.subtrair(10, 5));
console.log(calc.multiplicar(10, 5));