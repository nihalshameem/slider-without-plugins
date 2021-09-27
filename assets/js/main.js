const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const track = document.querySelector(".track");

let carouselWidth = document.querySelector(".carousel-container").offsetWidth;

window.addEventListener("resize", () => {
  carouselWidth = document.querySelector(".carousel-container").offsetWidth;
});

let index = 0;

// next button click event
next.addEventListener("click", () => {
  index++;
  prev.disabled = false;
  track.style.transform = `translateX(-${index * carouselWidth}px)`;

  if (track.offsetWidth - index * carouselWidth < carouselWidth) {
    next.disabled = true;
  }
});

// previous button click event
prev.addEventListener("click", () => {
  index--;
  next.disabled = false;
  if (index === 0) {
    prev.disabled = true;
  }
  track.style.transform = `translateX(-${index * carouselWidth}px)`;
});

// active class change
function activate(e) {
  let active = document.querySelector(".card-container.active");
  active.classList.remove("active");
  e.classList.add("active");
}
