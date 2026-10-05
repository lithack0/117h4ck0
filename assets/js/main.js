const theme = document.getElementById("theme");
const header = document.getElementById("header");

function applyTheme(themeName) {
  document.body.classList.toggle("dark", themeName === "dark");

  if (theme) {
    const dark = document.body.classList.contains("dark");
    theme.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    theme.setAttribute("title", dark ? "Switch to light mode" : "Switch to dark mode");
  }
}

const savedTheme = localStorage.getItem("theme");
const preferredTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

applyTheme(preferredTheme);

if (theme) {
  theme.addEventListener("click", () => {
    const next = document.body.classList.contains("dark") ? "light" : "dark";
    localStorage.setItem("theme", next);
    applyTheme(next);
  });
}

function updateHeader() {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 10);
  }
}

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
