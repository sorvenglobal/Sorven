import { Link } from 'react-router-dom';
import { ArrowRight, Code, Zap, Smartphone, Search, Shield, ArrowLeft, CheckCircle, Globe, Palette, Settings } from 'lucide-react';

const WebDevelopment = () => {
  const features = [
    'Custom website design & development',
    'E-commerce solutions',
    'Responsive & mobile-first design',
    'Website maintenance & support',
    'SEO-friendly structure'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized for speed and performance'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Perfect on every device and screen size'
    },
    {
      icon: Search,
      title: 'SEO Ready',
      description: 'Built to rank well in search engines'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Industry-standard security practices'
    }
  ];

  const process = [
    {
      icon: Palette,
      title: 'Design & Planning',
      description: 'We start by understanding your brand and goals, then create wireframes and designs that reflect your vision.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our developers bring the designs to life with clean, efficient code and modern web technologies.'
    },
    {
      icon: Settings,
      title: 'Testing & Launch',
      description: 'Rigorous testing across devices and browsers ensures everything works perfectly before we launch.'
    },
    {
      icon: Globe,
      title: 'Ongoing Support',
      description: 'We provide continuous maintenance, updates, and support to keep your website running smoothly.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Breadcrumb */}
      <div className="bg-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/services" className="text-cyan-400 hover:text-cyan-300">Services</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300">Web Development</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                  <Code className="text-white" size={24} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Web Development
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We create websites that are fast, modern, and easy to use. Whether you need a simple 
                landing page or a full-featured business site, we build it with clean design, 
                smooth performance, and mobile-friendly layouts.
              </p>

              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 mb-8">
                <p className="text-cyan-300 italic font-medium">
                  From launch to growth—we build websites that keep up with you.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center space-x-2 border border-gray-600 text-gray-300 px-6 py-3 rounded-full font-semibold hover:bg-slate-800 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-200"
                >
                  <ArrowLeft size={18} />
                  <span>Back to Services</span>
                </Link>
              </div>
            </div>

            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
              <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                <Code className="text-cyan-400" size={120} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What We Offer</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development services tailored to your business needs
            </p>
          </div>

          <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-6">Our services include:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="text-cyan-400 flex-shrink-0" size={20} />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Web Development?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const IconComponent = benefit.icon;
              return (
                <div key={benefit.title} className="bg-slate-800 p-6 rounded-xl shadow-xl text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to launch, we follow a proven process to deliver exceptional websites
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="relative mb-6">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-cyan-400 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Modern Technologies We Use</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We stay current with the latest web technologies to build fast, secure, and scalable websites
          </p>
          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'WordPress', 'Shopify'].map((tech) => (
                <div key={tech} className="bg-slate-700 px-4 py-3 rounded-lg">
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's create a website that perfectly represents your business and drives results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Your Project</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;