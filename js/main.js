// Main JavaScript file for V-Runway website

document.addEventListener('DOMContentLoaded', function() {
  // Initialize any interactive functionality here
  initSmoothScrolling();
});

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  const anchors = document.querySelectorAll('a[href^="#"]:not([href="#"])');
  
  for (let anchor of anchors) {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Get header height to offset scroll position
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  }
}

// Add active class to benefit cards on hover for subtle interaction
const benefitCards = document.querySelectorAll('.benefit-card');
if (benefitCards) {
  benefitCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-5px)';
      card.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
    });
  });
}