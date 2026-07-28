document.addEventListener("DOMContentLoaded", function() {
    const circulo = document.getElementById('circulo');
    const container = document.getElementById('container');

    let colores = ['red', 'green', 'blue', 'orange', 'purple', 'pink'];
    let colorActual = 0;
    let arrastrando = false;

    function cambiarColor() {
        colorActual = (colorActual + 1) % colores.length;
        circulo.style.background = colores[colorActual];
    }

    function moverCirculo(x, y) {
        if (!container || !circulo) return;

        const containerRect = container.getBoundingClientRect();
        const circuloRect = circulo.getBoundingClientRect();
        const mitadAncho = circuloRect.width / 2;
        const mitadAlto = circuloRect.height / 2;

        const offsetTop = containerRect.top + window.scrollY;
        const offsetLeft = containerRect.left + window.scrollX;

        circulo.style.left = (x - offsetLeft - mitadAncho) + 'px';
        circulo.style.top = (y - offsetTop - mitadAlto) + 'px';
    }

    if (circulo) {
        // Eventos Touch
        circulo.addEventListener('touchstart', (e) => {
            e.preventDefault();
            cambiarColor();
            arrastrando = true;
        });

        document.addEventListener('touchmove', (e) => {
            if (!arrastrando) return;
            const touch = e.touches[0];
            moverCirculo(touch.pageX, touch.pageY);
        });

        document.addEventListener('touchend', () => {
            arrastrando = false;
        });

        // Eventos Mouse
        circulo.addEventListener('mousedown', (e) => {
            e.preventDefault();
            cambiarColor();
            arrastrando = true;
        });

        document.addEventListener('mousemove', (e) => {
            if (!arrastrando) return;
            moverCirculo(e.clientX, e.clientY);
        });

        document.addEventListener('mouseup', () => {
            arrastrando = false;
        });
    }
});