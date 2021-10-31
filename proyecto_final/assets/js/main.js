const nombre = prompt("Ingrese su nombre");

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
    alert("Datos ingresados correctamente");
