import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code } from 'lucide-react';

const internship = {
  role: 'Python Development Intern',
  company: 'Codveda',
  period: 'April 2025 – May 2025',
  description: 'Gained hands-on experience in Python development, working on various tools and applications.'
};

const projects = [
  {
    title: 'To-Do List Application',
    description: 'A desktop application to manage daily tasks. Features include adding, viewing, deleting, and marking tasks as complete. Data is stored locally using JSON.',
    tech: ['Tkinter', 'Python', 'JSON'],
  },
  {
    title: 'Weather API App',
    description: 'An application that fetches and displays real-time weather data for any city using the OpenWeatherMap API.',
    tech: ['Python', 'API'],
  },
  {
    title: 'Flipkart Product Scraper GUI',
    description: 'A graphical user interface tool to scrape product information from Flipkart. Built with BeautifulSoup for web scraping and Tkinter for the GUI.',
    tech: ['BeautifulSoup', 'Tkinter', 'Python'],
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
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 font-headline"><Briefcase /> Internship</h3>
            <Card>
              <CardHeader>
                <CardTitle>{internship.role}</CardTitle>
                <CardDescription>{internship.company} | {internship.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{internship.description}</p>
              </CardContent>
            </Card>
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
