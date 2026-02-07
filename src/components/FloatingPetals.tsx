import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 10 + Math.random() * 15,
      animationDelay: Math.random() * 5,
      size: 20 + Math.random() * 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute -top-10 animate-fall opacity-60"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.animationDelay}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
        >
          <svg viewBox="0 0 200 200" className="text-rose-400 drop-shadow">
            <path
              fill="currentColor"
              d="M100,180 Q80,160 60,140 Q40,120 40,100 Q40,60 70,40 Q85,30 100,40 Q115,30 130,40 Q160,60 160,100 Q160,120 140,140 Q120,160 100,180"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
