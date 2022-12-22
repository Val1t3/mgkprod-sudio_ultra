window.addEventListener("scroll", () => {
    let header = document.querySelector("#header-fixed");
    header.classList.toggle("head-fixed", window.scrollY >= 250);
});

let ready = true;

document.querySelector("#ready-btn").addEventListener("click", () => {
    ready = !ready;

    if (ready) {
        document.querySelector("#price-1").innerHTML = "$3K";
        document.querySelector("#price-2").innerHTML = "$10K";
        document.querySelector("#price-3").innerHTML = "$20K+";
        document.querySelector("#ready-des-1").innerHTML = "Design, Frontend & Backend";
        document.querySelector("#ready-des-2").innerHTML = "Design, Frontend & Backend";
        document.querySelector("#ready-des-3").innerHTML = "Design, Frontend & Backend";
    } else {
        document.querySelector("#price-1").innerHTML = "$2K";
        document.querySelector("#price-2").innerHTML = "$5K";
        document.querySelector("#price-3").innerHTML = "$15K+";
        document.querySelector("#ready-des-1").innerHTML = "Frontend & Backend";
        document.querySelector("#ready-des-2").innerHTML = "Frontend & Backend";
        document.querySelector("#ready-des-3").innerHTML = "Frontend & Backend";
    }
});
