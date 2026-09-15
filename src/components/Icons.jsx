import React from 'react';

// Brand & UI SVG icons matching the exact look of modern social icons
export const GithubIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const DiscordIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

export const MailIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

export const TwitterIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const YoutubeIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const NpmIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
  </svg>
);

export const BlueskyIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.996C2.556 1.05 0 .15 0 3.6c0 .69.395 5.79.627 6.62.805 2.88 3.742 3.614 6.355 3.17-4.566.777-5.728 3.35-3.219 5.925 4.765 4.888 6.849-1.226 7.382-2.793.098-.287.143-.421.144-.308 0-.113.047.021.144.308.533 1.567 2.617 7.681 7.382 2.793 2.509-2.575 1.347-5.148-3.219-5.925 2.613.444 5.55-.29 6.355-3.17.232-.83.627-5.93.627-6.62 0-3.45-2.556-2.55-5.202-.796C16.046 4.747 13.087 8.686 12 10.8z" />
  </svg>
);

export const GlobeIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const ExternalLinkIcon = ({ className = "w-4 h-4", ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
  </svg>
);

// App Icons for Project Cards matching Image 2
export const HoneypotIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    {/* Honey pot jar with honey drip */}
    <rect x="20" y="8" width="24" height="6" rx="3" fill="#D97706" />
    <path d="M16 16C16 14 18 12 22 12H42C46 12 48 14 48 16L52 38C53 48 45 56 32 56C19 56 11 48 12 38L16 16Z" fill="#F59E0B" />
    <path d="M14 28C18 32 24 26 28 32C32 38 38 32 44 32C48 32 50 30 50 28L52 38C53 48 45 56 32 56C19 56 11 48 12 38L14 28Z" fill="#D97706" />
    <circle cx="26" cy="24" r="2" fill="#FDE68A" />
    {/* Honey dipper stick */}
    <rect x="36" y="4" width="4" height="18" rx="2" transform="rotate(25 36 4)" fill="#B45309" />
  </svg>
);

export const ChatroomIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <rect width="64" height="64" rx="16" fill="#EA580C" />
    <rect x="14" y="20" width="36" height="7" rx="3.5" fill="white" />
    <rect x="14" y="32" width="24" height="7" rx="3.5" fill="white" />
  </svg>
);

export const EmailThingIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <circle cx="32" cy="32" r="30" fill="#1E1B4B" />
    <path d="M32 16C23.163 16 16 23.163 16 32C16 40.837 23.163 48 32 48C37.5 48 42.2 45.2 45 41L40 37.5C38 40.2 35.2 41.8 32 41.8C26.6 41.8 22.2 37.4 22.2 32C22.2 26.6 26.6 22.2 32 22.2C37.4 22.2 41.8 26.6 41.8 32V34.5C41.8 36.4 40.3 38 38.4 38C36.5 38 35 36.4 35 34.5V26H29V27.5C27.8 26.5 26.2 26 24.5 26C20.4 26 17 29.4 17 33.5C17 37.6 20.4 41 24.5 41C26.8 41 28.8 39.9 30 38.2C31.2 40.5 33.7 42 36.5 42C41.2 42 45 38.2 45 33.5V32C45 24.8 39.2 16 32 16Z" fill="#C084FC" />
  </svg>
);

export const FormsIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <rect width="64" height="64" rx="16" fill="#F97316" />
    {/* Clipboard base */}
    <rect x="18" y="14" width="28" height="36" rx="4" fill="white" />
    <rect x="25" y="11" width="14" height="6" rx="2" fill="#C2410C" />
    {/* Lines & check dots */}
    <circle cx="23" cy="24" r="2" fill="#EA580C" />
    <rect x="28" y="22.5" width="13" height="3" rx="1.5" fill="#EA580C" />
    <circle cx="23" cy="32" r="2" fill="#EA580C" />
    <rect x="28" y="30.5" width="13" height="3" rx="1.5" fill="#EA580C" />
    <circle cx="23" cy="40" r="2" fill="#EA580C" />
    <rect x="28" y="38.5" width="13" height="3" rx="1.5" fill="#EA580C" />
  </svg>
);

export const ReportIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    {/* Megaphone speaker */}
    <path d="M14 26H22L36 15V49L22 38H14C12.9 38 12 37.1 12 36V28C12 26.9 12.9 26 14 26Z" fill="#EC4899" />
    <rect x="22" y="38" width="6" height="12" rx="3" fill="#6B7280" />
    <path d="M42 22C45 25 47 28.5 47 32C47 35.5 45 39 42 42" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
    <path d="M47 16C52 20.5 55 26 55 32C55 38 52 43.5 47 48" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
  </svg>
);

export const StatsCompareIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <defs>
      <linearGradient id="stat-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#F43F5E" />
        <stop offset="50%" stop-color="#FB923C" />
        <stop offset="100%" stop-color="#FACC15" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="16" fill="url(#stat-grad)" />
    {/* Bar chart columns */}
    <rect x="16" y="34" width="7" height="18" rx="3.5" fill="white" />
    <rect x="28" y="16" width="7" height="36" rx="3.5" fill="white" />
    <rect x="40" y="24" width="7" height="28" rx="3.5" fill="white" />
  </svg>
);

export const BakingGameIcon = ({ className = "w-12 h-12", ...props }) => (
  <svg viewBox="0 0 64 64" fill="none" className={className} {...props}>
    <rect width="64" height="64" rx="16" fill="#D97706" />
    {/* Chef Hat & Cookie */}
    <path d="M22 34C18 34 16 30 18 26C16 22 20 18 24 20C27 15 37 15 40 20C44 18 48 22 46 26C48 30 46 34 42 34H22Z" fill="white" />
    <rect x="22" y="34" width="20" height="4" rx="1" fill="#FEF3C7" />
    <circle cx="32" cy="46" r="8" fill="#FBBF24" />
    <circle cx="30" cy="44" r="1.5" fill="#78350F" />
    <circle cx="35" cy="45" r="1.5" fill="#78350F" />
    <circle cx="32" cy="49" r="1.5" fill="#78350F" />
  </svg>
);
