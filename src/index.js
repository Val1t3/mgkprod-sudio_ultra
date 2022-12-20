window.addEventListener("scroll", () => {
    let header = document.querySelector("#header-fixed");
    header.classList.toggle("head-fixed", window.scrollY >= 250);

    let image1 = document.querySelector("#image-1");
    header; classList.toggle("image-fixed", window.scrollY >= 1715);
    console.log(window.scrollY);
})