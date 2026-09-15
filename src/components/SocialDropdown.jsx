import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';
import DynamicIcon from './DynamicIcon';

export default function SocialDropdown({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or escape
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div 
      className="relative" 
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Trigger Button (...) */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="More links"
        className={`w-full md:w-16 h-10 flex items-center justify-center rounded-xl bg-[#363636] hover:bg-[#484848] text-white/90 hover:text-white transition-all duration-150 border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 cursor-pointer ${
          isOpen ? 'bg-[#484848]' : ''
        }`}
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {/* Invisible hover bridge to prevent flickers */}
      <div className="absolute left-0 right-0 h-3 top-full -mt-1 pointer-events-auto" />

      {/* Dropdown Menu */}
      <div
        className={`absolute right-0 mt-2 z-50 w-56 max-h-[70vh] overflow-y-auto rounded-2xl bg-[#222222] border border-white/10 shadow-2xl transition-all duration-200 backdrop-blur-md ${
          isOpen
            ? 'opacity-100 visible translate-y-0 pointer-events-auto'
            : 'opacity-0 invisible -translate-y-1 pointer-events-none'
        }`}
      >
        <ul className="py-2 text-sm text-neutral-200 divide-y divide-white/5">
          {/* Main Links */}
          <div className="py-1">
            {links
              .filter((link) => link.category === 'main')
              .map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#303030] text-neutral-200 hover:text-white transition-colors duration-150"
                  >
                    <DynamicIcon name={link.icon} className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
          </div>

          {/* Social & Other Links */}
          <div className="py-1">
            {links
              .filter((link) => link.category !== 'main')
              .map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2 hover:bg-[#303030] text-neutral-200 hover:text-white transition-colors duration-150"
                  >
                    <DynamicIcon name={link.icon} className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                    <span className="font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
          </div>
        </ul>
      </div>
    </div>
  );
}
