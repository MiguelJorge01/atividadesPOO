class Retangulo {
  base: number;
  altura: number;

  constructor(base: number, altura: number) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea(): number {
    return this.base * this.altura;
  }

  calcularPerimetro(): number {
    return 2 * (this.base + this.altura);
  }
}

const retangulo = new Retangulo(5, 3);
console.log(`Área: ${retangulo.calcularArea()}`);
console.log(`Perímetro: ${retangulo.calcularPerimetro()}`);