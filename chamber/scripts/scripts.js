
// Function to show membership info
function displayMembershipInfo() {
    const membershipLevel = document.getElementById('membershipLevel').value;
    const membershipInfoSection = document.getElementById('membershipInfoSection');

    const membershipInfo = {
        NP: "As an NP Member, you get access to our resources and community events free of charge.",
        Bronze: "Bronze Members enjoy basic access to content, newsletter, and community forums.",
        Silver: "Silver Membership includes advanced content access, monthly webinars, and more.",
        Gold: "Gold Tier Members receive full content access, exclusive events, and VIP support."
    };

    // Clear previous information
    membershipInfoSection.innerHTML = '';

    // Only display information if a level is selected
    if (membershipLevel && membershipInfo[membershipLevel]) {
        const infoContent = document.createElement('div');
        infoContent.innerHTML = `<h3>${membershipLevel} Membership Benefits:</h3><p>${membershipInfo[membershipLevel]}</p>`;
        membershipInfoSection.appendChild(infoContent);
    }
}

// Ensure DOM content is loaded before running scripts
document.addEventListener('DOMContentLoaded', (event) => {
    // Footer year and last updated
    const currentYear = new Date().getFullYear();
    document.getElementById('CopyrightYear').textContent = currentYear;
    document.getElementById('LastUpdated').textContent = document.lastModified;

    // Dark mode toggle
    const darkModeButton = document.getElementById('DarkModeButton');
    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Hamburger menu toggle
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const primaryNav = document.getElementById('primaryNav');
    hamburgerBtn.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        hamburgerBtn.classList.toggle('is-active');
    });



    // Initial call to displayMembershipInfo in case there is a preselected value
    displayMembershipInfo();

    // Event listener for membership level changes
    document.getElementById('membershipLevel').addEventListener('change', displayMembershipInfo);
});




 
  
