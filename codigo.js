const inputpantalla = document.querySelector("pantalla");

function actulizarPantalla(boton){
    if (boton.innerHTML === "="){
        inputpantalla.value = eval (inputpantalla.value);

    }else{
        inputpantalla.value += boton .innerHTML
    }

}