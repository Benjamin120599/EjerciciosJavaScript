function octal() {
    let decimal = document.getElementById('caja_decimal').value;
    var a = new Number(decimal); 
    return a.toString(8);
}

function hexadecimal() {
    let decimal = document.getElementById('caja_decimal').value;
    var a = new Number(decimal); 
    return a.toString(16);
}

function binario() {
    let decimal = document.getElementById('caja_decimal').value;
    var a = new Number(decimal); 
    return a.toString(2);
}

function prueba() {
    var x = 7;
    return x.toString(2)
}