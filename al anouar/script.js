/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery img");
    images.forEach(img => {
        img.addEventListener("click", function() {
            alert("Vous avez cliqué sur une image !");
        });
    });
});