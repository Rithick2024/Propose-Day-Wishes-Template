import { Heart } from 'lucide-react';
import FloatingPetals from './FloatingPetals';

interface HeroSectionProps {
  onEnter: () => void;
}

export default function HeroSection({ onEnter }: HeroSectionProps) {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <FloatingPetals />

      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        <div className="animate-float mb-8">
          <Heart className="w-20 h-20 text-rose-500 mx-auto fill-rose-500 drop-shadow-lg" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-red-600 mb-6 animate-fadeInUp">
          From the moment you came into my life...
        </h1>

        <p className="text-xl md:text-2xl text-rose-800/80 mb-12 animate-fadeInUp animation-delay-200 leading-relaxed">
          Everything changed. The world became brighter, my heart fuller,
          and every moment more beautiful.
        </p>

        <button
          onClick={onEnter}
          className="group relative px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-fadeInUp animation-delay-400"
        >
          <span className="relative z-10 flex items-center gap-2">
            Open My Heart
            <Heart className="w-5 h-5 group-hover:fill-white transition-all duration-300" />
          </span>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>

        <div className="mt-12 animate-bounce">
          <div className="w-6 h-10 border-2 border-rose-400 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>
    </div>
  );
}
