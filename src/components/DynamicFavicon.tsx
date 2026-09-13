"use client";
import { useEffect } from "react";

export default function DynamicFavicon() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.src = "/favicon-base.png";

    let animationFrameId: number;
    let startTime: number | null = null;

    const setFavicon = () => {
      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = canvas.toDataURL("image/png");
    };

    img.onload = () => {
      const animate = (time: number) => {
        if (!startTime) startTime = time;
        // Continuously sweep 0→1 linearly, wrapping every 3s
        const t = ((time - startTime) % 3000) / 3000; // 0→1 forever

        // Repeating gradient: dark→light→dark→light→dark, scrolled continuously
        const sweep = t * 128; // scroll across 2× canvas width
        const grd = ctx.createLinearGradient(sweep - 128, 0, sweep + 64, 64);
        grd.addColorStop(0,    "#1a1a1a");
        grd.addColorStop(0.25, "#4a4a4a");
        grd.addColorStop(0.5,  "#1a1a1a");
        grd.addColorStop(0.75, "#4a4a4a");
        grd.addColorStop(1,    "#1a1a1a");

        ctx.clearRect(0, 0, 64, 64);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 64, 64);

        // Draw "P" logo squeezed vertically (70% of height, centered)
        const logoH = 64 * 0.70;
        const logoY = (64 - logoH) / 2;
        ctx.drawImage(img, 0, logoY, 64, logoH);

        setFavicon();
        animationFrameId = requestAnimationFrame(animate);
      };

      animationFrameId = requestAnimationFrame(animate);
    };

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return null;
}
