import { useEffect } from "react";
import confetti from "canvas-confetti";

const ConfettiEffect = () => {
  useEffect(() => {
    const duration = 2000; // 5 seconds
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        spread: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  return null;
};

export default ConfettiEffect;