const menuButton = document.querySelector(".menu-btn");
const navLinks = document.getElementById("navLinks");

function setMenuOpen(isOpen) {
    navLinks.classList.toggle("active", isOpen);
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

menuButton.addEventListener("click", () => {
    setMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
});

navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        setMenuOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setMenuOpen(false);
    }
});
