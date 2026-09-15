import React from 'react';
import {
  GithubIcon,
  DiscordIcon,
  MailIcon,
  TwitterIcon,
  YoutubeIcon,
  NpmIcon,
  BlueskyIcon,
  ExternalLinkIcon,
  GlobeIcon,
  HoneypotIcon,
  ChatroomIcon,
  EmailThingIcon,
  FormsIcon,
  ReportIcon,
  StatsCompareIcon,
  BakingGameIcon
} from './Icons';

const iconMap = {
  Github: GithubIcon,
  github: GithubIcon,
  MessageSquare: DiscordIcon,
  Discord: DiscordIcon,
  discord: DiscordIcon,
  Mail: MailIcon,
  mail: MailIcon,
  Twitter: TwitterIcon,
  Youtube: YoutubeIcon,
  Package: NpmIcon,
  Npm: NpmIcon,
  Cloud: BlueskyIcon,
  Bluesky: BlueskyIcon,
  ExternalLink: ExternalLinkIcon,
  Globe: GlobeIcon,
  globe: GlobeIcon,
  Website: GlobeIcon,
  website: GlobeIcon,
  Web: GlobeIcon,
  web: GlobeIcon,
  Honeypot: HoneypotIcon,
  Chatroom: ChatroomIcon,
  EmailThing: EmailThingIcon,
  Forms: FormsIcon,
  Report: ReportIcon,
  StatsCompare: StatsCompareIcon,
  BakingGame: BakingGameIcon
};

export default function DynamicIcon({ name, className = "w-4 h-4", ...props }) {
  if (typeof name === 'string' && name.startsWith('http')) {
    return <img src={name} className={className} alt="icon" {...props} />;
  }
  const IconComponent = iconMap[name] || GlobeIcon;
  return <IconComponent className={className} {...props} />;
}
