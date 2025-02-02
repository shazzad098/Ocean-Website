const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    // Toggle visibility of the mobile menu
    mobileMenu.classList.toggle('hidden');

    // Add animation to slide down/up
    if (!mobileMenu.classList.contains('hidden')) {
      mobileMenu.style.animation = 'slideDown 0.3s ease-in-out';
    } else {
      mobileMenu.style.animation = 'slideUp 0.3s ease-in-out';
    }
  });

  // CSS Animations
  const styleSheet = document.createElement('style');
  styleSheet.innerHTML = `
    @keyframes slideDown {
      from { transform: translateY(-10px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes slideUp {
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(-10px); opacity: 0; }
    }
  `;
  document.head.appendChild(styleSheet);