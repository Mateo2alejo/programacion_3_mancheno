document.addEventListener("DOMContentLoaded", function() {
    const caja = document.getElementById('caja');

    if (caja) {
        caja.addEventListener('mouseover', () => {
            caja.style.backgroundColor = 'yellow';
        });

        caja.addEventListener('mouseout', () => {
            caja.style.backgroundColor = 'lightgray';
        });

        caja.addEventListener('click', () => {
            alert('Has seleccionado la Pista 01 para inspección.');
        });
    }

    const area = document.getElementById('areaTouch');

    if (area) {
        area.addEventListener('touchstart', () => {
            area.style.backgroundColor = 'green';
        });

        area.addEventListener('touchend', () => {
            area.style.backgroundColor = 'blue';
        });
    }
});