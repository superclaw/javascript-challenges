export function renderData(data) {
  const list = document.querySelector('[data-project="parent"]');
  const shadowList = list.cloneNode();
  const template = document.querySelector('[data-template="project-card"]');

  list.classList.remove('is-active');

  data.forEach(item => {
    const clone = template.content.cloneNode(true);
    const element = clone.querySelector('[data-template="element"]');
    const card = element.querySelector('.product-card');
    const title = element.querySelector('.product-card__title');
    const link = element.querySelector('.product-card__shadow-link');
    const img = element.querySelector('.product-card__img');
    const label = element.querySelector('.product-card__label');
    const date = element.querySelector('.product-card__date');
    const hit = element.querySelector('.product-card__hit');

    if (!item.hit) {
      hit.remove();
    }

    title.textContent = item.title;
    link.href = item.href;
    img.src = item.src;
    img.alt = item.alt;
    label.textContent = item.label;
    date.textContent = item.date;
    card.classList.add(...item.classes);
    img.setAttribute('width', item.width);
    img.setAttribute('height', item.height);
    shadowList.appendChild(clone);
  });

  list.innerHTML = shadowList.innerHTML;
  shadowList.remove();
  setTimeout(() => list.classList.add('is-active'), 300)
}
