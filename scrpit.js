// Toggle navigation menu for mobile view
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

// Show the contact form when the Contact icon is clicked
function showContactForm() {
    const contactForm = document.getElementById('contact-form');
    contactForm.classList.toggle('hidden');
}

// Smooth scroll functionality for internal links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

// Update current time in the footer
function updateTime() {
    const timeSpan = document.getElementById('current-time');
    const now = new Date();
    timeSpan.innerText = now.toLocaleString(); // Local time in the footer
}

// Update time every second
setInterval(updateTime, 1000);

// Form submission event
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Your message has been sent!");
});


let slideIndex = 0;

// Function to show the slides
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++; // Increment slideIndex to move to the next slide

    if (slideIndex > slides.length) {
        slideIndex = 1;  // Reset to the first slide if we've reached the end
    }

    // Display the current slide
    slides[slideIndex - 1].style.display = "block";

    // Update the active dot indicator
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex - 1].className += " active";

    // Set a timer to change the slide every 2 seconds
    setTimeout(showSlides, 2000);
}

// Call the function to start the slideshow
showSlides();

// Function to display the current date and time in a specified element
function displayDateTime() {
    const dateTimeElement = document.getElementById('date-time');

    const currentDate = new Date();
    const date = currentDate.toLocaleDateString(); // Date in local format
    const time = currentDate.toLocaleTimeString(); // Time in local format

    dateTimeElement.innerHTML = `${date} <br> ${time}`;
}


setInterval(displayDateTime, 1000);

// Selecting all necessary elements
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

// Keeping track of the current slide index
let currentSlide = 0;

// Function to change the slide
function changeSlide() {
  // Move the slider to the current slide
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Update the active dot
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

// Next button click event
nextButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % images.length;  // Loop back to the first slide after the last one
  changeSlide();
});

// Previous button click event
prevButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;  // Loop back to the last slide after the first one
  changeSlide();
});

// Dot navigation click event
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentSlide = parseInt(e.target.dataset.slide);
    changeSlide();
  });
});

// Initialize the first slide
changeSlide();

// Optional: Automatic slide every 5 seconds (auto sliding effect)
setInterval(() => {
  currentSlide = (currentSlide + 1) % images.length;
  changeSlide();
}, 5000);
