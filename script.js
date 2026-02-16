// Change navbar background opacity on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    } else {
        nav.style.backgroundColor = '#000000';
    }
});

// Simple reveal animation for sections
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.8s ease-out';
    observer.observe(section);
});

//gallery
<div class="gallery-item info-card" 
     data-type="text" 
     data-caption="Our Facilities: The foundation sits on ½ acre with 5 permanent rooms, a temporary kitchen and store, 2 toilets/bathrooms, a trampoline, and a garden.">
    <div class="card-content">
        <h3>Our Facilities</h3>
        <p>½ Acre Campus | 5 Permanent Rooms | Trampoline & Garden</p>
    </div>
    <div class="item-overlay"><span>View Details</span></div>
</div>
const modal = document.getElementById("lightbox");
const modalImg = document.getElementById("full-img");
const captionText = document.getElementById("modal-caption");
const closeBtn = document.querySelector(".close-modal");

document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        
        const img = this.querySelector('img');
        const isTextCard = this.getAttribute('data-type') === 'text';

        // Bug Fix: If it's a text card without an image, show the logo in the lightbox
        if (img) {
            modalImg.src = img.src;
            modalImg.style.display = "block";
        } else if (isTextCard) {
            modalImg.src = "logo.jpeg"; 
            modalImg.style.display = "block";
        }

        captionText.innerHTML = this.getAttribute('data-caption');
    });
});

const closeModal = () => {
    modal.style.display = "none";
    modalImg.src = ""; // Clear source to prevent flicker
};

closeBtn.onclick = closeModal;
window.onclick = (e) => { if (e.target == modal) closeModal(); };
document.addEventListener('keydown', (e) => { if (e.key === "Escape") closeModal(); });
// contact
// Smooth Navbar Transition
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.style.background = "rgba(0, 0, 0, 1)";
        nav.style.padding = "10px 0";
    } else {
        nav.style.background = "rgba(0, 0, 0, 0.95)";
        nav.style.padding = "15px 0";
    }
});

// Form Submission Handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simple visual feedback
    const btn = document.querySelector('.submit-btn');
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        alert("Thank you! Your message has been sent to Agutu Asoyo Foundation.");
        btn.innerText = "Send Message";
        btn.disabled = false;
        this.reset();
    }, 1500);
});




function sendMyEmail(event) {
    event.preventDefault(); // This is the "Stop Refresh" command
    console.log("The page did NOT refresh! Success.");

    const btn = document.getElementById('button');
    btn.innerText = 'Sending...';

    emailjs.sendForm('service_i2uxn8j', '_ejs-test-mail-service__', event.target)
        .then(() => {
            alert('Sent!');
            btn.innerText = 'Send Message';
        }, (err) => {
            alert('Error: ' + JSON.stringify(err));
            btn.innerText = 'Send Message';
        });
}






//info
document.addEventListener('DOMContentLoaded', () => {
    // 1. Corrected Scroll Reveal Observer
    const observerOptions = { threshold: 0.2 };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // If the element entering view contains counters, trigger them once
                if (entry.target.classList.contains('stats-grid')) {
                    const counters = entry.target.querySelectorAll('.counter');
                    counters.forEach(counter => animateCounter(counter));
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // 2. Corrected Counter Logic
    function animateCounter(counterEl) {
        const target = +counterEl.getAttribute('data-target');
        const duration = 2000; // Total animation time in ms
        const stepTime = 20;   // Update frequency
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        
        let currentCount = 0;
        
        const timer = setInterval(() => {
            currentCount += increment;
            if (currentCount >= target) {
                counterEl.innerText = target;
                clearInterval(timer); // Stops the loop once target is reached
            } else {
                counterEl.innerText = Math.ceil(currentCount);
            }
        }, stepTime);
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('#navbar');
    nav.style.background = window.scrollY > 50 ? "rgba(0,0,0,1)" : "rgba(0,0,0,0.9)";
});
//info
