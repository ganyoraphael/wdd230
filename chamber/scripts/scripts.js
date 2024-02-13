// Footer updates
const date = new Date();
const yearString = date.getFullYear(); // Just get the full year
document.getElementById("CopyrightYear").textContent = yearString;
document.getElementById("LastUpdated").textContent = document.lastModified;





/// Dark Mode Support
const darkModeButton = document.querySelector("#DarkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener('click', () => {
    body.classList.toggle("darkMode");
});



document.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');

    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('is-active'); // Toggle a class to change the button's appearance
    });
});

 
  