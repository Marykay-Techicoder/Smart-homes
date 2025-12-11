import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import smartCamera from '@/assets/images/smart-camera.jpg';
import smartLock from '@/assets/images/smart-lock.jpg';
import smartLight from '@/assets/images/smart-light.jpg';
import doorSensor from '@/assets/images/door-sensor.jpg';

const devices = [
  { name: 'Smart Camera', image: smartCamera, description: 'HD security with Smart detection' },
  { name: 'Smart Lock', image: smartLock, description: 'Keyless entry & remote access' },
  { name: 'Smart Light', image: smartLight, description: 'Ambient lighting control' },
  { name: 'Door Sensor', image: doorSensor, description: 'Real-time monitoring' },
];

export function DevicesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % devices.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + devices.length) % devices.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-width">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 ">
            <SectionHeader
              title="Explore Our Innovative Smart Devices"
              description="Enhance everyday living with intelligent features that deliver comfort, control, and convenience throughout your entire home."
              centered={false}
            />
            <Link to="/products">
              <Button className="gradient-bg text-primary-foreground rounded-full gap-2 hover-lift">
                Explore Devices
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="flex-1 w-full">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {devices.map((device) => (
                    <div key={device.name} className="min-w-full">
                      <div className="glass-card overflow-hidden">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={device.image}
                            alt={device.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold">{device.name}</h3>
                          <p className="text-muted-foreground">{device.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 mt-6 justify-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevSlide}
                  className="rounded-full"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextSlide}
                  className="rounded-full"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
