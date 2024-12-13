// app.js
// Main entry point for all custom JavaScript functionality across the application.
console.log('app.js is loaded');

document.addEventListener('DOMContentLoaded', () => {
    const footer = document.querySelector('footer');
    if (!footer) {
      console.error('Footer element is missing or not visible!');
    } else {
      console.log('Footer is loaded and visible.');
    }
  });