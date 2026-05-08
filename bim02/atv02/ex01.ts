class Pessoa {
    protected readonly nome: string;
    protected readonly idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade}`)
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
        `);
    }
}


const aluno1 = new Aluno("Miguel", 19, "20251CAS10010029", "TADS");
const pessoa1 = new Pessoa("Nelson", 96);