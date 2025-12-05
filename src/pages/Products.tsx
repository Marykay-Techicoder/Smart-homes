import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
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

const products = [
  {
    id: 1,
    name: 'Smart Speaker Pro',
    description: 'Voice-controlled assistant with premium audio',
    price: '$149',
    rating: 4.8,
    image: smartSpeaker,
    category: 'Voice Control',
  },
  {
    id: 2,
    name: 'Smart Thermostat',
    description: 'AI-powered climate control with energy savings',
    price: '$199',
    rating: 4.9,
    image: smartThermostat,
    category: 'Climate',
  },
  {
    id: 3,
    name: 'Security Camera HD',
    description: '4K resolution with night vision and AI detection',
    price: '$129',
    rating: 4.7,
    image: smartCamera,
    category: 'Security',
  },
  {
    id: 4,
    name: 'Smart Lock Elite',
    description: 'Keyless entry with fingerprint and app control',
    price: '$249',
    rating: 4.8,
    image: smartLock,
    category: 'Security',
  },
  {
    id: 5,
    name: 'Smart LED Bulb',
    description: 'Color-changing bulb with voice control',
    price: '$29',
    rating: 4.6,
    image: smartLight,
    category: 'Lighting',
  },
  {
    id: 6,
    name: 'Door/Window Sensor',
    description: 'Real-time alerts for home security',
    price: '$39',
    rating: 4.5,
    image: doorSensor,
    category: 'Security',
  },
  {
    id: 7,
    name: 'Control Panel Hub',
    description: 'Central touchscreen for whole-home control',
    price: '$349',
    rating: 4.9,
    image: homePanel,
    category: 'Hub',
  },
  {
    id: 8,
    name: 'Smart Home App',
    description: 'Free app for iOS and Android',
    price: 'Free',
    rating: 4.7,
    image: appUiScreen,
    category: 'Software',
  },
];

const categories = ['All', 'Voice Control', 'Climate', 'Security', 'Lighting', 'Hub', 'Software'];

export default function Products() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-width text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Products
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Premium Smart <span className="gradient-text">Home Devices</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of cutting-edge smart home devices designed for 
            comfort, security, and energy efficiency.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container-width">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="glass-card overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="aspect-square overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-primary font-medium">{product.category}</span>
                  <h3 className="font-semibold mt-1 mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-lg font-bold">{product.price}</span>
                  </div>
                  <Button className="w-full mt-4 rounded-full gap-2" variant="outline">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-width text-center">
          <SectionHeader
            title="Need Help Choosing?"
            description="Our experts can help you find the perfect smart home solution"
          />
          <Link to="/contact">
            <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
              Get Expert Advice
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
