import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import ProposalSection from './components/ProposalSection';
import MusicToggle from './components/MusicToggle';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [musicEnabled, setMusicEnabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showContent ? 'auto' : 'hidden';
  }, [showContent]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 relative overflow-x-hidden">
      <FloatingHearts />
      <MusicToggle enabled={musicEnabled} onToggle={setMusicEnabled} />

      {!showContent ? (
        <HeroSection onEnter={() => setShowContent(true)} />
      ) : (
        <div className="animate-fadeIn">
          <StorySection />
          <ProposalSection />
        </div>
      )}
    </div>
  );
}

export default App;
