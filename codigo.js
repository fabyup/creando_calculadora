const pantalla = document.querySelector("input");
const OPERADORES = ["+", "-", "*", "/", "%"];
const NUMEROS = "0123456789";
const OPCION_RESULTADO = "=";
const OPCION_LIMPIAR = "c";
const PANTALLA_VACIA = " ";
const BORRAR_ULTIMO = "←";

function actualizarPantalla(input) {
  let ultimoCaracter = pantalla.value[pantalla.value.length -1];
  if (!OPERADORES.includes(ultimoCaracter) || NUMEROS.includes(input.innerHTML)) {

    switch (input.innerHTML) {
      case OPCION_RESULTADO:
        pantalla.value = eval(pantalla.value);
        break;

      case OPCION_LIMPIAR:
        pantalla.value = PANTALLA_VACIA;
        break;

      case BORRAR_ULTIMO:
        pantalla.value = pantalla.value.slice(0, -1);
        break;
       default:
        pantalla.value += input.innerHTML;
        break;
    }

        }else{
          alert("OPCION NO PERMITIDA")
  }
}  
    


 








