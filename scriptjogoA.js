const challenges = [
  "1.Compartilhe a foto de alguém nos stories ou CACHAÇA",
"2.Comente algo na última publicação da primeira pessoa que aparecer no feed do Instagram ou CACHAÇA",
"3.Passar um trote para algum amigo que não está jogando ou CACHAÇA",
"4.Mostrar para o grupo o que falou nas três últimas conversas do WhatsApp ou CACHAÇA",
"5.Mostrar para o grupo as cinco últimas fotos da só pra mim do snap do celular ou CACHAÇA",
"6.Dizer a alguma pessoa do grupo qual o maior defeito dela ou CACHAÇA",
"7.Contar com qual pessoa que você já ficou e ninguém sabe ou CACHAÇA",
"8.Falar eu te amo para uma pessoa aleatória ou CACHAÇA",
"9.Imitar o jeito de falar e andar de alguém do grupo ou CACHAÇA",
"10.Beber alguma mistura feita pelo grupo ou CACHAÇA",
"11.Mostrar ao grupo seu histórico de pesquisas mais recentes no Google ou CACHAÇA",
"12.Escolher um amigo na brincadeira para fazer uma competição de quem bebe 500ml de água mais rápido. Quem perde, bebe CACHAÇA",
"13.Contar duas mentiras e uma verdade sobre sua vida amorosa e deixar o grupo na dúvida sobre qual é qual ou CACHAÇA",
"14.Ligar para alguém e fingir que você é um famoso ou CACHAÇA",
"15.Tentar cantar uma música famosa em outro idioma sem olhar a letra ou CACHAÇA",
"16.Fazer uma careta por 30 segundos sem parar ou CACHAÇA",
"17.Tentar imitar o sotaque de um personagem famoso por um minuto ou CACHAÇA",
"18.Fazer uma imitação engraçada de alguém conhecido por todos ou CACHAÇA",
"19.Tentar dizer o alfabeto inteiro de trás para frente em 30 segundos ou CACHAÇA",
"20.Fazer uma declaração de amor para um objeto inanimado ou CACHAÇA",
"21.Fazer uma mímica de uma cena de filme ou série famosa e pedir para seus amigos adivinharem qual é ou CACHAÇA",
"22.Ligar para um ex-namorado(a) ou ex-crush e fingir que quer voltar a sair com ele(a) ou CACHAÇA",
"23.Ir até um grupo de pessoas desconhecidas e fazer uma pergunta constrangedora ou CACHAÇA",
"24.Fazer uma ligação para um serviço de atendimento ao cliente e começar a falar em uma língua inventada ou CACHAÇA",
"25.Fazer uma ligação para um número aleatório e fingir que você é um vendedor ambulante ou CACHAÇA",
"26.Tirar uma selfie com uma expressão facial estranha e postar nos stories com a legenda mais engraçada que conseguir pensar ou CACHAÇA",
"27.Fazer uma chamada de vídeo com um amigo e pedir para ele escolher uma música para você dançar. Dançar a música inteira, mesmo que não saiba a coreografia ou CACHAÇA",
];

function generateChallenge() {
  // Selecione um desafio aleatório da lista
  let challengeIndex = Math.floor(Math.random() * challenges.length);
  let challenge = challenges[challengeIndex];
  // Exiba o desafio no elemento div
  document.getElementById("challenge").innerHTML = challenge;
}

function Fez() {
  // Atualize a pontuação
  let scores = document.getElementById("Feito").innerHTML;
  scores = parseInt(scores.replace("FAÇA: ", ""));
  scores += 1;
    document.getElementById("Feito").innerHTML = "FAÇA: " + scores;
}

function NFez() {
  // Atualize a pontuação
  let scores = document.getElementById("Bebido").innerHTML;
  score = parseInt(scores.replace("CACHAÇA: ", ""));
  score += 1;
  document.getElementById("Bebido").innerHTML = "CACHAÇA: " + score;
}

document
  .getElementById("sortear")
  .addEventListener("click", generateChallenge);
document.getElementById("Fez").addEventListener("click", Fez);
document.getElementById("NFez").addEventListener("click", NFez);
