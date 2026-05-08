class Saudacao {
  // assinaturas definem as formas de chamar o método
  exibir(nome: string): void;
  exibir(nome: string, titulo: string): void;

  // implementação real única, trata os dois casos
  exibir(nome: string, titulo?: string): void {
    if (titulo) {
      console.log(`Olá, ${titulo} ${nome}!`);
    } else {
      console.log(`Olá, ${nome}!`);
    }
  }
}

const saudacao = new Saudacao();
saudacao.exibir("Miguel");           // Olá, Miguel!
saudacao.exibir("Nelson", "Prof."); // Olá, Prof. Nelson!