function contVocales() {
    var cadena = document.getElementById('caja_cadena').value;
    cadena = cadena.toUpperCase();
    var cont=0;

    for(var i=0; i<cadena.length; i++) {
        if(cadena.substring(i, i+1) == 'A' || cadena.substring(i, i+1) == 'E' || cadena.substring(i, i+1) == 'I' || cadena.substring(i, i+1) == 'O' || cadena.substring(i, i+1) == 'U') {
            cont = cont + 1;
        }
    }

    return cont;
}

function contConsonantes() {
    var cadena = document.getElementById('caja_cadena').value;
    cadena = cadena.toUpperCase();
    var cont=0;

    for(var i=0; i<cadena.length; i++) {
        if(cadena.substring(i, i+1) == 'A' || cadena.substring(i, i+1) == 'E' || cadena.substring(i, i+1) == 'I' || cadena.substring(i, i+1) == 'O' || cadena.substring(i, i+1) == 'U') {
            cont = cont + 1;
        }
    }
    var total = cadena.length - cont;
    return total;
}

function contLetra() {
    var cadena = document.getElementById('caja_cadena').value;
    var letra = document.getElementById('caja_letra').value;
    cadena = cadena.toUpperCase();
    letra = letra.toUpperCase();
    var cont=0;

    for(var i=0; i<cadena.length; i++) {
        if(cadena.substring(i, i+1) == letra) {
            cont = cont + 1;
        }
    }

    return cont;
}

function cadenaLoca() {
    var cadena = document.getElementById('caja_cadena').value;
    cadena = cadena.toLowerCase();
    
    var nuevaCadena = "";

    for(var i=0; i<cadena.length; i++) {
        if(i%2 == 0) {
            //cadena.substring(i, i+1).toUpperCase();
            nuevaCadena = nuevaCadena + cadena.substring(i, i+1).toUpperCase();
        } else {
            nuevaCadena = nuevaCadena + cadena.substring(i, i+1);
        }
    }

    return nuevaCadena;    
}

