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

    img.onload = () => {
      // Draw steady cyan background
      ctx.fillStyle = "#00bcd4";
      ctx.fillRect(0, 0, 64, 64);
      // Draw the "P" logo on top
      ctx.drawImage(img, 0, 0, 64, 64);

      let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.href = canvas.toDataURL("image/png");
    };
  }, []);

  return null;
}
