"use client";

import { useEffect, useRef } from "react";

/**
 * Кинематографические слои hero: медленный параллакс свечения при скролле.
 * Два цветовых «пятна» двигаются с разной скоростью, создавая глубину.
 */
export default function HeroEffects() {
  const glowA = useRef<HTMLDivElement>(null);
  const glowB = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (glowA.current)
          glowA.current.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
        if (glowB.current)
          glowB.current.style.transform = `translate3d(0, ${y * 0.32}px, 0)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={glowA}
        className="hero-glow left-[-10%] top-[8%] h-[420px] w-[520px]"
        style={{ background: "rgba(74, 108, 247, 0.14)" }}
      />
      <div
        ref={glowB}
        className="hero-glow bottom-[-12%] right-[6%] h-[360px] w-[420px]"
        style={{ background: "rgba(139, 92, 246, 0.12)" }}
      />
      <div className="vignette absolute inset-0" />
      <div className="film-grain absolute inset-0" />
    </>
  );
}
