const botaoConhecer = document.querySelector("#botao-conhecer");
const secaoInformacoes = document.querySelector("#informacoes");

botaoConhecer.addEventListener("click", function () {
    secaoInformacoes.scrollIntoView({ behavior: "smooth" });
});
