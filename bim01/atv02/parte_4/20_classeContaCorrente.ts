class ContaCorrente {
  titular: string;
  private saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("Erro: valor de depósito deve ser maior que zero.");
      return;
    }
    this.saldo += valor;
    console.log(`Depósito de R$ ${valor} realizado com sucesso.`);
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("Erro: valor de saque deve ser maior que zero.");
      return;
    }
    if (valor > this.saldo) {
      console.log("Erro: saldo insuficiente.");
      return;
    }
    this.saldo -= valor;
    console.log(`Saque de R$ ${valor} realizado com sucesso.`);
  }

  consultarSaldo(): void {
    console.log(`Saldo atual: R$ ${this.saldo}`);
  }

  exibirDados(): void {
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: R$ ${this.saldo}`);
  }
}

const conta = new ContaCorrente("Miguel", 1000);
conta.exibirDados();
conta.depositar(500);
conta.sacar(200);
conta.consultarSaldo();