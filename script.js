function flipCard(carta) {
    const card1 = carta.querySelector(".card1");
    card1.classList.toggle("front");

    const card2 = carta.querySelector(".card2");
    card2.classList.toggle("back-face");
}