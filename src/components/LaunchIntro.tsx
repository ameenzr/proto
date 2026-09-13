"use client";

import ProtoLogo from "./ProtoLogo";
import { useEffect, useState } from "react";

export default function LaunchIntro() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-active");
    const leaveTimer = window.setTimeout(() => setLeaving(true), 4700);
    const removeTimer = window.setTimeout(() => setVisible(false), 5800);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.documentElement.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    if (!visible) document.documentElement.classList.remove("intro-active");
  }, [visible]);

  if (!visible) return null;

  const dismiss = () => {
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 900);
  };

  return (
    <div
      className={`launch-intro${leaving ? " is-leaving" : ""}`}
      role="dialog"
      aria-label="PROTO introduction"
      aria-modal="true"
    >
      <div className="launch-panel launch-panel-top" aria-hidden="true" />
      <div className="launch-panel launch-panel-bottom" aria-hidden="true" />
      <div className="launch-grid" aria-hidden="true" />

      <div className="launch-meta" aria-hidden="true">
        <span>PROTO / SYSTEM 001</span>
        <span>INITIALIZING STUDIO</span>
      </div>

      <div className="launch-lockup">
        {/* Corner registration marks — flash on impact */}
        <span className="launch-corner lc-tl" aria-hidden="true" />
        <span className="launch-corner lc-tr" aria-hidden="true" />
        <span className="launch-corner lc-bl" aria-hidden="true" />
        <span className="launch-corner lc-br" aria-hidden="true" />

        {/* Logo: drops in, shimmer sweeps, scan line crosses */}
        <div className="launch-logo-wrap">
          <ProtoLogo />
          <div className="launch-shimmer-sweep" aria-hidden="true" />
          <div className="launch-scan-line" aria-hidden="true" />
        </div>

        <div className="launch-status" aria-hidden="true">
          <span>FROM ZERO</span>
          <span className="launch-status-line"><i /></span>
          <span>TO REAL</span>
        </div>
      </div>

      <div className="launch-index" aria-hidden="true">00—01</div>
      <button className="launch-skip" type="button" onClick={dismiss}>
        Skip intro <span>↗</span>
      </button>
    </div>
  );
}
