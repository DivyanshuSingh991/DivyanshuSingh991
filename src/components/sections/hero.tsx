import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Mail, Sparkles, MapPin, Briefcase, Terminal, Award, Cpu, Code2, Layers } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-4rem)] flex items-center justify-center overflow-hidden py-16 md:py-24">
      {/* Dynamic Background Mesh & Ambient Glow */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-background">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[140px] opacity-40 dark:opacity-60 pointer-events-none"></div>
        <div className="absolute top-1/3 right-1/4 w-[350px] h-[350px] bg-accent/20 rounded-full blur-[120px] opacity-30 dark:opacity-40 pointer-events-none"></div>
      </div>

      <div className="container max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 dark:bg-primary/15 text-primary text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Available for AI/ML &amp; Software Engineering Opportunities</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl font-headline text-foreground leading-[1.1]">
              Hi, I’m <span className="gradient-text">Divyanshu Singh</span>
            </h1>
            <p className="text-lg sm:text-2xl font-semibold text-foreground/90 max-w-3xl mx-auto">
              AI/ML Developer &amp; Software Engineer
            </p>
            <p className="text-muted-foreground text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Pursuing dual degrees at <span className="font-semibold text-foreground">IIT Madras</span> (BS Data Science) &amp; <span className="font-semibold text-foreground">AITD Kanpur</span> (B.Tech CSE). Building high-precision Computer Vision pipelines, Mobile AI applications, and robust Python automation.
            </p>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl pt-2">
            <div className="p-3.5 rounded-2xl glass-card text-center hover:border-primary/40 transition-all">
              <div className="text-xl sm:text-2xl font-black font-headline text-primary">0.87 mAP</div>
              <div className="text-xs text-muted-foreground mt-0.5">Dental AI Pipeline</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card text-center hover:border-primary/40 transition-all">
              <div className="text-xl sm:text-2xl font-black font-headline text-accent">91% Val Acc</div>
              <div className="text-xs text-muted-foreground mt-0.5">TFLite Mobile AI</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card text-center hover:border-primary/40 transition-all">
              <div className="text-xl sm:text-2xl font-black font-headline text-primary">4 Internships</div>
              <div className="text-xs text-muted-foreground mt-0.5">Industry Roles</div>
            </div>
            <div className="p-3.5 rounded-2xl glass-card text-center hover:border-primary/40 transition-all">
              <div className="text-xl sm:text-2xl font-black font-headline text-foreground">Dual Degree</div>
              <div className="text-xs text-muted-foreground mt-0.5">IITM + AITD</div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3.5 pt-4 w-full sm:w-auto justify-center">
            <Button asChild size="lg" className="rounded-full shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold px-7 group">
              <Link href="/#experience">
                View Experience &amp; Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-border/80 hover:bg-secondary/70 font-semibold px-7">
              <Link href="/#contact">
                <Mail className="mr-2 h-4 w-4 text-primary" />
                Get In Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="rounded-full font-semibold px-7">
              <Link href="/#skills">
                Explore Skills
              </Link>
            </Button>
          </div>

          {/* Tech stack pills footer */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            <span className="text-xs text-muted-foreground mr-1 font-medium">Core Stack:</span>
            {['Python', 'YOLOv11', 'U-Net', 'TensorFlow Lite', 'Flutter', 'OpenCV', 'SQL', 'FastAPI'].map((tech) => (
              <Badge key={tech} variant="secondary" className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-border/60 bg-secondary/50">
                {tech}
              </Badge>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
