const rueda = document.getElementById("rueda");
const marca = document.querySelector(".marca");
const musica = document.getElementById("musica");
const valor = document.getElementById("valor");
const numeros = document.querySelectorAll(".numero");


const ANGULO_MIN = -135;    // Posición del 0
const ANGULO_MAX = 135;     // Posición del 10

let posicionMarca = ANGULO_MIN; // Posición de la marca al inicio en el 0
let girando = false; // Estado de la rueda

girarMarca();
actualizarVolumen();


/**
 * Coloca la marca en la posición indicada.
 */
function girarMarca() {
    marca.style.rotate = `${posicionMarca}deg`;
}

/**
 * Determina el ángulo que forma el punto donde se está agarrando la rueda
 * para girarla, respecto a su centro.
 * La función atan2(y, x) devuelve el ángulo en radianes entre el eje X positivo y el punto (x, y).
 * Pasamos los datos atan2(dx, dy) para que el ángulo lo dé respecto al eje Y en lugar del X.
 * Así 0º coincide con el eje Y positivo.
 * @param {*} evento Evento de click o arrastre aplicado en la rueda.
 * @returns Un ángulo medido respecto al centro de la rueda y tomando como 0 el eje Y positivo, dando valores positivos
 * en el sentido de las agujas del reloj, y negativos en el sentido contrario.
 */
function anguloRaton(evento) {
    const caja = rueda.getBoundingClientRect();
    const centroX = caja.left + caja.width / 2;
    const centroY = caja.top + caja.height / 2;

    const dx = evento.clientX - centroX;
    const dy = evento.clientY - centroY; // Es negativo hacia arriba del centro

    return Math.atan2(dx, -dy) * (180 / Math.PI); // Pasar de radianes a grados
}

/**
 * Gira la rueda. Actualiaz la posición de la marca y el volumen de la música.
 * @param {*} evento Evento de giro de la rueda.
 */
function girarRueda(evento) {
    let angulo = anguloRaton(evento);

    // Hacer tope: si se pasa de los límites, se ajusta al límite más cercano
    // en vez de ignorarlo, para que se pueda llegar justo al 0 y al 10
    angulo = Math.min(Math.max(angulo, ANGULO_MIN), ANGULO_MAX);

    // Comprobar que no se hizo un giro forzando más allá del tope,
    // por ejemplo, agarando la rueda y pasando del 0 al 10
    if (Math.abs(angulo - posicionMarca) > 90) {
        return;
    }

    posicionMarca = angulo;
    girarMarca();
    actualizarVolumen();
}

function actualizarVolumen() {
    const volumen = (posicionMarca - ANGULO_MIN) / (ANGULO_MAX - ANGULO_MIN); // Valor entre 0 y 1
    const volumenRedondeado = Math.round(volumen * 10);

    musica.volume = volumen;
    valor.textContent = volumenRedondeado;

    numeros.forEach((num, i) => {
        num.classList.toggle("activo", i > 0 && i <= volumenRedondeado); // Pone la clase si se cumple la condición, y la quita en caso contrario
    });

}


rueda.addEventListener("pointerdown", (evento) => {
    girando = true;
    rueda.classList.add("girando");

    rueda.setPointerCapture(evento.pointerId);
    girarRueda(evento);

    if (musica.paused) {
        musica.play();
    }
});

rueda.addEventListener("pointermove", (evento) => {
    if (!girando) {
        return;
    }
    girarRueda(evento);
});

rueda.addEventListener("pointerup", (evento) => {
    girando = false;
    rueda.classList.remove("girando");
});