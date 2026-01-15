// Nombre del caché para la versión actual
const CACHE_NAME = 'sudbau-v1';

// Durante la instalación, podemos definir qué archivos guardar (opcional por ahora)
self.addEventListener('install', (event) => {
  console.log('SW: Instalado');
});

// El evento fetch es obligatorio para que sea una PWA instalable
self.addEventListener('fetch', (event) => {
  // Por ahora, simplemente deja que las peticiones sigan su curso normal
  event.respondWith(fetch(event.request));
});