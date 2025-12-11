import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import hero1 from '@/assets/images/hero-smart-home.jpg';
import hero2 from '@/assets/images/home-panel.jpg';
import hero3 from '@/assets/images/app-ui-screen.jpg';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import smartSpeaker from '@/assets/images/smart-speaker.jpg';
import smartThermostat from '@/assets/images/smart-thermostat.jpg';
import smartCamera from '@/assets/images/smart-camera.jpg';
import smartLock from '@/assets/images/smart-lock.jpg';
import smartLight from '@/assets/images/smart-light.jpg';
import doorSensor from '@/assets/images/door-sensor.jpg';
import homePanel from '@/assets/images/home-panel.jpg';
import appUiScreen from '@/assets/images/app-ui-screen.jpg';

const services = [
  {
    title: 'Home Automation',
    description: 'Complete smart home setup with seamless device integration and centralized control.',
    features: ['Multi-room control', 'Scene automation', 'Scheduling', 'Remote access'],
    image: homePanel,
  },
  {
    title: 'Security Systems',
    description: 'Advanced security with real-time monitoring and instant alerts.',
    features: ['24/7 monitoring', 'Motion detection', 'Smart locks', 'Video surveillance'],
    image: smartCamera,
  },
  {
    title: 'Climate Control',
    description: 'Intelligent HVAC management that learns your preferences and optimizes energy.',
    features: ['Auto-scheduling', 'Zone control', 'Energy reports', 'Weather integration'],
    image: smartThermostat,
  },
  {
    title: 'Lighting Solutions',
    description: 'Smart lighting that adapts to your mood, time of day, and activities.',
    features: ['Color control', 'Dimming', 'Motion sensors', 'Circadian rhythm'],
    image: smartLight,
  },
  {
    title: 'Voice Integration',
    description: 'Hands-free control with support for all major voice assistants.',
    features: ['Alexa support', 'Google Home', 'Siri compatible', 'Custom commands'],
    image: smartSpeaker,
  },
  {
    title: 'Energy Management',
    description: 'Monitor and optimize energy consumption across your entire home.',
    features: ['Real-time tracking', 'Cost analysis', 'Smart plugs', 'Solar integration'],
    image: appUiScreen,
  },
];

const categories = ['All', 'Voice Control', 'Climate', 'Security', 'Lighting', 'Hub', 'Software'];

export default function Services() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-left">
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                <p>Smart Solutions for </p>
                <p className="gradient-text">Modern Living</p>
              </h1>
              <p className="text-l text-muted-foreground max-w-xl mb-6">
                From installation to ongoing support, we provide comprehensive
                smart home services tailored to your needs and lifestyle.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/contact">
                  <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Or contact our team →
                </Link>
              </div>
            </div>

            <div>
              <div className="relative">
                <Carousel className="rounded-lg shadow-lg">
                  <CarouselContent className="flex">
                    <CarouselItem>
                      <div className="aspect-[16/10] rounded-lg overflow-hidden">
                        <img src={hero1} alt="Smart Home" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[16/10] rounded-lg overflow-hidden">
                        <img src={hero2} alt="Control Panel" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-[16/10] rounded-lg overflow-hidden">
                        <img src={hero3} alt="Mobile App" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>

                  <CarouselPrevious className="hidden md:block" />
                  <CarouselNext className="hidden md:block" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            title="Our Expertise"
            description="Professional installation and setup of premium smart home technologies"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Service Image */}
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Service Content */}
                <div className="p-8">
                 
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <SectionHeader
            title="How It Works"
            description="Our simple process to transform your home"
          />
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'We assess your needs and design a custom solution' },
              { step: '02', title: 'Design', desc: 'Our experts create a tailored smart home plan' },
              { step: '03', title: 'Installation', desc: 'Professional setup of all devices and systems' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 customer support' },
            ].map((item, index) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                </div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us today for a free consultation and discover how we can transform your home.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
                Contact Us Now
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}