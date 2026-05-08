class Funcionario {
    protected nome: string;
    protected salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    
    exibirDadosGerente() {
        console.log(
            `===== GERENTE =====
            Nome: ${this.nome}
            Salario: ${this.salario}
        `)
    }
}

const gerente1 = new Gerente("Nerson", 50000.00)