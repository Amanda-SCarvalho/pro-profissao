let saldo = 100.5;
let nome = "";
let senhaCorreta = "3589";

let extrato = [
    "Depósito inicial: R$ 100.50",
    "Compra Mercado: -R$ 20.00",
    "Depósito: +R$ 50.00"
];

async function iniciarSistema() {
    const { value } = await Swal.fire({
        title: "Bem-vindo 💳",
        text: "Digite seu nome:",
        input: "text",
        inputPlaceholder: "Seu nome",
        confirmButtonText: "Entrar",
        allowOutsideClick: false
    });

    if (!value || value.trim() === "") {
        Swal.fire("Erro", "Digite um nome válido", "error");
        return iniciarSistema();
    }

    nome = value;

    Swal.fire({
        title: `Olá ${nome}!`,
        text: "É um prazer ter você por aqui!",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
    });

    menu();
}

async function validarSenha(callback) {
  const { value: senha } = await Swal.fire({
    title: "Digite sua senha",
    input: "password",
    inputPlaceholder: "Senha",
    confirmButtonText: "Confirmar",
    allowOutsideClick: false
  });

  if (senha !== senhaCorreta) {
    await Swal.fire({
      title: "Erro",
      text: "Senha incorreta!",
      icon: "error"
    });

    callback();
  } else {
    callback(true);
  }
}

function inicio() {
    let escolha = document.getElementById("escolha").value;

    switch (escolha) {
        case "1":
            validarSenha(ver_saldo);
            break;
        case "2":
            validarSenha(ver_extrato);
            break;
        case "3":
            validarSenha(fazer_saque);
            break;
        case "4":
            fazer_deposito();
            break;
        case "5":
            validarSenha(fazer_transferencia);
            break;
        case "6":
            sair();
            break;
        default:
            erro();
    }
}

function ver_saldo() {
    document.getElementById("res").innerHTML =
        `Seu saldo atual é: R$ ${saldo.toFixed(2)}`;
}

function ver_extrato() {
    document.getElementById("res").innerHTML =
        "<b>Extrato:</b><br>" + extrato.join("<br>");
}

function fazer_deposito() {
    let campos = document.getElementById("campos");

    campos.innerHTML = `
        Qual o valor para depósito?
        <input id="deposito">
        <button onclick="confirmarDeposito()">Confirmar</button>
      `;
}

function confirmarDeposito() {
    let valor = parseFloat(document.getElementById("deposito").value);

    if (isNaN(valor) || valor <= 0) {
        document.getElementById("res").innerHTML =
            "Operação não autorizada";
    } else {
        saldo += valor;
        extrato.push(`Depósito: +R$ ${valor.toFixed(2)}`);
        ver_saldo();
    }
}

function fazer_saque() {
    let campos = document.getElementById("campos");

    campos.innerHTML = `
        Qual o valor para saque?
        <input id="saque">
        <button onclick="confirmarSaque()">Confirmar</button>
      `;
}

function confirmarSaque() {
    let valor = parseFloat(document.getElementById("saque").value);

    if (isNaN(valor) || valor <= 0 || valor > saldo) {
        document.getElementById("res").innerHTML =
            "Operação não autorizada";
    } else {
        saldo -= valor;
        extrato.push(`Saque: -R$ ${valor.toFixed(2)}`);
        ver_saldo();
    }
}

function fazer_transferencia() {
    let campos = document.getElementById("campos");

    campos.innerHTML = `
        Número da conta:
        <input id="conta"><br>
        Valor da transferência:
        <input id="valorTransferencia"><br>
        <button onclick="confirmarTransferencia()">Confirmar</button>
      `;
}

function confirmarTransferencia() {
    let conta = document.getElementById("conta").value;
    let valor = parseFloat(document.getElementById("valorTransferencia").value);

    if (!/^\\d+$/.test(conta)) {
        document.getElementById("res").innerHTML =
            "Conta inválida! Digite apenas números.";
        return;
    }

    if (isNaN(valor) || valor <= 0 || valor > saldo) {
        document.getElementById("res").innerHTML =
            "Operação não autorizada";
    } else {
        saldo -= valor;
        extrato.push(`Transferência para conta ${conta}: -R$ ${valor.toFixed(2)}`);
        ver_saldo();
    }
}

function erro() {
    document.getElementById("res").innerHTML =
        "Por favor, informe um número entre 1 a 6";
}

function sair() {
  Swal.fire({
    title: `${nome}, foi um prazer ter você por aqui!`,
    icon: "success",
    confirmButtonText: "Fechar"
  });
}

iniciarSistema();