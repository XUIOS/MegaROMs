document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("page-enter");

  document.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.href;

      document.body.classList.remove("page-enter");
      document.body.classList.add("page-leave");

      setTimeout(function () {
        window.location.href = href;
      }, 500);
    });
  });
});
