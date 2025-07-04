import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100dvh-3.5rem)] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]"></div>
      </div>
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                Hi, I’m Divyanshu Singh
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Aspiring Developer | Tech Enthusiast | Python & Web Developer
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start">
              <Button asChild size="lg" className="group">
                <Link href="/experience">
                  Explore My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://placehold.co/300x300.png"
              width="300"
              height="300"
              alt="Divyanshu Singh Profile Picture"
              className="mx-auto aspect-square overflow-hidden rounded-full object-cover"
              data-ai-hint="man portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
