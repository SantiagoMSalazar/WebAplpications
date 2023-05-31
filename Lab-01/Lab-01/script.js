function grabarLocalStorage() {
    var texto = document.getElementById('texto').value;
    localStorage.setItem('textoGuardado', texto);
    alert('Texto guardado en el LocalStorage.');
  }
  
  function leerLocalStorage() {
    var textoGuardado = localStorage.getItem('textoGuardado');
    if (textoGuardado) {
      alert('Texto guardado en el LocalStorage: ' + textoGuardado);
    } else {
      alert('No se encontró texto en el LocalStorage.');
    }
  }
  