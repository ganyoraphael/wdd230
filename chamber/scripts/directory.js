
document.addEventListener('DOMContentLoaded', fetchMembers);

function fetchMembers() {
  fetch('data/members.json')
    .then(response => response.json())
    .then(members => {
      populateMembers(members);
    })
    .catch(error => console.error('Error loading members:', error));
}

function populateMembers(members) {
  const container = document.getElementById('membersContainer');
  members.forEach(member => {
    container.innerHTML += `
      <div class="member-card">
        <h2>${member.name}</h2>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>${member.membership}</p>
        <a href="${member.website}">Visit Website</a>
      </div>
    `;
  });
}

function toggleView() {
  const container = document.getElementById('membersContainer');
  container.classList.toggle('list-view');
}








