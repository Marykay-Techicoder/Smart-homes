import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import heroImage from '@/assets/images/hero-smart-home.jpg';

const stats = [
  { value: '10K+', label: 'Smart Homes Installed' },
  { value: '50+', label: 'Partner Brands' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'We prioritize your needs and deliver solutions that exceed expectations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in products and service quality.',
  },
  {
    icon: Globe,
    title: 'Innovation',
    description: 'We continuously evolve with cutting-edge technology and trends.',
  },
  {
    icon: Heart,
    title: 'Sustainability',
    description: 'We promote energy-efficient solutions for a greener future.',
  },
];

const team = [
  { name: 'John Mitchell', role: 'CEO & Founder', avatar: 'JM' },
  { name: 'Sarah Chen', role: 'CTO', avatar: 'SC' },
  { name: 'Mike Rodriguez', role: 'Head of Design', avatar: 'MR' },
  { name: 'Emily Watson', role: 'Customer Success', avatar: 'EW' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Pioneering the Future of <span className="gradient-text">Smart Living</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2018, Smart Homes has been at the forefront of home automation technology. 
                We believe every home deserves to be intelligent, secure, and energy-efficient.
              </p>
              <Link to="/contact">
                <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="glass-card overflow-hidden rounded-2xl">
                <img
                  src={heroImage}
                  alt="Smart Home Interior"
                  className="w-full aspect-video object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-border">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeader
              badge="Our Mission"
              title="Making Smart Living Accessible to Everyone"
            />
            <p className="text-lg text-muted-foreground">
              We're on a mission to simplify home automation and make it accessible to everyone. 
              Our products and services are designed to seamlessly integrate into your life, 
              providing comfort, security, and efficiency without complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <SectionHeader
            title="Our Core Values"
            description="The principles that guide everything we do"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            title="Meet Our Team"
            description="The experts behind Smart Homes"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="glass-card p-6 text-center hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-foreground">
                  {member.avatar}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container-width text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who have made their homes smarter with us.
          </p>
          <Link to="/contact">
            <Button size="lg" className="gradient-bg text-primary-foreground rounded-full px-8 gap-2">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
