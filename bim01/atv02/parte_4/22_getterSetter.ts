class Temperatura {
  private _celsius: number;

  constructor(celsius: number) {
    this._celsius = celsius;
  }

  get celsius(): number {
    return this._celsius;
  }

  set celsius(valor: number) {
    if (valor < -273.15) {
      console.log("Erro: temperatura abaixo do zero absoluto.");
      return;
    }
    this._celsius = valor;
  }
}

const temp = new Temperatura(25);
console.log(temp.celsius); // 25

temp.celsius = -300; // erro
temp.celsius = 100;
console.log(temp.celsius); // 100