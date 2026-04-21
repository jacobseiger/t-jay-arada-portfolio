import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export function HexRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const fontSize = 16;
    let columns = 0;
    let drops: number[] = [];
    const HEX = "0123456789abcdef";

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -50);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const isDark = theme === "dark";
      ctx.fillStyle = isDark ? "rgba(10, 14, 24, 0.08)" : "rgba(245, 248, 252, 0.10)";
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", "Fira Code", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const ch = HEX[Math.floor(Math.random() * HEX.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character (bright)
        ctx.fillStyle = isDark ? "rgba(120, 220, 255, 0.95)" : "rgba(40, 110, 200, 0.85)";
        ctx.fillText(ch, x, y);

        // Trail
        ctx.fillStyle = isDark ? "rgba(80, 180, 220, 0.55)" : "rgba(60, 130, 200, 0.45)";
        ctx.fillText(HEX[Math.floor(Math.random() * 16)], x, y - fontSize);

        if (y > height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.6;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 h-full w-full opacity-60 dark:opacity-70 pointer-events-none"
      aria-hidden="true"
    />
  );
}