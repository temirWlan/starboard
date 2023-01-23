// import Swiper from "swiper";

import ArticlesListItem from "./components/articles-list-item";
import Preview from "./components/preview";
import SidebarPreview from "./components/sidebar-preview";

import filterByCategory from "./modules/categories";
import searchArticle from "./modules/search";
import sendForm from "./modules/form";
import toggleModal from "./modules/modal";
import toggleMenu from "./modules/menu";
import toggleAccordion from "./modules/accordion";

import { articles } from "../../../data.json";


window.addEventListener("DOMContentLoaded", () => {
    // try {
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
            loop: true,
            delay: 3000,
            disableOnInteraction: false
        });


        filterByCategory(".blog-main__category", ".blog-main__preview", "category--active");
        searchArticle(".blog-main__search-form-input", ".blog-main__search-form-btn", ".blog-main__preview", ".preview__title");
        toggleModal(".header__btn", ".get-demo-modal", "get-demo-modal--active")
        sendForm(".demo-form");
        toggleMenu(".header__burger-btn", ".header__menu", "burger-btn--active", "header__menu--active")
        toggleAccordion(".footer__navbar-title", ".footer__navbar-list", "footer__navbar-title--active", "footer__navbar-list--active");

        switch (window.location.pathname) {
            case "/contact-us.html":
                sendForm(".contact-us-form");
                break;
            case "/sign-up.html":
                sendForm(".sign-up-form");
                break;
            case "/sign-in.html":
                sendForm(".sign-in-form");
                break;
            case "/recover.html":
                sendForm(".recover-form");
                break;
            default:
                break;
        }


    // } catch (e) {
    //     console.log(e);
    // }
});