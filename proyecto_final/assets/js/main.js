/*const nombre = prompt("Ingrese su nombre");

const mensaje = "Bienvenido " + nombre + " a El Remanso";

alert(mensaje);
console.log(mensaje);



let habitacion = prompt("qué habitación preferís?");
let simple = 2000
let doble = 3500

if ((habitacion == "simple") || (habitacion == "Simple")) {
    console.log("La habitacion sale 2000");
} else if ((habitacion == "doble") || (habitacion == "Doble")) {
    console.log("La habitacion sale 3500");
} else {
    console.log("datos incorrectos");
}


let huesped;
for (let huesped = 1; huesped <=2; huesped++){
    reserva= prompt ("ingrese nombre del huesped");
}
    alert("Datos ingresados correctamente");*/

    const multiplicar = (a, b) => {
    return a * b;
}

const cobrar = (importe)=>{
    let pago=0;
    while (importe > 0 && pago !=importe){
    pago= Number (prompt (`Ingrese ${importe}`))
    }
    alert("Muchas gracias por confiar su descanso a El Remanso");
}

function confirmarReserva(mensaje, precio) {
    alert(`Muchas gracias por elegirnos, ${mensaje} El total es ${precio}`);
    cobrar (precio);
}

function hacerReserva(reserva, cantidad) {
    let precio = 0;
    let mensaje = ""

    switch (reserva) {
        case 1:
            precio = 2000;
            precio = multiplicar(precio, cantidad);
            break;
        case 2:
            precio = 3500;
            precio = multiplicar(precio, cantidad);
            break;
        case 3:
            precio = 5000;
            precio = multiplicar(precio, cantidad);
            break;
        case 4:
            precio = 7000;
            precio = multiplicar(precio, cantidad);
            break;
        case 5:
            precio = 8500;
            precio = multiplicar(precio, cantidad);
            break;
        case 6:
            precio = 10000;
            precio = multiplicar(precio, cantidad);
            break;
        default:
            mensaje = "No hay disponibilidad";
            break;
    }
    confirmarReserva(mensaje,precio);
}

const pedirReserva = () => {
    const reserva = Number(prompt(`Bienvenidos a El Remanso
    Elija su habitación
    1- Habitación Simple, 2000
    2- Habitación Doble, 3500
    3- Cabaña 4 personas, 5000
    4- Cabaña 6 personas, 7000
    5- Cabaña 6 personas, 8500
    6- Cabaña 10 personas, 10000`));
    const cantidad = Number(prompt("Ingrese cantidad de habitaciones"));
    hacerReserva(reserva, cantidad);
}


pedirReserva();