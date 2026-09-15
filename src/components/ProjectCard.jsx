import React from 'react';
import DynamicIcon from './DynamicIcon';

export default function ProjectCard({ project }) {
  return (
    <div className="group w-full bg-[#242424] hover:bg-[#272727] border border-white/5 rounded-[1.75rem] p-4 md:p-5 shadow-lg flex items-center gap-4 transition-all duration-200 hover:shadow-xl hover:scale-[1.01]">
      {/* App Icon Box */}
      <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-[#1d1d1d] border border-white/5 flex items-center justify-center shrink-0 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-200">
        <DynamicIcon name={project.icon} className="w-14 h-14 md:w-16 md:h-16" />
      </div>

      {/* Info & Buttons */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight truncate">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-xs md:text-sm mt-1 leading-snug line-clamp-3">
          {project.description}
        </p>

        {/* Action Buttons */}
        {project.buttons && project.buttons.length > 0 && (
          <div className="flex items-center gap-1.5 md:gap-2 mt-3 flex-wrap">
            {project.buttons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.url}
                target="_blank"
                rel="noopener noreferrer"
                title={btn.label || btn.icon}
                className="h-7 md:h-8 px-2.5 rounded-xl bg-[#363636] hover:bg-[#484848] text-neutral-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 border border-white/5 transition-colors duration-150 select-none cursor-pointer"
              >
                <DynamicIcon name={btn.icon} className="w-3.5 h-3.5" />
                {btn.label && <span>{btn.label}</span>}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
