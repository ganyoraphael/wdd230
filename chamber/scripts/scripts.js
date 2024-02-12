// Footer updates
const date = new Date();
const yearString = date.getFullYear(); // Just get the full year
document.getElementById("CopyrightYear").textContent = yearString;
document.getElementById("LastUpdated").textContent = document.lastModified;
