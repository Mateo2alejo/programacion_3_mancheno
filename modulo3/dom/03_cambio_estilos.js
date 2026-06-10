const mensaje = document.getElementById('mensaje');
mensaje.textContent="Mensaje Actualizado"
mensaje.style.color = "red"

const link = document.getElementById('link');
link.setAttribute('href', 'https://www.google.com');
link.classList.add('boton');