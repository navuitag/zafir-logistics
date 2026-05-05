(function () {
  function closeMobileNav() {
    var overlay = document.getElementById("mobileNav");
    var btn = document.getElementById("mobileMenuBtn");
    if (!overlay) return;
    overlay.classList.add("hidden");
    overlay.classList.remove("flex", "flex-col");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("mobile-menu-open", "overflow-hidden");
    if (btn) {
      btn.setAttribute("aria-expanded", "false");
    }
  }

  function openMobileNav() {
    var overlay = document.getElementById("mobileNav");
    var btn = document.getElementById("mobileMenuBtn");
    if (!overlay) return;
    overlay.classList.remove("hidden");
    overlay.classList.add("flex", "flex-col");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("mobile-menu-open", "overflow-hidden");
    if (btn) {
      btn.setAttribute("aria-expanded", "true");
    }
  }

  function toggleMobileNav() {
    var overlay = document.getElementById("mobileNav");
    if (!overlay) return;
    if (overlay.classList.contains("hidden")) {
      openMobileNav();
    } else {
      closeMobileNav();
    }
  }

  window.closeMobileNav = closeMobileNav;
  window.toggleMobileNav = toggleMobileNav;

  document.addEventListener("DOMContentLoaded", function () {
    var btn = document.getElementById("mobileMenuBtn");
    var closeBtn = document.getElementById("mobileMenuClose");
    var overlay = document.getElementById("mobileNav");

    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        toggleMobileNav();
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", function (e) {
        e.preventDefault();
        closeMobileNav();
      });
    }
    if (overlay) {
      overlay.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          closeMobileNav();
        });
      });
    }

    window.addEventListener(
      "resize",
      function () {
        if (window.innerWidth >= 768) {
          closeMobileNav();
        }
      },
      { passive: true }
    );

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeMobileNav();
      }
    });
  });
})();
