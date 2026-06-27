// PARAISO ROLEPLAY — site script

document.addEventListener('DOMContentLoaded', function () {
  var nav = document.getElementById('nav');
  var hamburger = document.getElementById('hamburger');

  function toggleNav() {
    nav.classList.toggle('open');
  }

  hamburger.addEventListener('click', toggleNav);

  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
      nav.classList.remove('open');
    }
  });

  // close mobile nav automatically when a link inside it is clicked
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('open');
    });
  });
});
