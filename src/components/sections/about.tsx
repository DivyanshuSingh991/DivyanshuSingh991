import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, CheckCircle2, Trophy, Users, Sparkles, BookOpen } from 'lucide-react';

const education = [
  {
    degree: 'BS Degree in Data Science and Applications',
    institution: 'Indian Institute of Technology (IIT) Madras',
    period: 'September 2024 – Present',
    details: 'Focusing on Machine Learning, Mathematical Foundations, Data Structures, and Python Programming.',
    status: 'Foundation Level Completed'
  },
  {
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Dr. Ambedkar Institute of Technology for Handicapped (AITD), Kanpur',
    period: 'September 2024 – Present',
    details: 'Core curriculum covering Data Structures & Algorithms, Object Oriented Programming, DBMS, and Software Engineering.',
    status: 'Ongoing'
  },
  {
    degree: 'Senior Secondary (Class XII - Science)',
    institution: 'Sigma School of Excellence',
    period: 'Completed May 2023',
    details: 'Strong focus on Mathematics, Physics, and Computer Science.',
    status: 'Completed'
  },
  {
    degree: 'Secondary School (Class X)',
    institution: 'St. Anthony Public School',
    period: 'Completed May 2021',
    details: 'Foundational secondary school education with academic excellence.',
    status: 'Completed'
  },
];

const achievements = [
  {
    title: 'Foundation Level in Programming and Data Science',
    organization: 'IIT Madras BS Degree Program',
    description: 'Successfully completed the rigorous Foundation Level in Programming and Data Science with exemplary performance in Python and computational thinking.'
  },
  {
    title: 'India AI Impact Buildathon 2026',
    organization: 'GUVI & HCL',
    description: 'Participated in the national level buildathon, engineering AI-driven solutions to tackle real-world challenges.'
  }
];

const certifications = [
  {
    title: 'Artificial Intelligence',
    issuer: 'Samsung Innovation Campus',
    type: 'AI & Deep Learning'
  },
  {
    title: 'Artificial Intelligence and Data Analytics',
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
    type: 'Software Development'
  }
];

const campusEngagement = [
  {
    role: 'Event Anchor & Coordinator',
    event: 'SHANKHNAAD 2025 (Flagship Cultural Festival)',
    description: 'Anchored the flagship cultural event, demonstrating effective stage presence, event coordination, and high audience engagement across multi-day sessions.'
  },
  {
    role: 'Creative Visual Designer',
    event: 'SHANKHNAAD 2025',
    description: 'Designed and executed creative wall doodles and thematic artwork, enhancing the aesthetic atmosphere and visual identity of the cultural fest.'
  }
];

export default function AboutSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <Badge variant="outline" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/40 bg-primary/10 text-primary">
            About Divyanshu
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
            Bridging Theory with Practical AI Engineering
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            I am a passionate developer currently pursuing a dual academic path with a B.Tech in CSE at AITD Kanpur and a BS in Data Science &amp; Applications at IIT Madras. With hands-on internship experience in Computer Vision (YOLOv8/v11, U-Net), Python automation, and Flutter app engineering, I love building end-to-end intelligent systems that solve real problems.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          {/* Education Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b pb-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-headline">Education</h3>
                <p className="text-xs text-muted-foreground">Academic journey and degrees</p>
              </div>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="transition-all hover:shadow-md border-border/70 hover:border-primary/40">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg font-semibold">{edu.degree}</CardTitle>
                        <CardDescription className="text-sm font-medium text-foreground/80 mt-0.5">
                          {edu.institution}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary" className="text-xs shrink-0 whitespace-nowrap">
                        {edu.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm text-muted-foreground">{edu.details}</p>
                    {edu.status && (
                      <div className="inline-flex items-center gap-1.5 text-xs text-primary font-medium bg-primary/5 px-2 py-0.5 rounded">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {edu.status}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column: Achievements & Certifications & Campus */}
          <div className="space-y-8">
            
            {/* Achievements */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Trophy className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline">Achievements &amp; Honors</h3>
                  <p className="text-xs text-muted-foreground">Key milestones and competition participation</p>
                </div>
              </div>

              <div className="space-y-3">
                {achievements.map((item, index) => (
                  <Card key={index} className="border-border/70 hover:border-primary/40 transition-all">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-semibold">{item.title}</CardTitle>
                        <Badge variant="outline" className="text-xs border-primary/30 text-primary">{item.organization}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline">Certifications</h3>
                  <p className="text-xs text-muted-foreground">Professional &amp; technical credentials</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3.5 rounded-lg border border-border/80 bg-card hover:border-primary/40 transition-all flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-primary block mb-1">{cert.type}</span>
                      <h4 className="text-sm font-medium leading-snug">{cert.title}</h4>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Engagement */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b pb-3">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-headline">Campus Leadership &amp; Creative Works</h3>
                  <p className="text-xs text-muted-foreground">Cultural anchoring &amp; artistic contributions</p>
                </div>
              </div>

              <div className="space-y-3">
                {campusEngagement.map((item, index) => (
                  <div key={index} className="p-4 rounded-lg border border-border/80 bg-card">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-foreground">{item.role}</h4>
                      <Badge variant="secondary" className="text-xs">{item.event}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
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
