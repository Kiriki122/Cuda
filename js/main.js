const selection = document.querySelectorAll(".portfolio__button");
selection.forEach((item) => item.addEventListener("click", activeselection));

function activeselection() {
    selection.forEach((item) =>
        item.classList.remove("portfolio__button-active"),
    );
    this.classList.add("portfolio__button-active");
}
