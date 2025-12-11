import { Mic, Shield, Zap, Smartphone, Thermometer, Lock } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';
import smartSpeaker from '@/assets/images/smart-speaker.jpg';
import smartThermostat from '@/assets/images/smart-thermostat.jpg';
import homePanel from '@/assets/images/home-panel.jpg';

const features = [
  {
    icon: Mic,
    title: 'Voice Control',
    description: 'Smarter voice control that listens to you and responds instantly to your commands.',
    image: smartSpeaker,
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Intelligent temperature management that learns your preferences and saves energy.',
    image: smartThermostat,
  },
  {
    icon: Smartphone,
    title: 'Remote Access',
    description: 'Control your entire home from anywhere using our intuitive mobile application.',
    image: homePanel,
  },
];


export function FeaturesSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeader
          title="Reimagine Everyday with These Smart Features"
          description="Experience the future of living with our innovative smart home solutions"
        />

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group glass-card overflow-hidden hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  );
}
