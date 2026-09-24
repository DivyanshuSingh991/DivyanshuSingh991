import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-28 relative">
      <div className="container max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
            Let’s Build Something Amazing
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            I am actively exploring internship opportunities, research collaborations in AI/ML &amp; Computer Vision, and software development projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2 items-stretch">
          
          {/* Left Column: Direct Contact Cards */}
          <div className="space-y-4 flex flex-col justify-between">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl glass-card hover:border-primary/50 hover:shadow-lg transition-all flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="overflow-hidden flex-grow">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Email Address</span>
                <a 
                  href="mailto:divyanshusingh991991@gmail.com" 
                  className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors truncate block mt-0.5"
                >
                  divyanshusingh991991@gmail.com
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl glass-card hover:border-primary/50 hover:shadow-lg transition-all flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Phone / WhatsApp</span>
                <a 
                  href="tel:+918840857762" 
                  className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors block mt-0.5"
                >
                  +91 8840857762
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-card hover:border-primary/50 hover:shadow-lg transition-all flex items-center gap-4 group">
              <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="flex-grow">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">Location</span>
                <p className="text-sm sm:text-base font-bold text-foreground mt-0.5">
                  Kanpur, Uttar Pradesh, India
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Social Profiles & CTA Card */}
          <div className="space-y-4 flex flex-col justify-between">
            
            {/* LinkedIn */}
            <div className="p-5 rounded-2xl glass-card hover:border-primary/50 hover:shadow-lg transition-all flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Linkedin className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">LinkedIn</span>
                  <p className="text-sm font-bold text-foreground truncate mt-0.5">divyanshu-singh-386940336</p>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="rounded-full border-border/80 hover:bg-primary hover:text-primary-foreground shrink-0 text-xs">
                <a 
                  href="https://www.linkedin.com/in/divyanshu-singh-386940336" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Connect
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>

            {/* GitHub */}
            <div className="p-5 rounded-2xl glass-card hover:border-primary/50 hover:shadow-lg transition-all flex items-center justify-between gap-4 group">
              <div className="flex items-center gap-4 overflow-hidden">
                <div className="bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                  <Github className="h-5 w-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">GitHub</span>
                  <p className="text-sm font-bold text-foreground truncate mt-0.5">DivyanshuSingh991</p>
                </div>
              </div>
              <Button asChild size="sm" variant="outline" className="rounded-full border-border/80 hover:bg-primary hover:text-primary-foreground shrink-0 text-xs">
                <a 
                  href="https://github.com/DivyanshuSingh991" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </Button>
            </div>

            {/* Direct Message Action Card */}
            <div className="p-5 rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 via-primary/5 to-accent/10 flex flex-col justify-between gap-3 text-left">
              <div>
                <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Have a project or open role?
                </h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Send me a direct email. I am always excited to discuss technical challenges and innovative projects.
                </p>
              </div>
              <Button asChild className="w-full rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-md shadow-primary/20">
                <a href="mailto:divyanshusingh991991@gmail.com?subject=Inquiry%20from%20Portfolio">
                  <Send className="w-4 h-4 mr-2" />
                  Send an Email Directly
                </a>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
