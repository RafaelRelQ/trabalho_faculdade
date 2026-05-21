const gpt = document.querySelector("#chatgpt");
const notion = document.querySelector("#notion");
const mathway = document.querySelector("#mathway");
const jasper = document.querySelector("#jasper");
const midjourney = document.querySelector("#midjourney");
const elevenlabs = document.querySelector("#elevenlabs");
const gemini = document.querySelector("#gemini");
const adm = document.querySelector("#adm");
const pesq = document.querySelector("#pesq");
const calc = document.querySelector("#calc");
const vend = document.querySelector("#vend");
const outras = document.querySelector("#outras");
const logo = document.querySelector(".logo");
const bar = document.querySelector("#bar");
const overlaygpt = document.querySelector(".overlaygpt");
const popupgpt = document.querySelector(".popupgpt");
const overlaynotion = document.querySelector(".overlaynotion");
const popupnotion = document.querySelector(".popupnotion");
const overlaymathway = document.querySelector(".overlaymathway");
const popupmathway = document.querySelector(".popupmathway");
const overlayjasper = document.querySelector(".overlayjasper");
const popupjasper = document.querySelector(".popupjasper");
const overlaymidjourney = document.querySelector(".overlaymidjourney");
const popupmidjourney = document.querySelector(".popupmidjourney");
const overlayelevenlabs = document.querySelector(".overlayelevenlabs");
const popupelevenlabs = document.querySelector(".popupelevenlabs");
const overlaygemini = document.querySelector(".overlaygemini");
const popupgemini = document.querySelector(".popupgemini");

logo.addEventListener("click", () => {
    window.open("index.html", "_self");
});

gpt.addEventListener("click", () => {

    overlaygpt.style.display = "flex";

});



overlaygpt.addEventListener("click", () => {

    overlaygpt.style.display = "none";

});



popupgpt.addEventListener("click", (event) => {

    event.stopPropagation();

});


notion.addEventListener("click", () => {

    overlaynotion.style.display = "flex";
});

overlaynotion.addEventListener("click", () => {
    overlaynotion.style.display = "none";
});

popupnotion.addEventListener("click", (event) => {
    event.stopPropagation();
});

mathway.addEventListener("click", () => {

    overlaymathway.style.display = "flex";
});

overlaymathway.addEventListener("click", () => {
    overlaymathway.style.display = "none";
});

popupmathway.addEventListener("click", (event) => {
    event.stopPropagation();
}); 

jasper.addEventListener("click", () => {

    overlayjasper.style.display = "flex";
});

overlayjasper.addEventListener("click", () => {
    overlayjasper.style.display = "none";
}); 

popupjasper.addEventListener("click", (event) => {
    event.stopPropagation();
});

midjourney.addEventListener("click", () => {

    overlaymidjourney.style.display = "flex";
});

overlaymidjourney.addEventListener("click", () => {
    overlaymidjourney.style.display = "none";
});

popupmidjourney.addEventListener("click", (event) => {
    event.stopPropagation();
});

elevenlabs.addEventListener("click", () => {
    overlayelevenlabs.style.display = "flex";
});

overlayelevenlabs.addEventListener("click", () => {
    overlayelevenlabs.style.display = "none";
});

popupelevenlabs.addEventListener("click", (event) => {
    event.stopPropagation();
});

gemini.addEventListener("click", () => {
    overlaygemini.style.display = "flex";
});

overlaygemini.addEventListener("click", () => {
    overlaygemini.style.display = "none";
});

popupgemini.addEventListener("click", (event) => {
    event.stopPropagation();
});

const administracao = [notion];
const pesquisa = [gpt, gemini];
const calculo = [mathway];
const vendas = [jasper];
const outros = [midjourney, elevenlabs];

const cards = [gpt, notion, mathway, jasper, midjourney, elevenlabs, gemini];

function filtrarCards(categoria){

    cards.forEach(card => {
        card.style.display = "none";
    });

    categoria.forEach(card => {
        card.style.display = "";
    });

}

adm.addEventListener("click", () => {
    filtrarCards(administracao);
});

pesq.addEventListener("click", () => {
    filtrarCards(pesquisa);
});

calc.addEventListener("click", () => {
    filtrarCards(calculo);
});

vend.addEventListener("click", () => {
    filtrarCards(vendas);
});

outras.addEventListener("click", () => {
    filtrarCards(outros);
});

bar.addEventListener("input", () => {

    const valor = bar.value.toLowerCase();

    cards.forEach(card => {

        if(card.id.toLowerCase().includes(valor)){
            card.style.display = "";
        }

        else{
            card.style.display = "none";
        }

    });

});