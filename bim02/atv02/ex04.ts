class Conta {
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo;
    }
}

class ContaPremium extends Conta {
    
    getSaldo() {
        // return this.saldo; NÃO FUNCIONA
    }
}

// private impede acessos àquele atributo de fora da classe dele
// se o metodo fosse protected, o atributo saldo poderia ser acessado com um get.