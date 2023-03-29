// Inicialmente, temos um array vazio para armazenar os jogadores.
let jogadores = [];

// Função para adicionar um novo jogador ao array.
function adicionarJogador(nome) {
  // Criamos um objeto para representar o novo jogador.
  let novoJogador = {
    nome: nome,
    pontuacao: 0,
  };

  // Adicionamos o novo jogador ao array.
  jogadores.push(novoJogador);
}

// Chamamos a função para adicionar alguns jogadores.
adicionarJogador("Alice");
adicionarJogador("Bob");
adicionarJogador("Charlie");

// Imprimimos os jogadores para verificar se foram adicionados corretamente.
console.log(jogadores);
