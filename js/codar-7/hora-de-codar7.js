const { default: Swal } = require("sweetalert2");

const hotel = "Hotel Rockstar";
let lista_hospedes = [];

// MENU PRINCIPAL
function inicio() {
  let escolha = document.getElementById("escolha").value;

  switch (escolha) {
    case "1":
      reserva_quartos();
      break;
    case "2":
      cadastro_hospedes();
      break;
    case "3":
      abastecer_carros();
      break;
    case "4":
      sair();
      break;
    default:
      erro();
  }
}

// RESERVA
function reserva_quartos() {
  Swal.fire({
    title: `HOTEL ${hotel}`,
    text: "Bem-vindo à reserva de quartos!",
    icon: "info"
  });

  return sistema_reserva_quartos();
}

// CADASTRO
async function cadastro_hospedes() {
  await Swal.fire({
    title: `HOTEL ${hotel}`,
    text: "Bem-vindo ao cadastro de hóspedes!",
    icon: "info"
  });

  return sistema_cadastrar_hospedes();
}

async function sistema_reserva_quartos() {

  let escolha = document.getElementById("escolha").value;

  return escolha;
}

// SISTEMA DE HÓSPEDES
async function sistema_cadastrar_hospedes() {
  const { value: escolha } = await Swal.fire({
    title: "Cadastro de Hóspedes",
    input: "select",
    inputOptions: {
      1: "Cadastrar",
      2: "Pesquisar",
      3: "Voltar"
    },
    inputPlaceholder: "Escolha uma opção",
    confirmButtonColor: "#7C3AED"
  });

  if (escolha === "1") {
    cadastrar_hospedes();
  } else if (escolha === "2") {
    pesquisar_hospedes();
  } else {
    return sair();
  }
}

// CADASTRAR
async function cadastrar_hospedes() {
  if (lista_hospedes.length >= 15) {
    return Swal.fire("Erro", "Máximo de 15 hóspedes.", "error");
  }

  const { value: nome } = await Swal.fire({
    title: "Novo Hóspede",
    input: "text",
    inputPlaceholder: "Digite o nome",
    showCancelButton: true
  });

  if (nome) {
    lista_hospedes.push(nome);

    await Swal.fire({
      title: "Sucesso!",
      text: `${nome} foi cadastrado(a)!`,
      icon: "success"
    });
  }

  sistema_cadastrar_hospedes();
}

// PESQUISAR
async function pesquisar_hospedes() {
  const { value: nome } = await Swal.fire({
    title: "Pesquisar Hóspede",
    input: "text",
    inputPlaceholder: "Digite o nome",
    showCancelButton: true
  });

  if (nome) {
    if (lista_hospedes.includes(nome)) {
      await Swal.fire("Encontrado!", `${nome} está cadastrado.`, "success");
    } else {
      await Swal.fire("Não encontrado", `${nome} não está na lista.`, "error");
    }
  }

  sistema_cadastrar_hospedes();
}

// ABASTECIMENTO
function abastecer_carros() {
  Swal.fire({
    title: `HOTEL ${hotel}`,
    text: "Bem-vindo ao abastecimento de carros!",
    icon: "info"
  });
}

// ERRO
function erro() {
  Swal.fire("Erro", "Escolha uma opção válida.", "error");
}

// SAIR
async function sair() {
  const result = await Swal.fire({
    title: "Deseja sair?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Sim",
    cancelButtonText: "Não"
  });

  if (result.isConfirmed) {
    Swal.fire("Até logo!", "", "success");
  }
}