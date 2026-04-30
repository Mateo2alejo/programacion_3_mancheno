const nombre    = "Ana";
const email     = "ana@correo.com";
const password  = "abc";
const MIN_PASS  = 8;

if (nombre.trim().length === 0) {
  console.log("❌ El nombre es obligatorio.");
} else {
  console.log(`✅ Nombre válido: ${nombre}`);

  if (!email.includes("@") || !email.includes(".")) {
    console.log("❌ El email no tiene un formato válido.");
  } else {
    console.log(`✅ Email válido: ${email}`);

    if (password.length < MIN_PASS) {
      console.log(`❌ La contraseña debe tener al menos ${MIN_PASS} caracteres.`);
      console.log(`   Caracteres actuales: ${password.length}`);
    } else {
      console.log("✅ Contraseña válida. Registro completado.");
    }
  }
}
// ✅ Nombre válido: Ana
// ✅ Email válido: ana@correo.com
// ❌ La contraseña debe tener al menos 8 caracteres.
//    Caracteres actuales: 3