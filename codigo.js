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


    function borrarUnCaracter (){
        let value = pantalla.value;
        let newValue = value.substring(0,value.length - 1);
        pantalla.value = newValue;
    }

    

         
          
          
            
    