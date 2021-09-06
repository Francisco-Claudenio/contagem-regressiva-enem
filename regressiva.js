//aqui esse codigo esta recebendo por meio da exportação o código countdown
import countdown from "./countdown.js"; 

const tempoParaoEnem = new countdown("21 November 2021 12:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

//mostra o tempo passando sem precisar ficar atualizando
function mostrarTempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaoEnem.total[index];
    });
}

setInterval(mostrarTempo, 1000)