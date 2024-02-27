document.addEventListener('DOMContentLoaded', (event) => {
    const lastVisit = localStorage.getItem('lastVisit');
    const visitMessage = document.getElementById('visitMessage');
    const now = new Date();
  
    if (lastVisit) {
      const previousVisitTime = new Date(lastVisit);
      const timeDifference = now - previousVisitTime;
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
      if (daysDifference < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
      } else {
        let dayString = daysDifference === 1 ? "day" : "days";
        visitMessage.textContent = `You last visited ${daysDifference} ${dayString} ago.`;
      }
    } else {
      visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    }
  
    // Update last visit date in localStorage
    localStorage.setItem('lastVisit', now);
  });
  