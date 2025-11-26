const burger = document.getElementById("burger");
const nav = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    burger.classList.toggle("active");
});

