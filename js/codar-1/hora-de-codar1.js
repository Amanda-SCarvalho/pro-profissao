function ex1() {
  let nome_do_carro = document.getElementById("variavel").value;
  document.getElementById("res1").innerText = nome_do_carro;
}

function ex2() {
  let nome = document.getElementById("nome").value;
  document.getElementById("res2").innerText = "Olá " + nome;
}

function ex3() {
  let nome = document.getElementById("nome3").value;
  let idade = document.getElementById("idade3").value;
  document.getElementById("res3").innerText = "Olá " + nome + ", sua idade é " + idade;
}

function ex4() {

  let escolha = document.getElementById("escolha").value
  let campos = document.getElementById("campos")

  if (escolha == "1") { // Retângulo
    campos.innerHTML = `
Base: <input id="base"><br>
Altura: <input id="altura"><br>
`
  }

  else if (escolha == "2") { // Quadrado
    campos.innerHTML = `
Lado: <input id="lado"><br>
`
  }

  else if (escolha == "3") { // Losango
    campos.innerHTML = `
Diagonal maior: <input id="dmaior"><br>
Diagonal menor: <input id="dmenor"><br>
`
  }

  else if (escolha == "4") { // Trapézio
    campos.innerHTML = `
Base maior: <input id="bmaior"><br>
Base menor: <input id="bmenor"><br>
Altura: <input id="altura"><br>
`
  }

  else if (escolha == "5") { // Paralelogramo
    campos.innerHTML = `
Base: <input id="base"><br>
Altura: <input id="altura"><br>
`
  }

  else if (escolha == "6") { // Triângulo
    campos.innerHTML = `
Base: <input id="base"><br>
Altura: <input id="altura"><br>
`
  }

  else if (escolha == "7") { // Círculo
    campos.innerHTML = `
Raio: <input id="raio"><br>
`
  }

}

function calcular() {

  let escolha = document.getElementById("escolha").value
  let area

  switch (escolha) {

    case "1":
      let base = Number(document.getElementById("base").value)
      let altura = Number(document.getElementById("altura").value)
      area = base * altura
      break

    case "2":
      let lado = Number(document.getElementById("lado").value)
      area = lado * lado
      break

    case "3":
      let dmaior = Number(document.getElementById("dmaior").value)
      let dmenor = Number(document.getElementById("dmenor").value)
      area = (dmaior * dmenor) / 2
      break

    case "4":
      let bmaior = Number(document.getElementById("bmaior").value)
      let bmenor = Number(document.getElementById("bmenor").value)
      let h = Number(document.getElementById("altura").value)
      area = ((bmaior + bmenor) * h) / 2
      break

    case "5":
      base = Number(document.getElementById("base").value)
      altura = Number(document.getElementById("altura").value)
      area = base * altura
      break

    case "6":
      base = Number(document.getElementById("base").value)
      altura = Number(document.getElementById("altura").value)
      area = (base * altura) / 2
      break

    case "7":
      let r = Number(document.getElementById("raio").value)
      area = Math.PI * (r * r)
      break

  }

  document.getElementById("res4").innerText = "Área: " + area

}

/* [Javascript] - Hora de Codar! */

/* 1 - Escreva um programa que crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário. */

/*       var nome_do_carro = "Fusca";

      alert("Resposta 1: " + nome_do_carro); */

/* 2 - Escreva um programa em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]". */
/*       var nome = prompt("2 - Digite o seu nome");
      alert("Resposta 2: Olá, " + nome); */

/* 3 - Escreva um programa em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]". */

/*       var nome1 = prompt("3 - Digite o seu nome: ");
      var idade = prompt("3 - Digite a sua idade: ");

      alert("Resposta 3: Olá " + nome1 + ",sua idade é " + idade); */

/* 4 - Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável. */
/* var escolha = prompt("4 - Digite o numero da opção escolhida: \n 1- Retângulo \n 2- Quadrado \n 3 - Losango \n 4 - Trapezio \n 5 - Paralelogramo \n 6 - Triângulo \n 7 - Círculo")

switch (escolha){
  case "1":
    var base = prompt("Informe a base: ")
    var h = prompt("Informe a altura: ")
    area = base * h
    alert("A area é " + area)
    break;
  case "2":
    var lado = prompt("Informe o valor do lado: ")
    area = lado * lado
    alert("A area é " + area)
    break;
  case "3":
    var dmaior = prompt("Informe o valor da diagonal maior: ")
    var dmenor = prompt("Informe o valor da diagonal menor: ")
    area = (dmaior * dmenor)/2
    alert("A area é " + area)
    break;
  case "4":
    var bmaior = prompt("Informe o valor da base maior: ")
    var bmenor = prompt("Informe o valor da base menor: ")
    var h = prompt("Informe o valor da altura: ")
    area = ((bmaior + bmenor)*h)/2
    alert("A area é " + area)
    break;
  case "5":
    var base = prompt("Informe a base: ")
    var h = prompt("Informe a altura: ")
    area = base * h
    alert("A area é " + area)
    break;
  case "6":
    var base = prompt("Informe a base: ")
    var h = prompt("Informe a altura: ")
    area = (base * h)*2
    alert("A area é " + area)
  case "7":
    var r = prompt("Informe o raio: ")
    var pi = 3.14
    area = pi * (r * r)
    alert("A area é "+ area)
    break;
  default:
    alert("Nenhum numero correspondente, tente novamento")
  break;
} */