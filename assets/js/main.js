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

// add to cart animation

const addToCartBtn = document.querySelectorAll(".add-btn");

addToCartBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.add("active");
    setTimeout(() => {
      el.classList.remove("active");
    }, 3000);
    e.preventDefault();
  });
}
);
