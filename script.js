const gpt = document.querySelector("#chatgpt");
const notion = document.querySelector("#notion");
const mathway = document.querySelector("#mathway");
const jasper = document.querySelector("#jasper");
const midjourney = document.querySelector("#midjourney");
const elevenlabs = document.querySelector("#elevenlabs");
const adm = document.querySelector("#adm");
const pesq = document.querySelector("#pesq");
const calc = document.querySelector("#calc");
const vend = document.querySelector("#vend");
const outras = document.querySelector("#outras");
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.open("index.html", "_self");
});

gpt.addEventListener("click", () => {
    window.open("https://www.chatgpt.com", "_blank");
});

notion.addEventListener("click", () => {
    window.open("https://www.notion.com/pt/product/ai", "_blank");
});

mathway.addEventListener("click", () => {
    window.open("https://www.mathway.com/pt", "_blank");
});

jasper.addEventListener("click", () => {
    window.open("https://www.jasper.ai/", "_blank");
});

midjourney.addEventListener("click", () => {
    window.open("https://www.midjourney.com", "_blank");
});

elevenlabs.addEventListener("click", () => {
    window.open("https://www.elevenlabs.io/", "_blank");
});

var administracao = [notion]
var pesquisa = [gpt]
var matematica = [mathway]
var vendas = [jasper]
var outros = [midjourney, elevenlabs]

const cards = [gpt, notion, mathway, jasper, midjourney, elevenlabs];

function filtrar(lista) {
    cards.forEach(card => {
        if (lista.includes(card)) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }    });
}

adm.addEventListener("click", () => {
    filtrar(administracao);
});

pesq.addEventListener("click", () => {
    filtrar(pesquisa);
});

calc.addEventListener("click", () => {
    filtrar(matematica);
});

vend.addEventListener("click", () => {
    filtrar(vendas);
});

outras.addEventListener("click", () => {
    filtrar(outros);
});

const bar = document.querySelector("#bar");

bar.addEventListener("input", () => {

    const valor = bar.value.toLowerCase();

    cards.forEach(card => {

        if(card.id.toLowerCase().includes(valor)){
            card.classList.remove("hidden");
        }

        else{
            card.classList.add("hidden");
        }

    });

});