document.getElementById('encriptarBtn').addEventListener('click', function(event) {
  event.preventDefault();
  encriptarTexto();
});

document.getElementById('desencriptarBtn').addEventListener('click', function(event) {
  event.preventDefault();
  desencriptarTexto();
});

document.getElementById('inputText').addEventListener('input', function(event) {
  const value = event.target.value;
  if (/[A-Z0-9áéíóúÁÉÍÓÚñÑ!@#$%^&*(),.?":{}|<>;~`+_\-=[\]\\|/¡¿]/.test(value)) {
      alert('Solo letras minúsculas, sin acentos, puntos ni caracteres especiales');
      event.target.value = value.replace(/[A-Z0-9áéíóúÁÉÍÓÚñÑ!@#$%^&*(),.?":{}|<>;~`+_\-=[\]\\|/¡¿]/g, '');
  }
});

function encriptarTexto() {
  let texto = document.getElementById('inputText').value;
  let textoEncriptado = texto
      .toLowerCase()
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
  document.getElementById('outputText').value = textoEncriptado;
}

function desencriptarTexto() {
  let texto = document.getElementById('inputText').value;
  let textoDesencriptado = texto
      .toLowerCase()
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
  document.getElementById('outputText').value = textoDesencriptado;
}

document.getElementById('copiarBtn').addEventListener('click', function() {
  const outputText = document.getElementById('outputText');
  outputText.select();
  document.execCommand('copy');
});
