// search.js

// -------------------------------------------------------------------------
// 1. ÍNDICE DE CONTENIDO
// Este array funciona como tu mini-base de datos de búsqueda.
// Las 'keywords' deben ser palabras clave que el usuario buscaría.
// -------------------------------------------------------------------------
const searchIndex = [
    {
        page: "Inicio",
        url: "index.html",
        keywords: "inicio home principal clima aire acondicionado hvac sistemas eficientes servicios contacto"
    },
    {
        page: "Nosotros",
        url: "nosotros.html",
        keywords: "nosotros empresa historia equipo mision valores filosofia calidad"
    },
    {
        page: "Servicios",
        url: "servicios.html",
        keywords: "Mantenimiento"
    },
    {
        page: "Proyectos",
        url: "proyectos.html",
        keywords: "proyectos obras casos estudios referencias clientes trabajos realizados"
    },
    {
        page: "Diseño e Ingeniería",
        url: "diseno.html",
        keywords: "diseno ingenieria planos bim calculo cargas termicas ducteria consultoria automatizacion"
    },
    {
        page: "Contacto",
        url: "contacto.html",
        keywords: "contacto ubicacion direccion telefono email cotizacion formulario mapa whatsapp"
    }
];

// -------------------------------------------------------------------------
// 2. FUNCIÓN PRINCIPAL DE BÚSQUEDA
// -------------------------------------------------------------------------
function performSearch(event) {
    // Evita que el formulario se envíe de la manera tradicional
    event.preventDefault(); 

    // Obtiene el valor del campo de búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm.length < 3) {
        alert("Por favor, ingresa al menos 3 caracteres para buscar.");
        return;
    }

    let bestMatch = null;
    let maxMatchCount = 0;

    // Recorre el índice para encontrar coincidencias
    for (const item of searchIndex) {
        const keywordsArray = item.keywords.split(' ');
        let matchCount = 0;

        // Comprueba si alguna keyword en el índice incluye el término buscado
        for (const keyword of keywordsArray) {
            if (keyword.includes(searchTerm)) {
                matchCount++;
            }
        }

        // Si hay una coincidencia, lo selecciona como la mejor opción
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestMatch = item;
        }
    }

    // 3. Resultados y Redirección
    if (bestMatch) {
        // Redirige a la página más relevante
        window.location.href = bestMatch.url;
    } else {
        // Si no hay coincidencias, muestra un mensaje
        alert(`No se encontraron resultados para "${searchTerm}". Por favor, intenta con otra palabra clave.`);
    }
}