// Smooth Scroll
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Light Mode Toggle
document.querySelector(".light-mode-toggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    document.querySelector(".light-mode-toggle").textContent = 
        document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});