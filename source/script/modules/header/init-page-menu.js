export function createBurger() {
  const nav = document.querySelector('[data-main-nav="nav"]');
  const navItems = nav.querySelectorAll('[data-nav-item="item"]');
  const logo = document.querySelector('[data-header-logo]');
  const burger = document.querySelector('[data-sandwich]');
  let isOpened = false;

  function openMenu() {
    isOpened = true;
    burger.classList.add('is-active');
    nav.classList.add('is-active');
    logo.classList.add('is-menu');
    document.body.classList.add('scroll-lock');

    navItems.forEach((navItem, i) => {
      navItem.style.transitionDelay = `${i * 0.2}s`;
      navItem.classList.add('is-active');
    });
  }

  function closeMenu(){
    isOpened = false;
    burger.classList.remove('is-active');
    nav.classList.remove('is-active');
    logo.classList.remove('is-menu');
    document.body.classList.remove('scroll-lock');

    navItems.forEach((item) => {
      item.style.transitionDelay = '';
      item.classList.remove('is-active');
    });
  }

  burger.addEventListener('click', () => {
    isOpened ? closeMenu() : openMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpened) {
      closeMenu();
    }
  });

  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      closeMenu();
    }
  });
}
