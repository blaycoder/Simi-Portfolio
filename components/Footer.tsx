import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background py-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-muted text-sm font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-secondary">{PERSONAL_INFO.name}</span>. All
          rights reserved.
        </p>
        <div className="flex space-x-8 text-sm font-medium">
          <a
            href="https://www.linkedin.com/in/simileoluwa-ajisafe-b36069178/"
            className="text-muted hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/simigold11?s=11"
            className="text-muted hover:text-primary transition-colors"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;