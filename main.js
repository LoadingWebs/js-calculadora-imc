function mostrarResultado(texto){
    let resultado= document.getElementById("resultado")
    resultado.innerHTML= texto
}

function calcularIMC(){
    if(!validarFormulario()){
        return false;
    }

    
}

function validarFormulario(){
    let peso= document.getElementById("Peso")
    let altura= document.getElementById("Altura")
        
                /*
            //opcion 1
            document.getElementById("btnEnviar").addEventListener("click", calcularIMC)
            //opcion 2
            document.getElementById("btnEnviar").onclick=calcularIMC; */


    if( peso.value == ""){
        mostrarResultado("debe completar el campo peso")
        return false
    }else{
        mostrarResultado("")
    }
    if( altura.value == ""){
        mostrarResultado("debe completar el campo altura")
        return false
    }else{
        mostrarResultado("")
    }
}


