document.addEventListener("DOMContentLoaded", function(){
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Estado actual: Puerta 04 - Abordando Vuelo SKBO01";
    console.log("mensaje:", mensaje);

    const link = document.getElementById("link");
    link.textContent = "Ir al Panel de Control";
    link.href = "https://aeropuerto-control.com/vuelos";
    link.classList.add("boton");
    console.log("link:", link);
}); 