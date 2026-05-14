/* ============ DISPLAY SPORT RUNNING — SCRIPT ============ */

// Custom cursor
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0, cx = 0, cy = 0;
document.addEventListener('mousemove', (e) => { mouseX = e.clientX; mouseY = e.clientY; });
function animateCursor() {
  cx += (mouseX - cx) * 0.18;
  cy += (mouseY - cy) * 0.18;
  cursor.style.left = cx + 'px';
  cursor.style.top = cy + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor grow on interactive elements
document.querySelectorAll('button, a, .feature, li, .product, .testi, .ig-tile, .ig-post, .swatch, .size-btn, .tab-btn, .thumb, .filter-btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

// Counter animation
function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const start = performance.now();
  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString('es-CO');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString('es-CO');
  }
  requestAnimationFrame(step);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stat-num').forEach(el => observer.observe(el));

// Catalog filter
const filterBtns = document.querySelectorAll('.filter-btn');
const products = document.querySelectorAll('.product');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    products.forEach(p => {
      const show = filter === 'todos' || p.dataset.cat === filter;
      p.style.display = show ? 'flex' : 'none';
    });
  });
});

// Hero parallax
const card = document.querySelector('.runner-card');
const dataPoints = document.querySelectorAll('.data-point');
document.addEventListener('mousemove', (e) => {
  if (window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  if (card) card.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  dataPoints.forEach((dp, i) => {
    const factor = (i + 1) * 0.5;
    dp.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
  });
});
