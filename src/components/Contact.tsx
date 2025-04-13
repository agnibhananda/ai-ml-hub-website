import React from 'react';
import { Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faDiscord, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-900/20 p-8 shadow-lg shadow-purple-500/10 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center mb-8">
              <Mail className="h-6 w-6 text-purple-400 mr-2" />
              <a
                href="mailto:AIMLHUBJIIT@gmail.com"
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                jiit.aiml@gmail.com
              </a>
            </div>
            <div className="flex justify-center space-x-6">
              <SocialLink
                href="https://www.linkedin.com/company/ai-ml-hub-of-jiit"
                icon={<Linkedin className="h-6 w-6" />}
                label="Our LinkedIn"
              />
              <SocialLink 
                href="#" 
                icon={<FontAwesomeIcon icon={faXTwitter} className="h-6 w-6" /> }
                label = "Our Twitter"
              />
              <SocialLink
                href="https://www.instagram.com/aiml.jiit"
                icon={<Instagram className="h-6 w-6" />}
                label="Our Instagram"
              />
              <SocialLink
                href="https://chat.whatsapp.com/B6LyQMpACJB7n8bOqBG9OR"
                icon={<FontAwesomeIcon icon={faWhatsapp} className="h-6 w-6" />}
                label="Our WhatsApp group"
              />
              <SocialLink
                href="#"
                icon={<FontAwesomeIcon icon={faDiscord} className="h-6 w-6" />}
                label="Join our Discord"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label?: string;
}) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-400 transition-colors transform hover:scale-110 relative group"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
      {label && (
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {label}
        </span>
      )}
    </a>
  );
}
