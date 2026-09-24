import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, CheckCircle2, Trophy, Users, Sparkles, BookOpen, School, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'BS in Data Science and Applications',
    institution: 'Indian Institute of Technology (IIT) Madras',
    location: 'Chennai (Online/Hybrid)',
    period: 'September 2024 – Present',
    details: 'Focusing on Machine Learning, Mathematical Foundations, Data Structures, and Python Programming.',
    status: 'Foundation Level Completed',
    highlight: true,
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Dr. Ambedkar Institute of Technology for Handicapped (AITD)',
    location: 'Kanpur, UP',
    period: 'September 2024 – Present',
    details: 'Core engineering curriculum in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.',
    status: 'Ongoing',
    highlight: true,
  },
  {
    degree: 'Senior Secondary (Class XII - Science)',
    institution: 'Sigma School of Excellence',
    location: 'Jhalawar, Rajasthan',
    period: 'May 2023',
    details: 'Rigorous coursework in Physics, Chemistry, Mathematics, and Computer Science.',
    status: 'Completed',
    highlight: false,
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'St. Anthony Public School',
    location: 'Lucknow, UP',
    period: 'May 2021',
    details: 'Foundational secondary school academic curriculum with high distinction.',
    status: 'Completed',
    highlight: false,
  },
];

const achievements = [
  {
    title: 'Foundation Level in Programming & Data Science',
    organization: 'IIT Madras BS Degree Program',
    description: 'Successfully completed the rigorous Foundation Level in Programming and Data Science with mastery in Python and computational thinking.',
    badge: 'Academics'
  },
  {
    title: 'India AI Impact Buildathon 2026',
    organization: 'GUVI & HCL',
    description: 'Selected and participated in the national level AI buildathon, engineering generative & vision models for impactful real-world scenarios.',
    badge: 'Hackathon'
  }
];

const certifications = [
  {
    title: 'Artificial Intelligence',
    issuer: 'Samsung Innovation Campus',
    type: 'Deep Learning'
  },
  {
    title: 'Artificial Intelligence & Data Analytics',
    issuer: 'AICTE | Edunet Foundation | Shell',
    type: 'Green Skills'
  },
  {
    title: 'Mobile App Development with Flutter',
    issuer: 'Excelerate | Saint Louis University',
    type: 'Mobile Engineering'
  },
  {
    title: 'Data Science Foundations',
    issuer: 'IBM SkillsBuild',
    type: 'Data Science'
  },
  {
    title: 'Python Development Intern Certification',
    issuer: 'Codveda',
    type: 'Software Engineering'
  }
];

const campusActivities = [
  {
    role: 'Stage Anchor & Event Coordinator',
    event: 'SHANKHNAAD 2025 (Flagship Cultural Event)',
    description: 'Anchored the flagship cultural festival, managing high-energy audience interactions, schedule coordination, and stage presentations.'
  },
  {
    role: 'Creative Wall Doodle Artist',
    event: 'SHANKHNAAD 2025',
    description: 'Conceptualized and painted thematic creative wall doodles and visual decorations, enhancing the ambiance and identity of the festival.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 relative">
      <div className="container max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Background &amp; Profile
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
            Academic Excellence &amp; Passion
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Combining rigorous academic foundations at IIT Madras and AITD Kanpur with hands-on AI engineering, computer vision research, and cross-platform mobile development.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* Education Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between border-b border-border/70 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-headline">Education Timeline</h3>
                  <p className="text-xs text-muted-foreground">Dual degrees and previous schooling</p>
                </div>
              </div>
              <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                2021 – Ongoing
              </Badge>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`p-5 rounded-2xl glass-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg ${
                    edu.highlight ? 'border-primary/30 bg-primary/[0.03]' : ''
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-foreground font-headline flex items-center gap-2">
                        {edu.degree}
                        {edu.highlight && (
                          <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
                        )}
                      </h4>
                      <p className="text-sm font-semibold text-primary mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex sm:flex-col items-end gap-1.5 shrink-0">
                      <Badge variant="secondary" className="text-[11px] font-medium">
                        {edu.period}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                    {edu.details}
                  </p>
                  <div className="flex items-center justify-between gap-2 pt-3 mt-3 border-t border-border/50 text-xs">
                    <span className="text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-primary/70" />
                      {edu.location}
                    </span>
                    <span className="inline-flex items-center gap-1 text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-md text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Certifications & Leadership (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-border/70 pb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Key Honors</h3>
                  <p className="text-xs text-muted-foreground">Recognitions &amp; Hackathons</p>
                </div>
              </div>

              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <div key={index} className="p-4 rounded-2xl glass-card hover:border-primary/40 transition-all">
                    <div className="flex items-start justify-between gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <Badge variant="outline" className="text-[10px] border-primary/30 text-primary shrink-0">
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-xs font-medium text-primary mb-1">{item.organization}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-border/70 pb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Certifications</h3>
                  <p className="text-xs text-muted-foreground">Industry validated credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3.5 rounded-xl glass-card hover:border-primary/40 transition-all flex items-center justify-between gap-2">
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-wider block">{cert.type}</span>
                      <h5 className="text-xs font-semibold text-foreground truncate">{cert.title}</h5>
                      <p className="text-[11px] text-muted-foreground truncate">{cert.issuer}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Campus & Creative */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-border/70 pb-4">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Campus Leadership</h3>
                  <p className="text-xs text-muted-foreground">Cultural anchoring &amp; doodles</p>
                </div>
              </div>

              <div className="space-y-2.5">
                {campusActivities.map((act, index) => (
                  <div key={index} className="p-3.5 rounded-xl glass-card hover:border-primary/40 transition-all">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h5 className="text-xs font-bold text-foreground">{act.role}</h5>
                      <Badge variant="secondary" className="text-[10px]">{act.event}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{act.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
