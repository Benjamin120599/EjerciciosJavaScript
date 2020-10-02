function generarCurp() { 

    var curp = "";

    var apellido1 = document.getElementById('caja_apellido1').value;
    apellido1.toUpperCase();

    //Primer letra y primer vocal del primer apellido
    if(apellido1 != null || apellido1.length != 0 ) {
        curp = curp + apellido1.substring(0, 1);

        for(var i=1; i<apellido1.length; i++) {
            if(apellido1.substring(i, i+1).equals("A") || apellido1.substring(i, i+1).equals("E") || apellido1.substring(i, i+1).equals("I") || apellido1.substring(i, i+1).equals("O") || apellido1.substring(i, i+1).equals("U") ) {
                curp = curp + apellido1.substring(i, i+1);
                break;
            }
        }
    }

    var apellido2 = document.getElementById('caja_apellido2').value;
    apellido2.toUpperCase();

    //Primera letra del segundo apellido
    if(apellido2 != null || apellido2.length != 0) {
        curp = curp + apellido2.substring(0, 1);
    } else {
        curp = curp + "X";
    }

    var nombre = document.getElementById('caja_nombre').value;
    nombre.toUpperCase();

    //Primer letra del nombre
    var arregloNombre[] = nombre.split(" ");

    if(arregloNombre.length() >= 2) {
        if(arregloNombre[0].equals("JOSE") || arregloNombre[0].equals("MARIA")) {
            curp = curp + arregloNombre[1].substring(0, 1);
        } else {
            curp = curp + arregloNombre[0].substring(0, 1);
        }
        
    } else {
        curp = curp + arregloNombre[0].substring(0, 1);
    }

    //Año de Nacimiento
    var año = document.getElementById('caja_año').value;
    var fecha = año.substring(2, 3);

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
    var opcion3 = dia.options[dia.selectedIndex].value;
    
    if(opcion3 == 1) {
        curp = curp + "M";
    } else if(opcion3 == 2) {
        curp = curp + "H";
    } 

    //Estado
    var estado = document.getElementById('estado');
    var opcion4 = dia.options[dia.selectedIndex].value;
    
    if(opcion4 == 1) {
        curp = curp + "AS";
    } else if(opcion3 == 2) {
        curp = curp + "BC";
    } else if(opcion3 == 3) {
        curp = curp + "BS";
    } else if(opcion3 == 4) {
        curp = curp + "CC";
    } else if(opcion3 == 5) {
        curp = curp + "CL";
    } else if(opcion3 == 6) {
        curp = curp + "CM";
    } else if(opcion3 == 7) {
        curp = curp + "CS";
    } else if(opcion3 == 8) {
        curp = curp + "CH";
    } else if(opcion3 == 9) {
        curp = curp + "DF";
    } else if(opcion3 == 10) {
        curp = curp + "DG";
    } else if(opcion3 == 11) {
        curp = curp + "GT";
    } else if(opcion3 == 12) {
        curp = curp + "GR";
    } else if(opcion3 == 13) {
        curp = curp + "HG";
    } else if(opcion3 == 14) {
        curp = curp + "JC";
    } else if(opcion3 == 15) {
        curp = curp + "MC";
    } else if(opcion3 == 16) {
        curp = curp + "MN";
    } else if(opcion3 == 17) {
        curp = curp + "MS";
    } else if(opcion3 == 18) {
        curp = curp + "NT";
    } else if(opcion3 == 19) {
        curp = curp + "NL";
    } else if(opcion3 == 20) {
        curp = curp + "OC";
    } else if(opcion3 == 21) {
        curp = curp + "PL";
    } else if(opcion3 == 22) {
        curp = curp + "QT";
    } else if(opcion3 == 23) {
        curp = curp + "QR";
    } else if(opcion3 == 24) {
        curp = curp + "SP";
    } else if(opcion3 == 25) {
        curp = curp + "SL";
    } else if(opcion3 == 26) {
        curp = curp + "SR";
    } else if(opcion3 == 27) {
        curp = curp + "TC";
    } else if(opcion3 == 28) {
        curp = curp + "TS";
    } else if(opcion3 == 29) {
        curp = curp + "TL";
    } else if(opcion3 == 30) {
        curp = curp + "VZ";
    } else if(opcion3 == 31) {
        curp = curp + "YN";
    } else if(opcion3 == 32) {
        curp = curp + "ZS";
    } else if(opcion3 == 33) {
        curp = curp + "NE";
    }
    

    //Siguiente consonante del primer apellido
    if(apellido1 != null || apellido1.length != 0 ) {
    
        for(var i=1; i<apellido1.length; i++) {
            if(!apellido1.substring(i, i+1).equals("A") && !apellido1.substring(i, i+1).equals("E") && !apellido1.substring(i, i+1).equals("I") && !apellido1.substring(i, i+1).equals("O") && !apellido1.substring(i, i+1).equals("U") ) {
                curp = curp + apellido1.substring(i, i+1);
                break;
            }
        }
    }

    //Siguiente consonante del segundo apellido
    if(apellido2 != null || apellido2.length != 0 ) {
    
        for(var i=1; i<apellido2.length; i++) {
            if(!apellido2.substring(i, i+1).equals("A") && !apellido2.substring(i, i+1).equals("E") && !apellido2.substring(i, i+1).equals("I") && !apellido2.substring(i, i+1).equals("O") && !apellido2.substring(i, i+1).equals("U") ) {
                curp = curp + apellido2.substring(i, i+1);
                break;
            }
        }
    }

    //Siguiente consonante del nombre
    for(var i=1; i<apellido2.length; i++) {
        if(!arregloNombre[0].substring(i, i+1).equals("A") && !arregloNombre[0].substring(i, i+1).equals("E") && !arregloNombre[0].substring(i, i+1).equals("I") && !arregloNombre[0].substring(i, i+1).equals("O") && !arregloNombre[0].substring(i, i+1).equals("U") ) {
            curp = curp + arregloNombre[0].substring(i, i+1);
            break;
        }
    }

    //Dos numeros aleatorios
    var num1 = Math.floor(Math.random()*(10);
    var num2 = Math.floor(Math.random()*(10);

    curp = curp + num1 + num2;
    

    return curp;


}