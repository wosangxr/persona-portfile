import React from 'react';
import DynamicIcon from './DynamicIcon';
import { ChevronDown } from 'lucide-react';

export default function HeroCard({ profile }) {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center relative px-4 select-none">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Main Profile Card (Sized snugly to fit avatar, info, and the 2 buttons) */}
      <div className="w-full max-w-md bg-[#242424] border border-white/5 rounded-[2rem] p-6 md:p-7 shadow-2xl backdrop-blur-xl flex flex-col md:flex-row items-center gap-5 md:gap-6 transition-transform duration-300 hover:scale-[1.01]">
        {/* Avatar */}
        <div className="relative group shrink-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-[#2a2a2a] border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-white/20 transition-colors duration-300">
            <img
              src={profile.avatar}
              alt={`${profile.name} Avatar`}
              className={`w-full h-full ${
                profile.avatar?.endsWith('.svg')
                  ? 'object-contain p-3 filter drop-shadow-md animate-pulse-glow'
                  : 'object-cover'
              }`}
              style={{
                objectPosition: profile.avatarPosition || 'center 20%',
                transform: profile.avatarScale ? `scale(${profile.avatarScale})` : undefined
              }}
            />
          </div>
          {/* Online/Status dot */}
          <span 
            className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#242424] rounded-full shadow-sm"
            title={profile.status}
          />
        </div>

        {/* Info & Action Buttons */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3 flex-1 min-w-0 w-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2 justify-center md:justify-start">
              {profile.name}
            </h1>
            <p className="text-neutral-400 text-xs md:text-sm mt-1 leading-relaxed">
              {profile.tagline}
            </p>
          </div>

          {/* Quick Buttons: Only GitHub and Mail, nicely fitted */}
          <div className="flex items-center gap-2.5 w-full pt-1">
            {profile.quickActions.map((action) => (
              <a
                key={action.id}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={action.label}
                title={action.label}
                className="flex-1 h-9 md:h-10 flex items-center justify-center rounded-xl bg-[#363636] hover:bg-[#484848] text-white/90 hover:text-white transition-all duration-150 border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 cursor-pointer shadow-sm"
              >
                <DynamicIcon name={action.icon} className="w-4 h-4 md:w-4.5 md:h-4.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to projects indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 cursor-pointer flex flex-col items-center gap-1.5 text-neutral-400 hover:text-white transition-colors duration-200 group focus:outline-none"
      >
        <span className="text-xs font-medium tracking-wide">Scroll to projects!</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-neutral-400 group-hover:text-white" />
      </button>
    </section>
  );
}
