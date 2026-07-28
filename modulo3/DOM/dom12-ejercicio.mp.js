const Vuelos = [
    {
        id: 1,
        aerolinea: "MM Airways",
        destino: "Quito",
        tarifa: 150.00
    }
];

document.addEventListener("DOMContentLoaded", () => {
    renderVuelos();
});

function agregarVuelo() {
    const aerolineaInput = document.getElementById('aerolinea').value.trim();
    const destinoInput = document.getElementById('destino').value.trim();
    const tarifaInput = document.getElementById('tarifa').value.trim();

    if (!aerolineaInput || !destinoInput || !tarifaInput) {
        alert('Por favor, complete todos los campos');
        return;
    }

    const nuevoVuelo = {
        id: Vuelos.length > 0 ? Math.max(...Vuelos.map(v => v.id)) + 1 : 1,
        aerolinea: aerolineaInput,
        destino: destinoInput,
        tarifa: parseFloat(tarifaInput)
    };

    Vuelos.push(nuevoVuelo);
    renderVuelos();
    limpiarFormulario();
}

function renderVuelos() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';

    Vuelos.forEach(vuelo => {
        const filaElement = document.createElement('tr');
        filaElement.innerHTML = `
            <td>${vuelo.id}</td>  
            <td>${vuelo.aerolinea}</td>  
            <td>${vuelo.destino}</td>  
            <td>$${vuelo.tarifa.toFixed(2)}</td>
            <td>
                <button onclick="editarVuelo(${vuelo.id})">Editar</button>
                <button onclick="eliminarVuelo(${vuelo.id})">Eliminar</button>
            </td>  
        `;
        cuerpoTabla.appendChild(filaElement);
    });

    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    const total = Vuelos.length;
    const promedioElement = document.getElementById('stat_promedio');

    if (total === 0) {
        if (promedioElement) promedioElement.textContent = '$0.00';
        return;
    }

    const sumaTarifas = Vuelos.reduce((acc, v) => acc + v.tarifa, 0);
    const promedio = sumaTarifas / total;

    if (promedioElement) promedioElement.textContent = `$${promedio.toFixed(2)}`;
}

function eliminarVuelo(id) {
    const index = Vuelos.findIndex(v => v.id === id);
    if (index !== -1) {
        Vuelos.splice(index, 1);
        renderVuelos();
    }
}

function editarVuelo(id) {
    const vuelo = Vuelos.find(v => v.id === id);
    if (!vuelo) return;

    const nuevaTarifa = prompt("Ingrese la nueva tarifa:", vuelo.tarifa);
    if (nuevaTarifa !== null && !isNaN(parseFloat(nuevaTarifa))) {
        vuelo.tarifa = parseFloat(nuevaTarifa);
        renderVuelos();
    }
}

function limpiarFormulario() {
    document.getElementById('aerolinea').value = '';
    document.getElementById('destino').value = '';
    document.getElementById('tarifa').value = '';
}