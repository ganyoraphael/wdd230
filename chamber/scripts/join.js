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