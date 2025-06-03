function alternarTema() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    const header = document.querySelector("header");
    const themeButton = document.createElement("button");
    themeButton.id = "theme-toggle";
    themeButton.textContent = "Alternar Tema";
    themeButton.addEventListener("click", alternarTema);
    header.appendChild(themeButton);
});

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert(`Mensagem enviada!\nNome: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);
        this.reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
    setTimeout(() => {
        document.getElementById('status-mensagem').textContent = 'Mensagem enviada com sucesso!';
        document.getElementById('formulario').reset();
    }, 2000);
});