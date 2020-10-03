function generarCurp() { 

    var curp = "";

    var apellido1 = document.getElementById('caja_apellido1').value;
    apellido1 = apellido1.toUpperCase();

    //Primer letra y primer vocal del primer apellido
    if(apellido1 != null || apellido1.length != 0 ) {
        curp = curp + apellido1.substring(0, 1);

        for(var i=1; i<apellido1.length; i++) {
            if(apellido1.substring(i, i+1) == "A" || apellido1.substring(i, i+1) == "E" || apellido1.substring(i, i+1) == "I" || apellido1.substring(i, i+1) == "O" || apellido1.substring(i, i+1) == "U" ) {
                curp = curp + apellido1.substring(i, i+1);
                break;
            }
        }
    }

    var apellido2 = document.getElementById('caja_apellido2').value;
    apellido2 = apellido2.toUpperCase();

    //Primera letra del segundo apellido
    if(apellido2 != null || apellido2.length != 0) {
        curp = curp + apellido2.substring(0, 1);
    } else {
        curp = curp + "X";
    }

    var nombre = document.getElementById('caja_nombre').value;
    nombre = nombre.toUpperCase();

    //Primer letra del nombre
    if(nombre != null || nombre.length != 0) {
        curp = curp + nombre.substring(0, 1);
    }
    

    //Año de Nacimiento
    var año = document.getElementById('caja_año').value;
    var fecha = año.substring(1, 3);

    //Mes de Nacimiento
    var mes = document.getElementById('mes_nacimiento');
    var opcion1 = mes.options[mes.selectedIndex].value;
    
    if(opcion1 != 0) {
        fecha = fecha + opcion1;
    }

    //Dia de Nacimiento
    var dia = document.getElementById('dia_nacimiento');
    var opcion2 = dia.options[dia.selectedIndex].value;
    
    if(opcion2 != 0) {
        fecha = fecha + opcion2;
    }

    curp = curp + fecha;

    //Sexo
    var sexo = document.getElementById('sexo');
    var opcion3 = sexo.options[sexo.selectedIndex].value;
    
    if(opcion3 == 1) {
        curp = curp + "M";
    } else if(opcion3 == 2) {
        curp = curp + "H";
    } 

    //Estado
    var estado = document.getElementById('estado');
    var opcion4 = estado.options[estado.selectedIndex].value;
    
    if(opcion4 == 1) {
        curp = curp + "AS";
    } else if(opcion4 == 2) {
        curp = curp + "BC";
    } else if(opcion4 == 3) {
        curp = curp + "BS";
    } else if(opcion4 == 4) {
        curp = curp + "CC";
    } else if(opcion4 == 5) {
        curp = curp + "CL";
    } else if(opcion4 == 6) {
        curp = curp + "CM";
    } else if(opcion4 == 7) {
        curp = curp + "CS";
    } else if(opcion4 == 8) {
        curp = curp + "CH";
    } else if(opcion4 == 9) {
        curp = curp + "DF";
    } else if(opcion4 == 10) {
        curp = curp + "DG";
    } else if(opcion4 == 11) {
        curp = curp + "GT";
    } else if(opcion4 == 12) {
        curp = curp + "GR";
    } else if(opcion4 == 13) {
        curp = curp + "HG";
    } else if(opcion4 == 14) {
        curp = curp + "JC";
    } else if(opcion4 == 15) {
        curp = curp + "MC";
    } else if(opcion4 == 16) {
        curp = curp + "MN";
    } else if(opcion4 == 17) {
        curp = curp + "MS";
    } else if(opcion4 == 18) {
        curp = curp + "NT";
    } else if(opcion4 == 19) {
        curp = curp + "NL";
    } else if(opcion4 == 20) {
        curp = curp + "OC";
    } else if(opcion4 == 21) {
        curp = curp + "PL";
    } else if(opcion4 == 22) {
        curp = curp + "QT";
    } else if(opcion4 == 23) {
        curp = curp + "QR";
    } else if(opcion4 == 24) {
        curp = curp + "SP";
    } else if(opcion4 == 25) {
        curp = curp + "SL";
    } else if(opcion4 == 26) {
        curp = curp + "SR";
    } else if(opcion4 == 27) {
        curp = curp + "TC";
    } else if(opcion4 == 28) {
        curp = curp + "TS";
    } else if(opcion4 == 29) {
        curp = curp + "TL";
    } else if(opcion4 == 30) {
        curp = curp + "VZ";
    } else if(opcion4 == 31) {
        curp = curp + "YN";
    } else if(opcion4 == 32) {
        curp = curp + "ZS";
    } else if(opcion4 == 33) {
        curp = curp + "NE";
    }
    
    apellido1.toUpperCase();

    //Siguiente consonante del primer apellido
    if(apellido1 != null || apellido1.length != 0 ) {
    
        for(var i=1; i<apellido1.length; i++) {
            if(apellido1.substring(i, i+1) != "A" || apellido1.substring(i, i+1) != "E" || apellido1.substring(i, i+1) != "I" || apellido1.substring(i, i+1) != "O" || apellido1.substring(i, i+1) != "U") {
                curp = curp + apellido1.substring(i, i+1);
                break;
            }
        }
    }
    apellido2.toUpperCase();

    //Siguiente consonante del segundo apellido
    if(apellido2 != null || apellido2.length != 0 ) {
    
        for(var i=1; i<apellido2.length; i++) {
            if(apellido2.substring(i, i+1) != "A" || apellido2.substring(i, i+1) != "E" || apellido2.substring(i, i+1) != "I" || apellido2.substring(i, i+1) != "O" || apellido2.substring(i, i+1) != "U") {
                curp = curp + apellido2.substring(i, i+1);
                break;
            }
        }
    }

    nombre.toUpperCase();
    //Siguiente consonante del nombre
    for(var i=1; i<nombre.length; i++) {
        if(nombre.substring(i, i+1) != "A" || nombre.substring(i, i+1) != "E" || nombre.substring(i, i+1) != "I" || nombre.substring(i, i+1) != "O" || nombre.substring(i, i+1) != "U" ) {
            curp = curp + nombre.substring(i, i+1);
            break;
        }
    }

    //Dos numeros aleatorios
    var num1 = Math.floor(Math.random()*(10));
    var num2 = Math.floor(Math.random()*(10));

    curp = curp + num1 + num2;
    

    return curp;
}


function verificarDatos() {

    var nombre = document.getElementById('caja_nombre').value;
    if(nombre == nul || nombre.length == 0 ) {
        return false;
    }

    var apellido1 = document.getElementById('caja_apellido1').value;
    if(apellido1 == null || apellido1.length == 0 ) {
        return false;
    }

    var apellido2 = document.getElementById('caja_apellido2').value;
    if(apellido2 == null || apellido2.length == 0 ) {
        return false;
    }

    var año = document.getElementById('caja_año').value;
    if(año == nul || año.length == 0 ) {
        return false;
    }

    var mes = document.getElementById('mes_nacimiento');
    var opcion1 = mes.options[mes.selectedIndex].value;
    if(opcion1 == 0) {
        return false;
    }
 
    var dia = document.getElementById('dia_nacimiento');
    var opcion2 = dia.options[dia.selectedIndex].value;
    if(opcion2 == 0) {
        return false;
    }

    var estado = document.getElementById('estado');
    var opcion3 = estado.options[estado.selectedIndex].value;
    if(opcion3 == 0) {
        return false;
    }

    var sexo = document.getElementById('sexo');
    var opcion4 = sexo.options[sexo.selectedIndex].value;
    
    if(opcion4 == 0) {
        return false;
    }

    return true;
    

}