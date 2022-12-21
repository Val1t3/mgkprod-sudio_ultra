window.addEventListener("scroll", () => {
    let header = document.querySelector("#header-fixed");
    header.classList.toggle("head-fixed", window.scrollY >= 250);
})