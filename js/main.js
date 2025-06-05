// Load header or footer components
function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // If header is loaded, initialize menu toggle and active link
      if (id === "header") {
        setupMobileMenuToggle();
        setActiveNavLink();
      }

      // If footer is loaded, setup scroll-to-top button
      if (id === "footer") {
        setupScrollTopButton();
      }
    });
}

// Set up mobile menu toggle
function setupMobileMenuToggle() {
  const toggleBtn = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("show");
    });
  }
}

// Highlight the current page's nav link
function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".nav-link").forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (
      linkPage === currentPage ||
      (linkPage === "index.html" && currentPage === "")
    ) {
      link.classList.add("active");
    }
  });
}

// Set up scroll-to-top button functionality
function setupScrollTopButton() {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (!scrollBtn) return;

  // Show/hide button based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "grid";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  // Scroll to top on click
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Load components and animate words after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", "partials/header.html");
  loadComponent("footer", "partials/footer.html");
  loadComponent("stay-connected", "partials/stay-connected.html");
  loadComponent("our-clients", "partials/our-clients.html");

  // Animate sentences on scroll
  const sentences = document.querySelectorAll(".animate-sentence");

  sentences.forEach((sentence) => {
    const words = sentence.querySelectorAll(".word");

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            words.forEach((word, index) => {
              setTimeout(() => {
                word.classList.add("visible");
              }, index * 100);
            });
            observerInstance.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sentence);
  });

  // 💡 Background switch logic for `.hero`
  const hero = document.querySelector(".hero");
  if (hero) {
    let switched = false;
    setInterval(() => {
      hero.classList.toggle("bg-switch");
      switched = !switched;
    }, 2000);
  }
});

// Hide preloader after full page (including images) is loaded
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.classList.add("hide");
    setTimeout(() => preloader.remove(), 500);
  }
});
