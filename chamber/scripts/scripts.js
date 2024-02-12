// Footer updates
const date = new Date();
const yearString = date.getFullYear(); // Just get the full year
document.getElementById("CopyrightYear").textContent = yearString;
document.getElementById("LastUpdated").textContent = document.lastModified;




document.addEventListener('DOMContentLoaded', (event) => {
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');

    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('is-active'); // Toggle a class to change the button's appearance
    });
});
