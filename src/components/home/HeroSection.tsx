import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Zap, Home, Sparkles, CheckCircle, Smartphone, Lock, Thermometer } from 'lucide-react';
import logo from '@/assets/images/logo.png';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/images/image.png';

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden py-12 md:py-16">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/10" />


        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply dark:mix-blend-overlay filter blur-3xl" />
        </div>

        {/* Background Image with Clean Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern Smart Home"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/80 to-transparent dark:from-gray-900/95 dark:via-gray-900/90 dark:to-transparent" />
        </div>
      </div>

      <div className="container-width relative z-10 px-4 md:px-5 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Premium Badge */}
              <div className="inline-flex items-center gap-23 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-2 animate-fade-in">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Smart Living Redefined
                  </span>
                </div>
              </div>

              {/* Main Heading */}

              <h1 className="text-6xl md:text-6xl lg:text-5xl font-bold mb-6">
                <p>Delivering Excellence </p>
                <p className="relative z-10  bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">in Every Project</p>
              </h1>
              {/* Description */}
              <div className='m'>
                <p className="text-l text-gray-600 dark:text-gray-400 max-w-lx  leading-relaxed">
                  Innovative tech solutions for installation and automation of smart home,products such as CCTV, cameras, smart switch, intercom, networking, fire alarms system and automated gate.
                </p>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              {/* Floating Device Mockup */}
              <div className="relative max-w-md mx-auto">
                <div className="relative max-w-md mx-auto">
                
                  <div className="relative glass-card rounded-2xl border border-white/20 shadow-2xl backdrop-blur-sm overflow-hidden p-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 rounded-2xl"></div>
                    <div className="relative rounded-xl overflow-hidden">
                      <img
                        src={logo}
                        alt="Modern Smart Home"
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none"></div>
                    </div>
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-md -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-lg translate-x-1/3 translate-y-1/3"></div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-md opacity-20"></div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(5px);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}