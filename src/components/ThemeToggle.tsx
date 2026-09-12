"use client";

export default function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    try { localStorage.setItem("proto-theme", next); } catch { /* Theme remains usable when storage is unavailable. */ }
    if (next === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="mono-label flex h-8 items-center gap-2 rounded-sm border border-rule px-2.5 text-bone-3 transition-colors hover:border-rule-2 hover:text-bone cursor-pointer"
    >
      <span aria-hidden="true" className="theme-when-dark text-[9px]">DARK</span>
      <span aria-hidden="true" className="theme-when-light text-[9px]">LIGHT</span>
      <span aria-hidden="true" className="theme-dot h-2.5 w-2.5 rounded-full border border-current" />
    </button>
  );
}
