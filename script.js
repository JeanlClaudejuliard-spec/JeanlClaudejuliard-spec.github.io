const toggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
toggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const galleryImages = [
  "images/IMG_20251117_124315.jpg",
  "images/photo2.jpg",
  "images/photo3.jpg",
  "images/photo4.jpg"
];

const galleryAlts = [
  "Moment convivial de l'Amicale Bézenet",
  "Marche de l'Amicale Bézenet",
  "Sortie de l'Amicale Bézenet",
  "Randonnée de l'Amicale Bézenet"
];

let currentPhoto = 0;

function openLightbox(index) {
  currentPhoto = index;

  const lightbox = document.getElementById("lightbox");
  const image = document.getElementById("lightbox-image");

  image.src = galleryImages[currentPhoto];
  image.alt = galleryAlts[currentPhoto];

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  document.getElementById("lightbox").classList.remove("active");
  document.body.style.overflow = "";
}

function changePhoto(direction) {
  currentPhoto += direction;

  if (currentPhoto < 0) {
    currentPhoto = galleryImages.length - 1;
  }

  if (currentPhoto >= galleryImages.length) {
    currentPhoto = 0;
  }

  const image = document.getElementById("lightbox-image");

  image.src = galleryImages[currentPhoto];
  image.alt = galleryAlts[currentPhoto];
}

document.addEventListener("keydown", function(event) {

  const lightbox = document.getElementById("lightbox");

  if (!lightbox.classList.contains("active")) return;

  if (event.key === "Escape") {
    closeLightbox();
  }

  if (event.key === "ArrowLeft") {
    changePhoto(-1);
  }

  if (event.key === "ArrowRight") {
    changePhoto(1);
  }

});
