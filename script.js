/* =========================================================
   STICKY HEADER
========================================================= */

const stickyHeader = document.getElementById("stickyHeader");
const heroSection = document.querySelector(".hero-section");

let lastScrollY = 0;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const triggerPoint = heroSection.offsetHeight - 100;

  if (currentScrollY > triggerPoint) {

    // Show when scrolling down
    if (currentScrollY > lastScrollY) {
      stickyHeader.classList.add("active");
    } 
    // Hide when scrolling up
    else {
      stickyHeader.classList.remove("active");
    }

  } else {
    stickyHeader.classList.remove("active");
  }

  lastScrollY = currentScrollY;
});


/* =========================================================
   HERO IMAGE SLIDER
========================================================= */

const heroImages = [
  "https://picsum.photos/id/1015/800/600",
  "https://picsum.photos/id/1016/800/600",
  "https://picsum.photos/id/1018/800/600"
];

let currentIndex = 0;
const heroImageElement = document.getElementById("heroImage");

function updateSlide(index) {
  currentIndex = index;
  heroImageElement.src = heroImages[currentIndex];
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % heroImages.length;
  updateSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + heroImages.length) % heroImages.length;
  updateSlide(currentIndex);
}

function setSlide(index) {
  updateSlide(index);
}


/* =========================================================
   IMAGE ZOOM EFFECT
========================================================= */

const imageWrapper = document.querySelector(".image-wrapper");

if (imageWrapper && heroImageElement) {

  imageWrapper.addEventListener("mousemove", (e) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    heroImageElement.style.transformOrigin = `${xPercent}% ${yPercent}%`;
  });

  imageWrapper.addEventListener("mouseenter", () => {
    heroImageElement.style.transform = "scale(1.6)";
  });

  imageWrapper.addEventListener("mouseleave", () => {
    heroImageElement.style.transform = "scale(1)";
  });
}


/* =========================================================
   FAQ TOGGLE
========================================================= */

function toggleFAQ(button){

const item = button.parentElement;

item.classList.toggle("active");

}

/* =========================================================
   VERSATILE APPLICATIONS
========================================================= */

const carousel = document.getElementById("carousel");

let isDragging = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  carousel.style.cursor = "grabbing";
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mouseup", () => {
  isDragging = false;
  carousel.style.cursor = "grab";
});

carousel.addEventListener("mousemove", (e) => {
  if(!isDragging) return;
  e.preventDefault();

  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;

  carousel.scrollLeft = scrollLeft - walk;
});


/* =========================================================
   DOWNLOAD DATASHEET
========================================================= */

function openDatasheetModal(){
  document.getElementById("datasheetModal").style.display="flex";
}

function closeDatasheetModal(){
  document.getElementById("datasheetModal").style.display="none";
}


/* =========================================================
   REQUEST QUOTE MODAL
========================================================= */


function openModal(){
  document.getElementById("quoteModal").style.display = "flex";
}

function closeModal(){
  document.getElementById("quoteModal").style.display = "none";
}

/* Close modal when clicking outside */

window.addEventListener("click", function(e){
  const modal = document.getElementById("quoteModal");
  if(e.target === modal){
    modal.style.display = "none";
  }
});