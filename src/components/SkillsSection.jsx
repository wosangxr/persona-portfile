import React from 'react';

export default function SkillsSection({ skills }) {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white tracking-tight">
          Tech Stack & Skills
        </h2>
        <p className="text-sm text-neutral-400 mt-1">
          Technologies and tools I enjoy using
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#1f1f1f] border border-white/5 rounded-2xl p-5 flex flex-col gap-3 shadow-md"
          >
            <h3 className="text-sm font-semibold text-orange-400 uppercase tracking-wider">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-xs px-2.5 py-1 rounded-lg bg-[#2a2a2a] text-neutral-200 border border-white/5 font-medium hover:border-orange-500/30 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
