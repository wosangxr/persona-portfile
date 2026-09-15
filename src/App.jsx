import React from 'react';
import { profileData } from './data/profileData';
import HeroCard from './components/HeroCard';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import Footer from './components/Footer';

export default function App() {
  const { left, right } = profileData.projectColumns;

  return (
    <div className="min-h-screen bg-[#141414] text-white flex flex-col items-center">
      {/* 1. Hero Section (Centered Profile Card & Dropdown) */}
      <HeroCard profile={profileData} />

      {/* 2. Projects Section (2-Column Grid with 6 Cards as in Reference) */}
      <section
        id="projects"
        className="w-full max-w-5xl px-4 md:px-6 py-16 flex flex-col gap-10 scroll-mt-6"
      >
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Projects<span className="text-orange-500">:</span>
          </h2>
          <p className="text-neutral-400 text-sm mt-1">
            The things that I have worked on!
          </p>
        </div>

        {/* 2 Columns Layout for Desktop / Tablet */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-start w-full">
          {/* Left Column (Favorite & Other Fun Things: 3 cards) */}
          <div className="flex flex-col gap-8">
            {left.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col gap-4">
                {group.sectionTitle && (
                  <h3 className="text-neutral-400 font-bold text-center text-sm md:text-base tracking-wide">
                    {group.sectionTitle}
                  </h3>
                )}
                <div className="flex flex-col gap-4">
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Simple Web Apps: 3 cards) */}
          <div className="flex flex-col gap-8">
            {right.map((group, groupIdx) => (
              <div key={groupIdx} className="flex flex-col gap-4">
                {group.sectionTitle && (
                  <h3 className="text-neutral-400 font-bold text-center text-sm md:text-base tracking-wide">
                    {group.sectionTitle}
                  </h3>
                )}
                <div className="flex flex-col gap-4">
                  {group.projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Tech Stack & Skills */}
      <SkillsSection skills={profileData.skills} />

      {/* 4. Footer */}
      <Footer name={profileData.name} />
    </div>
  );
}
