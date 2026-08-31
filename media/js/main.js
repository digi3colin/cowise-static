"use strict";

(fn => document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn))(() => {
  const nav = document.getElementById('site-nav');
  if (!nav) return;
  const navToggle = document.getElementById('nav-toggle');
  const setNav = open => {
    nav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', open.toString());
  };
  navToggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
  nav.querySelectorAll('#nav-menu a').forEach(a => a.addEventListener('click', () => setNav(false)));
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape' || !nav.classList.contains('open')) return;
    setNav(false);
    navToggle.focus();
  });
  document.addEventListener('click', e => {
    if (!nav.classList.contains('open') || nav.contains(e.target)) return;
    setNav(false);
  });
});
