import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/60 bg-card/30 backdrop-blur-md mt-16">
      <div className="container max-w-5xl px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <Link href="/" className="font-bold text-base font-headline text-foreground hover:text-primary transition-colors inline-flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white text-[11px] font-bold">
                DS
              </span>
              Divyanshu Singh
            </Link>
            <p className="text-xs text-muted-foreground">
              IIT Madras &amp; AITD Kanpur | AI/ML &amp; Software Engineer
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/DivyanshuSingh991" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a 
              href="https://www.linkedin.com/in/divyanshu-singh-386940336" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a 
              href="mailto:divyanshusingh991991@gmail.com"
              aria-label="Send Email"
            >
              <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-secondary">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

        </div>

        <div className="mt-6 pt-4 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-muted-foreground">
          <p>© {new Date().getFullYear()} Divyanshu Singh. All rights reserved.</p>
          <p>Built with Next.js, Tailwind CSS &amp; TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
