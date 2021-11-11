const nombre = prompt("Ingrese su nombre");

const mensaje = "Bienvenido " + nombre + " a El Remanso";

alert(mensaje);
console.log(mensaje);



/*let habitacion = prompt("qué habitación preferís?");
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

/*const multiplicar = (a, b) => {
    return a * b;
}

const cobrar = (importe) => {
    let pago = 0;
    while (importe > 0 && pago != importe) {
        pago = Number(prompt(`Ingrese ${importe}`))
    }
    alert("Muchas gracias por confiar su descanso a El Remanso");
}

function confirmarReserva(mensaje, precio) {
    alert(`Muchas gracias por elegirnos, ${mensaje} El total es ${precio}`);
    cobrar(precio);
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
    confirmarReserva(mensaje, precio);
}

const pedirReserva = () => {
    const reserva = Number(prompt(`Bienvenidos a El Remanso
    Elija su habitación
    1- Habitación Simple, 2000
    2- Habitación Doble, 3500
    3- Cabaña 4 personas, 5000
    4- Cabaña 6 personas, 7000
    5- Cabaña 8 personas, 8500
    6- Cabaña 10 personas, 10000`));
    const cantidad = Number(prompt("Ingrese cantidad de habitaciones"));
    hacerReserva(reserva, cantidad);
}


pedirReserva();*/


class Reserva {
    constructor(categoria, nombre, precio) {
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = Number(precio);
    }
}

const reserva1=new Reserva("suiteLuxury", "Frida Khalo", 4000);
const reserva2= new Reserva("suiteLuxury", "Diego Rivera", 5000);
const reserva3= new Reserva("suiteSuperior", "Beth Hart", 3000);
const reserva4= new Reserva("suiteSuperior", "Aretha Franklin", 3500);
const reserva5= new Reserva("suiteSuperior", "Freddy Mercury", 3500);

const reservas = [reserva1, reserva2, reserva3, reserva4, reserva5];

console.log(reservas);

const verSuites = () => {
    let texto = "";
    for (const Reserva of reservas) {
        texto += `Reserva: ${Reserva.categoria}\nNombre:${Reserva.nombre}\nPrecio:$${Reserva.precio}\n\n`
    }
    return texto;
}

const reservarSuites = () => {
    const reservaUsuario = prompt(`¿Qué Suite desea reservar?\n\n;${verSuites()}`);

    const reservaEncontrada = reservas.find (reserva => reserva.nombre.toLowerCase() ===reservaUsuario.toLowerCase().trim());

    if (reservaEncontrada) {
        alert(`Reservaste ${reservaEncontrada.nombre} a $${reservaEncontrada.precio}`);
    } else {
        alert("Suite no encontrada");
    }
}

let opcion;

do {
    opcion = Number(prompt(`Ingrese una opción:
        1- Ver Suites
        2- Reservar Suites
        3- Salir
    `));
    switch (opcion) {
        case 1:
            const valorRecibido = verSuites();
            alert(valorRecibido);
            break;
        case 2:
            reservarSuites();
            break;
        case 3:
            alert("Gracias por su visita");
            break;
        default:
            alert("Opción incorrecta");
            break;
    }
} while (opcion !== 3);