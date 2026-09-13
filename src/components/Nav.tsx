import ProtoLogo from "./ProtoLogo";

export default function Nav() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header minimal-nav">
        <div className="minimal-nav-center">
          <a href="/" aria-label="Proto home" className="flex items-center justify-center">
            <ProtoLogo />
          </a>
        </div>
      </header>
    </>
  );
}
