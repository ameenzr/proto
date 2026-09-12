"use client";
import { useState, useRef, useEffect } from "react";
const EMAIL = "ameennazerpk7@gmail.com";
export default function Contact() {
  const [status, setStatus] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);
  const copy = async () => {
    if (timeout.current) clearTimeout(timeout.current);
    try { await navigator.clipboard.writeText(EMAIL); setStatus("Email address copied."); }
    catch { setStatus("Couldn't copy. Select the email address or click to email me."); }
    timeout.current = setTimeout(() => setStatus(""), 4000);
  };
  return <section id="contact" className="contact-section"><div className="shell"><div className="contact-top"><span className="mono-label">06 / YOUR NEXT CHAPTER</span><span className="mono-label">BIG IDEAS START WITH A CONVERSATION.</span></div><div className="flex items-end justify-between gap-5"><h2>Got a good <em>feeling?</em><br />Let&apos;s build on it.</h2><a href={`mailto:${EMAIL}`} className="contact-arrow" aria-label="Email Ameen to start a project">↗</a></div><div className="contact-bottom"><p>Tell me what you&apos;re building. You&apos;ll get a real reply from me, an honest perspective, and a next step if we&apos;re a fit.</p><div><div className="contact-email"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><button type="button" className="copy-button" onClick={copy} aria-label="Copy email address"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" stroke="currentColor" aria-hidden="true"><rect x="5" y="5" width="9" height="10" rx="1" /><path d="M10 3V1H1v10h2" /></svg></button></div><div className="copy-status" role="status">{status}</div></div></div></div></section>;
}
