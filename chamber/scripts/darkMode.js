document.addEventListener('DOMContentLoaded', (event) => {
    const darkModeToggle = document.getElementById('DarkModeButton');
    const body = document.body;
    
    // Check for saved user preference, if it's available
    const currentMode = localStorage.getItem('darkMode');
    if (currentMode === 'enabled') {
      body.classList.add('dark-mode');
    }
    
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // Save the current preference to localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  });
  