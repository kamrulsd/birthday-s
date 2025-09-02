"use client";

import { useState, useEffect } from "react";
import Confetti from "react-confetti";

export default function ClientConfetti() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <Confetti numberOfPieces={300} width={window.innerWidth} height={window.innerHeight} />;
}
