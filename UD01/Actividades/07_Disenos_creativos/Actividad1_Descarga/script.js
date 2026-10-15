const bloque = document.getElementById("bloque");
const documento = document.getElementById("documento");

bloque.addEventListener("click", () => {
    bloque.classList.add("golpeado");
    documento.classList.add("sale");
});

documento.addEventListener("transitionend", () => {
    if (!documento.classList.contains("sale")) {
        return;
    }
    descargarDocumento();
    esperarYReiniciar();
});


/**
 * Descarga un documento de texto con el contenido "1UP".
 * Crea un enlace temporal y simula un clic para iniciar la descarga.
 */
function descargarDocumento() {
    const archivo = new Blob(["1UP"], { type: "text/plain"});
    const enlace = document.createElement("a");
    enlace.href = URL.createObjectURL(archivo);
    enlace.download = "documento_descargado.txt"
    enlace.click();
}

/**
 * Reinicia el estado del bloque y el documento al hacer clic en el documento.
 */
function reiniciarBoton() {
    bloque.classList.remove("golpeado");
    documento.classList.remove("sale");
}

/**
 * Espera 1 segundo y reinicia el estado del bloque y el documento.
 * Se usa focus porque es cuando la página recupera el foco si salió un diálogo
 * de guardar el documento. Si no aparece el diálogo y guarda directamente,
 * espera al menos 1 segundo para ver el estado de bloque golpeado antes de reiniciarlo.
 */
function esperarYReiniciar() {
    setTimeout(() => {
        if (document.hasFocus()) {
            reiniciarBoton();
        } else {
            window.addEventListener("focus", reiniciarBoton, { once: true });
        }
    }, 1000);
}
