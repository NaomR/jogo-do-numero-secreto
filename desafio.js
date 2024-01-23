//Criar uma função que exibe "Olá, mundo!" no console.
function helloWorld() {
    console.log('Olá,mundo');
}
//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nomeNoConsole(nome) {
    console.log(`Olá,${nome}`);
}
//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobrar(numero){
    console.log(numero*2);
}
//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediade3(n1,n2,n3){
    let media = (n1 + n2 + n3) /3;
    console.log(media);
}
//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maior(num1,num2) {
    if(num1 > num2) {
        console.log(`${num1} é maior que ${num2}`  )
    }else {
        `${num2} é maior que ${num1}`
    }
}
//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multi(numeroAi) {
    console.log(numeroAi*numeroAi);
}

helloWorld();
nomeNoConsole('trum');
dobrar(5);
mediade3(6,8,4);
maior(8,4);
multi(9);

//desafio 2 -----------------------------------------------------------------------

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculoIMC(altura,peso) {
    let imc = peso / (altura * altura);
}
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterDolarParaReal(valorEmDolar) {
    let cotacaoDolar = 4.98;
    let valorEmReais = valorEmDolar * cotacaoDolar;
    return valorEmReais.toFixed(2);
  }
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calcularAreaPerimetroSalaCircular(raio) {
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;
    
    console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
  }
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
function mostrarTabuada(numero) {
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }

//desafio 3 -----------------------------------------------------------------------

//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];
//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgramacao = ['JavaScript','C','C++', 'Kotlin','Python'];
//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');
//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
let listaNomes = ['Ricardo','José','Paulo'];
console.log(listaNomes[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
let listaNomes2 = ['Julia','Sara','fernanda'];
console.log(listaNomes2[2]);
