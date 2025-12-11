import { Tv, Camera, Gamepad2, Droplets, Lightbulb, Wind, Wifi, DoorOpen } from 'lucide-react';
import { SectionHeader } from '@/components/common/SectionHeader';

const integrations = [
  { icon: Tv, name: 'Television' },
  { icon: Camera, name: 'Camera' },
  { icon: Gamepad2, name: 'Console' },
  { icon: Droplets, name: 'Humidifier' },
  { icon: Lightbulb, name: 'Lamp' },
  { icon: Wind, name: 'Air Conditioner' },
  { icon: Wifi, name: 'Internet' },
  { icon: DoorOpen, name: 'Smart Door' },
];



export function IntegrationsSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        <SectionHeader
          title="Control Everywhere And Anywhere"
          description="Our gateway to seamless and remote control of your smart home devices. Experience convenience at your fingertips, wherever you are."
        />

        {/* Device Icons Grid */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mb-16">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="glass-card p-4 flex flex-col items-center justify-center gap-2 hover-lift cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                <item.icon className="w-5 h-5 text-foreground" />
              </div>
              <span className="text-xs text-muted-foreground text-center">{item.name}</span>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}
