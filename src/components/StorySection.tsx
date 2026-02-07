import { Sparkles, Star, Heart, Smile } from 'lucide-react';

const reasons = [
  {
    icon: Heart,
    title: 'Your Smile',
    description: 'It lights up my entire world and makes every worry disappear',
    gradient: 'from-rose-400 to-pink-500',
  },
  {
    icon: Sparkles,
    title: 'Your Kindness',
    description: 'The way you care for others inspires me to be a better person',
    gradient: 'from-pink-400 to-red-400',
  },
  {
    icon: Star,
    title: 'Your Laugh',
    description: 'It\'s the most beautiful sound I\'ve ever heard',
    gradient: 'from-red-400 to-rose-500',
  },
  {
    icon: Smile,
    title: 'Your Spirit',
    description: 'Your energy, your passion, your beautiful soul that makes life magical',
    gradient: 'from-rose-500 to-pink-400',
  },
];

export default function StorySection() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600 mb-6">
            Why I Love You
          </h2>
          <p className="text-xl text-rose-800/80 max-w-2xl mx-auto">
            There are countless reasons, but here are just a few that make my heart skip a beat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-rose-100"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  <reason.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-rose-900 mb-3">
                  {reason.title}
                </h3>

                <p className="text-rose-700/80 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-6 h-6 text-rose-400 fill-rose-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 p-8 bg-white/40 backdrop-blur-sm rounded-3xl border border-rose-100 max-w-3xl mx-auto">
          <p className="text-2xl md:text-3xl text-rose-800 leading-relaxed italic font-light">
            "Every moment with you feels like a beautiful dream I never want to wake up from"
          </p>
        </div>
      </div>
    </div>
  );
}
