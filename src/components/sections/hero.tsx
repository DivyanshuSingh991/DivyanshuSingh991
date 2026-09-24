import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Download, Mail, Sparkles, MapPin, Briefcase } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-3.5rem)] flex items-center justify-center overflow-hidden py-12 md:py-20">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_28px]">
        <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -z-10 h-[380px] w-[380px] md:h-[500px] md:w-[500px] rounded-full bg-primary/25 opacity-30 blur-[120px]"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="px-4 py-1.5 text-sm gap-2 border-primary/30 bg-primary/5 rounded-full font-medium">
            <Sparkles className="h-3.5 w-3.5 text-primary animate-pulse" />
            AI/ML Developer &amp; Software Engineer
          </Badge>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl font-headline text-foreground">
              Hi, I’m <span className="text-primary underline decoration-primary/40 underline-offset-8">Divyanshu Singh</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 max-w-2xl mx-auto">
              Dual Degree Student at <span className="text-primary font-semibold">IIT Madras</span> &amp; <span className="text-primary font-semibold">AITD Kanpur</span>
            </p>
            <p className="max-w-2xl text-muted-foreground text-base sm:text-lg mx-auto leading-relaxed">
              Specializing in Computer Vision, Deep Learning (YOLO, U-Net, TFLite), Python Automation, and Cross-Platform Mobile Applications with Flutter.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-muted-foreground pt-1">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-primary" />
              Kanpur, India
            </div>
            <span className="text-muted-foreground/40">•</span>
            <div className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-primary" />
              Available for Internships &amp; Projects
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full sm:w-auto justify-center">
            <Button asChild size="lg" className="group shadow-lg shadow-primary/10">
              <Link href="/experience">
                Explore My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/30 hover:bg-primary/5">
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                Get In Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/skills">
                View Tech Stack
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
