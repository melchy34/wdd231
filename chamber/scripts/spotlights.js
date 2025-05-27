// Function to load spotlight members
async function loadSpotlights() {
    try {
        // Load members from the JSON data (this could be replaced with a dynamic API call)
        const response = await fetch('members.json');
        const members = await response.json();

        // Filter out only Gold and Silver members
        const filteredMembers = members.filter(member => 
            member.membershipLevel === 'gold' || member.membershipLevel === 'silver'
        );

        // Randomly pick 2 or 3 members
        const randomMembers = [];
        const numberOfSpotlights = Math.floor(Math.random() * 2) + 2; // Random 2 or 3 spotlights
        while (randomMembers.length < numberOfSpotlights) {
            const randomIndex = Math.floor(Math.random() * filteredMembers.length);
            const member = filteredMembers[randomIndex];
            if (!randomMembers.includes(member)) {
                randomMembers.push(member);
            }
        }

        // Update the spotlight section
        const spotlightSection = document.getElementById('company-spotlights');
        randomMembers.forEach(member => {
            spotlightSection.innerHTML += `
                <div class="spotlight">
                    <img src="${member.logo}" alt="${member.companyName} logo" class="company-logo">
                    <h4>${member.companyName}</h4>
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p>Membership Level: ${member.membershipLevel}</p>
                </div>
            `;
        });
    } catch (error) {
        console.error("Error loading spotlight data: ", error);
    }
}

window.onload = loadSpotlights;
