'use client';

import React, { useState } from 'react';
import { 
  Sparkles, 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Trophy, 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Cpu, 
  Smartphone, 
  Code2, 
  Database, 
  BarChart3, 
  GitBranch, 
  Layers, 
  Building2, 
  Calendar, 
  Share2, 
  Check, 
  User, 
  ChevronRight, 
  Eye,
  Copy,
  Download,
  Terminal,
  ShieldCheck,
  Flame
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

// --- DATA ---
const educationList = [
  {
    degree: 'BS in Data Science and Applications',
    institution: 'Indian Institute of Technology (IIT) Madras',
    location: 'Chennai (Online/Hybrid)',
    period: 'Sept 2024 – Present',
    details: 'Focusing on Machine Learning, Computational Mathematics, Data Structures, and Python Programming.',
    status: 'Foundation Level Completed',
    highlight: true,
  },
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Dr. Ambedkar Institute of Technology for Handicapped (AITD)',
    location: 'Kanpur, UP',
    period: 'Sept 2024 – Present',
    details: 'Core engineering curriculum in Data Structures, Algorithms, DBMS, Operating Systems, and Software Engineering.',
    status: 'Ongoing',
    highlight: true,
  },
  {
    degree: 'Senior Secondary (Class XII - Science)',
    institution: 'Sigma School of Excellence',
    location: 'Jhalawar, Rajasthan',
    period: 'May 2023',
    details: 'Advanced coursework in Physics, Chemistry, Mathematics, and Computer Science.',
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

const internships = [
  {
    role: 'AI Intern – Healthcare',
    company: 'Rayoscan AI Diagnostics Private Limited',
    period: '26 March 2026 – 31 May 2026',
    type: 'Healthcare & Computer Vision',
    icon: Cpu,
    highlights: [
      'Developed an end-to-end AI pipeline for Root Canal Treatment (RCT) detection using YOLOv11, achieving 0.87 mAP on 300+ dental radiographs.',
      'Trained, benchmarked, and evaluated YOLOv8, YOLOv11, and U-Net architectures for simultaneous object detection and tooth segmentation.',
      'Conducted dataset preprocessing, annotation formatting, geometric/color augmentations, and mask generation on ~300 X-ray images.',
      'Built automated computer vision inference workflows using Python, OpenCV, and Deep Learning.'
    ],
    tech: ['Python', 'YOLOv11', 'YOLOv8', 'U-Net', 'OpenCV', 'Deep Learning', 'Computer Vision']
  },
  {
    role: 'AI Intern – Green Skills',
    company: 'AICTE | Edunet Foundation | Shell (Skills4Future Program)',
    period: '27 Oct 2025 – 27 Nov 2025',
    type: 'AI & Data Analytics (Virtual)',
    icon: BarChart3,
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
    type: 'Mobile Engineering (Virtual)',
    icon: Smartphone,
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
    icon: Code2,
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
    gradient: 'from-blue-600 via-indigo-600 to-cyan-500',
    description: 'An automated Root Canal Treatment detection and segmentation pipeline utilizing YOLOv8, YOLOv11, and U-Net on 300+ panoramic dental X-rays. Features image augmentation, custom mask generation, and high-precision diagnostic localization.',
    tech: ['Python', 'YOLOv8', 'YOLOv11', 'U-Net', 'OpenCV', 'Deep Learning'],
    github: 'https://github.com/DivyanshuSingh991'
  },
  {
    title: 'AI Waste Classifier Mobile App',
    category: 'Mobile AI & Deep Learning',
    featured: true,
    metric: '89% Accuracy | 91% Val Accuracy',
    icon: Smartphone,
    gradient: 'from-emerald-600 via-teal-600 to-cyan-500',
    description: 'A cross-platform Flutter mobile application performing real-time waste categorization using an on-device EfficientNetB0 model through TensorFlow Lite (TFLite). Supports live camera captures and gallery uploads with optimized image preprocessing.',
    tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'EfficientNetB0', 'Computer Vision'],
    github: 'https://github.com/DivyanshuSingh991'
  },
  {
    title: 'Excelerate Hub Application',
    category: 'Mobile App Engineering',
    featured: false,
    metric: 'Modular UI Architecture',
    icon: Layers,
    gradient: 'from-purple-600 via-indigo-600 to-pink-500',
    description: 'Cross-platform mobile application developed with Flutter and Dart featuring modular UI widgets, dynamic API integration with mock/live backends, and responsive multi-device design in collaboration with Saint Louis University.',
    tech: ['Flutter', 'Dart', 'REST API', 'Git/GitHub', 'Mobile UI/UX'],
    github: 'https://github.com/DivyanshuSingh991'
  },
  {
    title: 'OPD Optimizer App',
    category: 'Healthcare & Workflow Management',
    featured: false,
    metric: 'Streamlined Clinical Workflow',
    icon: Building2,
    gradient: 'from-amber-600 via-orange-600 to-rose-500',
    description: 'A Flutter-based application engineered for scalable Outpatient Department (OPD) workflow management, streamlining patient intake and reducing manual coordination via reactive state handling.',
    tech: ['Flutter', 'Dart', 'State Management', 'Android', 'UI/UX'],
    github: 'https://github.com/DivyanshuSingh991'
  }
];

const skillCategories = [
  {
    title: 'AI, Deep Learning & Vision',
    subtitle: 'Neural vision & detection pipelines',
    icon: Cpu,
    skills: [
      'Machine Learning', 'Deep Learning', 'Computer Vision', 'CNNs', 'NLP', 
      'YOLOv8', 'YOLOv11', 'U-Net', 'EfficientNetB0', 'TensorFlow', 'Keras', 'TensorFlow Lite', 'Scikit-learn'
    ],
  },
  {
    title: 'Data Science & Scientific Computing',
    subtitle: 'Data engineering & visual analytics',
    icon: BarChart3,
    skills: [
      'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 'Librosa', 'BeautifulSoup4', 'Requests', 'Data Scraping', 'Data Preprocessing'
    ],
  },
  {
    title: 'Programming Languages',
    subtitle: 'Core systems & algorithms',
    icon: Code2,
    skills: [
      'Python', 'Dart', 'C', 'C++', 'Java', 'SQL', 'HTML', 'CSS'
    ],
  },
  {
    title: 'Frameworks & App Development',
    subtitle: 'Cross-platform mobile & backend APIs',
    icon: Smartphone,
    skills: [
      'Flutter', 'FastAPI', 'Flask', 'Tkinter', 'CustomTkinter', 'REST APIs', 'Wix Studio'
    ],
  },
  {
    title: 'Databases & Storage Engines',
    subtitle: 'Relational DBMS & persistent storage',
    icon: Database,
    skills: [
      'SQLite', 'SQL', 'JSON Storage', 'PostgreSQL', 'MongoDB'
    ],
  },
  {
    title: 'Tools & DevOps Ecosystem',
    subtitle: 'IDEs, toolchains & version control',
    icon: GitBranch,
    skills: [
      'Git', 'GitHub', 'PyCharm', 'VS Code', 'Jupyter Notebook', 'Linux / Bash', 'Microsoft Office'
    ],
  },
];

const achievements = [
  {
    title: 'Foundation Level in Programming & Data Science',
    organization: 'IIT Madras BS Degree Program',
    description: 'Successfully completed the rigorous Foundation Level in Programming and Data Science with exemplary mastery in Python and computational thinking.',
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
  { title: 'Artificial Intelligence', issuer: 'Samsung Innovation Campus', type: 'Deep Learning' },
  { title: 'Artificial Intelligence & Data Analytics', issuer: 'AICTE | Edunet | Shell', type: 'Green Skills' },
  { title: 'Mobile App Development with Flutter', issuer: 'Excelerate | Saint Louis University', type: 'Mobile Engineering' },
  { title: 'Data Science Foundations', issuer: 'IBM SkillsBuild', type: 'Data Science' },
  { title: 'Python Development Intern Certification', issuer: 'Codveda', type: 'Software Engineering' }
];

const campusActivities = [
  {
    role: 'Stage Anchor & Event Coordinator',
    event: 'SHANKHNAAD 2025 (Flagship Cultural Fest)',
    description: 'Anchored the flagship cultural festival, managing high-energy audience interactions and stage presentations.'
  },
  {
    role: 'Creative Wall Doodle Artist',
    event: 'SHANKHNAAD 2025',
    description: 'Conceptualized and painted thematic creative wall doodles and visual decorations, enhancing the ambiance of the festival.'
  }
];

type TabType = 'overview' | 'projects' | 'experience' | 'skills' | 'honors' | 'contact';

export default function ProfileAppView() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [projectFilter, setProjectFilter] = useState<'all' | 'ai' | 'mobile'>('all');
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();

  const handleCopy = (text: string, type: 'link' | 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'link') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
      toast({ title: "Link Copied!", description: "Portfolio link copied to clipboard." });
    } else if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      toast({ title: "Email Copied!", description: "divyanshusingh991991@gmail.com copied to clipboard." });
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
      toast({ title: "Phone Copied!", description: "+91-8840857762 copied to clipboard." });
    }
  };

  const filteredProjects = projects.filter((project) => {
    if (projectFilter === 'ai') return project.tech.some(t => ['YOLOv8', 'YOLOv11', 'U-Net', 'TensorFlow Lite', 'Deep Learning', 'EfficientNetB0', 'OpenCV'].includes(t));
    if (projectFilter === 'mobile') return project.tech.includes('Flutter') || project.tech.includes('Dart');
    return true;
  });

  return (
    <div className="w-full min-h-screen pb-16 pt-3 sm:pt-6 px-3 sm:px-6">
      <div className="app-container space-y-5 max-w-4xl mx-auto">
        
        {/* ========================================================================= */}
        {/* 1. TOP PROFILE CARD (High-End ProFile App Style) */}
        {/* ========================================================================= */}
        <div className="profile-card overflow-hidden shadow-2xl relative border border-border/80">
          
          {/* Cover Header Banner */}
          <div className="h-40 sm:h-48 w-full bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 relative overflow-hidden">
            {/* Ambient Background Grid Pattern & Spotlights */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:16px_16px]"></div>
            <div className="absolute -bottom-8 -right-8 w-52 h-52 bg-cyan-400/25 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute top-0 left-1/4 w-40 h-40 bg-blue-400/20 rounded-full blur-2xl pointer-events-none"></div>
            
            {/* Top Share & Live Availability Pills */}
            <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
              <button
                onClick={() => handleCopy(window.location.href, 'link')}
                className="px-3 py-1.5 rounded-full bg-black/35 hover:bg-black/55 text-white text-xs font-semibold backdrop-blur-md transition-all flex items-center gap-1.5 border border-white/15 shadow-sm active:scale-95"
                title="Copy portfolio link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copiedLink ? 'Copied!' : 'Share Profile'}</span>
              </button>
            </div>

            <div className="absolute top-3.5 left-3.5">
              <div className="px-3 py-1.5 rounded-full bg-black/35 border border-emerald-400/40 text-emerald-300 text-xs font-semibold backdrop-blur-md flex items-center gap-2 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span>Open for AI/ML &amp; SDE Roles</span>
              </div>
            </div>
          </div>

          {/* Profile Details Bar */}
          <div className="px-5 sm:px-8 pb-6 sm:pb-8 pt-0 relative">
            
            {/* Avatar & Action Row */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-16 sm:-mt-18 mb-5">
              
              {/* Avatar Monogram Card */}
              <div className="relative inline-block group">
                <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl bg-gradient-to-br from-primary via-indigo-600 to-cyan-500 p-1 shadow-xl ring-4 ring-background">
                  <div className="h-full w-full rounded-[1.35rem] bg-card flex flex-col items-center justify-center font-headline font-black text-2xl sm:text-3xl text-primary select-none transition-transform group-hover:scale-105">
                    <span>DS</span>
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 p-1.5 bg-primary text-primary-foreground rounded-full shadow-md border-2 border-background" title="Verified AI Engineer">
                  <ShieldCheck className="w-4 h-4" />
                </div>
              </div>

              {/* Top CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2.5">
                <Button 
                  onClick={() => setActiveTab('contact')}
                  className="rounded-full shadow-lg shadow-primary/25 bg-gradient-to-r from-primary to-accent hover:opacity-95 text-white font-semibold text-xs sm:text-sm px-6 h-10 gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  Get In Touch
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => handleCopy('divyanshusingh991991@gmail.com', 'email')}
                  className="rounded-full border-border/80 hover:bg-secondary/70 font-semibold text-xs sm:text-sm px-4 h-10 gap-1.5"
                  title="Copy Email Address"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 text-primary" />}
                  <span>{copiedEmail ? 'Email Copied' : 'Copy Email'}</span>
                </Button>
              </div>

            </div>

            {/* Profile Info */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-2xl sm:text-3xl font-black font-headline tracking-tight text-foreground">
                  Divyanshu Singh
                </h1>
                <Badge variant="secondary" className="rounded-full text-xs font-semibold px-3 py-0.5 border border-primary/20 text-primary bg-primary/10">
                  AI/ML Developer &amp; Software Engineer
                </Badge>
              </div>

              <p className="text-sm sm:text-base font-medium text-foreground/85 flex flex-wrap items-center gap-x-2.5 gap-y-1">
                <span>Dual Degree Scholar:</span>
                <span className="text-primary font-semibold">IIT Madras (BS Data Science)</span>
                <span className="text-muted-foreground/50">•</span>
                <span className="text-primary font-semibold">AITD Kanpur (B.Tech CSE)</span>
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Kanpur, UP, India
                </span>
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-primary" />
                  4 Industry Internships
                </span>
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-primary" />
                  Computer Vision &amp; Flutter
                </span>
              </div>
            </div>

            {/* Metrics Counters Dashboard */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 pt-5 mt-5 border-t border-border/60">
              <div className="p-3.5 rounded-2xl profile-card-subtle text-center hover:border-primary/40 transition-all">
                <span className="text-xl sm:text-2xl font-black font-headline text-primary block">0.87</span>
                <span className="text-[11px] font-medium text-muted-foreground">Dental AI mAP50</span>
              </div>
              <div className="p-3.5 rounded-2xl profile-card-subtle text-center hover:border-primary/40 transition-all">
                <span className="text-xl sm:text-2xl font-black font-headline text-accent block">91%</span>
                <span className="text-[11px] font-medium text-muted-foreground">TFLite Val Acc</span>
              </div>
              <div className="p-3.5 rounded-2xl profile-card-subtle text-center hover:border-primary/40 transition-all">
                <span className="text-xl sm:text-2xl font-black font-headline text-foreground block">4</span>
                <span className="text-[11px] font-medium text-muted-foreground">Internships</span>
              </div>
              <div className="p-3.5 rounded-2xl profile-card-subtle text-center hover:border-primary/40 transition-all">
                <span className="text-xl sm:text-2xl font-black font-headline text-emerald-500 block">IITM</span>
                <span className="text-[11px] font-medium text-muted-foreground">Foundation Cert</span>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. CENTRALIZED SEGMENTED CONTROL (Right below Profile Card) */}
        {/* ========================================================================= */}
        <div className="sticky top-16 z-30 py-1">
          <div className="profile-card p-1.5 shadow-md flex items-center justify-between overflow-x-auto no-scrollbar gap-1 border border-border/80">
            {[
              { id: 'overview', label: 'Overview', icon: User, count: '' },
              { id: 'projects', label: 'Projects', icon: Code2, count: '4' },
              { id: 'experience', label: 'Experience', icon: Briefcase, count: '4' },
              { id: 'skills', label: 'Skills', icon: Cpu, count: '6' },
              { id: 'honors', label: 'Honors & Certs', icon: Trophy, count: '7' },
              { id: 'contact', label: 'Contact', icon: Mail, count: '' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as TabType)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all shrink-0 select-none ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20 scale-[1.02]' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                      isActive ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-secondary text-muted-foreground'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. DYNAMIC TAB CONTENT VIEWS */}
        {/* ========================================================================= */}

        {/* TAB 1: OVERVIEW & ABOUT */}
        {activeTab === 'overview' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            {/* Bio Summary Card */}
            <div className="profile-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-headline">Professional Biography</h3>
                  <p className="text-xs text-muted-foreground">Engineering philosophy &amp; academic background</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Aspiring software and machine learning engineer with hands-on experience in Python development, deep learning model building (YOLOv8/v11, U-Net), and cross-platform mobile apps (Flutter). Actively advancing my foundation through dual academic training at <span className="font-semibold text-foreground">IIT Madras</span> (BS Data Science) and <span className="font-semibold text-foreground">AITD Kanpur</span> (B.Tech CSE), with internships at Rayoscan AI Diagnostics, Shell, Excelerate, and Codveda.
              </p>
            </div>

            {/* Education Timeline */}
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-headline">Education Timeline</h3>
                    <p className="text-xs text-muted-foreground">Degrees, institutions &amp; milestones</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                  2021 – Present
                </Badge>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {educationList.map((edu, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl profile-card-subtle flex flex-col justify-between hover:border-primary/40 transition-all ${edu.highlight ? 'border-primary/40 bg-primary/[0.02]' : ''}`}>
                    <div>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-[11px] font-semibold text-primary">{edu.period}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-foreground font-medium">
                          {edu.status}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-foreground font-headline">{edu.degree}</h4>
                      <p className="text-xs font-semibold text-muted-foreground mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{edu.details}</p>
                    </div>
                    <div className="pt-3 mt-3 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-primary/70" />
                      {edu.location}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Explore Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div 
                onClick={() => setActiveTab('projects')}
                className="p-5 rounded-2xl profile-card hover:border-primary/50 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">Explore 4 Flagship Projects</h4>
                    <p className="text-xs text-muted-foreground">Dental AI, Waste Classifier, Flutter Apps</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>

              <div 
                onClick={() => setActiveTab('experience')}
                className="p-5 rounded-2xl profile-card hover:border-primary/50 transition-all cursor-pointer flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition-transform">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">View 4 Industry Internships</h4>
                    <p className="text-xs text-muted-foreground">Rayoscan, Shell, Excelerate, Codveda</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-4">
                <div>
                  <h3 className="text-xl font-bold font-headline">Featured Projects</h3>
                  <p className="text-xs text-muted-foreground">High-performance AI pipelines &amp; mobile apps</p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-1.5 p-1 rounded-full profile-card-subtle">
                  <button
                    onClick={() => setProjectFilter('all')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      projectFilter === 'all' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    All ({projects.length})
                  </button>
                  <button
                    onClick={() => setProjectFilter('ai')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      projectFilter === 'ai' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    AI &amp; Vision
                  </button>
                  <button
                    onClick={() => setProjectFilter('mobile')}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      projectFilter === 'mobile' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Flutter Mobile
                  </button>
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid gap-5 sm:grid-cols-2">
                {filteredProjects.map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-5 rounded-2xl profile-card-subtle flex flex-col justify-between hover:border-primary/50 transition-all group relative overflow-hidden"
                    >
                      <div>
                        {/* Header Tag */}
                        <div className="flex items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <div className="p-2 rounded-xl bg-primary/10 text-primary">
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-semibold text-primary">{project.category}</span>
                          </div>
                          {project.featured && (
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-white uppercase shadow-sm">
                              Featured
                            </span>
                          )}
                        </div>

                        <h4 className="text-base font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h4>

                        {project.metric && (
                          <div className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-lg">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{project.metric}</span>
                          </div>
                        )}

                        <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-4 border-t border-border/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px] font-normal px-2 py-0.5 rounded-md">
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 shrink-0"
                        >
                          Code <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* GitHub Link Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-transparent border border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <div>
                  <h4 className="text-sm font-bold text-foreground">Want to inspect source repositories?</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Check out all machine learning notebooks, dataset scripts, and Flutter apps on GitHub.
                  </p>
                </div>
                <Button asChild size="sm" className="rounded-full gap-1.5 shrink-0 bg-primary text-primary-foreground shadow-md">
                  <a href="https://github.com/DivyanshuSingh991" target="_blank" rel="noopener noreferrer">
                    <Github className="w-3.5 h-3.5" />
                    GitHub Profile
                  </a>
                </Button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 3: EXPERIENCE */}
        {activeTab === 'experience' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center justify-between border-b border-border/60 pb-4">
                <div>
                  <h3 className="text-xl font-bold font-headline">Work Experience &amp; Internships</h3>
                  <p className="text-xs text-muted-foreground">4 Industry positions in AI, Mobile &amp; Python</p>
                </div>
                <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                  4 Positions
                </Badge>
              </div>

              <div className="space-y-4">
                {internships.map((intern, idx) => {
                  const Icon = intern.icon;
                  return (
                    <div key={idx} className="p-5 rounded-2xl profile-card-subtle hover:border-primary/40 transition-all space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <div>
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center gap-1.5">
                              <Icon className="w-3.5 h-3.5" />
                              {intern.type}
                            </span>
                          </div>
                          <h4 className="text-base font-bold font-headline text-foreground">{intern.role}</h4>
                          <p className="text-xs font-semibold text-primary flex items-center gap-1.5 mt-0.5">
                            <Building2 className="w-3.5 h-3.5" />
                            {intern.company}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-medium shrink-0 pt-1 sm:pt-0">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {intern.period}
                        </span>
                      </div>

                      <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                        {intern.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary font-bold mt-0.5">•</span>
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-3 border-t border-border/40">
                        <div className="flex flex-wrap gap-1.5">
                          {intern.tech.map((t, i) => (
                            <Badge key={i} variant="secondary" className="text-[10px] font-normal px-2 py-0.5 rounded-md">
                              {t}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        )}

        {/* TAB 4: SKILLS */}
        {activeTab === 'skills' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="border-b border-border/60 pb-4">
                <h3 className="text-xl font-bold font-headline">Technical Stack &amp; Skills</h3>
                <p className="text-xs text-muted-foreground">Frameworks, languages, databases, and developer toolkits</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {skillCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div key={idx} className="p-4 rounded-2xl profile-card-subtle flex flex-col justify-between hover:border-primary/40 transition-all">
                      <div>
                        <div className="flex items-center gap-2.5 mb-3">
                          <div className="p-2 rounded-xl bg-primary/10 text-primary">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="text-sm font-bold font-headline text-foreground">{cat.title}</h4>
                            <p className="text-[11px] text-muted-foreground">{cat.subtitle}</p>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {cat.skills.map((skill) => (
                            <span 
                              key={skill} 
                              className="text-xs font-medium px-2 py-0.5 rounded-md bg-secondary/80 text-foreground/90 border border-border/60"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Continuously expanding capabilities in multimodal AI systems, edge TFLite inference, and real-time computer vision algorithms.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* TAB 5: HONORS, CERTS & CAMPUS */}
        {activeTab === 'honors' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            {/* Honors Card */}
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Achievements &amp; Honors</h3>
                  <p className="text-xs text-muted-foreground">Academic milestones and hackathon participation</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {achievements.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl profile-card-subtle">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h4 className="text-sm font-bold text-foreground">{item.title}</h4>
                      <Badge variant="outline" className="text-[10px] border-primary/30 text-primary shrink-0">
                        {item.badge}
                      </Badge>
                    </div>
                    <p className="text-xs font-semibold text-primary mb-1">{item.organization}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Card */}
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Verified Certifications</h3>
                  <p className="text-xs text-muted-foreground">Industry validated credentials</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl profile-card-subtle flex items-center justify-between gap-2">
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-primary uppercase block">{cert.type}</span>
                      <h5 className="text-xs font-semibold text-foreground truncate">{cert.title}</h5>
                      <p className="text-[11px] text-muted-foreground truncate">{cert.issuer}</p>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Leadership Card */}
            <div className="profile-card p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-3 border-b border-border/60 pb-4">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Campus Leadership &amp; Creative Works</h3>
                  <p className="text-xs text-muted-foreground">Cultural anchoring and visual design</p>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {campusActivities.map((act, idx) => (
                  <div key={idx} className="p-4 rounded-xl profile-card-subtle">
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
        )}

        {/* TAB 6: CONTACT */}
        {activeTab === 'contact' && (
          <div className="space-y-5 animate-in fade-in duration-300">
            
            <div className="profile-card p-6 sm:p-8 space-y-6">
              <div className="border-b border-border/60 pb-4 text-center sm:text-left">
                <h3 className="text-xl font-bold font-headline">Get In Touch</h3>
                <p className="text-xs text-muted-foreground">Reach out for internship opportunities, collaborations, or tech discussions</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                
                {/* Email with Copy Action */}
                <div className="p-4 rounded-2xl profile-card-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase block">Email Address</span>
                      <a 
                        href="mailto:divyanshusingh991991@gmail.com" 
                        className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors truncate block"
                      >
                        divyanshusingh991991@gmail.com
                      </a>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleCopy('divyanshusingh991991@gmail.com', 'email')}
                    className="rounded-xl h-8 px-2.5 text-muted-foreground hover:text-foreground shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Phone with Copy Action */}
                <div className="p-4 rounded-2xl profile-card-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase block">Phone / WhatsApp</span>
                      <a 
                        href="tel:+918840857762" 
                        className="text-xs sm:text-sm font-bold text-foreground hover:text-primary transition-colors block"
                      >
                        +91 8840857762
                      </a>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="ghost" 
                    onClick={() => handleCopy('+918840857762', 'phone')}
                    className="rounded-xl h-8 px-2.5 text-muted-foreground hover:text-foreground shrink-0"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                {/* LinkedIn */}
                <div className="p-4 rounded-2xl profile-card-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase block">LinkedIn</span>
                      <p className="text-xs font-bold text-foreground truncate">divyanshu-singh-386940336</p>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs h-8 px-3 shrink-0">
                    <a href="https://www.linkedin.com/in/divyanshu-singh-386940336" target="_blank" rel="noopener noreferrer">
                      Connect <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>

                {/* GitHub */}
                <div className="p-4 rounded-2xl profile-card-subtle flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
                      <Github className="w-5 h-5" />
                    </div>
                    <div className="overflow-hidden">
                      <span className="text-[10px] font-bold text-muted-foreground uppercase block">GitHub</span>
                      <p className="text-xs font-bold text-foreground truncate">DivyanshuSingh991</p>
                    </div>
                  </div>
                  <Button asChild size="sm" variant="outline" className="rounded-full text-xs h-8 px-3 shrink-0">
                    <a href="https://github.com/DivyanshuSingh991" target="_blank" rel="noopener noreferrer">
                      Follow <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </Button>
                </div>

              </div>

              {/* Direct Mail Action Banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="text-base font-bold text-foreground">Want to discuss a role or project?</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Click below to open your email client and send me a message directly.
                  </p>
                </div>
                <Button asChild className="rounded-full bg-gradient-to-r from-primary to-accent text-white font-semibold shrink-0 shadow-md">
                  <a href="mailto:divyanshusingh991991@gmail.com?subject=Portfolio%20Inquiry%20from%20ProFile">
                    <Send className="w-4 h-4 mr-2" />
                    Send Direct Email
                  </a>
                </Button>
              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
