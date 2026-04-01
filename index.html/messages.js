const messages = [
  "I’m so grateful to have you in my life!",
  "Distance may separate us, but your support feels so close.",
  "Your love has always reached me, no matter where you are."
];

const container = document.getElementById("message-container");

messages.forEach(msg => {
  const p = document.createElement("p");
  p.textContent = msg;
  container.appendChild(p);
});