/* 1 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. No final da repetição escreva "EXPLOSÃO". */

function ex1() {
  for (let i = 30; i >= 0; i--) {
    setTimeout(
      () => {
        document.getElementById("res1").innerHTML = i;
      },
      (30 - i) * 1000,
    );
  }
  setTimeout(() => {
    document.getElementById("res1").innerHTML =
      '<style>.bum { color: red; font-weight: bold; }</style> <div class="bum">EXPLOSÃO</div>';
  }, 30000);
}

/* 2 - Escreva um algoritmo para ler 2 valores informados pelo usuário e enquanto o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor, mas para a mesma variável. Ou seja, para o segundo valor não pode ser aceito o valor zero nem um valor negativo. O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor e exibir o resultado ao usuário. */

function ex2() {
  let num1 = parseFloat(document.getElementById("num2_1").value);
  let num2 = parseFloat(document.getElementById("num2_2").value);
  let resultado = document.getElementById("res2");

  if (num2 === 0 || num2 < 0) {
    resultado.textContent =
      "O segundo valor deve ser maior que zero. Por favor, insira um novo valor.";
  } else {
    resultado.textContent = `O resultado da divisão é: ${num1 / num2}`;
  }
}

/* 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.

Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 */
function ex3() {
  for (let i = 10; i >= 1; i--) {
    document.getElementById("res3").innerHTML += i + ", ";
  }
}

/* 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive). */
function ex4() {
  let soma = 0;
  let quantidade = 0;
  for (let i = 15; i <= 100; i++) {
    soma += i;
    quantidade++;
  }
  let media = soma / quantidade;
  document.getElementById("res4").innerHTML =
    `A média aritmética dos números entre 15 e 100 é: ${media}`;
}

/* 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. */
function ex5() {
  let num1 = parseInt(document.getElementById("num5_1").value);
  let num2 = parseInt(document.getElementById("num5_2").value);
  media = (num1 + num2) / 2;
  document.getElementById("res5").innerHTML =
    `A média aritmética dos números ${num1} e ${num2} é: ${media}`;
}

/* 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados. */

let aprovados = 0;
let totalAlunos = 0;
function ex6() {
  let nota1 = parseFloat(document.getElementById("num6_1").value);
  let nota2 = parseFloat(document.getElementById("num6_2").value);

  if (isNaN(nota1) || isNaN(nota2)) {
    document.getElementById("res6").innerHTML = "Digite as duas notas!";
    return;
  }

  let media = (nota1 + nota2) / 2;
  totalAlunos++;

  if (media >= 9.5) {
    aprovados++;
  }

  document.getElementById("res6").innerHTML = `
    Média: ${media.toFixed(2)} <br><br>
    Deseja calcular outro aluno?<br>
    <button onclick="limparCampos()">Sim</button>
    <button onclick="mostrarResultadoFinal()">Não</button>
  `;
}

function limparCampos() {
  document.getElementById("num6_1").value = "";
  document.getElementById("num6_2").value = "";
  document.getElementById("res6").innerHTML = "";
}

function mostrarResultadoFinal() {
  document.getElementById("res6").innerHTML = `
    Total de alunos: ${totalAlunos} <br>
    Aprovados: ${aprovados}
  `;
}

/* 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.

Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. */
function ex7() {
  let soma = 0;

  for (let i = 1; i <= 6; i++) {
    let nota = document.getElementById("num7_" + i).value;

    if (nota == "" || nota < 0 || nota > 10) {
      document.getElementById("res7").innerHTML = "Digite notas válidas!";
      return;
    }

    soma = soma + Number(nota);
  }

  let media = soma / 6;

  document.getElementById("res7").innerHTML =
    "Média: " + media.toFixed(2);
}


/* 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO.

N  é um valor informado pelo usuário */
function ex8() {
  let n = parseInt(document.getElementById("num8").value);
  let resultado = "";
  for (let i = 1; i <= n; i++) {
    resultado += i + " ";
  }
  document.getElementById("res8").innerHTML = `Números entre 1 e ${n}: ${resultado}`;
}


/* 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. */
function ex9() {
  let resultado = "";
  for (let i = 101; i <= 110; i++) {
    resultado += i + " ";
  }
  document.getElementById("res9").innerHTML = `Os 10 primeiros números inteiros maiores que 100 são: ${resultado}`;
}


/* 10 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. */
function ex10() {
  let dentroIntervalo = 0;
  let foraIntervalo = 0;
    for (let i = 1; i <= 10; i++) {
      let valor = parseFloat(document.getElementById(`num10_${i}`).value);
      if (valor >= 24 && valor <= 42) {
        dentroIntervalo++;
      } else {
        foraIntervalo++;
      }
    }
  document.getElementById("res10").innerHTML = `
    Valores dentro do intervalo [24, 42]: ${dentroIntervalo} <br>
    Valores fora do intervalo: ${foraIntervalo}
  `;
}


/* 11 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. */
function ex11() {
  let n = parseInt(document.getElementById("num11").value);
  let resultado = "";
    for (let i = 0; i <= 10; i++) {
        resultado += `${i} x ${n} = ${i * n}<br>`;
    }
  document.getElementById("res11").innerHTML = resultado;
}

/* Função para limpar todos os campos */

function limpar() {
  // limpa todos os inputs
  document.querySelectorAll('input').forEach(input => {
    input.value = '';
  });

  // limpa todos os resultados
  document.querySelectorAll('[id^="res"]').forEach(el => {
    el.textContent = '';
  });
} 

