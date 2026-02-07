import { useState, useEffect } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import Confetti from './Confetti';

const playfulMessages = [
  "Are you sure? I even practiced this proposal... 🥺",
  "My heart will reload and ask again... 💔",
  "System error: 'No' not accepted. Try again? 🥹",
  "You're too special to say no... 💖",
  "Pretty please? With roses on top? 🌹",
  "Okay last chance... my heart is waiting... ❤️",
];

export default function ProposalSection() {
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonStyle, setNoButtonStyle] = useState({ 
    transform: '', 
    scale: 1,
    opacity: 1 
  });
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [accepted, setAccepted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNoClick = () => {
    if (noClickCount < 5) {
      // More conservative movement for mobile
      const randomX = isMobile 
        ? (Math.random() - 0.5) * 100 // Less movement on mobile
        : (Math.random() - 0.5) * 200;
      
      const randomY = isMobile 
        ? (Math.random() - 0.5) * 50 // Less vertical movement on mobile
        : (Math.random() - 0.5) * 200;
      
      const randomRotate = (Math.random() - 0.5) * 720;
      const newScale = Math.max(0.4, 1 - noClickCount * 0.12);
      
      // Fade out slightly after many clicks
      const newOpacity = noClickCount >= 3 ? 0.7 : 1;

      setNoButtonStyle({
        transform: `translate(${randomX}px, ${randomY}px) rotate(${randomRotate}deg)`,
        scale: newScale,
        opacity: newOpacity
      });

      setYesButtonScale(prev => prev + 0.2);
      setNoClickCount(prev => prev + 1);
    } else {
      // After 5 clicks, reset position to make it findable
      setNoButtonStyle({
        transform: 'translate(0px, 0px) rotate(0deg)',
        scale: 0.4,
        opacity: 0.5
      });
    }
  };

  const handleYesClick = () => {
    setAccepted(true);
    setShowConfetti(true);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  // Reset "No" button position on orientation change (mobile specific)
  useEffect(() => {
    const handleOrientationChange = () => {
      setNoButtonStyle({ transform: '', scale: 1, opacity: 1 });
    };
    
    window.addEventListener('orientationchange', handleOrientationChange);
    return () => window.removeEventListener('orientationchange', handleOrientationChange);
  }, []);

  if (accepted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 relative">
        {showConfetti && <Confetti />}

        <div className="text-center max-w-4xl animate-scaleIn">
          <div className="mb-8 animate-float">
            <Heart className="w-32 h-32 text-rose-500 mx-auto fill-rose-500 drop-shadow-2xl" />
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-500 to-red-600 mb-6">
            You just made me the happiest person alive! ❤️
          </h2>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-rose-200 mb-8">
            <p className="text-2xl md:text-3xl text-rose-800 leading-relaxed mb-6">
              This is the beginning of our forever...
            </p>
            <p className="text-xl text-rose-700/80 leading-relaxed italic">
              "In a world full of chaos, you are my peace. In a life full of moments, you are my favorite. Thank you for saying yes to this journey with me."
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-rose-600 animate-pulse">
            <Sparkles className="w-5 h-5" />
            <p className="text-lg">Screenshot this moment. It's the start of our forever.</p>
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[...Array(12)].map((_, i) => (
              <Heart
                key={i}
                className="w-8 h-8 text-rose-400 fill-rose-400 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-4xl w-full">
        <div className="mb-12 animate-float">
          <div className="relative inline-block">
            <Heart className="w-24 h-24 text-rose-500 fill-rose-500 drop-shadow-2xl" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-spin-slow" />
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-md rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-rose-200 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-100/50 via-pink-100/50 to-red-100/50 animate-gradient" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-red-600 mb-8 animate-glow leading-tight">
              Will you be my Valentine?
            </h2>

            <p className="text-xl md:text-2xl text-rose-800 mb-12 leading-relaxed">
              Say yes and make this the most beautiful day of my life
            </p>

            {noClickCount > 0 && (
              <div className="mb-8 p-6 bg-rose-50 rounded-2xl border border-rose-200 animate-fadeIn">
                <p className="text-lg md:text-xl text-rose-700">
                  {playfulMessages[Math.min(noClickCount - 1, playfulMessages.length - 1)]}
                </p>
                {isMobile && noClickCount >= 2 && (
                  <p className="text-sm text-rose-500 mt-2">
                    💡 Tip: The "No" button might be hiding! Try tapping around the edges
                  </p>
                )}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center relative min-h-[120px] sm:min-h-[100px]">
              <button
                onClick={handleYesClick}
                className="relative px-8 sm:px-12 py-5 sm:py-6 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full text-xl sm:text-2xl font-bold shadow-2xl hover:shadow-rose-300 hover:scale-110 transition-all duration-300 z-20"
                style={{
                  transform: `scale(${yesButtonScale})`,
                }}
              >
                <span className="flex items-center gap-3">
                  Yes! 💖
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-white animate-pulse" />
                </span>
              </button>

              {/* Mobile: Make No button relative but with constrained movement */}
              {isMobile ? (
                <div className="relative w-full h-20 mt-4">
                  <button
                    onClick={handleNoClick}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full text-xl font-semibold shadow-lg transition-all duration-500 ease-in-out"
                    style={{
                      transform: `${noButtonStyle.transform} translate(-50%, -50%)`,
                      scale: noButtonStyle.scale,
                      opacity: noButtonStyle.opacity,
                    }}
                  >
                    No 🥺
                  </button>
                </div>
              ) : (
                // Desktop: Original behavior
                <button
                  onClick={handleNoClick}
                  className="absolute sm:relative px-8 py-4 bg-gray-300 hover:bg-gray-400 text-gray-700 rounded-full text-xl font-semibold shadow-lg transition-all duration-500 ease-in-out"
                  style={{
                    transform: noButtonStyle.transform,
                    scale: noButtonStyle.scale,
                    opacity: noButtonStyle.opacity,
                  }}
                >
                  No 🥺
                </button>
              )}
            </div>

            {noClickCount >= 3 && (
              <div className="mt-8 animate-bounce">
                <p className="text-rose-600 font-semibold text-lg">
                  The Yes button is growing... it knows what your heart truly wants! 💕
                </p>
                {isMobile && (
                  <p className="text-sm text-rose-500 mt-2">
                    Can't find the "No" button? That's a sign! 😉
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="text-rose-600/60 text-sm">
          💝 Made with infinite love 💝
        </div>
      </div>
    </div>
  );
}