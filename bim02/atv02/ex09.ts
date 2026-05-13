abstract class Pessoa {
    private nome: string = "";
    private idade: number = 0;
    
    constructor(nome: string, idade: number) {
        this.nome_ = nome.trim();
        this.idade_ = idade;
    }

    get nome_(): string {
        return this.nome;
    }

    set nome_(novoNome: string) {
        if(novoNome.trim() != "") {
            this.nome = novoNome;
        } else {
            throw new Error("Nome vazio inserido nos objetos.");
        }
    }


    get idade_(): number {
        return this.idade;
    }

    set idade_(novaIdade: number) {
        if(novaIdade > 0 && novaIdade < 130) {
            this.idade = novaIdade;
        } else {
            throw new Error("Idade inválida inserida nos objetos.");
        }
    }

    abstract exibirDados(): void;
}

class Aluno extends Pessoa {
    private matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula.trim();
    }

    exibirDados(): void {
        console.log(`
            ===== ALUNO =====
            Nome: ${this.nome_}
            Idade: ${this.idade_}
            Matrícula: ${this.matricula}
        `);
    };
}

class Professor extends Pessoa {
    private disciplina: string;

    constructor(nome: string, idade: number, disciplina: string) {
        super(nome, idade);
        this.disciplina = disciplina.trim();
    }

    exibirDados(): void {
        console.log(`
            ===== PROFESSOR =====
            Nome: ${this.nome_}
            Idade: ${this.idade_}
            Disciplina: ${this.disciplina}
        `);
    };
}

const aluno1 = new Aluno("Miguel", 19, "202510010029");
const aluno2 = new Aluno("Natan", 25, "202505005024");

const professor1 = new Professor("Mr. Bellincanta", 30, "POO");
const professor2 = new Professor("Mr. da Rosa", 30, "BDII");

aluno1.exibirDados()
aluno2.exibirDados()
professor1.exibirDados()
professor2.exibirDados()