import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code } from 'lucide-react';

const internships = [
  {
    role: 'AI Intern – Healthcare',
    company: 'Rayoscan AI Diagnostics Private Limited',
    period: 'March 2026 – Present',
    description: 'Developed an AI pipeline for RCT detection using YOLOv8 and image segmentation (U-Net) on dental radiographs.'
  },
  {
    role: 'AI Intern – Green Skills',
    company: 'Shell (Skills4Future Program)',
    period: 'Oct 2025 – Nov 2025',
    description: 'Focused on AI and Data Analytics through project-based learning, including model building and evaluation.'
  },
  {
    role: 'Mobile App Engineering Intern',
    company: 'Excelerate',
    period: 'Oct 2025 – Nov 2025',
    description: 'Developed cross-platform mobile applications using Flutter in collaboration with Saint Louis University.'
  }
];

const projects = [
  {
    title: 'AI-Powered RCT Detection System',
    description: 'An automated Root Canal Treatment detection pipeline using YOLOv8/v11 and panoramic dental radiographs, achieving a 0.87 mAP score.',
    tech: ['YOLOv8', 'Computer Vision', 'Python'],
  },
  {
    title: 'Excelerate Hub App',
    description: 'A cross-platform mobile application built with Flutter and Dart, featuring reusable UI components and dynamic API integration.',
    tech: ['Flutter', 'Dart', 'API'],
  },
  {
    title: 'OPD Optimizer App',
    description: 'A Flutter-based app designed for scalable OPD workflow management, reducing manual coordination and improving operational efficiency.',
    tech: ['Flutter', 'Mobile Development'],
  },
];

export default function ExperienceSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Experience & Projects</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A glimpse into my professional journey and the projects I've built.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 font-headline"><Briefcase /> Internships</h3>
            {internships.map((intern, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{intern.role}</CardTitle>
                  <CardDescription>{intern.company} | {intern.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{intern.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 font-headline"><Code /> Projects</h3>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
              {projects.map((project, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
             <p className="text-center text-muted-foreground mt-8">More projects coming soon...</p>
          </div>
        </div>
      </div>
    </section>
  );
}
