document.addEventListener("DOMContentLoaded", function () {
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
  const sections = document.querySelectorAll(".section");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      sidebarLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");

      const targetSection = this.getAttribute("href").substring(1);
      sections.forEach((section) => section.classList.remove("section_active"));
      document.getElementById(targetSection).classList.add("section_active");
    });
  });

  document.querySelector(".sidebar ul li a").click();
});



