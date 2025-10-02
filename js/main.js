document.addEventListener("DOMContentLoaded", () => {
  // hover en los iconos del footer
  const links = document.querySelectorAll("#icons a");

  links.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.classList.remove("text-white");
      link.classList.add("text-secondary");
    });
    link.addEventListener("mouseout", () => {
      link.classList.remove("text-secondary");
      link.classList.add("text-white");
    });
  });
});
