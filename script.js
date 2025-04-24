// Gestion du menu mobile
document
  .querySelector(".menu-button") // Sélectionne le bouton de menu (généralement une icône hamburger)
  .addEventListener("click", function () {
    // Lors d’un clic sur le bouton...
    document.querySelector(".nav-links").classList.toggle("show"); 
    // ...ajoute ou retire la classe "show" pour afficher/cacher les liens de navigation
  });

// Animation de texte "machine à écrire"
const text = "Je suis un Développeur web et mobile"; // Texte à animer
const typingText = document.getElementById("typing-text"); // Élément HTML qui contiendra l'effet
let i = 0; // Index actuel dans la chaîne de caractères
let isDeleting = false; // Indique si le texte est en train d’être effacé
let speed = 100; // Vitesse initiale de l’animation

function typeWriter() {
  const currentText = typingText.textContent; // Texte actuellement affiché

  if (!isDeleting && i < text.length) {
    // Si on écrit
    typingText.textContent = text.substring(0, i + 1); // Ajoute un caractère
    i++;
    speed = 100; // Vitesse d’écriture
  } else if (isDeleting && i > 0) {
    // Si on efface
    typingText.textContent = text.substring(0, i - 1); // Retire un caractère
    i--;
    speed = 50; // Vitesse d’effacement
  } else {
    // Lorsque le texte est complètement écrit ou effacé
    isDeleting = !isDeleting; // Change de mode (écriture <-> suppression)
    speed = isDeleting ? 50 : 100;
  }

  // Effet de curseur (clignotant)
  typingText.style.borderRight =
    isDeleting || i < text.length ? "2px solid #010a13" : "none";

  // Réexécute la fonction après un certain délai
  setTimeout(typeWriter, speed);
}

// Scroll fluide lors du clic sur les liens internes
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche le saut direct
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Défilement fluide
    });
    document.querySelector(".nav-links").classList.remove("show"); // Ferme le menu mobile
  });
});

// Démarre l’animation de texte une fois le DOM chargé
window.addEventListener("DOMContentLoaded", typeWriter);
