import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Zap, Brain, Settings, ArrowLeft, CheckCircle, MessageCircle, BarChart3, Cog, Lightbulb } from 'lucide-react';

const AIIntegration = () => {
  const features = [
    'AI-powered chatbots & virtual assistants',
    'Workflow automation',
    'Predictive analytics & insights',
    'Custom AI model integration',
    'AI for customer support & engagement'
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and processes'
    },
    {
      icon: Brain,
      title: 'Smart Insights',
      description: 'Make data-driven decisions with AI analytics'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with existing systems'
    },
    {
      icon: BarChart3,
      title: 'Better ROI',
      description: 'Reduce costs while improving outcomes'
    }
  ];

  const process = [
    {
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'We analyze your business processes to identify where AI can make the biggest impact and create a tailored implementation plan.'
    },
    {
      icon: Cog,
      title: 'Custom Development',
      description: 'We develop and integrate AI solutions that fit your specific needs, whether its chatbots, automation, or analytics.'
    },
    {
      icon: Settings,
      title: 'Testing & Training',
      description: 'We thoroughly test the AI systems and train your team to use them effectively for maximum benefit.'
    },
    {
      icon: BarChart3,
      title: 'Optimization & Support',
      description: 'We continuously monitor and optimize the AI performance while providing ongoing support and updates.'
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
            <span className="text-gray-300">AI Integration</span>
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
                  <Bot className="text-white" size={24} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  AI Integration
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We help businesses unlock the power of artificial intelligence by integrating smart, efficient AI tools 
                into their workflows. From chatbots to automation, we make AI simple, useful, and tailored to your needs.
              </p>

              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 mb-8">
                <p className="text-cyan-300 italic font-medium">
                  Let's make AI work for you—without the tech headaches.
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
                <Bot className="text-cyan-400" size={120} />
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
              Comprehensive AI integration services to transform your business operations
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our AI Integration?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our AI Integration Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From analysis to implementation, we make AI integration smooth and effective
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

      {/* Use Cases */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">AI Use Cases</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how AI can transform different aspects of your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: MessageCircle,
                title: 'Customer Support',
                description: '24/7 AI chatbots that handle common queries and escalate complex issues to human agents.'
              },
              {
                icon: BarChart3,
                title: 'Sales Analytics',
                description: 'Predictive analytics to identify high-value prospects and optimize your sales process.'
              },
              {
                icon: Cog,
                title: 'Process Automation',
                description: 'Automate repetitive tasks like data entry, scheduling, and email responses.'
              }
            ].map((useCase) => {
              const IconComponent = useCase.icon;
              return (
                <div key={useCase.title} className="bg-slate-800 p-6 rounded-xl shadow-xl">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{useCase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{useCase.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Embrace AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's explore how AI can streamline your operations and drive growth for your business.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start AI Integration</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AIIntegration;