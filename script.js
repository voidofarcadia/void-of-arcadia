const gate = document.getElementById("age-gate");

if(localStorage.getItem("ageVerified")){
    gate.style.display = "none";
}

document.getElementById("enter-site").addEventListener("click", () => {
    localStorage.setItem("ageVerified","true");
    gate.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const gate = document.getElementById("age-gate");
  const enterButton = document.getElementById("enter-site");

  if (!gate || !enterButton) return;

  if (localStorage.getItem("ageVerified") === "true") {
    gate.classList.add("hidden");
  }

  enterButton.addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    gate.classList.add("hidden");
  });
});
