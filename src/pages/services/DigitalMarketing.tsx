import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Target, Users, BarChart, ArrowLeft, CheckCircle, Search, Share2, Mail, Megaphone } from 'lucide-react';

const DigitalMarketing = () => {
  const features = [
    'Social media marketing',
    'SEO (Search Engine Optimization)',
    'Google Ads & PPC campaigns',
    'Content creation & branding',
    'Email marketing & automation'
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Targeted Reach',
      description: 'Connect with your ideal customers precisely'
    },
    {
      icon: BarChart,
      title: 'Measurable Results',
      description: 'Track ROI and optimize performance'
    },
    {
      icon: Users,
      title: 'Audience Growth',
      description: 'Build a loyal community around your brand'
    },
    {
      icon: TrendingUp,
      title: 'Increased Sales',
      description: 'Convert more visitors into customers'
    }
  ];

  const process = [
    {
      icon: Search,
      title: 'Strategy & Research',
      description: 'We analyze your market, competitors, and audience to create a data-driven marketing strategy.'
    },
    {
      icon: Megaphone,
      title: 'Campaign Creation',
      description: 'We develop engaging content and campaigns across multiple channels to reach your target audience.'
    },
    {
      icon: Share2,
      title: 'Execution & Optimization',
      description: 'We launch campaigns and continuously optimize them based on performance data and insights.'
    },
    {
      icon: BarChart,
      title: 'Analytics & Reporting',
      description: 'We provide detailed reports and insights to show the impact of our marketing efforts on your business.'
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
            <span className="text-gray-300">Digital Marketing</span>
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
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Digital Marketing
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We help your brand get noticed online. From social media to search engines, we create 
                smart strategies that drive traffic, boost engagement, and grow your business.
              </p>

              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 mb-8">
                <p className="text-cyan-300 italic font-medium">
                  Clicks become customers. Ideas become action. That's our way.
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
                <TrendingUp className="text-cyan-400" size={120} />
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
              Comprehensive digital marketing services to boost your online presence
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Digital Marketing?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Marketing Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategy to execution, we create marketing campaigns that deliver results
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

      {/* Platforms */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Platforms We Work With</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            We leverage the best digital marketing platforms to maximize your reach and ROI
          </p>
          
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Google Ads', 'Facebook', 'Instagram', 'LinkedIn', 'YouTube', 'TikTok'].map((platform) => (
                <div key={platform} className="bg-slate-700 px-4 py-3 rounded-lg">
                  <span className="text-gray-300 font-medium">{platform}</span>
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's create a digital marketing strategy that drives real results for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Marketing</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;