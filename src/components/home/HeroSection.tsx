import { Link } from 'react-router-dom';
import { ArrowRight, Play, Shield, Zap, Home, Sparkles, CheckCircle, Smartphone, Lock, Thermometer } from 'lucide-react';
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
              {/* <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                Delivering Excellence in
                <p className="relative z-10  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Every Project
                </p>
              </h1> */}
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
                <p>Delivering Excellence </p>
                <p className="relative z-10  bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent">in Every Project</p>
              </h1>
              {/* Description */}
              <p className="text-l text-gray-600 dark:text-gray-400 max-w-l  leading-relaxed">
                Innovative tech solutions for installation and automation of smart home,products such as CCTV, cameras, smart switch, intercom, networking, fire alarms system and automated gate.
              </p>




              {/* Trust Indicators */}

              {/* <div className="flex items-center gap-4">
                <p  className="text-xl font-bold text-gray-900 dark:text-white">
                 Trusted by leading brands
                 </p >
                
                
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-lg text-white dark:text-white">Goggle</div>
                </div>
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-lg text-white dark:text-white">Amazon</div>
                </div>
                <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                <div className="text-center">
                  <div className="text-lg text-white dark:text-white">Apple</div>
                </div>
              </div> */}
              <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 ">
                <div className=" mb-9">
                  <div className="text-xl text-white dark:text-white font-medium mb-4">
                    Trusted by leading brands
                  </div>
                  <div className="flex flex-wrap items-center gap-8 md:gap-6 opacity-70">
                    <div>
                      <div className="text-lg text-white dark:text-white"> Goggle</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <div>
                      <div className="text-lg text-white dark:text-white">Amazon</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <div>
                      <div className="text-lg text-white dark:text-white">Apple</div>
                    </div>
                    <div className="h-8 w-px bg-gray-300 dark:bg-gray-700"></div>
                    <div>
                      <div className="text-lg text-white dark:text-white">Samsung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Feature Cards */}
            <div className="relative">
              {/* Floating Device Mockup */}
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                <div className="relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-8">
                  <div className="space-y-6">
                    {/* App Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                          <Home className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">Tech Nyla AI</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Connected & Secure</div>
                        </div>
                      </div>
                      <div className="text-xs px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 rounded-full font-medium">
                        Online
                      </div>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/10 rounded-xl p-4 border border-blue-200 dark:border-blue-800/30">
                        <div className="flex items-center justify-between mb-2">
                          <Thermometer className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          <div className="text-xs font-medium text-blue-700 dark:text-blue-300">72°F</div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Climate</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Optimal</div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/10 rounded-xl p-4 border border-green-200 dark:border-green-800/30">
                        <div className="flex items-center justify-between mb-2">
                          <Lock className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <div className="text-xs font-medium text-green-700 dark:text-green-300">Armed</div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Security</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">All Secure</div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/10 rounded-xl p-4 border border-purple-200 dark:border-purple-800/30">
                        <div className="flex items-center justify-between mb-2">
                          <Zap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          <div className="text-xs font-medium text-purple-700 dark:text-purple-300">85%</div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Energy</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Efficient</div>
                      </div>

                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/10 rounded-xl p-4 border border-orange-200 dark:border-orange-800/30">
                        <div className="flex items-center justify-between mb-2">
                          <Smartphone className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                          <div className="text-xs font-medium text-orange-700 dark:text-orange-300">4</div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Devices</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Connected</div>
                      </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Quick Actions</div>
                      <div className="flex gap-3">
                        <button className="flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium py-2.5 rounded-lg transition-colors duration-200">
                          Lights Off
                        </button>
                        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg transition-colors duration-200">
                          Good Night
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl blur-md opacity-20"></div>
            </div>
          </div>

          {/* Integration Logos */}
          {/* <div className="mt-16 pt-12 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              <div className="text-lg text-white dark:text-white font-medium mb-4">
                Trusted by leading brands
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
                <div className="text-xl font-bold text-gray-800 dark:text-gray-300">Google</div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-300">Amazon</div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-300">Apple</div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-300">Philips</div>
                <div className="text-xl font-bold text-gray-800 dark:text-gray-300">Samsung</div>
              </div>
            </div>
          </div> */}
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