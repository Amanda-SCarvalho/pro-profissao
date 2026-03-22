/* 1 - Estudantes. 
Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. */
let lista = [];

function estudante() {
  let nome = document.getElementById("estudante").value;

  if (nome == "") {
    return;
  }

  lista.push(nome);

  document.getElementById("estudante").value = "";
}

function exibirLista() {
  let resultado = "Quantidade: " + lista.length + "<br>";
  resultado += "Lista: " + lista.join(", ");

  document.getElementById("res1").innerHTML = resultado;
}


/*

2 - Planetas
Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta.
Verifique se o planeta que o usuário informou está na array e informe ao usuário. */
function planetas() {
    let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"].map(p => p.toLowerCase());
    let nomePlaneta = document.getElementById("planeta").value.toLowerCase();

    if (planetas.includes(nomePlaneta)) {
        document.getElementById("res2").innerHTML = `O planeta ${nomePlaneta} está na lista.`;
    } else {
        document.getElementById("res2").innerHTML = `O planeta ${nomePlaneta} não está na lista.`;
    }

}
/*
3 - Compras
Vamos criar uma lista de compras.
Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.
Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".
Peça novamente para o usuário digitar o nome de uma fruta para ser removida.
Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".
Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada". */

let frutas = [];
function addFrutas() {
    let fruta = document.getElementById("fruta").value;
    if (fruta !== "") {
        frutas.push(fruta);
        document.getElementById("res3").innerHTML = `Fruta adicionada: ${fruta}`;
        document.getElementById("fruta").value = "";
    }
}
function removerFrutas() {
    let fruta = document.getElementById("fruta").value;
    let index = frutas.indexOf(fruta);
    if (index !== -1) {
        frutas.splice(index, 1);
        document.getElementById("res3").innerHTML = `${fruta} foi retirada da lista.`;
    } else {
        document.getElementById("res3").innerHTML = `Fruta indisponível no nosso mercado.`;
    }
}
function exibirFrutas() {
    if (frutas.length === 0) {
        document.getElementById("res3").innerHTML = `Lista de compras finalizada.`;
    } else {
        document.getElementById("res3").innerHTML = `Frutas na lista: ${frutas.join(", ")}`;
    }
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