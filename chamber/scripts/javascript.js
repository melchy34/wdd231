<!-- JavaScript -->
  <script>
    // Toggle view between grid and list
    const toggleBtn = document.getElementById('toggleView');
    const memberList = document.getElementById('member-list');

    toggleBtn.addEventListener('click', () => {
      memberList.classList.toggle('grid-view');
      memberList.classList.toggle('list-view');
    });

    // Hamburger menu toggle
    document.getElementById('menu-toggle').addEventListener('click', () => {
      document.getElementById('main-nav').classList.toggle('open');
    });

    // Set year and last modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
  </script>
[
  {
    "name": "Acme Corp",
    "address": "123 Main St, Cityville, ST 12345",
    "phone": "(123) 456-7890",
    "website": "https://www.acmecorp.com",
    "image": "acme-logo.jpg",
    "membershipLevel": 1,
    "otherInfo": "Member since 2010"
  },
  {
    "name": "Beta Technologies",
    "address": "456 Beta Rd, Techcity, ST 67890",
    "phone": "(234) 567-8901",
    "website": "https://www.betatech.com",
    "image": "beta-logo.jpg",
    "membershipLevel": 2,
    "otherInfo": "Innovators in tech solutions."
  },
  {
    "name": "Gamma Industries",
    "address": "789 Gamma Ave, Industrietown, ST 11223",
    "phone": "(345) 678-9012",
    "website": "https://www.gammaindustries.com",
    "image": "gamma-logo.jpg",
    "membershipLevel": 3,
    "otherInfo": "Global leader in manufacturing."
  },
  {
    "name": "Delta Enterprises",
    "address": "101 Delta Blvd, Businesscity, ST 44556",
    "phone": "(456) 789-0123",
    "website": "https://www.deltaenterprises.com",
    "image": "delta-logo.jpg",
    "membershipLevel": 1,
    "otherInfo": "Providing solutions for over 20 years."
  },
  {
    "name": "Epsilon Group",
    "address": "202 Epsilon Pkwy, Techland, ST 78901",
    "phone": "(567) 890-1234",
    "website": "https://www.epsilongroup.com",
    "image": "epsilon-logo.jpg",
    "membershipLevel": 2,
    "otherInfo": "Experts in digital marketing."
  },
  {
    "name": "Zeta Inc.",
    "address": "303 Zeta Dr, Innovacity, ST 33445",
    "phone": "(678) 901-2345",
    "website": "https://www.zetainc.com",
    "image": "zeta-logo.jpg",
    "membershipLevel": 3,
    "otherInfo": "Leading in artificial intelligence solutions."
  },
  {
    "name": "Theta Solutions",
    "address": "404 Theta Ln, Silicon Valley, ST 55667",
    "phone": "(789) 012-3456",
    "website": "https://www.thetasolutions.com",
    "image": "theta-logo.jpg",
    "membershipLevel": 1,
    "otherInfo": "Pioneers in sustainable energy."
  }
]
