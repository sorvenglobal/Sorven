import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone, Zap, Users, Shield, ArrowLeft, CheckCircle, Monitor, Palette, Code } from 'lucide-react';

const AppDevelopment = () => {
  const features = [
    'Custom mobile app development',
    'UI/UX design for mobile',
    'Android & iOS solutions',
    'API integration & backend support',
    'App testing & maintenance'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Fast, smooth, and responsive apps'
    },
    {
      icon: Users,
      title: 'User-Friendly',
      description: 'Intuitive design that users love'
    },
    {
      icon: Monitor,
      title: 'Cross-Platform',
      description: 'Works on both Android and iOS'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Built with security and growth in mind'
    }
  ];

  const process = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'We create beautiful, intuitive designs that provide an exceptional user experience across all devices.'
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Our expert developers build your app using the latest technologies and best practices for optimal performance.'
    },
    {
      icon: Shield,
      title: 'Testing',
      description: 'Comprehensive testing ensures your app works flawlessly across different devices and operating systems.'
    },
    {
      icon: Smartphone,
      title: 'Launch & Support',
      description: 'We handle the app store submission process and provide ongoing maintenance and updates.'
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
            <span className="text-gray-300">App Development</span>
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
                  <Smartphone className="text-white" size={24} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  App Development
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We build mobile apps that are fast, user-friendly, and built to scale. Whether it's Android, 
                iOS, or cross-platform, we turn your ideas into smooth, reliable apps that your users will love.
              </p>

              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 mb-8">
                <p className="text-cyan-300 italic font-medium">
                  Let's create an app that is smart and reliable—and grows with your business.
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
                <Smartphone className="text-cyan-400" size={120} />
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
              Complete mobile app development services from design to deployment
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our App Development?</h2>
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
              From wireframes to app store, we guide you through every step
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Technologies We Use</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We use cutting-edge technologies to build native and cross-platform mobile apps
          </p>
          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS'].map((tech) => (
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
            Ready to Build Your App?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's turn your app idea into a reality that users will love and your business will benefit from.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Your App Project</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;