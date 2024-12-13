// footer.js
// Handles footer-specific functionality, including navigation back to the top.
console.log('footer.js is loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Select the back-to-top anchor in the footer
    const backToTop = document.querySelector('footer a');
  
    if (backToTop) {
      backToTop.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
  
        // Determine the currently visible section
        const sections = document.querySelectorAll('main section');
        let currentSection = null;
  
        sections.forEach((section) => {
          const rect = section.getBoundingClientRect();
          // Check if the section is at least partially visible
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        });
  
        // Scroll to the top of the current section
        if (currentSection) {
          currentSection.scrollIntoView({
            behavior: 'smooth', // Smooth scrolling
            block: 'start', // Align to the start of the section
          });
        }
      });
    }
  });
  