class Veiculo {
    protected marca: string;
    protected modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    exibirDados(): void {
        console.log(
            "Marca: " + this.marca +
            "\nModelo: " + this.modelo
        );
    }
}

class Carro extends Veiculo {
    protected litragem: number;

    constructor(marca: string, modelo: string, litragem: number) {
        super(marca, modelo);
        this.litragem = litragem;
    }

    exibirDados(): void {
        console.log(
            "\n===== CARRO =====" +
            "\nMarca: " + this.marca +
            "\nModelo: " + this.modelo + " " + this.litragem.toFixed(1)
        );
    }
}

class Moto extends Veiculo {
    protected cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    exibirDados(): void {
        console.log(
            "\n===== MOTO =====" +
            "\nMarca: " + this.marca +
            "\nModelo: " + this.modelo +
            "\nCilindrada: " + this.cilindrada
        );
    }
}

class Caminhao extends Veiculo {
    protected pbt: number;

    constructor(marca: string, modelo: string, pbt: number) {
        super(marca, modelo);
        this.pbt = pbt;
    }

    exibirDados(): void {
        console.log(
            "\n===== CAMINHAO =====" +
            "\nMarca: " + this.marca +
            "\nModelo: " + this.modelo +
            "\nPBT: " + this.pbt + " kg"
        );
    }
}

const carro1 = new Carro("GM", "Monza", 2.0);
const moto1 = new Moto("Honda", "XRE", 300);
const caminhao1 = new Caminhao("Mercedes", "L-608D", 6000);

carro1.exibirDados();
moto1.exibirDados();
caminhao1.exibirDados();