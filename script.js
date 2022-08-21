let cartas = 0;
const baralho = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];
let carta1 = "";
let carta2 = "";
let final = 0;
let jogadas = 0;
let segundos = 0;
let intervalo;

iniciarJogo();
function iniciarJogo() {
  cartas = 0;
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

function comparador() {
  return Math.random() - 0.5;
}

function distribuirCartas() {
  final = 0;
  jogadas = 0;
  segundos = 0;
  intervalo = undefined;
  intervalo = setInterval(tempo, 1000);
  let campo = document.querySelector(".jogo");
  campo.innerHTML = "";
  let embaralhadas = [];
  for (i = 0; i < cartas; i++) {
    embaralhadas.push(baralho[i]);
  }
  embaralhadas.sort(comparador);
  console.log(embaralhadas);
  let contador = 0;
  while (contador < cartas) {
    campo = document.querySelector(".jogo");
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
  if (carta1 === "") {
    elemento.classList.add("flipcard");
    carta1 = elemento;
    jogadas++;
  } 
  else if (carta2 === "") {
    elemento.classList.add("flipcard");
    carta2 = elemento;
    console.log(carta1);
    console.log(carta2);
    jogadas++;
    setTimeout(verificador, 2000);
  }
}

function verificador(){
  if (carta1.innerHTML === carta2.innerHTML){
    carta1 = "";
    carta2 = "";
    final += 2;
    ending();

  }else if (carta1 !== carta2){
    carta1.classList.remove("flipcard");
    carta2.classList.remove("flipcard");
    carta1 = "";
    carta2 = "";
  }
}

function ending(){
  if (final === cartas){
    alert(`Você ganhou em ${jogadas} jogadas e ${segundos} segundos!`);
    finalquestion();
  }
}

function finalquestion(){
  let perguntafinal = prompt("Quer jogar de novo? sim ou não");
  clearInterval(intervalo);
  if (perguntafinal === "sim"){
    iniciarJogo();
  }else if (perguntafinal === "não"){
    alert(`Você ganhou em ${jogadas} jogadas e ${segundos} segundos!`);
  }else{
    finalquestion();
  }
}

function tempo(){
  segundos++;
  let cronometro = document.querySelector("span");
  cronometro.innerHTML = segundos;
}



