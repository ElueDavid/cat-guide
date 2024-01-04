
var readMoreButtons = document.querySelectorAll("#read-more");
var divFullContents = document.querySelectorAll(".dfc");

readMoreButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        var container = divFullContents[index];

        // Toggle the "active" class for the specific container
        container.classList.toggle("active");

        // Change the text content of the button based on the container's class
        if (container.classList.contains("active")) {
            button.textContent = "Show Less";
        } else {
            button.textContent = "Read More";
        }

        // Remove the "active" class from other containers
        divFullContents.forEach((otherContainer, otherIndex) => {
            if (otherIndex !== index) {
                otherContainer.classList.remove("active");
            }
        });
    });
});