// funcion declarada
function saludo (){
    console.log("Hello world");
}

saludo();

// funcion expresada
const saludarHola = function(){
    console.log("Hola con funcion expresada");
}
saludarHola();

// funcion flecha
const saludosFlecha=()=>{
    console.log("Hello con funcion flecha");
}
saludosFlecha();

// funcion anonima
setTimeout(function(){
    console.log("Ejecutando.....");
},1000)

// funcion con parametros
function saludarConParametros(nombre){
    console.log("Hola "+ nombre);
}
saludarConParametros("Pedro")

// Sintaxis: function nombre(parámetros) { cuerpo }
function saludar(nombre) {
    return `Hola, ${nombre}!`;
  }
  
  console.log(saludar("Ana"));   // "Hola, Ana!"
  console.log(saludar("Luis"));  // "Hola, Luis!"


  function sumarab(a,b){
    return a+b
  }
  resultado = sumar(45,5);
  console.log(resultado);

  // Sintaxis completa
const sumarab= (a, b) => {
  return a + b;
};

// Retorno implícito — cuando el cuerpo es una sola expresión
// se omiten las llaves y la palabra return
const sumarCorto = (a, b) => a + b;

// Un solo parámetro — se pueden omitir los paréntesis
const doblar = n => n * 2;

// Sin parámetros — los paréntesis son obligatorios
const saludarMundo = () => "Hola, mundo!";

console.log(sumar(3, 4));        // 7
console.log(sumarCorto(3, 4));   // 7
console.log(doblar(5));          // 10
console.log(saludarMundo());     // "Hola, mundo!"

//par
const esPar = n => n % 2 == 0;
console.log(esPar(4))

//por defecto

function saludar(nombre = "mundo", saludo = "Hola") {
  return `${saludo}, ${nombre}!`;
}

console.log(saludar());                     // "Hola, mundo!"
console.log(saludar("Ana"));               // "Hola, Ana!"
console.log(saludar("Ana", "Buenos días")); // "Buenos días, Ana!"

// También funciona con arrow functions
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)

//area de un trangulo
const potencia = (base, exponente = 2) => base ** exponente;

console.log(potencia(3));     // 9   (3²)
console.log(potencia(3, 3));  // 27  (3³)       

// ...numeros captura todos los argumentos en un array
function sumarTodos(...numeros) {
  let total = 0;
  for (const n of numeros) {
    total += n;
  }
  return total;
}

console.log(sumarTodos(1, 2, 3));          // 6
console.log(sumarTodos(1, 2, 3, 4, 5));   // 15
console.log(sumarTodos());                 // 0

// Se puede combinar con parámetros normales
// el rest SIEMPRE debe ser el último parámetro
function registrar(categoria, ...mensajes) {
  for (const msg of mensajes) {
    console.log(`[${categoria}] ${msg}`);
  }
}

registrar("INFO", "Inicio", "Conexión OK", "Listo");
// [INFO] Inicio
// [INFO] Conexión OK
// [INFO] Listo

function registrarPersona(nombre, ...detalles) {
  console.log(`--- Perfil de: ${nombre} ---`);
  for (const dato of detalles) {
    console.log(`Dato registrado: ${dato}`);
  }
}

registrarPersona("Edison", 28, "Programador", "Quito", "EndeavourOS");

// Spread con objetos
const base     = { nombre: "Ana", edad: 28 };
const ampliado = { ...base, ciudad: "Madrid" };
console.log(ampliado);   // { nombre: 'Ana', edad: 28, ciudad: 'Madrid' }

// Una función sin return devuelve undefined implícitamente
function sinReturn() {
  const x = 42;
  // no hay return
}
console.log(sinReturn());   // undefined

// return detiene la ejecución de la función
function esPar(n) {
  if (n % 2 === 0) {
    return true;    // sale aquí si n es par
  }
  return false;     // solo llega aquí si n es impar
}

// Forma más concisa — devolver la expresión directamente
const esParCorto = n => n % 2 === 0;

console.log(esPar(4));         // true
console.log(esParCorto(7));    // false
const global = "soy global";   // accesible en todo el archivo

function ejemploScope() {
  const local = "soy local";   // solo accesible dentro de esta función
  console.log(global);         // ✅ puede acceder a la variable global
  console.log(local);          // ✅
}

ejemploScope();
// console.log(local);         // ❌ ReferenceError — local no existe aquí

// Block scope — const y let respetan los bloques { }
{
  const dentroDeBloque = "solo aquí";
  console.log(dentroDeBloque);   // ✅
}
// console.log(dentroDeBloque);  // ❌ ReferenceError

// var NO respeta el block scope — otra razón para no usarlo
{
  var escapó = "estoy en todos lados";
}
console.log(escapó);   // ✅ "estoy en todos lados" — comportamiento inesperado