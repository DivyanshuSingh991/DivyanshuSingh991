import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Globe, 
  Cpu, 
  GitBranch, 
  BarChart3, 
  Layers, 
  Smartphone,
  Sparkles,
  Terminal
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
    title: 'AI, Machine Learning & Vision',
    subtitle: 'Deep learning architectures & CV workflows',
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
    title: 'Data Science & Scientific Computing',
    subtitle: 'Data processing, manipulation & visualization',
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
    subtitle: 'Core programming & scripting languages',
    icon: Code,
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
    title: 'Frameworks & App Development',
    subtitle: 'Cross-platform mobile, backend & desktop GUIs',
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
    subtitle: 'Relational & persistent data engines',
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
    title: 'Tools, Platforms & Version Control',
    subtitle: 'Developer environments & productivity tools',
    icon: GitBranch,
    skills: [
      'Git',
      'GitHub',
      'PyCharm',
      'VS Code',
      'Microsoft Office Suite',
      'Jupyter Notebook',
      'Linux / Bash'
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="px-3.5 py-1 text-xs uppercase tracking-wider font-semibold border-primary/40 bg-primary/10 text-primary">
            Technical Proficiency
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl font-headline text-foreground">
            Skills &amp; Technologies
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            A comprehensive overview of my technical stack spanning artificial intelligence, computer vision, data analytics, mobile engineering, and backend development.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title} className="flex flex-col justify-between border-border/80 hover:border-primary/40 transition-all hover:shadow-lg bg-card">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-bold font-headline">{category.title}</CardTitle>
                    <CardDescription className="text-xs text-muted-foreground mt-0.5">
                      {category.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 pt-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs font-medium px-2.5 py-1 bg-secondary/80 hover:bg-primary/20 hover:text-foreground border border-border/60 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Banner */}
        <div className="mt-12 p-6 rounded-2xl border border-primary/30 bg-primary/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="p-2 rounded-lg bg-primary/20 text-primary shrink-0 hidden sm:block">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground">Continuous Learning &amp; Adaptation</h4>
              <p className="text-xs text-muted-foreground mt-0.5">
                Always exploring modern architectures, multimodal AI models, edge computing, and real-time computer vision applications.
              </p>
            </div>
          </div>
          <Badge variant="outline" className="text-xs border-primary/40 text-primary font-semibold shrink-0">
            IIT Madras &amp; AITD Kanpur
          </Badge>
        </div>

      </div>
    </section>
  );
}
