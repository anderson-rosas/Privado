// script.js

document.getElementById('botonCorazon').addEventListener('click', function() {
  const cartaContainer = document.getElementById('cartaContainer');
  cartaContainer.classList.remove('oculto');

  // Crear confeti
  const confetiContainer = document.querySelector('.confeti-container');
  for (let i = 0; i < 100; i++) {
    const confeti = document.createElement('div');
    confeti.classList.add('confeti');
    confeti.style.left = `${Math.random() * 100}vw`; // Distribución horizontal
    confeti.style.animationDelay = `${Math.random() * 2}s`; // Retardo aleatorio
    confetiContainer.appendChild(confeti);
  }
});
