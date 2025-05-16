// Toggle view between grid and list
const toggleBtn = document.getElementById('toggleView');
const memberList = document.getElementById('member-list');

if (toggleBtn && memberList) {
  toggleBtn.addEventListener('click', () => {
    memberList.classList.toggle('grid-view');
    memberList.classList.toggle('list-view');
  });
}

// Hamburger menu toggle for mobile view
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

if (menuToggle && mainNav) {
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
}

// Update footer year and last modified date
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  const modifiedSpan = document.getElementById('lastModified');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});
