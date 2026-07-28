document.addEventListener("DOMContentLoaded", function() {
    console.log("=== Inicializando Módulo de Gestión de Vuelos ===");

    console.log("Cabecera (head):", document.head);
    console.log("Cuerpo (body):", document.body);
    console.log("Título del panel:", document.title);

    const titulo = document.getElementById("titulo-principal");
    const listaVuelos = document.getElementById("lista-vuelos");

    if (listaVuelos) {
        const nuevoVuelo = document.createElement("li");
        nuevoVuelo.className = "vuelo";
        nuevoVuelo.textContent = "Vuelo MIA202 - Demorado";
        
        listaVuelos.appendChild(nuevoVuelo);
        console.log("Nuevo vuelo registrado correctamente en el DOM.");
    }
});