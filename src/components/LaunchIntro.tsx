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
      <div className="launch-orbit launch-orbit-one" aria-hidden="true" />
      <div className="launch-orbit launch-orbit-two" aria-hidden="true" />

      <div className="instrument-field" aria-hidden="true">
        <span className="instrument-orbit instrument-orbit-a">
          <span className="instrument instrument-ruler">
            <svg viewBox="0 0 44 14"><path d="M1 1h42v12H1zM7 1v5m6-5v8m6-8v5m6-5v8m6-8v5m6-5v8" /></svg>
          </span>
          <span className="instrument instrument-crosshair"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="6"/><path d="M12 1v7m0 8v7M1 12h7m8 0h7"/></svg></span>
        </span>
        <span className="instrument-orbit instrument-orbit-b">
          <span className="instrument instrument-square"><svg viewBox="0 0 32 32"><path d="M3 28 28 3v25H3Zm9-5h10V13L12 23Z"/></svg></span>
          <span className="instrument instrument-ticks"><svg viewBox="0 0 42 12"><path d="M1 6h40M5 2v8m8-6v4m8-6v8m8-6v4m8-6v8"/></svg></span>
        </span>
        <span className="instrument-orbit instrument-orbit-c">
          <span className="instrument instrument-compass"><svg viewBox="0 0 30 38"><circle cx="15" cy="6" r="3"/><path d="m14 9-8 27m10-27 8 27M9 26h12M12 18h6"/></svg></span>
          <span className="instrument instrument-caliper"><svg viewBox="0 0 40 22"><path d="M3 2v18m0-5h28V5m-8 0h14v15M8 11V6m19 9v5"/></svg></span>
        </span>
        <span className="instrument-orbit instrument-orbit-d">
          <span className="instrument instrument-pencil"><svg viewBox="0 0 42 12"><path d="m2 6 8-4h27l4 4-4 4H10L2 6Zm8-4v8m27-8v8"/></svg></span>
          <span className="instrument instrument-angle">37.5°</span>
        </span>
      </div>

      <div className="launch-meta launch-meta-top" aria-hidden="true">
        <span>PROTO / SYSTEM 001</span>
        <span>INITIALIZING STUDIO</span>
      </div>

      <div className="launch-lockup overhead-emergence">
        <svg className="water-filter-definitions" aria-hidden="true" width="0" height="0">
          <defs>
            <filter id="water-refraction" x="-20%" y="-30%" width="140%" height="160%">
              <feTurbulence type="fractalNoise" baseFrequency=".014 .04" numOctaves="2" seed="8" result="waves">
                <animate attributeName="baseFrequency" values=".014 .04;.018 .035;.014 .04" dur="8s" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="waves" scale="18" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="raised-logo-faces" colorInterpolationFilters="sRGB">
              <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0.333 0.333 0.333 0 0" />
              <feComponentTransfer><feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 0 1 1" /></feComponentTransfer>
              <feComposite in2="SourceGraphic" operator="in" />
            </filter>
          </defs>
        </svg>
        <div className="overhead-water" aria-hidden="true"><div className="water-caustics" /><i /><i /><i /><i /><i /></div>
        <div className="water-horizon" aria-hidden="true">
          <span className="water-ripple water-ripple-a" />
          <span className="water-ripple water-ripple-b" />
          <span className="water-ripple water-ripple-c" />
        </div>
        <div className="launch-emergence-window">
          <div className="launch-raised-faces" aria-hidden="true">
            <ProtoLogo alt="" />
          </div>
          <div className="launch-emerging-logo">
            <ProtoLogo />
          </div>
        </div>
        <div className="launch-reflection" aria-hidden="true">
          <ProtoLogo alt="" />
        </div>
        <div className="water-drops" aria-hidden="true">
          <i /><i /><i /><i /><i />
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
