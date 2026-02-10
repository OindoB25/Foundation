document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Scroll Reveal Animation
    const reveals = document.querySelectorAll(".reveal");
    function reveal() {
        reveals.forEach(windowReveal => {
            const windowHeight = window.innerHeight;
            const revealTop = windowReveal.getBoundingClientRect().top;
            const revealPoint = 150;
            if (revealTop < windowHeight - revealPoint) {
                windowReveal.classList.add("active");
            }
        });
    }
    window.addEventListener("scroll", reveal);
    reveal(); // Initial check

    // 2. Donation Impact Calculator
    const slider = document.getElementById("impactSlider");
    const amountDisplay = document.getElementById("amountDisplay");
    const impactText = document.getElementById("impactText");

    slider.oninput = function() {
        const val = this.value;
        amountDisplay.innerHTML = val;

        if (val < 50) {
            impactText.innerHTML = "This provides laundry detergent and hygiene essentials for the week.";
        } else if (val >= 50 && val < 200) {
            impactText.innerHTML = "This provides dry grains and healthy nutrition for all 9 children for 1 week.";
        } else if (val >= 200 && val < 500) {
            impactText.innerHTML = "This covers school fees and uniforms for the children this term.";
        } else if (val >= 500 && val < 900) {
            impactText.innerHTML = "This contributes significantly to medical resources and workers' salaries.";
        } else {
            impactText.innerHTML = "This covers major needs like the new water tank and facility electricity!";
        }
    };

    // 3. Mobile Menu Toggle
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");
    menuToggle.addEventListener("click", () => {
        navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "70px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "white";
    });
});