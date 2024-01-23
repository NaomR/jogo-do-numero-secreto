let listaDeNumerosSecretos= [];
let numeroLimite = 10;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.3});
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "jogo do numero secreto");
  exibirTextoNaTela("p", "escolha um numero entre 1 e 10:");
}
exibirMensagemInicial();
function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroAleatorio) {
    exibirTextoNaTela("h1", "Você acertou!!!");
    let unicaTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let numeroTentativas = `voce descobriu o numero secreto com ${tentativas} ${unicaTentativa}!`;
    exibirTextoNaTela("p", numeroTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    exibirTextoNaTela("h1", "Que pena, você errou");
    if (chute > numeroAleatorio) {
      exibirTextoNaTela("p", "O numero secreto é Menor");
    } else {
      exibirTextoNaTela("p", "O numero secreto é Maior");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSecretos.length;

  if(quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSecretos = [];
  }

  if(listaDeNumerosSecretos.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  }else {
    listaDeNumerosSecretos.push(numeroEscolhido);
    console.log(listaDeNumerosSecretos);
    return numeroEscolhido;
  }
}
function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiniciarJogo() {
  numeroAleatorio = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirMensagemInicial();
  document.getElementById('reiniciar').setAttribute('disabled',true)
}