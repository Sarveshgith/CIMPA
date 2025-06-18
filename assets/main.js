document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const closeMenu = document.getElementById('closeMenu');
  const mobileMenu = document.getElementById('mobileMenu');
  const content = document.getElementById('content');

  menuToggle.addEventListener('click', function () {
    mobileMenu.classList.remove('-translate-x-full');
    content.style.transform = 'translateX(75%)'; // Push content slightly
  });

  // Close sidebar & reset content
  closeMenu.addEventListener('click', function () {
    mobileMenu.classList.add('-translate-x-full');
    content.style.transform = 'translateX(0)';
  });
});

window.addEventListener('scroll', function () {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('bg-[#0d0d0d]');
    navbar.classList.add('shadow-md');
  } else {
    navbar.classList.remove('bg-[#0d0d0d]');
    navbar.classList.remove('shadow-md');
  }
});
