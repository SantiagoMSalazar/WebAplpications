function grabarDato() {
  var texto = document.getElementById('textInput').value;

  sessionStorage.setItem('dato', texto);

  alert('Dato guardado correctamente');
}

function leerDato() {
  var dato = sessionStorage.getItem('dato');

  if (dato) {
    alert('Dato guardado en el Session Storage:\nTexto: ' + dato);
  } else {
    alert('No se encontró ningún dato en el Session Storage');
  }
}