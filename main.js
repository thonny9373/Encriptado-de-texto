document.addEventListener('DOMContentLoaded', (event) => {
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
    ajustarAltura(event.target);
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
    const outputText = document.getElementById('outputText');
    outputText.value = textoEncriptado;
    ajustarAltura(outputText);
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
    const outputText = document.getElementById('outputText');
    outputText.value = textoDesencriptado;
    ajustarAltura(outputText);
  }

  document.getElementById('copiarBtn').addEventListener('click', function() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    document.getElementById('inputText').value = ''; // Clear the input textarea after copying
    outputText.value = ''; // Clear the output textarea after copying
    ajustarAltura(document.getElementById('inputText')); // Adjust height of input textarea
    ajustarAltura(outputText); // Adjust height of output textarea
  });

  function ajustarAltura(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }

  // Ajustar altura inicialmente en caso de que haya algún texto
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach(textarea => {
    ajustarAltura(textarea);
    textarea.addEventListener('input', e => ajustarAltura(e.target));
  });
});