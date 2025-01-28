document.addEventListener("DOMContentLoaded", () => {
  const changelogBtn = document.getElementById("changelog-btn");
  const changelogPopup = document.getElementById("changelog-popup");
  const howtoflashBtn = document.getElementById("howtoflash-btn");
  const howtoflashPopup = document.getElementById("howtoflash-popup");
  const closeBtns = document.querySelectorAll(".close-btn");

  function openPopup(popup) {
    popup.classList.remove("fade-out");
    popup.classList.add("fade-in", "show");
  }

  function closePopup(popup) {
    popup.classList.remove("fade-in");
    popup.classList.add("fade-out");
  }

  changelogBtn.addEventListener("click", () => openPopup(changelogPopup));
  howtoflashBtn.addEventListener("click", () => openPopup(howtoflashPopup));

  closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const popup = btn.closest(".popup");
      closePopup(popup);
    });
  });

  document.querySelectorAll(".popup").forEach((popup) => {
    popup.addEventListener("animationend", (event) => {
      if (event.animationName === "fadeOut") {
        popup.classList.remove("show");
      }
    });

    popup.addEventListener("click", (event) => {
      if (event.target === popup) {
        closePopup(popup);
      }
    });
  });

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (
        !link.hasAttribute("target") &&
        !link.classList.contains("download-btn") &&
        !link.closest("#howtoflash-popup") &&
        !link.closest("#changelog-popup")
      ) {
        e.preventDefault();
        const href = link.href;

        document.body.classList.remove("page-enter");
        document.body.classList.add("page-exit");

        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});
