let cartas = 0;
const baralho = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

iniciarJogo();
function iniciarJogo() {
  cartas = Number(prompt("Quantas cartas você quer jogar? 4 a 14, só pares"));
  if (cartas < 4) {
    iniciarJogo();
  } else if (cartas > 14) {
    iniciarJogo();
  } else if (cartas % 2 === 0) {
    distribuirCartas();
  } else {
    iniciarJogo();
  }
}

function distribuirCartas() {
  let embaralhadas = [];
  for (i = 0; i < cartas; i++) {
    embaralhadas.push(baralho[i]);
  }
  embaralhadas.sort(comparador);
  console.log(embaralhadas)
  let contador = 0;
  while (contador < cartas) {
    const campo = document.querySelector(".jogo");
    let carta = `
        <div class="container">
            <div class="carta" onclick="flipar(this)">
                <div class="frente">
                    <img src="imagens/front.png" />
                </div>
                <div class="costa">
                    <img src="imagens/${embaralhadas[contador]}.gif" />
                </div>
            </div>
        </div>`;
    campo.innerHTML += carta;
    contador += 1;
  }
}

function flipar(elemento) {
  elemento.classList.toggle("flipcard");
}

function comparador() {
  return Math.random() - 0.5;
}
