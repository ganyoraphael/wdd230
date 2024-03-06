

// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

// async function getProphetData() {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         displayProphets(data.prophets);
//     } catch (error) {
//         console.error('Error fetching data: ', error);
//     }
// }

// const displayProphets = (prophets) => {
//     const cardsContainer = document.querySelector('#cards');

//     prophets.forEach((prophet) => {
//         let card = document.createElement('section');
//         card.className = 'card';

//         let fullName = document.createElement('h2');
//         fullName.textContent = `${prophet.name} ${prophet.lastname}`;

//         let portrait = document.createElement('img');
//         portrait.setAttribute('src', prophet.imageurl);
//         portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
//         portrait.setAttribute('loading', 'lazy');
//         portrait.setAttribute('width', '200');
//         portrait.setAttribute('height', '200');

//         card.appendChild(fullName);
//         card.appendChild(portrait);

//         cardsContainer.appendChild(card);
//     });
// };

// getProphetData();


const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

const displayProphets = (prophets) => {
    const cardsContainer = document.querySelector('#cards');

    prophets.forEach((prophet) => {
        let card = document.createElement('section');
        card.className = 'card';

        let fullName = document.createElement('h2');
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Assuming that the JSON data contains properties `birthdate` and `birthplace`
        let birthInfo = document.createElement('p');
        birthInfo.textContent = `Date of Birth: ${prophet.birthdate} | Place of Birth: ${prophet.birthplace}`;
        birthInfo.className = 'birth-info';

        let portrait = document.createElement('img');
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200'); // adjust based on your needs
        portrait.setAttribute('height', '200'); // adjust based on your needs

        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(birthInfo);

        cardsContainer.appendChild(card);
    });
};

getProphetData();

