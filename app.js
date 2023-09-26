// (function () {
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     })
// })();
(function () {
    // Check if a theme preference is stored in local storage
    const currentTheme = localStorage.getItem("theme");

    // Set the default theme to "light" if no preference is found
    if (!currentTheme) {
        localStorage.setItem("theme", "light");
    }

    // Function to set the theme based on the current preference
    function setTheme(theme) {
        if (theme === "light") {
            document.body.classList.add("light-mode");
        } else {
            document.body.classList.remove("light-mode");
        }
    }

    // Initialize the theme based on the stored preference
    setTheme(currentTheme);

    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });

    document.querySelector(".theme-btn").addEventListener("click", () => {
        // Toggle the theme when the theme button is clicked
        if (document.body.classList.contains("light-mode")) {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        } else {
            setTheme("light");
            localStorage.setItem("theme", "light");
        }
    });
})();
//JavaScript (lazy-load.js):

document.addEventListener("DOMContentLoaded", function () {
    const lazyLoadElements = document.querySelectorAll(".lazy-load");

    lazyLoadElements.forEach((element) => {
        const codeSrc = element.getAttribute("data-src");
        const codeElement = document.createElement("code");
        codeElement.classList.add("lazy-loading");
        codeElement.innerText = "Loading...";

        element.parentElement.appendChild(codeElement);

        fetch(codeSrc)
            .then((response) => response.text())
            .then((data) => {
                codeElement.innerText = data;
                element.style.display = "block"; // Show the code block
                codeElement.style.display = "none"; // Hide the loading indicator
            })
            .catch((error) => {
                console.error("Error loading code:", error);
                codeElement.innerText = "Error loading code.";
            });
    });
});

