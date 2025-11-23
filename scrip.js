// Navegación entre secciones
function cambiarSeccion(seccionId) {
    // Ocultar todas las secciones
    document.querySelectorAll('.section').forEach(seccion => {
        seccion.classList.remove('active');
    });
    
    // Mostrar sección seleccionada
    document.getElementById(seccionId).classList.add('active');
    
    // Scroll al inicio
    window.scrollTo(0, 0);
}

// Contador de días desde que se conocieron
function actualizarContador() {
    const fechaConocimiento = new Date('2025-11-17'); // 17 de noviembre 2025
    const hoy = new Date();
    const diferencia = hoy - fechaConocimiento;
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    
    const contador = document.getElementById('contador');
    if (contador) {
        if (dias < 0) {
            const diasFaltantes = Math.abs(dias);
            contador.innerHTML = `Faltan <strong>${diasFaltantes} días</strong> para que nos conozcamos... ¿será el destino?`;
        } else if (dias === 0) {
            contador.innerHTML = `¡<strong>Hoy</strong> es el día! ¿Será el comienzo de algo lindo?`;
        } else {
            contador.innerHTML = `Ya pasaron <strong>${dias} días</strong> desde que el destino nos juntó`;
        }
    }
}

// Efecto de escritura para el subtítulo
function efectoEscritura() {
    const texto = '"Todo arrancó con una historia de Instagram..."';
    const elemento = document.querySelector('.subtitulo');
    let i = 0;
    elemento.innerHTML = '';
    
    function escribir() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(escribir, 80);
        }
    }
    escribir();
}

// Inicializar cuando cargue la página
document.addEventListener('DOMContentLoaded', function() {
    actualizarContador();
    efectoEscritura();
});

// Actualizar contador cada día
setInterval(actualizarContador, 86400000);