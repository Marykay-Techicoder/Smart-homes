import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import appUiScreen from '@/assets/images/app-ui-screen.jpg';

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="relative overflow-hidden rounded-3xl gradient-bg p-8 md:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                Seize Control Of Your Smart Home
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                Download Smart Homes App Now & Take Control Of Your Smart Home With Ease! 
                Experience seamless automation at your fingertips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-lg gap-2 hover-lift">
                    <Download className="w-5 h-5" />
                    Download Now
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg gap-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-lift">
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-2xl" />
                <img
                  src={appUiScreen}
                  alt="Smart Home App Interface"
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
