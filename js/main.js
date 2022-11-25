const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
    var swiper2 = new Swiper(".mySwiper2", {
        direction: "vertical",
        spaceBetween: 50,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});