let tentativas = 3;

window.onload = bem_vindo;

function bem_vindo() {
    Swal.fire({
        title: "Bem-vindo ao Hotel Rockstar!",
        text: "Faça login para acessar o sistema de reservas.",
        icon: "info",
    });
}

function acesso(event) {
    event.preventDefault(); // impede reload

    let senha = document.getElementById("senha").value;
    let usuario = document.getElementById("usuario").value;

    if (senha === "2678") {
        Swal.fire({
            title: "Acesso concedido!",
            text: "Bem-vindo, " + usuario + ".",
            icon: "success",
        }).then(() => {
            location.href = "hora-de-codar7.html";
        });

    } else {
        tentativas--;

        if (tentativas > 0) {
            Swal.fire({
                title: "Acesso negado!",
                text: `Usuário ou senha incorretos. Tentativas restantes: ${tentativas}`,
                icon: "error",
            });
        } else {
            Swal.fire({
                title: "Acesso bloqueado!",
                text: "Você excedeu o número de tentativas.",
                icon: "error",
            });
        }
    }
}