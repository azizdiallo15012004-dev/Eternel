function saluer() {
  const message = document.getElementById("message");

  message.textContent =
    "Bonjour 👋 Je suis ETERNEL, votre assistant personnel.";
}

function parler() {
  const message = document.getElementById("message");

  message.textContent =
    "La fonction vocale est activée.";

  if ("speechSynthesis" in window) {
    const voix = new SpeechSynthesisUtterance(
      "Bonjour, je suis ETERNEL, votre assistant personnel."
    );

    voix.lang = "fr-FR";
    speechSynthesis.speak(voix);
  }
      }
