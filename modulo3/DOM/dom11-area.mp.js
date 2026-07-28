document.addEventListener("DOMContentLoaded", function() {
    const campoNumero3 = document.getElementById('campo_numero3');
    const campoNumero4 = document.getElementById('campo_numero4');
    const btnArea = document.getElementById('btn_area');
    const resultado1 = document.getElementById('resultado1');

    if (btnArea) {
        btnArea.addEventListener('click', () => {
            const numero3 = parseFloat(campoNumero3.value) || 0;
            const numero4 = parseFloat(campoNumero4.value) || 0;
            const area_triangulo = (numero3 * numero4) / 2;
            resultado1.textContent = `Área del sector de maniobras: ${area_triangulo} m²`;
        });
    }
});