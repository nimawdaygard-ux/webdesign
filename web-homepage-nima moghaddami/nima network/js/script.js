// Basic interactivity: mobile menu toggle, active nav on scroll, testimonial slider and simple contact form handling

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = Array.from(document.querySelectorAll('main section, #home'));
    const header = document.querySelector('.site-header');
  
    // Mobile menu toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    mobileBtn && mobileBtn.addEventListener('click', () => {
      const nav = document.querySelector('.nav');
      if(nav.style.display === 'flex') nav.style.display = '';
      else nav.style.display = 'flex';
    });
  
    // Update active nav link on scroll
    const sectionOffsets = sections.map(s => ({id: s.id, el: s}));
    function onScroll(){
      const scrollPos = window.scrollY + (window.innerHeight/6);
      let current = sectionOffsets[0].id;
      for(const s of sectionOffsets){
        if(s.el.offsetTop <= scrollPos) current = s.id;
      }
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  
    // Smooth scroll for anchor clicks (for older browsers)
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const targetID = a.getAttribute('href').slice(1);
        const targetEl = document.getElementById(targetID);
        if(targetEl){
          e.preventDefault();
          targetEl.scrollIntoView({behavior:'smooth', block:'start'});
          // close mobile menu
          const nav = document.querySelector('.nav');
          if(window.innerWidth < 700 && nav) nav.style.display = '';
        }
      });
    });
  
    // Testimonials simple rotator
    const testimonials = document.querySelectorAll('.testimonial');
    let tIndex = 0;
    setInterval(() => {
      testimonials.forEach((t,i) => t.style.display = i === tIndex ? 'block' : 'none');
      tIndex = (tIndex + 1) % testimonials.length;
    }, 4000);
    // initialize display
    testimonials.forEach((t,i) => t.style.display = i === 0 ? 'block' : 'none');
  
    // Contact form (front-end only)
    const form = document.getElementById('contact-form');
    form && form.addEventListener('submit', e => {
      e.preventDefault();
      const name = form.querySelector('[name=name]').value;
      // Simple UI feedback
      alert('پیام شما دریافت شد، ' + name + ' عزیز. به‌زودی با شما تماس می‌گیریم.');
      form.reset();
    });
  
    // Footer year
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();
  });
  // اسکرول نرم برای منو
document.querySelectorAll('header nav a').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
    });
  });
  // Particle Effect for Hero
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  if (!particlesContainer) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.width = `${Math.random() * 5 + 2}px`;
    particle.style.height = particle.style.width;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    particlesContainer.appendChild(particle);
  }
}
createParticles();

// Preloader
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hide');
    }, 1000);
  }
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Fade-in Animation for Sections
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.1 }
);

sections.forEach((section) => observer.observe(section));