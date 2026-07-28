document.addEventListener("DOMContentLoaded", function() {
    const campoNumero1 = document.getElementById('campo_numero1');
    const campoNumero2 = document.getElementById('campo_numero2');
    const btnSumar = document.getElementById('btn_sumar');
    const resultado = document.getElementById('resultado');

    if (btnSumar) {
        btnSumar.addEventListener('click', () => {
            const numero1 = parseFloat(campoNumero1.value) || 0;
            const numero2 = parseFloat(campoNumero2.value) || 0;
            const suma = numero1 + numero2;
            resultado.textContent = `Total Pasajeros: ${suma}`;
        });
    }

    const campoNumero3 = document.getElementById('campo_numero3');
    const campoNumero4 = document.getElementById('campo_numero4');
    const btnArea = document.getElementById('btn_area');
    const resultado1 = document.getElementById('resultado1');

    if (btnArea) {
        btnArea.addEventListener('click', () => {
            const largo = parseFloat(campoNumero3.value) || 0;
            const ancho = parseFloat(campoNumero4.value) || 0;
            const area = largo * ancho;
            resultado1.textContent = `Área calculada: ${area} m²`;
        });
    }
});