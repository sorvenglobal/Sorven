import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, TrendingUp, Bot, Video } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { Shield, Zap, Code2, Cloud } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites that are fast, modern, and built to scale with your business.',
      link: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'Mobile apps for Android and iOS that users love and businesses trust.',
      link: '/services/app-development'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Smart strategies that drive traffic, boost engagement, and grow your business.',
      link: '/services/digital-marketing'
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'Intelligent automation and AI tools that streamline your workflows.',
      link: '/services/ai-integration'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video content that tells your story and engages your audience.',
      link: '/services/video-editing'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
    },
    {
      icon: Zap,
      title: 'Process Automation',
    },
    {
      icon: Code2,
      title: 'API Development',
    },
    {
      icon: Cloud,
      title: 'Microservices Architecture',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">

        {/* Animated Background and Floating Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
 
        {/* Floating Circles */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-20 right-40 w-5 h-5 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
      </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-900/50 to-slate-900"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Businesses with{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Innovating at the intersection of technology and intelligence, we craft AI driven solutions that solves real-world challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-200 flex items-center space-x-2"
              >
                <span>Learn More</span>
              </Link>
            </div>
            {/* Subtitle Above Boxes */}
        <div className="mb-5 max-w-3xl mx-auto text-center animate-fade-in animate-delay-500">
          <p className="text-base md:text-lg text-gray-300 font-medium">
            Beyond our core services, we planned to offer specialized solutions to address specific technology challenges.
          </p>
        </div>

            {/* Specialized Solutions Grid */}
            <div className="w-full flex justify-center">
  <div className="w-full max-w-3xl flex flex-wrap justify-center gap-4 py-3">
    {features.map((feature) => {
      const Icon = feature.icon;
      return (
        <div
          key={feature.title}
          className="bg-slate-800/60 rounded-lg px-3 py-2 flex flex-col items-center border border-white/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 max-w-[180px] w-full min-h-[78px]"
        >
          <div className="bg-gradient-to-tr from-blue-400 to-cyan-300 rounded w-8 h-8 flex items-center justify-center mb-1">
            <Icon size={16} className="text-white" />
          </div>
          <span
            className="text-[12px] text-white font-medium text-center mt-1 leading-tight"
            style={{ lineHeight: '1.05' }}
          >
            {feature.title}
          </span>
        </div>
      );
    })}
  </div>
</div>
</div>
</div>
        {/* Scroll Mouse Indicator */}
<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
  <div className="animate-bounce">
    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
</div>

      </section>
      

      {/* About Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Sorven
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We're a fresh, energetic IT startup with a big heart and even bigger ideas. 
              Sorven was born out of a simple belief. Technology should make life easier, not more complicated.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To be the go-to tech partner for startups and enterprises, and to become a trusted name in web and AI development by building solutions that are fast, reliable and future ready.
              </p>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                Whether you're a small business trying to grow or a big company looking to innovate, we're here to help you make tech work for you. We build smart, scalable, and secure solutions—from cloud services and custom software to IT consulting and support.
              </p>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-300 leading-relaxed">
                Innovation First. Client Centric. Excellence Driven. 
                We stay ahead of trends to deliver cutting-edge solutions.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/about"
              className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
            >
              <span>Read More About Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              From web development to AI integration, we offer comprehensive tech solutions 
              that drive growth and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.link}
                  className="bg-slate-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
                >
                  <div className="text-center">
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{service.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Services</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Let's discuss your project and see how we can help your business grow.
            </p>
          </div>

          <ContactForm 
            title="Let's Work Together"
            subtitle="Tell us about your project and we'll get back to you within 24 hours"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;