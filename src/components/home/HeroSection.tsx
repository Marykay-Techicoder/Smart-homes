import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/images/hero-smart-home.jpg';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Smart Home Living Room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30 dark:from-background/98 dark:via-background/80 dark:to-background/50" />
      </div>

      <div className="container-width relative z-10 px-4">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Smart Living Solutions
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-6 animate-fade-up animation-delay-100">
            Control Everything.{' '}
            <span className="gradient-text">Live Smarter, Safer</span>, and Simpler
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-up animation-delay-200">
            Effortlessly control comfort, security, and energy from one smart AI platform 
            designed for your lifestyle. Transform your home into an intelligent living space.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-300">
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 h-14 text-lg gap-2 hover-lift">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg gap-2 hover-lift">
                <Play className="w-5 h-5" />
                Learn More
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/50 animate-fade-up animation-delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">10K+</div>
              <div className="text-sm text-muted-foreground">Smart Homes</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
