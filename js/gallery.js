var image = document.querySelectorAll("#gallery-image");
var overlay = document.querySelector(".overlay")

image.forEach((loop) => {
    loop.addEventListener("click", () => {
        loop.classList.add("active")
        overlay.classList.add("active")
        overlay.addEventListener("click", () => {
            overlay.classList.remove("active")
            loop.classList.remove("active")
        })
    })
})