const btn = document.getElementById("theme-toggle");
const iconLight = document.getElementById("icon-light");
const iconDark = document.getElementById("icon-dark");
const iconSystem = document.getElementById("icon-system");

function showIcon() {
  const t = localStorage.getItem("theme");
  iconLight?.classList.toggle("hidden", t !== "light");
  iconDark?.classList.toggle("hidden", t !== "dark");
  iconSystem?.classList.toggle("hidden", !!t);
}

function applyTheme() {
  const t = localStorage.getItem("theme");

  if (t === "dark") {
    document.documentElement.classList.add("dark");
    return;
  }

  if (t === "light") {
    document.documentElement.classList.remove("dark");
    return;
  }

  // system
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  document.documentElement.classList.toggle("dark", prefersDark);
}

// Cycle: System -> Light -> Dark -> System
function cycleTheme() {
  const t = localStorage.getItem("theme");
  if (!t) {
    localStorage.setItem("theme", "light");
  } else if (t === "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
  applyTheme();
  showIcon();
}

showIcon();
btn?.addEventListener("click", cycleTheme);

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      applyTheme();
    }
  });
