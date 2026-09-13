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
      // Create rich static diagonal metallic gradient
      const grd = ctx.createLinearGradient(0, 0, 64, 64);
      grd.addColorStop(0,    "#161716");
      grd.addColorStop(0.25, "#2c302e");
      grd.addColorStop(0.48, "#7a857e");
      grd.addColorStop(0.55, "#e6ede8"); // Specular highlight glint
      grd.addColorStop(0.62, "#7a857e");
      grd.addColorStop(0.82, "#2c302e");
      grd.addColorStop(1,    "#161716");

      ctx.clearRect(0, 0, 64, 64);
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, 64, 64);

      // Draw "P" logo smaller with balanced breathing room (78% size)
      const size = 64 * 0.78;
      const offset = (64 - size) / 2;
      ctx.drawImage(img, offset, offset, size, size);

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
