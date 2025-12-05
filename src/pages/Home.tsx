import { HeroSection } from '@/components/home/HeroSection';
import { AboutSection } from '@/components/home/AboutSection';
import { FeaturesSection } from '@/components/home/FeaturesSection';
import { DevicesSection } from '@/components/home/DevicesSection';
import { IntegrationsSection } from '@/components/home/IntegrationsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <DevicesSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
