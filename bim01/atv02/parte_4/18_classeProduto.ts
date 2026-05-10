class Produto {
  nome: string;
  preco: number;
  estoque: number;

  constructor(nome: string, preco: number, estoque: number) {
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;
  }

  adicionarEstoque(qtd: number): void {
    if (qtd <= 0) {
      console.log("Erro: quantidade deve ser maior que zero.");
      return;
    }
    this.estoque += qtd;
    console.log(`Estoque atualizado: ${this.estoque}`);
  }

  removerEstoque(qtd: number): void {
    if (qtd <= 0) {
      console.log("Erro: quantidade deve ser maior que zero.");
      return;
    }
    if (qtd > this.estoque) {
      console.log("Erro: estoque insuficiente.");
      return;
    }
    this.estoque -= qtd;
    console.log(`Estoque atualizado: ${this.estoque}`);
  }

  exibirProduto(): void {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco}`);
    console.log(`Estoque: ${this.estoque}`);
  }
}

const produto = new Produto("Notebook", 3500, 10);
produto.exibirProduto();
produto.adicionarEstoque(5);
produto.removerEstoque(3);

export {}