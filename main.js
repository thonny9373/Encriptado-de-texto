function encriptarTexto(texto) {
  let encriptado = texto.replace(/e/g, "enter")
                        .replace(/i/g, "imes")
                        .replace(/a/g, "ai")
                        .replace(/o/g, "ober")
                        .replace(/u/g, "ufat");
  return encriptado;
}

function desencriptarTexto(texto) {
  let desencriptado = texto.replace(/enter/g, "e")
                           .replace(/imes/g, "i")
                           .replace(/ai/g, "a")
                           .replace(/ober/g, "o")
                           .replace(/ufat/g, "u");
  return desencriptado;
}

function copiarTexto() {
  let resultado = document.getElementById("resultado");
  resultado.select();
  document.execCommand("copy");
  document.getElementById("texto").value = "";
  document.getElementById("resultado").value = "";
  document.getElementById("vacio").style.display = "block";
  document.getElementById("resultado").style.display = "none";
  document.getElementById("copiar").style.display = "none";
}

document.getElementById("encriptar").addEventListener("click", function() {
  let texto = document.getElementById("texto").value;
  let resultado = encriptarTexto(texto);
  document.getElementById("resultado").value = resultado;
  document.getElementById("vacio").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("copiar").style.display = "block";
});

document.getElementById("desencriptar").addEventListener("click", function() {
  let texto = document.getElementById("texto").value;
  let resultado = desencriptarTexto(texto);
  document.getElementById("resultado").value = resultado;
  document.getElementById("vacio").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("copiar").style.display = "block";
});

document.getElementById("copiar").addEventListener("click", function() {
  copiarTexto();
});

document.getElementById("texto").addEventListener("input", function(e) {
  let texto = e.target.value;
  let textoFiltrado = texto.replace(/[^a-zñ\s]/g, '');
  if (texto !== textoFiltrado) {
    alert("Solo se admiten letras en minúsculas");
    e.target.value = textoFiltrado;
  }
});

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("header").classList.add("fade-in");
  document.querySelector("main").classList.add("fade-in");
  document.getElementById("texto").classList.add("move-in");
  document.getElementById("mensajes").classList.add("move-in");
  document.querySelector(".botones").classList.add("move-in");
});
