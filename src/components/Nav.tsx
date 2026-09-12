"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
const links = [{ name: "The approach", href: "#wedge" }, { name: "Selected work", href: "#work" }, { name: "The studio", href: "#operator" }];
export default function Nav() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); toggleRef.current?.focus(); }
      if (event.key === "Tab") {
        const targets = [toggleRef.current, ...(menuRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [])].filter(Boolean) as HTMLElement[];
        const first = targets[0], last = targets[targets.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const resize = () => { if (window.innerWidth >= 900) setOpen(false); };
    document.addEventListener("keydown", keydown);
    window.addEventListener("resize", resize);
    return () => { document.body.style.overflow = oldOverflow; document.removeEventListener("keydown", keydown); window.removeEventListener("resize", resize); };
  }, [open]);
  return (<>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header"><div className="shell nav-inner">
      <a href="#top" className="brand" aria-label="Proto home" onClick={() => setOpen(false)}><Image className="brand-logo" src="/proto-logo.png" alt="Proto" width={2060} height={351} sizes="240px" priority /><span className="brand-star" aria-hidden="true">✳</span></a>
      <span className="nav-caption mono-label">Independent mind.<br />Founder mentality.</span>
      <nav className="desktop-nav" aria-label="Primary">{links.map(link => <a key={link.href} href={link.href}>{link.name}</a>)}</nav>
      <div className="nav-actions"><ThemeToggle /><a className="nav-contact" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a><button type="button" ref={toggleRef} className="menu-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? "−" : "+"}</button></div>
    </div></header>
    <div ref={menuRef} id="mobile-menu" className="mobile-menu" hidden={!open}><nav aria-label="Mobile">{[...links, { name: "Build with me", href: "#build" }, { name: "Field notes", href: "#notes" }, { name: "Let’s talk ↗", href: "#contact" }].map((link, i) => <a key={link.href} href={link.href} onClick={() => { setOpen(false); const target = document.querySelector<HTMLElement>(link.href); target?.setAttribute("tabindex", "-1"); target?.focus({ preventScroll: true }); }}><span className="mono-label">0{i + 1}</span>{link.name}</a>)}</nav><div className="mobile-menu-footer"><p className="mono-label">A technical studio<br />by Ameen Nazer.</p><ThemeToggle /></div></div>
  </>);
}
