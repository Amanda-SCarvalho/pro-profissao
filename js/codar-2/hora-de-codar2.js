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