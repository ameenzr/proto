"use client";
import { useState } from "react";

// Parametric torus: an original vector sculpture, without a 3D dependency.
function point(u: number, v: number, resolved: boolean) {
  const r = 112 + 51 * Math.cos(v);
  const x = r * Math.cos(u), y = r * Math.sin(u), z = 51 * Math.sin(v);
  const tilt = 0.88, rotation = -0.55;
  const py = y * Math.cos(tilt) - z * Math.sin(tilt);
  const pz = y * Math.sin(tilt) + z * Math.cos(tilt);
  const scale = (1.19 + pz / 1400) * (resolved ? 1 : 1.1);
  return [280 + (x * Math.cos(rotation) - py * Math.sin(rotation)) * scale, 250 + (x * Math.sin(rotation) + py * Math.cos(rotation)) * scale];
}
function ringPath(index: number, meridian: boolean, resolved: boolean) {
  return Array.from({ length: 97 }, (_, step) => {
    const a = (step / 96) * Math.PI * 2, b = (index / (meridian ? 64 : 26)) * Math.PI * 2;
    const [x, y] = point(meridian ? b : a, meridian ? a : b, resolved);
    return `${step === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}
export default function Schematic() {
  const [resolved, setResolved] = useState(true);
  return (
    <div className={`sculpture ${resolved ? "is-real" : "is-draft"}`}>
      <div className="sculpture-heading mono-label"><span><span className="live-dot" /> SYSTEM / 001</span><span>THE SHAPE OF POSSIBILITY</span></div>
      <div className="sculpture-visual">
        <div className="sculpture-glow" />
        <svg viewBox="0 0 560 500" fill="none" role="img" aria-label={resolved ? "An intricate orange toroidal sculpture, representing an idea engineered into reality" : "A sparse wireframe of the sculpture, representing an early idea"}>
          <defs><radialGradient id="copper"><stop stopColor="#ffd2a5" /><stop offset=".5" stopColor="#ff803c" /><stop offset="1" stopColor="#d54713" /></radialGradient></defs>
          <g className="diagram-grid" stroke="currentColor" strokeWidth=".6"><path d="M20 250H540M280 30V470" strokeDasharray="3 7" /><circle cx="280" cy="250" r="218" strokeDasharray="2 9" /><path d="M40 50h15m-7.5-7.5v15M505 50h15m-7.5-7.5v15M40 450h15m-7.5-7.5v15M505 450h15m-7.5-7.5v15" /></g>
          <g className="torus" stroke="url(#copper)" strokeWidth={resolved ? ".85" : ".7"}>
            {Array.from({ length: 64 }, (_, i) => <path key={`m${i}`} d={ringPath(i, true, resolved)} opacity={!resolved && i % 4 !== 0 ? 0 : .85} />)}
            {Array.from({ length: 26 }, (_, i) => <path key={`l${i}`} d={ringPath(i, false, resolved)} opacity={!resolved && i % 3 !== 0 ? 0 : .72} />)}
          </g>
          <g className="diagram-labels" fill="currentColor"><text x="28" y="245">Y</text><text x="287" y="35">Z</text><text x="525" y="245">X</text></g>
        </svg>
        <div className="artifact-tag mono-label"><span className="artifact-cross">+</span><span>CONTINUOUS BY DESIGN<br /><small>ONE IDEA. EVERY POSSIBILITY.</small></span></div>
      </div>
      <div className="sculpture-controls"><div className="phase-switch" aria-label="Sculpture stage"><button type="button" aria-pressed={!resolved} onClick={() => setResolved(false)}>01 / DRAFT</button><button type="button" aria-pressed={resolved} onClick={() => setResolved(true)}>02 / REAL <span aria-hidden="true">↗</span></button></div><span className="mono-label">FIG. 01 — THE FIRST REAL VERSION</span></div>
    </div>
  );
}
