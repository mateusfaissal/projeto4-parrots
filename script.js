let numCartas = prompt("Com quantas cartas você deseja jogar? (Digite um número par de 4 a 14)");
while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
  numCartas = prompt("Valor inválido. Por favor, digite um número par de 4 a 14.");
}

function flipCard(carta) {
    const card1 = carta.querySelector(".card1");
    card1.classList.toggle("front");

    const card2 = carta.querySelector(".card2");
    card2.classList.toggle("back-face");
}