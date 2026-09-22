// ================================
// ETERNEL — script.js
// ================================

function saluer() {
  const message = document.getElementById("message");

  message.textContent =
    "Bonjour 👋 Je suis ETERNEL, votre assistant personnel.";
}


// ================================
// BOUTON PARLER
// ================================

function parler() {
  const message = document.getElementById("message");

  // Vérifier si la synthèse vocale est disponible
  if (!("speechSynthesis" in window)) {
    message.textContent =
      "⚠️ La fonction vocale n'est pas disponible sur ce navigateur.";
    return;
  }

  // Arrêter une éventuelle lecture précédente
  window.speechSynthesis.cancel();

  message.textContent = "🔊 ETERNEL parle...";

  const texte =
    "Bonjour, je suis ETERNEL, votre assistant personnel.";

  const voix = new SpeechSynthesisUtterance(texte);

  voix.lang = "fr-FR";
  voix.rate = 1;
  voix.pitch = 1;
  voix.volume = 1;

  // Quand ETERNEL termine de parler
  voix.onend = function () {
    message.textContent =
      "✅ ETERNEL a terminé de parler.";
  };

  // En cas d'erreur
  voix.onerror = function () {
    message.textContent =
      "⚠️ Un problème est survenu avec la voix.";
  };

  // Lancer la voix
  window.speechSynthesis.speak(voix);
}


// ================================
// TEST AU CHARGEMENT
// ================================

console.log("ETERNEL est chargé avec succès.");
