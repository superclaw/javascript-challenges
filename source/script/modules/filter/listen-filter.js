export function listenFilter(callback) {
  const filterList = document.querySelector('[data-filter="parent"]');
  const filterLinks = filterList.querySelectorAll('[data-filter="link"]');

  filterList.addEventListener('click', (e) => {
    if (e.target.dataset.filter === 'link') {
      filterLinks.forEach((link) => {
        link.classList.remove('is-active');
      });

      e.target.classList.add('is-active');
      window.location.hash = e.target.href;
      callback();
    }
  })
}
