document.addEventListener("DOMContentLoaded", () => {
  const ageGate = document.getElementById("age-gate");
  const enterButton = document.getElementById("enter-site");

  if (!ageGate || !enterButton) return;

  // Si déjà validé, on masque le popup
  if (localStorage.getItem("ageVerified") === "true") {
    ageGate.classList.add("hidden");
  }

  // Validation
  enterButton.addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    ageGate.classList.add("hidden");
  });
});
