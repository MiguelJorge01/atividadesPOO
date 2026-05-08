class Personagem {
    protected nome: string
    protected planeta: string
    protected energia: number

    constructor(nome: string, planeta: string, energia: number) {
        this.nome = nome;
        this.planeta = planeta;
        this.energia = energia;
    }

    usarHabilidade(): void {
        console.log(`${this.nome} usou sua habilidade!\n`)
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, sou do planeta ${this.planeta}!`)
    }
}

class Jedi extends Personagem {
    private corSabre: string

    constructor(nome: string, planeta: string, energia: number, corSabre: string) {
        super(nome, planeta, energia)
        this.corSabre = corSabre;
    }

    usarHabilidade(): void {
        console.log(
            `${this.nome} (Jedi) usou a Força para proteger a galáxia!\nCor do sabre de luz: ${this.corSabre}\n`)
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, sou um Jedi do planeta ${this.planeta}!`)
    }
}

class Sith extends Personagem {
    private nivelRaiva: number

    constructor(nome: string, planeta: string, energia: number, nivelRaiva: number) {
        super(nome, planeta, energia)
        this.nivelRaiva = nivelRaiva;
    }

    usarHabilidade(): void {
        console.log(
            `${this.nome} (Sith) usou o lado sombrio da Força\nNível da raiva: ${this.nivelRaiva}\n`)
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, sou um Sith do planeta ${this.planeta}!`)
    }
}

class Droide extends Personagem {
    private funcao: string

    constructor(nome: string, planeta: string, energia: number, funcao: string) {
        super(nome, planeta, energia)
        this.funcao = funcao;
    }

    usarHabilidade(): void {
        console.log(
            `${this.nome} (Droide) executou sua função: ${this.funcao}\nFunção do droide: ${this.funcao}\n`)
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, sou um Droide do planeta ${this.planeta}!`)
    }
}

class Mandaloriano extends Personagem {
    private armaPrincipal: string
    
    constructor(nome: string, planeta: string, energia: number, armaPrincipal: string) {
        super(nome, planeta, energia)
        this.armaPrincipal = armaPrincipal;
    }

    usarHabilidade(): void {
        console.log(`O Mandaloriano ${this.nome} atacou usando ${this.armaPrincipal}`)
    }

    apresentar(): void {
        console.log(`Olá, meu nome é ${this.nome}, sou um Mandaloriano do planeta ${this.planeta}!`)
    }
}

const jedi1 = new Jedi("Luke Skywalker", "Tatooine", 88, "Verde")
const sith1 = new Sith("Darth Vader", "Mustafar", 95, 9)
const droide1 = new Droide("R2-D2", "Naboo", 75, "Astromecânico")
const mandaloriano1 = new Mandaloriano("Din Djarin", "Mandalore", 85, "Rifle Anban")

jedi1.apresentar()
jedi1.usarHabilidade()

sith1.apresentar()
sith1.usarHabilidade()

droide1.apresentar()
droide1.usarHabilidade()

mandaloriano1.apresentar()
mandaloriano1.usarHabilidade()
