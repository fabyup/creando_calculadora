const pantalla = document.querySelector("input");
let noAgregarMasDeUnOperador = true;

function actualizarPantalla(input) {
  if (input.innerHTML === "=") {
    pantalla.value = eval(pantalla.value);
  } else {
    pantalla.value += input.innerHTML;
  }
}
function borrarPantalla() {
  pantalla.value = "";
}

function borrarUnCaracter() {
  pantalla.value = pantalla.value.slice(0,-1);
}


