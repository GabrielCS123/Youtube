const ativador = document.querySelector(".botão_ativador");
const menu = document.querySelector(".menu__extendido");

ativador.onclick = function () {
    menu.classList.add("menu__ativado");
}

const desativador = document.querySelector(".botão_desativador");
desativador.onclick = function () {
    menu.classList.remove("menu__ativado");
}