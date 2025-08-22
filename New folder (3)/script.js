// Envelope click toggle
const envelope = document.getElementById('envelope');
if (envelope) {
  envelope.addEventListener('click', function () {
    this.classList.toggle('open');
  });
}

// Floating hearts
const heartContainer = document.getElementById("heartContainer");
for (let i = 0; i < 25; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDelay = Math.random() * 10 + 's';
  heart.style.animationDuration = 5 + Math.random() * 5 + 's';
  heartContainer.appendChild(heart);
}

// Navigation logic
document.getElementById("introNextBtn").addEventListener("click", function () {
  document.getElementById("intro").style.display = "none";
  document.getElementById("quotes").style.display = "flex";
});

document.getElementById("quotesNextBtn").addEventListener("click", function () {
  document.getElementById("quotes").style.display = "none";
  document.getElementById("invite").style.display = "flex";
});

document.getElementById("inviteNextBtn").addEventListener("click", function () {
  document.getElementById("invite").style.display = "none";
  document.getElementById("video").style.display = "flex";
});
