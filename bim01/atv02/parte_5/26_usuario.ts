class Usuario {
  nome: string;

  constructor(nome: string) {
    this.nome = nome;
  }

  // método estático pertence à classe, não ao objeto
  // por isso é chamado com Usuario.criarVisitante() e não com objeto.criarVisitante()
  static criarVisitante(): Usuario {
    return new Usuario("Visitante");
  }
}

const visitante = Usuario.criarVisitante();
console.log(visitante.nome); // Visitante

const usuario = new Usuario("Maria");
console.log(usuario.nome); // Maria