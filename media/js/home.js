"use strict";

(fn => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn))(() => {
  const quotes = document.getElementById('quotes');
  const quoteList = quotes ? [...quotes.querySelectorAll('.quote')] : [];
  if (quoteList.length > 1) {
    let showId = Math.max(0, quoteList.findIndex(q => q.classList.contains('active')));
    setInterval(() => {
      quoteList[showId].classList.remove('active');
      showId = (showId + 1) % quoteList.length;
      quoteList[showId].classList.add('active');
    }, 4000);
  }
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
