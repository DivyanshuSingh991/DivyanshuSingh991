'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl shadow-sm' 
        : 'bg-background/40 backdrop-blur-md border-b border-transparent'
    }`}>
      <div className="container flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-primary/80 to-accent text-primary-foreground font-bold shadow-md shadow-primary/20 transition-transform group-hover:scale-105">
            <span className="text-sm font-black font-headline tracking-tighter">DS</span>
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-background"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight font-headline text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
              Divyanshu Singh
            </span>
            <span className="text-[11px] text-muted-foreground font-medium hidden sm:inline-block">
              IIT Madras &amp; AITD Kanpur
            </span>
          </div>
        </Link>

        {/* Right Actions: Social Links + Theme Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <a 
            href="https://github.com/DivyanshuSingh991" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/in/divyanshu-singh-386940336" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <ThemeToggle />
        </div>

      </div>
    </header>
  );
}
