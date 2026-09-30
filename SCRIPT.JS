// Mobile Navigation
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}


// Close mobile menu when a link is clicked
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        document.getElementById("navLinks").classList.remove("active");
    });

});


// Contact form
function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting me! " +
        "I will get back to you soon."
    );

    event.target.reset();
}
