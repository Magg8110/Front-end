
var x = 10;

for (x; x > 0; x--) {    

    if (x == 5){
        break;
    }

    console.log("El valor de x es :"+x);
}

//se corta el ciclo

var x = 10;

for (x; x > 0; x--) {    

    if (x == 5){
        continue;
    }

    console.log("El valor de x es :"+x);
}

//Continua el ciclo