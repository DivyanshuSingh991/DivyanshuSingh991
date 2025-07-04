import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'AITD Kanpur',
    period: '2024 – Present',
  },
  {
    degree: '12th Grade',
    institution: 'Sigma School of Excellence, Jhalawar',
    period: '2023',
  },
  {
    degree: '10th Grade',
    institution: 'St. Anthony Public School, Lucknow',
    period: '2021',
  },
];

export default function AboutSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I am a B.Tech (Computer Science and Engineering) first-year student at AITD Kanpur. I am passionate about coding and love working on real-world tech projects that solve practical problems.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tighter sm:text-3xl font-headline">Educational Background</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index}>
                  <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-lg font-medium">{edu.degree}</CardTitle>
                    <GraduationCap className="w-6 h-6 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
