const pantalla = document.querySelector("input");

function actualizarPantalla(input){
    if (input.innerHTML === "="){
        pantalla.value = eval (pantalla.value);

    }else{
        pantalla.value += input .innerHTML
    }

}
function borrarPantalla(){
    pantalla.value = "";
}