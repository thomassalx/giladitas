// // Calculadora en PESOS :)

// alert("Calcular precio de lote y monto de cuotas a pagar en PESOS");
// let precioDolar = parseInt(prompt("Ingresa el ultimo precio del dolar blue:"));
// let precioLote = parseInt(prompt("Ingresa el precio del lote:"));
// const comision = (precioLote*3)/100;
// alert("El precio del lote mas comisión en USD es de: " + (precioLote + comision) + "\nEn PESOS es de: " + ((precioLote + comision) * precioDolar));
// let senia = parseInt(prompt("Ingresa el monto de la seña en USD:"));
// let entrega = parseInt(prompt("Ingrese si entrega el 50% o 30%" + "\n*Nota: ingresar solo 50 o 30."));
// if (entrega == 50) {
//     let precioSeniado = ((precioLote + comision - senia) * precioDolar);
//     let precioCincuenta = (precioSeniado*50)/100;
//     let precioDescontado = (precioSeniado - precioCincuenta);
//     let cuota = (precioDescontado / 60);

//     alert("El precio del lote sumando comision menos la seña es de : " + precioSeniado + "\nEl 50% de " + precioSeniado + " es: " + precioCincuenta +"\nEl monto restante es de: " + precioDescontado + " a dividir en 60 cuotas de " + cuota);

// } else if (entrega == 30) {
//     let precioSeniado = ((precioLote + comision - senia) * precioDolar);
//     let precioTreinta = (precioSeniado*30)/100;
//     let precioDescontado = (precioSeniado - precioTreinta);
//     let cuota = (precioDescontado / 60);

//     alert("El precio del lote sumando comision menos la seña es de : " + precioSeniado + "\nEl 30% de " + precioSeniado + " es: " + precioTreinta +"\nEl monto restante es de: " + precioDescontado + " a dividir en 60 cuotas de " + cuota);
// }

// Calculadora en USD :)

alert("Calcular precio de lote y monto de cuotas a pagar en USD");
let precioLote = parseInt(prompt("Ingresa el precio del lote:"));
const comision = (precioLote*3)/100;
alert("El precio del lote mas comisión es de: " + (precioLote + comision));
let senia = parseInt(prompt("Ingresa el monto de la seña en USD:"));
let entrega = parseInt(prompt("Ingrese si entrega el 50% o 30%" + "\n*Nota: ingresar solo 50 o 30."));
if (entrega == 50) {
    let precioSeniado = (precioLote + comision - senia);
    let precioCincuenta = (precioSeniado*50)/100;
    let precioDescontado = (precioSeniado - precioCincuenta);
    let cuota = (precioDescontado / 60);

    alert("El precio del lote sumando comision menos la seña es de : " + precioSeniado + "\nEl 50% de " + precioSeniado + " es: " + precioCincuenta +"\nEl monto restante es de: " + precioDescontado + " a dividir en 60 cuotas de " + cuota);

} else if (entrega == 30) {
    let precioSeniado = (precioLote + comision - senia);
    let precioTreinta = (precioSeniado*30)/100;
    let precioDescontado = (precioSeniado - precioTreinta);
    let cuota = (precioDescontado / 60);

    alert("El precio del lote sumando comision menos la seña es de : " + precioSeniado + "\nEl 30% de " + precioSeniado + " es: " + precioTreinta +"\nEl monto restante es de: " + precioDescontado + " a dividir en 60 cuotas de " + cuota);
}
