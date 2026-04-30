// Importar prompt-sync
const prompt = require("prompt-sync")();

// Solicitar la cantidad de productos comprados
const cantidad = parseInt(prompt("Ingrese la cantidad de productos comprados: "));

if (cantidad >= 10) {
  console.log("Descuento aplicado");
} else {
  console.log("Sin descuento");
}

console.log(`Cantidad de productos: ${cantidad}`);