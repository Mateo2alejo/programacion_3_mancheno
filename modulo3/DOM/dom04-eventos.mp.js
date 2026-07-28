function mostrarAlerta() {
    alert("Pista 1 autorizada para despegue.");
}

function agregarVuelo() {
    const lista = document.getElementById("lista-vuelos");
    const nuevoItem = document.createElement("li");
    nuevoItem.textContent = "Vuelo MM-" + Math.floor(100 + Math.random() * 900) + " - Confirmado";
    lista.appendChild(nuevoItem);
}

function modificarTexto() {
    document.getElementById("texto-modificable").textContent = "Vuelo MM-102: En puerta de embarque";
}

function modificarH2() {
    document.getElementById("h2-mod").textContent = "Panel de Salidas Activo";
}

document.addEventListener("DOMContentLoaded", () => {
    const btn3 = document.getElementById("btn3");
    if (btn3) {
        btn3.addEventListener("click", () => {
            const lista = document.getElementById("lista-vuelos2");
            const nuevoItem = document.createElement("li");
            nuevoItem.textContent = "Vuelo MM-" + Math.floor(100 + Math.random() * 900) + " - En Ruta";
            lista.appendChild(nuevoItem);
        });
    }
});