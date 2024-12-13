document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Function to show a specific section
  function showSection(id) {
    sections.forEach((section) => {
      try {
        // Check if the section exists and has an ID
        if (section && section.id === id) {
          section.style.display = "block"; // Show the section
        } else if (section) {
          section.style.display = "none"; // Hide other sections
        }
      } catch (error) {
        console.error(`Error while handling section with ID '${id}':`, error);
      }
    });
  }

  // Set up click listeners for navbar links
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent the default anchor behavior
      const targetId = link.getAttribute("href")?.substring(1); // Extract the ID from href

      if (targetId) {
        try {
          showSection(targetId);
        } catch (error) {
          console.error(`Error while navigating to section '${targetId}':`, error);
        }
      } else {
        console.warn("No valid target ID found in link:", link);
      }
    });
  });

  // On initial load, show only the hero section
  try {
    showSection("hero");
  } catch (error) {
    console.error("Error while displaying the initial section:", error);
  }
});
