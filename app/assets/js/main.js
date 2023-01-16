import Swiper from 'swiper';

window.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".testimonials__slider", {
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".testimonials__slider-button-next",
            prevEl: ".testimonials__slider-button-prev",
        },
        speed: 700,
        loop: true
    });

    console.log("loaded");
});