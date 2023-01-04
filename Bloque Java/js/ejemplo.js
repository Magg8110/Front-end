document.getElementById('boton').onclick = function() { //click en el boton
    console.log("Capturamos el evento click"); //comentario consola despues de click
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js"; // modifica texto inicial
}

document.addEventListener('click', function() { //cualquier click
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js";
});
//document es para todo el documento


document.getElementById('boton').addEventListener('click', function() { //cualquier click
    console.log("Hola mundo desde EventListener");
    document.getElementById("demo").innerHTML = "Estamos probando nuestro primer evento en js";
});

// en el documento buscar el elemento boton y agregale un escuchador



document.getElementById('boton_color').addEventListener('click', function() { 
    document.body.style.backgroundColor = '#FF0000';

});

document.getElementById('boton_default').addEventListener('click', function() { 
    document.body.style.backgroundColor = 'blueviolet';

});

document.getElementById('boton_ocultar').addEventListener('click', function() { 
    document.getElementById('demo').style.display = 'none';

});


const collection = document.getElementsByClassName('prueba');
for(let i = 0; i < collection.length; i++){
    collection[i].style.backgroundColor = "pink"
}