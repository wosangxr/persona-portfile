import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ name }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-white/5 py-8 mt-16 px-4">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
        <p>
          © {new Date().getFullYear()} {name}. All rights reserved.
        </p>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 hover:text-neutral-300 transition-colors cursor-pointer"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
