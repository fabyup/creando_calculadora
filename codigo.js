const pantalla = document.querySelector("input");
const OPERADORES = ["+", "-", "*", "/", "%"];
const NUMEROS = "0123456789";

function actualizarPantalla(input) {
  let ultimoCaracter = pantalla.value[pantalla.value.length + -1];
  if (input.innerHTML === "=") {
    pantalla.value = eval(pantalla.value);
  } else {
    pantalla.value += input.innerHTML;
  }

  if (
    !OPERADORES.includes(ultimoCaracter) ||
    NUMEROS.includes(input.innerHTML)
  ) {
  } else {
    alert("opcion no permitida");
  }
}

function borrarPantalla() {
  pantalla.value = " ";
}

function borrarUnCaracter() {
  pantalla.value = pantalla.value.slice(0, -1);
}
