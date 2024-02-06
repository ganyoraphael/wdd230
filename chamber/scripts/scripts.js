function toggleManu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");

}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleManu;

let date = new Date

const dateOptions = {
    year:'2-digit',
    month:'long',
    day:'numeric'

}
let year = date.getFullYear()
console.log(year)
let years = document.querySelectorAll(".year");
console.log(years)

function displayYear(x) {
    for(let i=0; i<x.length; i++) {
        x[i].textContent = date.toLocaleDateString('en-US', dateOptions);
    }
}

displayYear(years)

document.querySelector("#lastmodified").textContent = document.lastModified;

// Show the meet-greet message on Tue/Thu
// Date.getDay() uses a 0 based index to return the day of the week
var messagedate = new Date();
console.log(messagedate.getDay())
if (messagedate.getDay()==2 || messagedate.getDay()==4){
    document.querySelector("#meet-greet").classList.add('active');
} else {
    document.querySelector("#meet-greet").style.display = "none";

}