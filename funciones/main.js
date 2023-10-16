//funciones
function concatenarComidasRapi(listaRapida) {
    if (nombreComida !== "") {
        nombreComida += ", ";
    }

    nombreComida += listaRapida;
}

function concatenarComidasEla(listaElaborada) {
    if (nombreComida !== "") {
        nombreComida += ", ";
    }

    nombreComida += listaElaborada;
}


function algoRapido() {

    let listaRapida = prompt("Quiere: 1-Sanguche de milanesa 2-Empanadas 0-volver")

    while (listaRapida !== "0") {
        switch (listaRapida) {
            case "1":
                concatenarComidasRapi(listaRapida);
                total += 1500;
                break;

            case "2":
                concatenarComidasRapi(listaRapida);
                total += 300;
                break;

            default:
                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }
        listaRapida = prompt("¿Quiere agregar algo más? 1-Sanguche de milanesa 2-Empanadas 0-Salir");
    }
}

function algoElaborado() {
    let listaElaborada = prompt("Quiere: 1-Ravioles con Tuco 2-Pastel de Papa 3-Napolitana con guarnición 4-Tarta de jamón y queso 0-Volver");

    while (listaElaborada !== "0") {
        switch (listaElaborada) {
            case "1":
                concatenarComidasEla(listaElaborada);
                total += 1500;
                break;

            case "2":
                concatenarComidasEla(listaElaborada);
                total += 1500;
                break;

            case "3":
                concatenarComidasEla(listaElaborada);
                total += 2100;
                break;

            case "4":
                concatenarComidasEla(listaElaborada);
                total += 1300;
                break;

            default:
                alert("INGRESASTE UNA OPCIÓN INCORRECTA");
                break;
        }
        listaElaborada = prompt("¿Quiere agregar algo más? 1-Ravioles con Tuco 2-Pastel de Papa 3-Napolitana con guarnición 4-Tarta de jamón y queso 0-Salir");
    }
}

function totalDeLaCompra() {
    alert("Su pedido es: " + nombreComida + ". El total de su pedido es: $" + total);
}


//INICIO DEL PROGRAMA
let nombreComida = "";
let total = 0;
let operacion = prompt("¿Que te gustaría comer hoy? Ingrese 1-si quiere algo rápido 2-si quiere algo elaborado 3-si quiere saber el total de su cuenta  0-si quiere salir");

while (operacion !== "0") {
    switch (operacion) {

        case "1":
            algoRapido();

            break;

        case "2":
            algoElaborado();
            break;

        case "3":
            totalDeLaCompra();
            break;

        default:
            alert("INGRESASTE UNA OPCIÓN INCORRECTA");
            break;
    }

    //VOLVER A PEDIR UNA OPCIÓN AL USUARIO
    operacion = prompt("¿Que te gustaría comer hoy? Ingrese 1-si quiere algo rápido 2-si quiere algo elaborado 3-si quiere saber el total de su cuenta  0-si quiere salir");
}

alert("Gracias por su compra")