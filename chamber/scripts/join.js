// function displayMembershipInfo() {
//     const membershipLevel = document.getElementById('membershipLevel').value;
//     const membershipInfoSection = document.getElementById('membershipInfoSection');

//     const membershipInfo = {
//         NP: "As an NP Member, you get access to our resources and community events free of charge.",
//         Bronze: "Bronze Members enjoy basic access to content, newsletter, and community forums.",
//         Silver: "Silver Membership includes advanced content access, monthly webinars, and more.",
//         Gold: "Gold Tier Members receive full content access, exclusive events, and VIP support."
//     };

//     membershipInfoSection.innerHTML = '';

//     if (membershipLevel && membershipInfo[membershipLevel]) {
//         const infoContent = document.createElement('div');
//         infoContent.innerHTML = `<h3>${membershipLevel} Membership Benefits:</h3><p>${membershipInfo[membershipLevel]}</p>`;
//         membershipInfoSection.appendChild(infoContent);
//     }
// }

window.onload = function() {
    document.getElementById('timestamp').value = new Date().toISOString();
  }
  
