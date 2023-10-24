function mostrarResultado(texto){
    let resultado= document.getElementById("resultado")
    resultado.innerHTML= texto
}

function calcularIMC(){
    /* if(!validarFormulario()){
        return false;
    } */
    let peso= document.getElementById("Peso").value
    let altura= document.getElementById("Altura").value
    let IMC = obtenerImc(peso, altura)
    let salud = obtenerEstadoDeSalud (IMC)
    mostrarResultado (salud); 

    
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

function obtenerImc (peso, altura){
    let imc = peso / (altura * altura)
    return imc 
}


function obtenerEstadoDeSalud(imc){
    if(imc < 18.5){
        return "Peso inferior al normal"
    }else if (imc >= 18.5 && imc <= 24.9){
        return "Peso normal"
    }else if (imc >= 25 && imc <= 29.9){
        return "Peso superior al normal"
        }else{
            return "obeso"
        }
 }