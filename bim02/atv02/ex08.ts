import { log } from "console";

class FuncionarioEscola {
    protected nome: string;
    protected idade: number;
    protected salario: number;

    constructor(nome: string, idade: number, salario: number) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }
}

class Professor extends FuncionarioEscola {
    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade, salario);
    }

    darAula(): void {
        console.log(this.constructor.name + " está dando aula.");
    }
}

class Secretario extends FuncionarioEscola {
    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade, salario);
    }

    organizarDocumentos(): void {
        console.log(this.constructor.name + " organizou documentos");
    }
}

class Zelador extends FuncionarioEscola {
    constructor(nome: string, idade: number, salario: number) {
        super(nome, idade, salario);
    }

    limparAmbiente(): void {
        console.log(this.constructor.name + " está limpando a escola...");
    }
}

const professor1 = new Professor("Nerso", 28, 60000)
const secretario1 = new Secretario("Nerso", 28, 60000)
const zelador1 = new Zelador("Nerso", 28, 60000)

professor1.darAula();
secretario1.organizarDocumentos();
zelador1.limparAmbiente();

export {};