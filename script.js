// ===========================
// MOBILE MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if(menuToggle && navLinks){

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

    });


    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });

}


// ===========================
// WHATSAPP APPOINTMENT BOOKING
// ===========================

const appointmentForm = document.getElementById("appointmentForm");

if(appointmentForm){

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

}


// ===========================
// LIGHTBOX GALLERY
// ===========================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeLightbox = document.getElementById("close-lightbox");


if(lightbox && lightboxImg && closeLightbox){

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

}


// ===========================
// BACK TO TOP BUTTON
// ===========================

const backToTop = document.getElementById("backToTop");


if(backToTop){

    window.addEventListener("scroll", () => {


        if(document.documentElement.scrollTop > 300){

            backToTop.style.display = "block";

        }else{

            backToTop.style.display = "none";

        }


    });


    backToTop.addEventListener("click", () => {


        window.scrollTo({

            top:0,

            behavior:"smooth"

        });


    });

}


// ===========================
// SCROLL ANIMATION
// ===========================

const sections = document.querySelectorAll(
"section, .card, .price-card, .review-card"
);


const observer = new IntersectionObserver((entries)=>{


    entries.forEach(entry=>{


        if(entry.isIntersecting){

            entry.target.classList.add("show");


        }


    });


},{


    threshold:0.15


});


sections.forEach(section=>{

    observer.observe(section);

});
