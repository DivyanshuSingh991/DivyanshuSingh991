'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, Code, Calendar, Building2, ExternalLink, Sparkles, Layers, Cpu, Smartphone, CheckCircle2, ChevronRight } from 'lucide-react';

const internships = [
  {
    role: 'AI Intern – Healthcare',
    company: 'Rayoscan AI Diagnostics Private Limited',
    period: '26 March 2026 – 31 May 2026',
    type: 'Healthcare & Computer Vision',
    badgeColor: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-400',
    highlights: [
      'Developed an end-to-end AI pipeline for Root Canal Treatment (RCT) detection using YOLOv11, achieving 0.87 mAP on 300+ dental radiographs.',
      'Trained, benchmarked, and evaluated YOLOv8, YOLOv11, and U-Net architectures for simultaneous object detection and tooth segmentation.',
      'Conducted dataset preprocessing, annotation formatting, geometric/color augmentations, and mask generation.',
      'Built automated computer vision inference workflows using Python, OpenCV, and Deep Learning.'
    ],
    tech: ['Python', 'YOLOv11', 'YOLOv8', 'U-Net', 'OpenCV', 'Deep Learning', 'Computer Vision']
  },
  {
    role: 'AI Intern – Green Skills',
    company: 'AICTE | Edunet Foundation | Shell (Skills4Future Program)',
    period: '27 Oct 2025 – 27 Nov 2025',
    type: 'AI & Data Analytics',
    badgeColor: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400',
    highlights: [
      'Completed a 4-week virtual internship in Artificial Intelligence and Data Analytics focused on sustainable Green Skills.',
      'Engaged in end-to-end project-based learning covering exploratory data analysis, preprocessing, ML model training, and evaluation.',
      'Participated in weekly mentorship, milestone reviews, and expert-led sessions to deliver a final project.',
      'Presented the final capstone project and technical deck to industry panelists, earning certifications from AICTE, Shell, and Edunet.'
    ],
    tech: ['Python', 'Machine Learning', 'Data Preprocessing', 'Model Evaluation', 'Data Analytics', 'Pandas']
  },
  {
    role: 'Mobile App Engineering Intern',
    company: 'Excelerate (in collaboration with Saint Louis University)',
    period: '6 Oct 2025 – 6 Nov 2025',
    type: 'Mobile Engineering (Flutter)',
    badgeColor: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400',
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
    badgeColor: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400',
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
    icon: Cpu,
    gradient: 'from-blue-600/20 via-primary/10 to-transparent',
    description: 'An automated Root Canal Treatment detection and segmentation pipeline utilizing YOLOv8, YOLOv11, and U-Net on 300+ panoramic dental X-rays. Features image augmentation, custom mask generation, and high-precision diagnostic localization.',
    tech: ['Python', 'YOLOv8', 'YOLOv11', 'U-Net', 'OpenCV', 'Deep Learning'],
  },
  {
    title: 'AI Waste Classifier Mobile App',
    category: 'Mobile AI & Deep Learning',
    featured: true,
    metric: '89% Accuracy | 91% Val Accuracy',
    icon: Smartphone,
    gradient: 'from-emerald-600/20 via-accent/10 to-transparent',
    description: 'A cross-platform Flutter mobile application performing real-time waste categorization using an on-device EfficientNetB0 model through TensorFlow Lite (TFLite). Supports live camera captures and gallery uploads with optimized image preprocessing.',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'EfficientNetB0', 'Computer Vision'],
  },
  {
    title: 'Excelerate Hub Application',
    category: 'Mobile App Engineering',
    featured: false,
    metric: 'Modular UI Architecture',
    icon: Layers,
    gradient: 'from-purple-600/20 via-primary/10 to-transparent',
    description: 'Cross-platform mobile application developed with Flutter and Dart featuring modular UI widgets, dynamic API integration with mock/live backends, and responsive multi-device design in collaboration with Saint Louis University.',
    tech: ['Flutter', 'Dart', 'REST API', 'Git/GitHub', 'Mobile UI/UX'],
  },
  {
    title: 'OPD Optimizer App',
    category: 'Healthcare & Workflow Management',
    featured: false,
    metric: 'Streamlined Clinical Workflow',
    icon: Building2,
    gradient: 'from-amber-600/20 via-accent/10 to-transparent',
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
    <section id="experience" className="w-full py-20 md:py-28 relative">
      <div className="container max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Experience &amp; Portfolio
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
            Work Experience &amp; Flagship Projects
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            Real-world internship outcomes and high-impact software solutions developed with cutting-edge AI architectures and mobile frameworks.
          </p>
        </div>

        {/* Section 1: Internships */}
        <div className="mb-20 space-y-8">
          <div className="flex items-center justify-between border-b border-border/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline">Internship Experience</h3>
                <p className="text-xs text-muted-foreground">4 Industry roles across AI, CV, Mobile &amp; Python</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs border-primary/30 text-primary">
              4 Positions
            </Badge>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {internships.map((intern, index) => (
              <div 
                key={index} 
                className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {intern.type}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {intern.period}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                    {intern.role}
                  </h4>
                  <p className="text-sm font-semibold text-foreground/80 flex items-center gap-1.5 mt-1 mb-4">
                    <Building2 className="w-4 h-4 text-primary" />
                    {intern.company}
                  </p>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                    {intern.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-1 text-xs shrink-0">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60">
                  <div className="flex flex-wrap gap-1.5">
                    {intern.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="text-[11px] font-normal px-2 py-0.5 rounded-md">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Flagship Projects */}
        <div id="projects" className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-headline">Featured Projects</h3>
                <p className="text-xs text-muted-foreground">Core machine learning and mobile applications</p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 rounded-full border border-border/70 bg-card/60 backdrop-blur-md">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  filter === 'all' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  filter === 'ai' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                AI &amp; Vision
              </button>
              <button
                onClick={() => setFilter('mobile')}
                className={`px-3.5 py-1 rounded-full text-xs font-semibold transition-all ${
                  filter === 'mobile' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                Flutter Mobile
              </button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 relative overflow-hidden group ${
                    project.featured ? 'border-primary/30 ring-1 ring-primary/20' : ''
                  }`}
                >
                  {/* Subtle Card Background Accent */}
                  <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${project.gradient} rounded-full blur-3xl pointer-events-none -z-10 opacity-70 group-hover:opacity-100 transition-opacity`}></div>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-xs font-semibold text-primary">{project.category}</span>
                      </div>
                      {project.featured && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-white uppercase tracking-wider shadow-sm">
                          Featured
                        </span>
                      )}
                    </div>

                    <h4 className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors leading-snug">
                      {project.title}
                    </h4>

                    {project.metric && (
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        <span>{project.metric}</span>
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-muted-foreground mt-4 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <Badge key={i} variant="secondary" className="text-[11px] font-normal px-2 py-0.5 rounded-md">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* GitHub CTA Banner */}
          <div className="p-6 rounded-2xl border border-border/80 glass-card flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left mt-8">
            <div className="space-y-1">
              <h4 className="text-base font-bold text-foreground">Want to inspect the code &amp; repositories?</h4>
              <p className="text-xs text-muted-foreground">
                All model pipelines, notebooks, and mobile repos are documented on GitHub.
              </p>
            </div>
            <Button asChild className="rounded-full gap-2 shrink-0 bg-gradient-to-r from-primary to-accent text-white">
              <a href="https://github.com/DivyanshuSingh991" target="_blank" rel="noopener noreferrer">
                Explore GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
}
