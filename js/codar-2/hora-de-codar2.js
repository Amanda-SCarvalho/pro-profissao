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

/* 1. Escreva um programa em que o usuário informe dois números. Então escreva em tela o maior deles. */
function ex1() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let resultado = document.getElementById('res1');

    if (num1 > num2) {
        resultado.textContent = `O maior número é: ${num1}`;
    } else if (num2 > num1) {
        resultado.textContent = `O maior número é: ${num2}`;
    } else {
        resultado.textContent = "Os números são iguais.";
    }
}

/* 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero. */
function ex2() {
    let valor = parseFloat(document.getElementById('valor').value);
    let resultado = document.getElementById('res2');

    if (valor > 0) {
        resultado.textContent = "O valor é positivo.";
    } else if (valor < 0) {
        resultado.textContent = "O valor é negativo.";
    } else {
        resultado.textContent = "O valor é zero.";
    }
}
/* 
3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles. */
function ex3() {
    let num1 = parseFloat(document.getElementById('num3_1').value);
    let num2 = parseFloat(document.getElementById('num3_2').value);
    let num3 = parseFloat(document.getElementById('num3_3').value);
    let resultado = document.getElementById('res3');

    if (num1 > num2 && num1 > num3) {
        resultado.textContent = `O maior número é: ${num1}`;
    } else if (num2 > num1 && num2 > num3) {
        resultado.textContent = `O maior número é: ${num2}`;
    } else {
        resultado.textContent = `O maior número é: ${num3}`;
    }
}

/* 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores. */
function ex4() {
    let num1 = parseFloat(document.getElementById('num4_1').value);
    let num2 = parseFloat(document.getElementById('num4_2').value);
    let num3 = parseFloat(document.getElementById('num4_3').value);
    let resultado = document.getElementById('res4');

    let maior, segundoMaior;

    if (num1 > num2 && num1 > num3) {
        maior = num1;
        segundoMaior = Math.max(num2, num3);
    } else if (num2 > num1 && num2 > num3) {
        maior = num2;
        segundoMaior = Math.max(num1, num3);
    } else {
        maior = num3;
        segundoMaior = Math.max(num1, num2);
    }

    resultado.textContent = `A soma dos 2 maiores é: ${maior + segundoMaior}`;
}

/* 5.  Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos. */
function ex5() {
    let numeros = [];
    let soma = 0;

    for (let i = 1; i <= 6; i++) {
        let valor = parseFloat(document.getElementById(`num5_${i}`).value);
        numeros.push(valor);
        soma += valor;
    }

    let media = soma / 6;
    let resultado = document.getElementById('res5');
    resultado.textContent = `Números informados: ${numeros.join(', ')}\nMédia aritmética: ${media}`;
}


/* 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes) */
function ex6() {
    let num1 = parseFloat(document.getElementById('num6_1').value);
    let num2 = parseFloat(document.getElementById('num6_2').value);
    let num3 = parseFloat(document.getElementById('num6_3').value);
    let num4 = parseFloat(document.getElementById('num6_4').value);
    let resultado = document.getElementById('res6');

    let maior = Math.max(num1, num2, num3, num4);
    resultado.textContent = `Primeiro valor: ${num1}\nÚltimo valor: ${num4}\nMaior valor: ${maior}`;
}

/* 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou. */
function ex7() {
    let numeros = [];
    let soma = 0;
    for (let i = 1; i <= 6; i++) {
        let valor = parseFloat(document.getElementById(`num7_${i}`).value);
        numeros.push(valor);
        if (valor < 72) {
            soma += valor;
        }
    }
    let resultado = document.getElementById('res7');
    resultado.textContent = `Números informados: ${numeros.join(', ')}\nSoma dos valores inferiores a 72: ${soma}`;
}

/* 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente" */
function ex8() {
    let numeros = [];
    let soma = 0;
    let valido = true;

    for (let i = 1; i <= 4; i++) {
        let valor = parseFloat(document.getElementById(`num8_${i}`).value);
        if (valor > 0 && valor < 10) {
            numeros.push(valor);
            soma += valor;
        } else {
            valido = false;
            break;
        }
    }

    if (valido) {
        let media = soma / numeros.length;
        let resultado = document.getElementById('res8');
        if (media > 5) {
            resultado.textContent = "Você passou no teste";
        } else {
            resultado.textContent = "Tente novamente";
        }
    } else {
        document.getElementById('res8').textContent = "Por favor, insira apenas números maiores que 0 e menores que 10.";
    }
}

/* 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu). */
function ex9() {
    let anoNascimento = parseInt(document.getElementById('anoNascimento').value);
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;
    let resultado = document.getElementById('res9');

    if (idade >= 16) {
        resultado.textContent = "Você pode votar este ano.";
    } else {
        resultado.textContent = "Você não pode votar este ano.";
    }
}

/* 10. Tendo como entrada a altura e o gênero designado ao nascer (codificado da seguinte forma: 1: feminino - 2: masculino - ) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas. */
function ex10() {
    let altura = parseFloat(document.getElementById('altura').value);
    let genero = parseInt(document.getElementById('genero').value);
    let resultado = document.getElementById('res10');
    let pesoIdeal;

    if (genero === 1) {
        pesoIdeal = 62.1 * altura - 44.7;
    } else if (genero === 2) {
        pesoIdeal = 72.7 * altura - 58;
    }

    resultado.textContent = `Peso ideal: ${pesoIdeal.toFixed(2)} kg`; //toFixed(2) usado para limitar a 2 casas decimais

}

/* **11. Uma micro calculadora**

Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).

O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos.

**Observação**: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações */
function ex11() {
    let valor1 = parseInt(document.getElementById('num11_1').value);
    let valor2 = parseInt(document.getElementById('num11_2').value);
    let operacao = parseInt(document.getElementById('operacao').value);
    let resultado = document.getElementById('res11');
    let resultadoOperacao;
    switch (operacao) {
        case 1:
            resultadoOperacao = valor1 + valor2;
            break;
        case 2:
            resultadoOperacao = valor1 - valor2;
            break;
        case 3:
            resultadoOperacao = valor1 / valor2;
            if (valor2 === 0) {
                resultado.textContent = "Erro: Divisão por zero não é permitida.";
                return;
            }
            break;
        case 4:
            resultadoOperacao = valor1 * valor2;
            break;
    }
    resultado.textContent = `Resultado: ${resultadoOperacao}`;
}