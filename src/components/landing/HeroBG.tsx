"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
// import TARGET from "vanta/dist/vanta.birds.min";

const HeroBG = () => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  const convertColor = (hex: React.CSSProperties["color"]) => {
    return parseInt(hex!.replace("#", "0x"), 16);
  };

  useEffect(() => {
    const VANTA = (window as any).VANTA;

    if (!vantaEffect && vantaRef.current && VANTA && VANTA.WAVES) {
      try {
        const effect = VANTA.WAVES({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: convertColor("#4C301B"),
          backgroundColor: convertColor("#000000"),
        });
        setVantaEffect(effect);
      } catch (err) {
        console.error("Vanta failed to initialize:", err);
      }
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full min-h-screen h-full z-0 opacity-25"
    ></div>
  );
};

export default HeroBG;
