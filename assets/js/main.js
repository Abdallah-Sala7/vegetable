const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// add active class to cart panel
const cartPanel = document.querySelector(".cart-panel");
const overLayForAll = document.querySelector("[data-target='for-all']");
const cartBtn = document.querySelectorAll("[data-target='cart-panel']");
const body = document.querySelector("body");

const stopScroll = () => {
  if (overLayForAll.classList.contains("active")) {
    body.style.overflow = "hidden";
  } else body.style.overflow = "auto";
};

cartBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    cartPanel.classList.toggle("active");
    overLayForAll.classList.toggle("active");
    stopScroll();
  e.preventDefault();

  });
});



// search panel
const searchPanel = document.querySelector(".search-popup");
const searchBtn = document.querySelectorAll("[data-target='search-popup']");

searchBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    searchPanel.classList.toggle("active");
    overLayForAll.classList.toggle("active");
    stopScroll();
    e.preventDefault();
  });
});

// mobile-menu-container

const menuBtn = document.querySelectorAll("[data-target='menu-panel']");
const menuPanel = document.querySelector(".mobile-menu-container");

menuBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    menuPanel.classList.toggle("active");
    overLayForAll.classList.toggle("active");
    stopScroll();
    e.preventDefault();
  });
});




// overlay for reset all
overLayForAll.addEventListener("click", () => {
  cartPanel.classList.remove("active");
  overLayForAll.classList.remove("active");
  searchPanel.classList.remove("active");
  menuPanel.classList.remove("active");
  stopScroll();
});
