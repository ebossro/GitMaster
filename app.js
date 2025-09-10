// Gestion du menu burger
    const burgerMenu = document.getElementById('burger-menu');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    // Toggle du menu burger
    burgerMenu.addEventListener('click', function () {
      burgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
      body.classList.toggle('menu-open');
    });

    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
      });
    });

    // Fermer le menu en cliquant en dehors
    document.addEventListener('click', function (event) {
      if (!burgerMenu.contains(event.target) && !navMenu.contains(event.target)) {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        body.classList.remove('menu-open');
      }
    });

    // Gestion du thème sombre/clair (fonctionnalité existante)
    const darkModeToggle = document.getElementById('darkmode-toggle');
    if (darkModeToggle) {
      darkModeToggle.addEventListener('change', function () {
        // Logique du thème (à implémenter selon vos besoins)
        console.log('Thème changé:', this.checked ? 'sombre' : 'clair');
      });
    }