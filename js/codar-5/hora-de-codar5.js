let saldo = 100.5; //Float

function inicio() {
  let escolha = document.getElementById("escolha").value;

  if (escolha === "1") {
    ver_saldo();
  } else if (escolha === "2") {
    fazer_deposito();
  } else if (escolha === "3") {
    fazer_saque();
  } else if (escolha === "4") {
    sair();
  } else {
    erro();
  }
}

function ver_saldo() {
  document.getElementById("res").innerHTML = "Seu saldo atual é: " + saldo;
  inicio();
}

function fazer_deposito() {
  let campos = document.getElementById("campos");
  let deposito = (campos.innerHTML = `
Qual o valor para depósito?<input id="deposito"><br>`);
  // Not a Number
  if (Number.isNaN(deposito) || deposito === "") {
    document.getElementById("res").innerHTML = "Por favor, informe um número:";
    fazer_deposito();
  } else {
    saldo += deposito;
    ver_saldo();
  }
}

function fazer_saque() {
  let saque = (campos.innerHTML = `
Qual o valor para saque?<input id="saque"><br>`);
  if (Number.isNaN(saque) || saque === "") {
    document.getElementById("res").innerHTML = "Por favor, informe um número:";
    fazer_saque();
  } else {
    saldo -= saque;

    ver_saldo();
  }
}

function erro() {
  document.getElementById("res").innerHTML =
    "Por favor, informe um número entre 1 e 4";
  inicio();
}

function sair() {
  let confirma = confirm("Você deseja sair?");
  if (confirma) {
    window.close();
  } else {
    inicio();
  }
}

inicio();
