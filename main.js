numero = document.getElementById("numero");

let randomCard = () => {
    //   numero.innerHTML = "";

    let numeroRandom = Math.floor(Math.random() * 12) + 1;
    let picaRandom = Math.floor(Math.random() * 4) + 1;
    let carta = document.querySelector(".carta");
    if (numeroRandom === 10) {
        numero.innerHTML = "J";
    } else if (numeroRandom === 11) {
        numero.innerHTML = "Q";
    } else if (numeroRandom === 12) {
        numero.innerHTML = "K";
    } else if (numeroRandom === 1) {
        numero.innerHTML = "A";
    } else {
        numero.innerHTML = numeroRandom;
    }

    if (picaRandom === 1) {
        carta.classList.add("corazon")
    } else if (picaRandom === 2) {
        carta.classList.add("diamante")
    } else if (picaRandom === 3) {
        carta.classList.add("pica")
    } else if (picaRandom === 4) {
        carta.classList.add("trebol")
    }

}


window.addEventListener("load", randomCard)