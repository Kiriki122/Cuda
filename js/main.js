const burger = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");
const body = document.body;
if (burger && menu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
        body.classList.toggle("_lock");
    });
}
menuLinks.forEach((item) =>
    item.addEventListener("click", () => {
        burger.classList.remove("_active");
        menu.classList.remove("_active");
        body.classList.remove("_lock");
    }),
);

const selection = document.querySelectorAll(".portfolio__button");
selection.forEach((item) =>
    item.addEventListener("click", () => {
        selection.forEach((item) => item.classList.remove("_active"));
        item.classList.add("_active");
    }),
);
