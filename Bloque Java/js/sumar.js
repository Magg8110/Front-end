document.getElementById("sumar").addEventListener("click", function(){
    
    let numeroA =document.getElementById("numero1").value;
    console.log("El valor del numeroA es: "+numeroA);

    let numeroB =document.getElementById("numero2").value;
    console.log("El valor del numeroB es: "+numeroB);

    let resultado = sumar(parseInt(numeroA),parseInt(numeroB)); //parseInt convierte strings en numeros 
    console.log("El resultado de la suma es: "+resultado);

    document.getElementById("resultado").innerHTML = resultado;
    document.getElementById("contenedorResultado").contenedorResultado.style.display = "block";
});

function sumar(a,b){
    return a + b;
}