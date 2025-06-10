async function loadDiscoveries() {
  const response = await fetch('data/discoveries.json');
  const data = await response.json();
  const container = document.getElementById('discover-cards');

  data.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h2>${item.title}</h2>
      <figure>
        <img src="${item.image}" alt="${item.title}" width="300" height="200">
      </figure>
      <address>${item.address}</address>
      <p>${item.description}</p>
      <button>Learn More</button>
    `;

    container.appendChild(card);
  });
}

loadDiscoveries();
