class Animal {
  // public: acessível de qualquer lugar, dentro da classe, fora dela e em subclasses
  public nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }
}

class ContaBancaria {
  // private: acessível só dentro da própria classe
  private senha: string;

  constructor(senha: string) {
    this.senha = senha;
  }

  validarSenha(tentativa: string): boolean {
    return this.senha === tentativa;
  }
}

class Veiculo {
  // protected: acessível dentro da classe e em subclasses, mas não fora delas
  protected velocidadeMaxima: number;

  constructor(velocidadeMaxima: number) {
    this.velocidadeMaxima = velocidadeMaxima;
  }
}

class Carro extends Veiculo {
  exibirVelocidade(): void {
    // consegue acessar velocidadeMaxima porque é protected e Carro é subclasse de Veiculo
    console.log(`Velocidade máxima: ${this.velocidadeMaxima} km/h`);
  }
}

const animal = new Animal("Cachorro");
console.log(animal.nome); // funciona, é public

const conta = new ContaBancaria("1234");
console.log(conta.validarSenha("1234")); // funciona via método
// console.log(conta.senha); // erro: senha é private

const carro = new Carro(180);
carro.exibirVelocidade(); // funciona via método da subclasse
// console.log(carro.velocidadeMaxima); // erro: protected não é acessível fora da classe