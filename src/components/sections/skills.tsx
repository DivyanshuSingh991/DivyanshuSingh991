import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Cpu, Wrench, GitBranch, PencilRuler } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['Python', 'C', 'Java', 'HTML', 'CSS'],
  },
  {
    title: 'Libraries & Frameworks',
    icon: Cpu,
    skills: ['TensorFlow', 'Keras', 'OpenCV', 'Tkinter', 'BeautifulSoup'],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: ['Wix', 'Wix Studio'],
  },
  {
    title: 'APIs & Tools',
    icon: GitBranch,
    skills: ['Web Services API', 'Git', 'GitHub', 'PyCharm'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQLite'],
  },
  {
    title: 'Other Tools',
    icon: Wrench,
    skills: ['Microsoft Office Suite'],
  },
];

export default function SkillsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Skillset</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A collection of technologies and tools I'm proficient with.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <CardHeader className="flex flex-row items-center gap-4">
                <category.icon className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-sm bg-primary/10 text-primary-foreground hover:bg-primary/20 border border-primary/20 dark:bg-primary/20 dark:text-foreground dark:hover:bg-primary/30 dark:border-primary/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
