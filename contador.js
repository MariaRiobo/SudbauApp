// ================================
// Contador de tubo (solo número)
// ================================
const rawData = localStorage.getItem('intervencionActual');

if (!rawData) {
  // Si entran directo sin pasar por el inicio, los mandamos de vuelta
  window.location.href = 'InicioSesion.html';
} else {
  const intervencion = JSON.parse(rawData);
  const numeroTubo = document.getElementById('numero-tubo');

  if (numeroTubo) {
    numeroTubo.textContent = intervencion.tuboActual;
  }
}
