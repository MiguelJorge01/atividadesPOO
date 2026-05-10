class Televisao {
  canal: number;

  constructor() {
    this.canal = 1;
  }

  setCanal(canal: number): void {
    // "canal" aqui é o parâmetro recebido pela função
    // "this.canal" é o atributo que pertence ao objeto
    // sem o "this", o TS não saberia se deveria alterar o atributo
    this.canal = canal;
  }

  getCanal(): number {
    return this.canal;
  }
}

const tv = new Televisao();
console.log(`Canal atual: ${tv.getCanal()}`); // 1
tv.setCanal(5);
console.log(`Canal atual: ${tv.getCanal()}`); // 5

export {}