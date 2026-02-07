import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartItem {
  id: number;
  left: number;
  animationDuration: number;
  animationDelay: number;
  size: number;
  opacity: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<HeartItem[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: 15 + Math.random() * 10,
      animationDelay: Math.random() * 8,
      size: 16 + Math.random() * 16,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute -bottom-10 animate-floatUp"
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.animationDuration}s`,
            animationDelay: `${heart.animationDelay}s`,
            opacity: heart.opacity,
          }}
        >
          <Heart
            className="text-rose-400 fill-rose-400"
            size={heart.size}
          />
        </div>
      ))}
    </div>
  );
}
