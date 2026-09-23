"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

declare global {
  interface Window {
    VANTA: any;
  }
}

interface VantaBackgroundProps {
  children?: React.ReactNode;
}

export default function VantaBackground({ children }: VantaBackgroundProps) {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    let effect: any = null;

    const initVanta = async () => {
      // Dynamically import vanta net effect for client side SSR compatibility
      const NET = (await import("vanta/dist/vanta.net.min")).default;

      if (!vantaEffect && vantaRef.current) {
        effect = NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          showDots: false,
        });
        setVantaEffect(effect);
      }
    };

    initVanta();

    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);


  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#0c051b]">
      {/* Vanta Canvas Container */}
      <div
        ref={vantaRef}
        className="fixed inset-0 pointer-events-none z-0 min-h-screen w-full"
      />
      {/* Foreground Content */}
      <div className="relative z-10 w-full min-h-screen">{children}</div>
    </div>
  );
}
