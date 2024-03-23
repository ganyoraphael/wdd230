document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('gridView').addEventListener('click', function() {
      document.getElementById('directory-data').className = 'grid-view';
      this.className = 'active';
      document.getElementById('lineItemView').className = '';
  });

  document.getElementById('lineItemView').addEventListener('click', function() {
      document.getElementById('directory-data').className = 'list-view';
      this.className = 'active';
      document.getElementById('gridView').className = '';
  });

  fetchMembers();
});

function fetchMembers() {
  fetch('data/members.json')
      .then(response => response.json())
      .then(members => populateMembers(members))
      .catch(error => console.error('Error loading members:', error));
}

function populateMembers(members) {
  const container = document.getElementById('directory-data');
  container.innerHTML = members.map(member => `
      <div class="member-card">
          <h2>${member.name}</h2>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <p>Membership Level: ${member.level}</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
      </div>
  `).join('');
}

