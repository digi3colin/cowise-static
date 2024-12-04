"use strict";

(fn => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn))(() => {
  setInterval(() => {
    const quotes = document.getElementById('quotes');
    let showId = parseInt(quotes.getAttribute('data-active') || 0);
    showId = showId < 4 ? showId + 1 : 1;
    quotes.setAttribute('data-active', showId.toString());
  }, 4000);
  const logo = document.querySelector('#logo');
  const featured = document.querySelector('#featured');
  document.addEventListener('scroll', () => {
    const rectLogo = logo.getBoundingClientRect();
    const rectFeatured = featured.getBoundingClientRect();

    if (rectLogo.height >= rectFeatured.top + 20) {
      if (logo.classList.contains('active')) return;
      logo.classList.add('active');
    } else {
      if (!logo.classList.contains('active')) return;
      logo.classList.remove('active');
    }
  });
});
//# sourceMappingURL=home.js.map