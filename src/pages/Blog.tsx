import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/common/SectionHeader';
import blogPosts from '@/data/blogPosts.json';
import testimonials from '@/data/testimonials.json';
import smartSpeaker from '@/assets/images/smart-speaker.jpg';
import smartThermostat from '@/assets/images/smart-thermostat.jpg';
import smartCamera from '@/assets/images/smart-camera.jpg';
import smartLock from '@/assets/images/smart-lock.jpg';
import smartLight from '@/assets/images/smart-light.jpg';
import homePanel from '@/assets/images/home-panel.jpg';

const imageMap: { [key: string]: string } = {
  'blog-automation': homePanel,
  'blog-thermostat': smartThermostat,
  'blog-security': smartCamera,
  'blog-voice': smartSpeaker,
  'blog-lighting': smartLight,
  'blog-integration': smartLock,
};

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-muted/30">
        <div className="container-width text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Smart Home <span className="gradient-text">Insights & Tips</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and innovations in smart home technology.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="section-padding">
        <div className="container-width">
          <div className="glass-card overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto overflow-hidden">
                <img
                  src={imageMap[blogPosts[0].image]}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-4 w-fit">
                  Featured
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{blogPosts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {new Date(blogPosts[0].date).toLocaleDateString()}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <Button className="gradient-bg text-primary-foreground rounded-full w-fit gap-2">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <SectionHeader
            title="Latest Articles"
            description="Explore our collection of smart home guides and insights"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="glass-card overflow-hidden hover-lift group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={imageMap[post.image]}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-width">
          <SectionHeader
            title="What Our Readers Say"
            description="Join our community of smart home enthusiasts"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="glass-card p-6 hover-lift"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the Loop</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest smart home tips, product updates, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="gradient-bg text-primary-foreground rounded-full px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
