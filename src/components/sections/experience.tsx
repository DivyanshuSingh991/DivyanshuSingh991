'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Calendar, Building2, ExternalLink } from 'lucide-react';

const internships = [
  {
    role: 'AI Intern – Healthcare',
    company: 'Rayoscan AI Diagnostics Private Limited',
    period: '26 March 2026 – 31 May 2026',
    type: 'Healthcare & Computer Vision',
    highlights: [
      'Developed an end-to-end AI pipeline for Root Canal Treatment (RCT) detection using YOLOv11, achieving 0.87 mAP on 300+ dental radiographs.',
      'Trained, benchmarked, and evaluated YOLOv8, YOLOv11, and U-Net architectures for simultaneous object detection and precise tooth segmentation.',
      'Conducted extensive dataset preprocessing, annotation formatting, geometric/color augmentations, and mask generation.',
      'Built automated computer vision inference workflows using Python, OpenCV, and Deep Learning.'
    ],
    tech: ['Python', 'YOLOv11', 'YOLOv8', 'U-Net', 'OpenCV', 'Deep Learning', 'Computer Vision']
  },
  {
    role: 'AI Intern – Green Skills',
    company: 'AICTE | Edunet Foundation | Shell (Skills4Future Program)',
    period: '27 Oct 2025 – 27 Nov 2025',
    type: 'Virtual Internship (AI & Data Analytics)',
    highlights: [
      'Completed a rigorous 4-week virtual internship in Artificial Intelligence and Data Analytics focused on sustainable Green Skills.',
      'Engaged in end-to-end project-based learning covering exploratory data analysis, preprocessing, ML model training, and evaluation.',
      'Collaborated through weekly mentor reviews, technical milestones, and expert-led training sessions.',
      'Presented the final capstone project and technical deck to industry panelists, earning certifications from AICTE, Shell, and Edunet.'
    ],
    tech: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'Data Analytics', 'Pandas']
  },
  {
    role: 'Mobile App Engineering Intern',
    company: 'Excelerate (in collaboration with Saint Louis University)',
    period: '6 Oct 2025 – 6 Nov 2025',
    type: 'Virtual Internship (Mobile Development)',
    highlights: [
      'Engineered cross-platform mobile application modules using Flutter and Dart in collaboration with Saint Louis University.',
      'Designed responsive UI components and implemented clean architecture adhering to mobile design best practices.',
      'Collaborated effectively in an agile remote team setting, taking ownership of sprints and deliverables.',
      'Earned exceptional ratings in a 360-degree performance evaluation for code quality and problem solving.'
    ],
    tech: ['Flutter', 'Dart', 'Mobile Engineering', 'REST APIs', 'Git', 'Agile']
  },
  {
    role: 'Python Development Intern',
    company: 'Codveda',
    period: 'April 2025 – May 2025',
    type: 'Software Development',
    highlights: [
      'Designed a desktop To-Do List Application with CustomTkinter and Tkinter, featuring persistent JSON state storage and input validation.',
      'Engineered a command-line Weather API Integration fetching real-time meteorological metrics via OpenWeatherMap API.',
      'Developed a Flipkart Product Scraper GUI tool utilizing BeautifulSoup and Requests to parse and extract search-driven product information.',
      'Strengthened expertise in GUI application lifecycle, REST API consumption, and automated web extraction.'
    ],
    tech: ['Python', 'Tkinter', 'CustomTkinter', 'BeautifulSoup', 'Requests', 'REST APIs', 'JSON']
  }
];

