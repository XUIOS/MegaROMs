document.addEventListener("DOMContentLoaded", function () {
  const splashScreen = document.getElementById("splash-screen");
  const mainContent = document.getElementById("main-content");
  const enterButton = document.getElementById("enter-site");

  document.body.style.overflowY = "hidden";

  enterButton.addEventListener("click", function () {
    splashScreen.style.opacity = "0";
    setTimeout(function () {
      splashScreen.style.display = "none";
      mainContent.classList.remove("hidden");
      mainContent.style.display = "block";
      splashScreen.remove();
      document.body.classList.add("splash-hidden");
    }, 500);
  });

  document.body.classList.add("page-enter");

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      if (
        link.classList.contains("social-link") ||
        link.classList.contains("contact-link") ||
        link.id === "contact-btn"
      ) {
        return;
      }

      event.preventDefault();
      const href = this.href;

      document.body.classList.remove("page-enter");
      document.body.classList.add("page-leave");

      setTimeout(function () {
        window.location.href = href;
      }, 500);
    });
  });

  document
    .getElementById("contact-btn")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const scrollToBottom = () => {
        const startY = window.pageYOffset;
        const targetY =
          document.documentElement.scrollHeight - window.innerHeight;
        const distance = targetY - startY;
        let currentTime = 0;
        const duration = 2000;
        const increment = 16;

        const animateScroll = () => {
          currentTime += increment;
          const progress = Math.min(currentTime / duration, 1);
          const easeProgress = easeInOutCubic(progress);

          window.scrollTo(0, startY + distance * easeProgress);

          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        requestAnimationFrame(animateScroll);
      };

      scrollToBottom();
    });

  document
    .querySelector(".contact-link")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const scrollToBottom = () => {
        const startY = window.pageYOffset;
        const targetY =
          document.documentElement.scrollHeight - window.innerHeight;
        const distance = targetY - startY;
        let currentTime = 0;
        const duration = 2000;
        const increment = 16;

        const animateScroll = () => {
          currentTime += increment;
          const progress = Math.min(currentTime / duration, 1);
          const easeProgress = easeInOutCubic(progress);

          window.scrollTo(0, startY + distance * easeProgress);

          if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
          }
        };

        const easeInOutCubic = (t) =>
          t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        requestAnimationFrame(animateScroll);
      };

      scrollToBottom();
    });
});
