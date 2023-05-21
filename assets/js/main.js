// .scroll-top-btn

const scrollTopBtn = document.querySelector(".scroll-top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
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
const menuPanel = document.querySelector(".mobile-menu");

menuBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    menuPanel.classList.toggle("active");
    overLayForAll.classList.toggle("active");
    stopScroll();
    e.preventDefault();
  });
});

// product-menu-container

const menuProductBtn = document.querySelectorAll("[data-target='product-menu-panel']");
const menuProductPanel = document.querySelector(".menu-product");

menuProductBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    menuProductPanel.classList.toggle("active");
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
  menuProductPanel.classList.remove("active");
  stopScroll();
});

// add to cart animation

const addToCartBtn = document.querySelectorAll(".add-btn");

addToCartBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    el.classList.toggle("active");
    e.preventDefault();
  });
});

// counter for cart

const counter = document.querySelectorAll(".counter");
const minusBtn = document.querySelectorAll(".minus");
const plusBtn = document.querySelectorAll(".plus");

counter.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

minusBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let value = el.previousElementSibling;
    if (value.value > 1) {
      value.value--;
    }
  });
});

plusBtn.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    let value = el.nextElementSibling;
    value.value++;
  });
});
