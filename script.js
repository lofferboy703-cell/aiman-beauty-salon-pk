// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close Menu After Clicking a Link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
/* ===================================
   WHATSAPP APPOINTMENT BOOKING
=================================== */

const appointmentForm = document.getElementById("appointmentForm");

appointmentForm.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const message = document.getElementById("message").value;

    const whatsappMessage =
`🌸 *New Appointment Booking*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

💇 Service: ${service}

📅 Date: ${date}

🕒 Time: ${time}

📝 Message:
${message}`;

    const whatsappURL =
`https://wa.me/923174369286?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});
/* ===================================
   LIGHTBOX GALLERY
=================================== */

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");

galleryImages.forEach((image) => {

    image.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = image.src;

        lightboxImg.alt = image.alt;

    });

});

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

lightbox.addEventListener("click", (e) => {

    if(e.target === lightbox){

        lightbox.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        lightbox.classList.remove("active");

    }

});
