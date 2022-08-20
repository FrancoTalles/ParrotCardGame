let cartas = 0;
iniciarJogo();
function iniciarJogo(){
    cartas = Number(prompt("Quantas cartas você quer jogar? 4 a 14, só pares"));
    if (cartas < 4){
        iniciarJogo();
    }else if (cartas > 14){
        iniciarJogo();
    }else if (cartas % 2 === 0){
        distribuirCartas();
    }else{
        iniciarJogo();
    }

}

function distribuirCartas(){
    const campo = document.querySelector(".jogo");
    let carta = `
    <div class="carta">
        <img src="imagens/front.png">
    </div>
    `;
    let contador = 0;
    while (contador < cartas){
        campo.innerHTML += carta;
        contador += 1;
    }
}