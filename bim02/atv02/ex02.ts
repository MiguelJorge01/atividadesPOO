class Veiculo {
    protected readonly marca: string;
    protected readonly modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veiculo {
    protected readonly qtdPortas: number;

    constructor(marca: string, modelo: string, qtdPortas: number) {
        super(marca, modelo);
        this.qtdPortas = qtdPortas;
    }
}

const carro1 = new Carro("Nissan", "Livina (Esportivo)", 2);

export {}
