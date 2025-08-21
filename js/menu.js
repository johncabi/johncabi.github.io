const hamburgerMenuButton = document.querySelector("#hamburger-menu-button");
const mobileMenu = document.querySelector("#mobile-menu");
const mobileMenuOverlay = document.querySelector("#mobile-menu-overlay");

if (window.visualViewport) {
    let wasOpen = false;
}

window.visualViewport.addEventListener("resize", () => {
    const w = window.visualViewport.width;
    if (w >= 768) {
        wasOpen = !mobileMenu.classList.contains("-translate-x-full");
        mobileMenu.classList.add("-translate-x-full");
        mobileMenuOverlay.classList.add("hidden");
    }
    else {
        if (wasOpen) {
            mobileMenu.classList.remove("-translate-x-full");
            mobileMenuOverlay.classList.remove("hidden");
        }
        else {
            mobileMenu.classList.add("-translate-x-full");
            mobileMenuOverlay.classList.add("hidden");
        }
    }
});

hamburgerMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("-translate-x-full");
    mobileMenuOverlay.classList.toggle("hidden")
});

mobileMenuOverlay.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    mobileMenuOverlay.classList.add("hidden");
});
