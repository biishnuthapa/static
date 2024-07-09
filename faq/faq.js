// FAQ--scripts

document.querySelectorAll(".accordion button").forEach((button) => {
  button.addEventListener("click", () => {
    const accordionContent = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".accordion button").forEach((btn) => {
      btn.setAttribute("aria-expanded", "false");
      btn.nextElementSibling.style.maxHeight = 0;
    });

    if (!isOpen) {
      button.setAttribute("aria-expanded", "true");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    }
  });
});
