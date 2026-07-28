const Empleados = [
    {
        "id": 1,
        "nombre": "Mateo",
        "apellido": "Mancheno",
        "sueldo": 500
    }

];


function agregarEmpleado() {
    const nombreInput = document.getElementById('nombre').value.trim();
    const apellidoInput = document.getElementById('apellido').value.trim();
    const sueldpInput = document.getElementById('sueldo').value.trim();

    if (!nombreInput || !apellidoInput || !sueldpInput) {
        alert('Por favor, complete todos los campos');
        return;
    }
    const nuevoEmpleado = {
        id: Empleados.length > 0 ?
            Math.max(...Empleados.map(p => p.id)) + 1 : 1,
        nombre: nombreInput,
        apellido: apellidoInput,
        sueldo: parseFloat(sueldpInput)
    };
    Empleados.push(nuevoEmpleado);
    renderEmpleados();
    limpiarFormulario();
}

function renderEmpleados() {
    const cuerpoTabla = document.getElementById('cuerpoTabla');
    cuerpoTabla.innerHTML = '';
    
    Empleados.forEach(empleado => {
        const productoElement = document.createElement(`tr`);
        productoElement.innerHTML = `
            <td>${empleado.id}</td>  
            <td>${empleado.nombre}</td>  
            <td>${empleado.apellido}</td>  
            <td>${empleado.sueldo.toFixed(2)}</td>
            <td>
            <button onclick="editarProducto(${empleado.id})">Editar</button>
            <button onclick="eliminarProducto(${empleado.id})">Eliminar</button>
            </td>  
        `;
        cuerpoTabla.appendChild(productoElement);
    });

    actualizarEstadisticas();
}

function actualizarEstadisticas() {
    const total = Empleados.length;
    
    if (total === 0) {
        const promedioElement = document.getElementById('stat_promedio') || document.getElementsByClassName('stat-card')[1]?.querySelector('p');
        if (promedioElement) promedioElement.textContent = '$0.00';
        return;
    }

    const sumaPrecios = Empleados.reduce((acc, p) => acc + p.sueldo, 0);
    const promedio = sumaPrecios / total;
    
    const promedioElement = document.getElementById('stat_promedio') || document.getElementsByClassName('stat-card')[1]?.querySelector('p');
    if (promedioElement) promedioElement.textContent = `$${promedio.toFixed(2)}`;
}