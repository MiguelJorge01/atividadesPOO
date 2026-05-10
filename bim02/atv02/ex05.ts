class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, e tenho ${this.idade} anos!`)
    }
}

class Aluno extends Pessoa {
    protected matricula: string;
    protected curso: string;

    constructor(nome: string, idade: number, matricula: string, curso: string) {
        super(nome, idade);
        this.matricula = matricula;
        this.curso = curso;
    }

    exibirDadosAluno(): void {
        console.log(`
            ===== ALUNO =====
            Nome: ${this.nome}
            Idade: ${this.idade}
            Matricula: ${this.matricula}
            Curso: ${this.curso}    
        `)
    }
}

class Professor extends Pessoa {
    protected disciplina: string;
    
    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    apresentar(): void {
        console.log(`
            =================
            ${this.nome} se apresenta: 
            --------------------------
            Olá, me chamo Prof. ${this.nome}, tenho ${this.idade} e minha disciplina é ${this.disciplina}
            =================
            `)
    }
}

const aluno1 = new Aluno("Miguel", 20, "202510010029", "TADS");
const professor1 = new Professor("Nerso", 30, "POO");

aluno1.exibirDadosAluno();
professor1.apresentar();

export {};