const projects = [
  {
    title: 'AI-Powered RCT Detection System',
    category: 'Computer Vision & Healthcare AI',
    featured: true,
    metric: '0.87 mAP50 | 0.77 Precision | 0.88 Recall',
    description: 'An automated Root Canal Treatment detection and segmentation pipeline utilizing YOLOv8, YOLOv11, and U-Net on 300+ panoramic dental X-rays. Features image augmentation, custom mask generation, and high-precision diagnostic localization.',
    tech: ['Python', 'YOLOv8', 'YOLOv11', 'U-Net', 'OpenCV', 'Deep Learning'],
  },
  {
    title: 'AI Waste Classifier Mobile App',
    category: 'Mobile AI & Deep Learning',
    featured: true,
    metric: '89% Accuracy | 91% Val Accuracy',
    description: 'A cross-platform Flutter mobile application performing real-time waste categorization using an on-device EfficientNetB0 model through TensorFlow Lite (TFLite). Supports both camera captures and gallery uploads with optimized image preprocessing.',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'EfficientNetB0', 'Computer Vision'],
  },
  {
    title: 'Excelerate Hub Application',
    category: 'Mobile App Engineering',
    featured: false,
    metric: 'Modular UI Architecture',
    description: 'Cross-platform mobile application developed with Flutter and Dart featuring modular UI widgets, dynamic API integration with mock/live backends, and responsive multi-device design.',
    tech: ['Flutter', 'Dart', 'REST API', 'Git/GitHub', 'Mobile UI/UX'],
  },
  {
    title: 'OPD Optimizer App',
    category: 'Healthcare & Workflow Management',
    featured: false,
    metric: 'Streamlined Clinical Workflow',
    description: 'A Flutter-based application engineered for scalable Outpatient Department (OPD) workflow management, streamlining patient intake and reducing manual coordination via reactive state handling.',
    tech: ['Flutter', 'Dart', 'State Management', 'Android', 'UI/UX'],
  }
];

export default function ExperienceSection() {
  const [filter, setFilter] = useState<'all' | 'ai' | 'mobile'>('all');

  const filteredProjects = projects.filter((project) => {
    if (filter === 'ai') return project.tech.some(t => ['YOLOv8', 'YOLOv11', 'U-Net', 'TensorFlow Lite', 'Deep Learning', 'EfficientNetB0', 'OpenCV'].includes(t));
    if (filter === 'mobile') return project.tech.includes('Flutter') || project.tech.includes('Dart');
    return true;
  });

  return (
    <section className="w-full py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        
        {/* Header Title */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/40 bg-primary/10 text-primary">
            Career Journey
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
            Experience &amp; Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Hands-on industry internships and flagship engineering projects in Computer Vision, Deep Learning, and Mobile Engineering.
          </p>
        </div>

        {/* Section 1: Internships */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-3 border-b pb-4">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold font-headline">Work Experience &amp; Internships</h3>
              <p className="text-sm text-muted-foreground">Professional roles and industry training</p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {internships.map((intern, index) => (
              <Card key={index} className="flex flex-col justify-between border-border/80 hover:border-primary/40 transition-all hover:shadow-lg bg-card/60 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Badge variant="outline" className="border-primary/30 text-primary text-xs font-medium">
                      {intern.type}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {intern.period}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground font-headline">
                    {intern.role}
                  </CardTitle>
                  <CardDescription className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-1">
                    <Building2 className="w-4 h-4" />
                    {intern.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 flex-grow">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {intern.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1 text-xs">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {intern.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Section 2: Projects */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold font-headline">Featured Projects</h3>
                <p className="text-sm text-muted-foreground">End-to-end AI systems and mobile applications</p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={filter === 'all' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('all')}
                className="text-xs"
              >
                All ({projects.length})
              </Button>
              <Button
                variant={filter === 'ai' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('ai')}
                className="text-xs"
              >
                AI &amp; Computer Vision
              </Button>
              <Button
                variant={filter === 'mobile' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter('mobile')}
                className="text-xs"
              >
                Flutter / Mobile
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => (
              <Card key={index} className={`flex flex-col justify-between border-border/80 transition-all hover:shadow-lg hover:border-primary/50 bg-card ${project.featured ? 'ring-1 ring-primary/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold text-primary">{project.category}</span>
                    {project.featured && (
                      <Badge variant="default" className="text-[10px] px-2 py-0.5 bg-primary text-primary-foreground font-semibold">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg font-bold font-headline leading-tight">
                    {project.title}
                  </CardTitle>
                  {project.metric && (
                    <div className="mt-2 text-xs font-semibold text-primary/90 bg-primary/10 px-2.5 py-1 rounded-md inline-block">
                      {project.metric}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-3 border-t border-border/60">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="text-xs font-normal">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Interested in seeing more code and repositories?{' '}
              <a
                href="https://github.com/DivyanshuSingh991"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
              >
                Explore my GitHub Profile <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
