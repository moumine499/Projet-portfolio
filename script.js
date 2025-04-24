
      // Menu mobile
      document
        .querySelector(".menu-button")
        .addEventListener("click", function () {
          document.querySelector(".nav-links").classList.toggle("show");
        });

      // Animation typing
      const text = "Je suis un Développeur web et mobile";
      const typingText = document.getElementById("typing-text");
      let i = 0;
      let isDeleting = false;
      let speed = 100;

      function typeWriter() {
        const currentText = typingText.textContent;

        if (!isDeleting && i < text.length) {
          typingText.textContent = text.substring(0, i + 1);
          i++;
          speed = 100;
        } else if (isDeleting && i > 0) {
          typingText.textContent = text.substring(0, i - 1);
          i--;
          speed = 50;
        } else {
          isDeleting = !isDeleting;
          speed = isDeleting ? 50 : 100;
        }

        typingText.style.borderRight =
          isDeleting || i < text.length ? "2px solid #010a13" : "none";
        setTimeout(typeWriter, speed);
      }

      // Smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
          document.querySelector(".nav-links").classList.remove("show");
        });
      });

      // Start typing animation when page loads
      window.addEventListener("DOMContentLoaded", typeWriter);