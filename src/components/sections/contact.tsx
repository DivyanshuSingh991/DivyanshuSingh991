import { Mail, Linkedin, Github, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/40 bg-primary/10 text-primary">
            Connect
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            I am always open to discussing new opportunities, internship roles, AI/ML collaborations, and software engineering projects.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2 items-start">
          
          {/* Contact Details Cards */}
          <div className="space-y-4">
            
            {/* Email */}
            <Card className="border-border/80 hover:border-primary/40 transition-all hover:shadow-md">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                  <Mail className="h-6 w-6" />
                </div>
                <div className="overflow-hidden">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email Address</h3>
                  <a 
                    href="mailto:divyanshusingh991991@gmail.com" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors truncate block"
                  >
                    divyanshusingh991991@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone */}
            <Card className="border-border/80 hover:border-primary/40 transition-all hover:shadow-md">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Phone / WhatsApp</h3>
                  <a 
                    href="tel:+918840857762" 
                    className="text-base font-semibold text-foreground hover:text-primary transition-colors block"
                  >
                    +91 8840857762
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-border/80 hover:border-primary/40 transition-all hover:shadow-md">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Location</h3>
                  <p className="text-base font-semibold text-foreground">
                    Kanpur, Uttar Pradesh, India
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Social Profiles & Quick Message */}
          <div className="space-y-4">
            
            {/* LinkedIn */}
            <Card className="border-border/80 hover:border-primary/40 transition-all hover:shadow-md">
              <CardContent className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">LinkedIn Profile</h3>
                    <p className="text-sm font-semibold text-foreground">divyanshu-singh-386940336</p>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="border-primary/30 shrink-0">
                  <a 
                    href="https://www.linkedin.com/in/divyanshu-singh-386940336" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* GitHub */}
            <Card className="border-border/80 hover:border-primary/40 transition-all hover:shadow-md">
              <CardContent className="p-5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl text-primary shrink-0">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">GitHub Profile</h3>
                    <p className="text-sm font-semibold text-foreground">DivyanshuSingh991</p>
                  </div>
                </div>
                <Button asChild size="sm" variant="outline" className="border-primary/30 shrink-0">
                  <a 
                    href="https://github.com/DivyanshuSingh991" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Follow
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Action Box */}
            <div className="p-5 rounded-xl border border-primary/30 bg-primary/5 text-center space-y-3">
              <h4 className="text-base font-semibold text-foreground">Ready to collaborate?</h4>
              <p className="text-xs text-muted-foreground">
                Feel free to drop a direct email or connect on LinkedIn. I usually respond within 24 hours.
              </p>
              <Button asChild className="w-full">
                <a href="mailto:divyanshusingh991991@gmail.com?subject=Collaboration%20Opportunity">
                  <Send className="w-4 h-4 mr-2" />
                  Send an Email
                </a>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
