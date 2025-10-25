// scripts.js



document.addEventListener('DOMContentLoaded', function () {
    // Reveal sections
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('is-visible');
      });
    }, { threshold: 0.12 });
  
    reveals.forEach(r => revealObserver.observe(r));
  
    // Skills progress animation
    const skillBars = document.querySelectorAll('.skill__bar');
    const skillsObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const bar = entry.target;
        const pct = parseInt(bar.getAttribute('data-skill') || '0', 10);
        const inner = bar.querySelector('.skill__progress');
        if (inner) inner.style.width = pct + '%';
        obs.unobserve(bar);
      });
    }, { threshold: 0.25 });
  
    skillBars.forEach(b => skillsObserver.observe(b));
  
   
    
  });
  