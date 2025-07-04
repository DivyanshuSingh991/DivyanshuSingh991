import React from 'react';
import { Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-12 border-t">
      <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Divyanshu Singh. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          <a href="https://github.com/DivyanshuSingh991" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/divyanshu-singh-386940336" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
}
