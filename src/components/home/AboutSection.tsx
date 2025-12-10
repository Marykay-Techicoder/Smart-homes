import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export function AboutSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width px-16">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border text-sm font-medium">
            <span className="w-6 h-6 rounded-full gradient-bg flex items-center justify-center text-primary-foreground text-xs">✦</span>
            About Us
          </span>
        </div>
        
        <div className="mt-4 max-w-4xl">
          <p className="text-l md:text-l lg:text-xl text-foreground leading-relaxed">
            We create intelligent devices that gives you total control from anywhere in the world. With cutting-edge smart technology at it core, our technology brings <span className="gradient-text font-semibold">comfort, safety, and energy savings</span> to your fingertips.
          </p>
          
          <Link to="/about" className="inline-block mt-8">
            <Button variant="outline" className="rounded-full gap-2 hover-lift">
              Discover Our Story
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
