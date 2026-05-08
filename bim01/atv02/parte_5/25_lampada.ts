class Lampada {
  private ligada: boolean;

  constructor() {
    this.ligada = false;
  }

  ligar(): void {
    if (this.ligada) {
      console.log("A lâmpada já está ligada.");
      return;
    }
    this.ligada = true;
    console.log("Lâmpada ligada.");
  }

  desligar(): void {
    if (!this.ligada) {
      console.log("A lâmpada já está desligada.");
      return;
    }
    this.ligada = false;
    console.log("Lâmpada desligada.");
  }

  estaLigada(): boolean {
    return this.ligada;
  }
}

const lampada = new Lampada();
lampada.ligar();
console.log(lampada.estaLigada()); // true
lampada.desligar();
console.log(lampada.estaLigada()); // false
lampada.desligar();                // já tava desligada