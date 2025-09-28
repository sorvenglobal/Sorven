import { Link } from 'react-router-dom';
import { ArrowRight, Code, Smartphone, TrendingUp, Bot, Video, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'We create websites that are fast, modern, and easy to use. Whether you need a simple landing page or a full-featured business site, we build it with clean design, smooth performance, and mobile-friendly layouts.',
      features: [
        'Custom website design & development',
        'E-commerce solutions',
        'Responsive & mobile-first design',
        'Website maintenance & support',
        'SEO-friendly structure'
      ],
      tagline: 'From launch to growth—we build websites that keep up with you.',
      link: '/services/web-development'
    },
    {
      icon: Smartphone,
      title: 'App Development',
      description: 'We build mobile apps that are fast, user-friendly, and built to scale. Whether it\'s Android, iOS, or cross-platform, we turn your ideas into smooth, reliable apps that your users will love.',
      features: [
        'Custom mobile app development',
        'UI/UX design for mobile',
        'Android & iOS solutions',
        'API integration & backend support',
        'App testing & maintenance'
      ],
      tagline: 'Let\'s create an app that is smart and reliable—and grows with your business.',
      link: '/services/app-development'
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'We help your brand get noticed online. From social media to search engines, we create smart strategies that drive traffic, boost engagement, and grow your business.',
      features: [
        'Social media marketing',
        'SEO (Search Engine Optimization)',
        'Google Ads & PPC campaigns',
        'Content creation & branding',
        'Email marketing & automation'
      ],
      tagline: 'Clicks become customers. Ideas become action. That\'s our way.',
      link: '/services/digital-marketing'
    },
    {
      icon: Bot,
      title: 'AI Integration',
      description: 'We help businesses unlock the power of artificial intelligence by integrating smart, efficient AI tools into their workflows. From chatbots to automation, we make AI simple, useful, and tailored to your needs.',
      features: [
        'AI-powered chatbots & virtual assistants',
        'Workflow automation',
        'Predictive analytics & insights',
        'Custom AI model integration',
        'AI for customer support & engagement'
      ],
      tagline: 'Let\'s make AI work for you—without the tech headaches.',
      link: '/services/ai-integration'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'We turn raw footage into polished, engaging videos that tell your story. Whether it\'s for social media, marketing, or presentations, we make your content look sharp, professional, and ready to impress.',
      features: [
        'Trimming, transitions & effects',
        'Motion graphics & titles',
        'Audio cleanup & background music',
        'Social media & promo video edits',
        'Format optimization for all platforms'
      ],
      tagline: 'Let\'s bring your vision to life—frame by frame.',
      link: '/services/video-editing'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            From web development to AI integration, we offer comprehensive tech solutions 
            that drive growth and innovation for your business.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  <div className={`space-y-8 ${isEven ? '' : 'lg:col-start-2'}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-white mb-4">Our services include:</h3>
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-start space-x-3">
                          <CheckCircle className="text-cyan-400 flex-shrink-0 mt-1" size={16} />
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="bg-slate-900 p-6 rounded-xl border-l-4 border-cyan-400">
                      <p className="text-cyan-300 italic font-medium">{service.tagline}</p>
                    </div>
                    
                    <Link
                      to={service.link}
                      className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                      <span>Learn More</span>
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                  
                  <div className={`${isEven ? '' : 'lg:col-start-1'}`}>
                    <div className="bg-slate-900 p-8 rounded-2xl shadow-xl">
                      <div className="aspect-square bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl flex items-center justify-center">
                        <IconComponent className="text-cyan-400" size={120} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Get In Touch</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;