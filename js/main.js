const burger = document.querySelector(".menu__icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");
if (burger && menu) {
    burger.addEventListener("click", () => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
    });
}
menuLinks.forEach((item) =>
    item.addEventListener("click", () => {
        burger.classList.toggle("_active");
        menu.classList.toggle("_active");
    }),
);

const selection = document.querySelectorAll(".portfolio__button");
selection.forEach((item) =>
    item.addEventListener("click", () => {
        selection.forEach((item) =>
            item.classList.remove("portfolio__button-active"),
        );
        item.classList.add("portfolio__button-active");
    }),
);
