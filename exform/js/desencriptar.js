var entradaTexto = document.querySelector(".input-text");
var salidaTexto = document.querySelector(".salida-texto");
var seccionTexto1 = document.querySelector(".texto1");
var seccionTexto2 = document.querySelector(".texto2");
var btnCopiar = document.querySelector(".copiar");

function validar(textoValidar) {
    // Función de validación existente, mantenerla si es adecuada para tu caso
    // Puedes modificarla según tus requisitos de validación
    const letras = ["a","e","i","o","u"];
    var conteo = 0;

    for (var posicion = 0; posicion < textoValidar.length; posicion++) {
        for (var letra = 0; letra < letras.length; letra++) {
            if (textoValidar.charAt(posicion) == letras[letra]) {
                conteo++;
            }
        }
    }
    if (conteo == 0) {
        return true;
    }
    return false;
}

function encriptar() {
    var texto = entradaTexto.value;
    var salida = "";

    // Validación básica del texto
    if (texto.trim() === "") {
        alert("Ingrese un texto para encriptar.");
        return;
    }

    // Convertir cada carácter a su representación binaria
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if(charCode(i) == "i"){
            return("imes")
        }
        if(charCode(i) == "e"){
            return("enter")
        }
        if(charCode(i) == "a"){
            return("ai")
        }
        if(charCode(i) == "o"){
            return("ober")
        }
        if(charCode(i) == "u"){
            return("ufat")
        }

        salida += texto + " "; // Separar cada binario por un espacio
    }

    for (var i = 0; i < texto.length; i++) {
        if charCode = texto
    }

    entradaTexto.value = "";
    salidaTexto.value = salida.trim(); // Mostrar salida sin espacio extra al final
    ocultar();
}

function desencriptar() {
    var texto = entradaTexto.value.trim();
    var binarios = texto.split(" "); // Separar binarios por espacio

    var salida = "";

    // Convertir cada binario a su caracter correspondiente
    for (var i = 0; i < binarios.length; i++) {
        if (binarios[i] !== "") {
            var decimal = parseInt(binarios[i], 2); // Convertir binario a decimal
            var caracter = String.fromCharCode(decimal); // Obtener el caracter

            salida += caracter;
        }
    }

    entradaTexto.value = "";
    salidaTexto.value = salida;
    ocultar();
}





function ocultar() {
    salidaTexto.style.background = "white";
    seccionTexto1.style.display = "none";
    seccionTexto2.style.display = "none";
    btnCopiar.style.display = "";
}

function mostrar() {
    salidaTexto.style.background = "#FFF no-repeat center url(imagenes/notexto.png)";
    seccionTexto1.style.display = "";
    seccionTexto2.style.display = "";
    btnCopiar.style.display = "none";
}

function copiar() {
    var copia = salidaTexto.value;
    navigator.clipboard.writeText(copia);

    var anuncio = document.querySelector(".anuncio");
    anuncio.textContent = "Texto copiado";
    anuncio.style.display = "block";
    setTimeout(() => {
        anuncio.style.display = "none";
        salidaTexto.value = "";
        mostrar();
    }, 950);
}
