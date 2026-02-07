import { Music, Volume2, VolumeX } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface MusicToggleProps {
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
}

export default function MusicToggle({ enabled, onToggle }: MusicToggleProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (enabled && audioRef.current) {
      audioRef.current.play().catch(() => {
        console.log('Audio play failed');
      });
      setIsPlaying(true);
    } else if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [enabled]);

  return (
    <>
      <button
        onClick={() => onToggle(!enabled)}
        className="fixed top-6 right-6 z-50 p-4 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group border border-rose-200"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <Volume2 className="w-6 h-6 text-rose-500 group-hover:text-rose-600 transition-colors" />
        ) : (
          <VolumeX className="w-6 h-6 text-gray-400 group-hover:text-rose-500 transition-colors" />
        )}
        <Music className="w-3 h-3 text-rose-400 absolute -bottom-1 -right-1 animate-pulse" />
      </button>

      <audio
        ref={audioRef}
        loop
        src="data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA="
      />
    </>
  );
}
