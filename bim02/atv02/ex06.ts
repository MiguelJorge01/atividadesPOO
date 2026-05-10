class Pessoa {
    protected nome: string;
    protected idade: number;
    
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirDados() {};
}

class Aluno extends Pessoa {
    protected matricula: string;
    protected curso: string;

    constructor(nome: string, idade: number, matricula: string, curso: string) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    exibirDados(): void {
        console.log(`
            ===== ALUNO =====
            Nome: ${this.nome}
            Idade: ${this.idade}
            Matrícula: ${this.matricula}
            Curso: ${this.curso}    
        `);
    };
}

class Professor extends Pessoa {
    protected turmas: string[];

    constructor(nome: string, idade: number, turmas: string[]) {
        super(nome, idade);
        this.turmas = turmas;
    }

    exibirDados(): void {
        console.log(`
            ===== PROFESSOR =====
            Nome: ${this.nome}
            Idade: ${this.idade}
            Turmas: ${this.turmas}
        `);
    };
}

class Coordenador extends Pessoa {
    protected funcao: string;

    constructor(nome: string, idade: number, funcao: string) {
        super(nome, idade);
        this.funcao = funcao;
    }

    exibirDados(): void {
        console.log(`
            ===== PROFESSOR =====
            Nome: ${this.nome}
            Idade: ${this.idade}
            Funcao: ${this.funcao}
        `);
    };
}

const aluno1 = new Aluno("Miguel", 19, "202510010029", "TADS");
const professor1 = new Professor("Nelso", 30, ["TADS 1", "TADS 2", "TADS 3"]);
const coordenador1 = new Coordenador("Herbert", 40, "Coordenar");

aluno1.exibirDados();
professor1.exibirDados();
coordenador1.exibirDados();