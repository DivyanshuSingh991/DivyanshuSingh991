import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Database, 
  Cpu, 
  GitBranch, 
  BarChart3, 
  Smartphone,
  Sparkles,
  Terminal,
  Server,
  Layers
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SkillCategory = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'AI, Deep Learning & Vision',
    subtitle: 'Neural architectures & CV detection',
    icon: Cpu,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Computer Vision',
      'CNNs',
      'NLP',
      'YOLOv8',
      'YOLOv11',
      'U-Net Segmentation',
      'EfficientNetB0',
      'TensorFlow',
      'Keras',
      'TensorFlow Lite (TFLite)',
      'Scikit-learn'
    ],
  },
  {
    title: 'Data Science & Analytics',
    subtitle: 'Data manipulation & visualization',
    icon: BarChart3,
    skills: [
      'OpenCV',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Librosa',
      'BeautifulSoup4',
      'Requests',
      'Data Scraping',
      'Data Preprocessing'
    ],
  },
  {
    title: 'Programming Languages',
    subtitle: 'Core systems & scripting languages',
    icon: Code2,
    skills: [
      'Python',
      'Dart',
      'C',
      'C++',
      'Java',
      'SQL',
      'HTML',
      'CSS'
    ],
  },
  {
    title: 'Frameworks & App Engineering',
    subtitle: 'Cross-platform mobile & backend APIs',
    icon: Smartphone,
    skills: [
      'Flutter',
      'FastAPI',
      'Flask',
      'Tkinter',
      'CustomTkinter',
      'REST APIs',
      'Wix',
      'Wix Studio'
    ],
  },
  {
    title: 'Databases & Storage',
    subtitle: 'Persistent storage & relational DBMS',
    icon: Database,
    skills: [
      'SQLite',
      'SQL',
      'JSON Storage',
      'PostgreSQL',
      'MongoDB'
    ],
  },
  {
    title: 'Tools & Environments',
    subtitle: 'DevOps, IDEs & version control',
    icon: GitBranch,
    skills: [
      'Git',
      'GitHub',
      'PyCharm',
      'VS Code',
      'Jupyter Notebook',
      'Linux / Bash',
      'Microsoft Office Suite'
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-28 relative">
      <div className="container max-w-6xl px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline text-foreground">
            Technical Stack &amp; Skills
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
            A comprehensive overview of programming languages, machine learning frameworks, data science libraries, and developer tools in my workflow.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title} 
                className="p-6 rounded-2xl glass-card flex flex-col justify-between hover:border-primary/50 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold font-headline text-foreground">{category.title}</h4>
                      <p className="text-xs text-muted-foreground">{category.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-secondary/80 text-foreground/90 border border-border/60 hover:border-primary/40 hover:bg-primary/10 transition-colors"
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

        {/* Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/5 dark:bg-primary/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-primary/20 text-primary shrink-0 hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Continuous Research &amp; Applied Innovation</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Constantly expanding expertise in multimodal AI, neural object detection (YOLO), edge ML inference, and high-performance apps.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs border-primary/40 text-primary font-bold px-3 py-1 shrink-0 rounded-full">
            IIT Madras &amp; AITD Kanpur
          </Badge>
        </div>

      </div>
    </section>
  );
}
