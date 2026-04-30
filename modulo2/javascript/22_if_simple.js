const totalCompra = 150;
const MINIMO_DESCUENTO = 100;
const PORCENTAJE_DESCUENTO = 0.10;

let totalFinal = totalCompra;

if (totalCompra >= MINIMO_DESCUENTO) {
  const descuento = totalCompra * PORCENTAJE_DESCUENTO;
  totalFinal = totalCompra - descuento;
  console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
}

console.log(`Total a pagar: $${totalFinal.toFixed(2)}`);
// Descuento aplicado: $15.00
// Total a pagar: $135.00







// Solicitar el monto de la compra
const monto = parseFloat(prompt("Ingrese el monto de la compra:"));

if (monto > 100) {
  console.log("Aplica descuento");
}

console.log(`Monto ingresado: $${monto.toFixed(2)}`);


