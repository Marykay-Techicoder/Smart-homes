import { Link } from 'react-router-dom';
import { Home, Shield, Thermometer, Lightbulb, Mic, Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';

const services = [
  {
    icon: Home,
    title: 'Home Automation',
    description: 'Complete smart home setup with seamless device integration and centralized control.',
    features: ['Multi-room control', 'Scene automation', 'Scheduling', 'Remote access'],
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Advanced AI-powered security with real-time monitoring and instant alerts.',
    features: ['24/7 monitoring', 'Motion detection', 'Smart locks', 'Video surveillance'],
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Intelligent HVAC management that learns your preferences and optimizes energy.',
    features: ['Auto-scheduling', 'Zone control', 'Energy reports', 'Weather integration'],
  },
  {
    icon: Lightbulb,
    title: 'Lighting Solutions',
    description: 'Smart lighting that adapts to your mood, time of day, and activities.',
    features: ['Color control', 'Dimming', 'Motion sensors', 'Circadian rhythm'],
  },
  {
    icon: Mic,
    title: 'Voice Integration',
    description: 'Hands-free control with support for all major voice assistants.',
    features: ['Alexa support', 'Google Home', 'Siri compatible', 'Custom commands'],
  },
  {
    icon: Zap,
    title: 'Energy Management',
    description: 'Monitor and optimize energy consumption across your entire home.',
    features: ['Real-time tracking', 'Cost analysis', 'Smart plugs', 'Solar integration'],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-width text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Services
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Smart Solutions for <span className="gradient-text">Modern Living</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            From installation to ongoing support, we provide comprehensive smart home services 
            tailored to your needs and lifestyle.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
              Get a Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="glass-card p-8 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
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
