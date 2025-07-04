import { Mail, Linkedin, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Get In Touch</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </div>
        <div className="mx-auto max-w-lg">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Email</h3>
                <a href="mailto:divyanshusingh991991@gmail.com" className="text-muted-foreground hover:text-primary">
                  divyanshusingh991991@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
               <div className="bg-primary/10 p-3 rounded-full">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/divyanshu-singh-386940336" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  linkedin.com/in/divyanshu-singh-386940336
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">GitHub</h3>
                <a href="https://github.com/DivyanshuSingh991" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                  github.com/DivyanshuSingh991
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
