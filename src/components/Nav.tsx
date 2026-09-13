import ProtoLogo from "./ProtoLogo";
import ThemeToggle from "./ThemeToggle";
export default function Nav() {
  return (<>
    <a href="#main" className="skip-link">Skip to content</a>
    <header className="site-header minimal-nav"><div className="shell">
      <a href="#top" aria-label="Proto home"><ProtoLogo /></a>
      <nav aria-label="Primary"><a href="#work">Work</a><a href="#studio">Studio</a><a href="#contact">Contact</a></nav>
      <ThemeToggle />
    </div></header>
  </>);
}
