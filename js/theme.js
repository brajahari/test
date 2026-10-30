// Light is the default; the visitor's choice is remembered between pages.
function getSavedTheme() {
  try {
    return localStorage.getItem("theme") === "dark" ? "dark" : "light";
  } catch (e) {
    return "light";
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  var button = document.getElementById("theme-toggle");
  if (button) {
    button.textContent = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";
  }
}

applyTheme(getSavedTheme());

document.addEventListener("DOMContentLoaded", function () {
  applyTheme(getSavedTheme());
  document.getElementById("theme-toggle").addEventListener("click", function () {
    var next = getSavedTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    applyTheme(next);
  });
});
