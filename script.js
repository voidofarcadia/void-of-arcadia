const gate = document.getElementById("age-gate");

if(localStorage.getItem("ageVerified")){
    gate.style.display = "none";
}

document.getElementById("enter-site").addEventListener("click", () => {
    localStorage.setItem("ageVerified","true");
    gate.style.display = "none";
});
