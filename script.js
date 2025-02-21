document.addEventListener('DOMContentLoaded', function () {
  // Elementy pre loader, obsah, prepínač témy a jeho ikonu
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeIcon = document.getElementById('theme-icon');
  const body = document.body;

  // Loader fade-out efekt
  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => {
      loader.style.display = 'none';
      content.style.display = 'block';
    }, 1000);
  }, 2000);

  // Inicializácia témy
  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
    themeIcon.src = 'moon_dark.png';
  } else {
    themeIcon.src = 'sun_light.png';
  }

  // Prepínač témy
  themeSwitcher.addEventListener('click', function () {
    if (body.classList.contains('light')) {
      body.classList.remove('light');
      themeIcon.src = 'sun_light.png';
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.add('light');
      themeIcon.src = 'moon_dark.png';
      localStorage.setItem('theme', 'light');
    }
  });

  // Spracovanie slider menu pre mobilné a desktop zariadenia
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  // Toggle slider menu pri kliknutí na hamburger tlačidlo
  hamburgerMenu.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });

  // Zatvorenie menu po kliknutí mimo neho (pre desktop verziu)
  document.addEventListener('click', function (event) {
    if (!hamburgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
      mobileMenu.classList.remove('active');
    }
  });

  // Po kliknutí na odkaz v menu zavrieme menu a scrollneme na obsah
  const mobileLinks = document.querySelectorAll('#mobile-menu ul li a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      mobileMenu.classList.remove('active');

      // Scrollovanie na cieľovú sekciu
      const targetId = link.getAttribute('href'); // Predpokladám, že odkazy sú s #id sekcie
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
