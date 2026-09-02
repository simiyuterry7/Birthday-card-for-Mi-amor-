// ==============================
// FLOATING HEARTS AND FLOWERS
// ==============================

const decorations = [
  "💙",
  "💕",
  "💖",
  "❤️",
  "🌹",
  "🌸",
  "✨",
  "🎉",
  "🥳"
];

function createDecoration() {
  const decoration = document.createElement("span");

  decoration.classList.add("floating-decoration");

  decoration.innerText =
    decorations[Math.floor(Math.random() * decorations.length)];

  // Random horizontal position
  decoration.style.left = Math.random() * 100 + "vw";

  // Random size
  decoration.style.fontSize =
    Math.random() * 25 + 20 + "px";

  // Random animation duration
  decoration.style.animationDuration =
    Math.random() * 5 + 5 + "s";

  document.body.appendChild(decoration);

  // Remove decoration after animation
  setTimeout(() => {
    decoration.remove();
  }, 10000);
}


// Create decorations repeatedly
setInterval(createDecoration, 900);


// ==============================
// HAPPY BIRTHDAY POP-UP
// ==============================

window.addEventListener("load", () => {

  setTimeout(() => {

    const surprise = document.createElement("div");

    surprise.classList.add("birthday-surprise");

    surprise.innerHTML = `
      <div class="surprise-box">

        <button class="close-surprise">×</button>

        <h1>🥳 HAPPY 20TH BIRTHDAY! 🥳</h1>

        <div class="surprise-cake">
          🎂
        </div>

        <p>
          Today is all about YOU! 💙🌹
        </p>

        <p>
          I hope your day is filled with love,
          happiness and beautiful memories! ❤️
        </p>

        <div class="surprise-hearts">
          💙 ❤️ 🌹 💕 🎉
        </div>

      </div>
    `;

    document.body.appendChild(surprise);


    // Close button
    const closeButton =
      surprise.querySelector(".close-surprise");

    closeButton.addEventListener("click", () => {

      surprise.style.opacity = "0";

      setTimeout(() => {
        surprise.remove();
      }, 500);

    });

  }, 1000);

});


// ==============================
// CONFETTI EFFECT
// ==============================

function createConfetti() {

  const confetti =
    document.createElement("div");

  confetti.classList.add("confetti");

  confetti.style.left =
    Math.random() * 100 + "vw";

  confetti.style.animationDuration =
    Math.random() * 3 + 3 + "s";

  document.body.appendChild(confetti);


  setTimeout(() => {
    confetti.remove();
  }, 6000);

}


// Create confetti
setInterval(createConfetti, 250);
