// Show a welcome alert on page load
window.addEventListener('load', () => {
  alert("Welcome to the Healthy Living & Well-being Blog!");
});

// Scroll to Top Button logic
const topBtn = document.getElementById("topBtn");

// Show button when scrolled down 100px
window.onscroll = function () {
  if (topBtn) {
    topBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
  }
};

// Scroll smoothly to top when button is clicked
if (topBtn) {
  topBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Navigation highlight based on current page
const currentPage = location.pathname.split("/").pop();
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }

  let player;
// YouTube API callback
function onYouTubeIframeAPIReady() {
  player = new YT.Player('healthyVideo');
}

// Play video
function playVideo() {
  if (player && typeof player.playVideo === 'function') {
    player.playVideo();
  }
}

// Pause video
function pauseVideo() {
  if (player && typeof player.pauseVideo === 'function') {
    player.pauseVideo();
  }
}
});
