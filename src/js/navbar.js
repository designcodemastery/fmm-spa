// navbar.js
// Handles navigation bar interactions, such as toggling the hamburger menu.
console.log('navbar.js is loaded');

document.addEventListener("DOMContentLoaded", () => {
  try {
    const sections = document.querySelectorAll("section"); // All sections
    const navLinks = document.querySelectorAll(".nav-link"); // All nav links
    const navbarBrand = document.querySelector(".navbar-brand"); // Navbar brand link
    const navbarCollapse = document.querySelector(".navbar-collapse"); // Collapsible menu

    if (!sections.length) {
      console.warn("No sections found in the document.");
      return;
    }

    if (!navLinks.length) {
      console.warn("No navigation links found in the document.");
      return;
    }

    if (!navbarBrand) {
      console.warn("Navbar brand link not found.");
    }

    if (!navbarCollapse) {
      console.warn("Navbar collapse element not found.");
    }

    // Function to show the target section and hide others
    const showSection = (targetId) => {
      sections.forEach((section) => {
        try {
          if (section && section.id === targetId) {
            section.classList.remove("d-none"); // Show target section
          } else if (section) {
            section.classList.add("d-none"); // Hide others
          }
        } catch (error) {
          console.error(`Error updating section visibility for ID '${targetId}':`, error);
        }
      });
    };

    // Function to collapse the hamburger menu
    const collapseMenu = () => {
      try {
        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show"); // Collapse the menu
        }
      } catch (error) {
        console.error("Error collapsing the navbar menu:", error);
      }
    };

    // Add click event listeners to navigation links
    navLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = link.getAttribute("href")?.replace("#", ""); // Get the target ID

        if (targetId) {
          try {
            showSection(targetId);
            collapseMenu();

            // Update the active class for navigation links
            navLinks.forEach((nav) => nav.classList.remove("active"));
            link.classList.add("active");
          } catch (error) {
            console.error(`Error handling navigation link click for ID '${targetId}':`, error);
          }
        } else {
          console.warn("Invalid target ID for navigation link:", link);
        }
      });
    });

    // Handle navbar brand link click
    if (navbarBrand) {
      navbarBrand.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent default anchor behavior

        try {
          showSection("home"); // Show the hero section
          collapseMenu();

          // Update the active class for navigation links
          navLinks.forEach((nav) => nav.classList.remove("active"));
        } catch (error) {
          console.error("Error handling navbar brand click:", error);
        }
      });
    }

    // Ensure only the hero section is visible on initial load
    try {
      showSection("home");
    } catch (error) {
      console.error("Error initializing the hero section visibility:", error);
    }

    // Collapse Navbar on Mobile After Link Click
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        try {
          const isExpanded = window.getComputedStyle(navbarCollapse).display !== "none";
          if (isExpanded) {
            const navbarToggler = document.querySelector(".navbar-toggler");
            if (navbarToggler) {
              navbarToggler.click();
            } else {
              console.warn("Navbar toggler not found.");
            }
          }
        } catch (error) {
          console.error("Error handling navbar collapse on link click:", error);
        }
      });
    });

  } catch (error) {
    console.error("Error initializing navbar behavior:", error);
  }

  // Add active link management for better UX
  try {
    const navLinkEls = document.querySelectorAll('.nav-link');

    navLinkEls.forEach((navLinkEl) => {
      navLinkEl.addEventListener('click', () => {
        try {
          document.querySelector('.active')?.classList.remove('active');
          navLinkEl.classList.add('active');
        } catch (error) {
          console.error("Error managing active class for navigation links:", error);
        }
      });
    });
  } catch (error) {
    console.error("Error setting up active link management:", error);
  }
});
