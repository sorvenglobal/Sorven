import { ArrowRight, Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client Centric',
      description: 'Your success is our priority. We build lasting partnerships, not just projects.'
    },
    {
      icon: Award,
      title: 'Excellence Driven',
      description: 'We maintain the highest standards in everything we deliver.'
    }
  ];

  const journey = [
    {
      phase: 'Founded',
      title: 'The Beginning',
      description: 'Started with a mission to revolutionize how businesses leverage technology for growth'
    },
    {
      phase: 'Growth',
      title: 'Expanding Horizons',
      description: 'Expanding our team and expertise across multiple technology domains and industries'
    },
    {
      phase: 'Impact',
      title: 'Global Reach',
      description: 'Looking to serve clients globally with innovative solutions that drive measurable business results'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Hey there! 👋 We're{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Sorven
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We're a fresh, energetic IT startup with a big heart and even bigger ideas. 
              Sorven was born out of a simple belief: Technology should make life easier, not more complicated.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Story</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-900 p-8 md:p-12 rounded-2xl shadow-xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Whether you're a small business trying to grow or a big company looking to innovate, 
                we're here to help you make tech work for you. We build smart, scalable, and secure 
                solutions—from cloud services and custom software to IT consulting and support.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                But more than that, we're your tech partners, your problem-solvers, and your biggest cheerleaders.
                We make tech easy, useful, and accessible—so our clients can focus on what they do best.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Target className="text-blue-400 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-white">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We're here to help businesses grow online with smart websites and intelligent AI tools 
                that solve real problems and create meaningful digital experiences. We make tech easy, 
                useful, and accessible—so our clients can focus on what they do best.
              </p>
            </div>

            <div className="bg-slate-800 p-8 md:p-12 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <Eye className="text-cyan-400 mr-4" size={32} />
                <h3 className="text-3xl font-bold text-white">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                To be the go-to tech partner for startups and enterprises, and to become a trusted name 
                in web and AI development by building solutions that are fast, reliable and future ready.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Journey</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From startup to growth, we're building something meaningful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {journey.map((phase, index) => (
              <div key={phase.phase} className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <div className="bg-slate-900 p-6 rounded-xl shadow-xl">
                  <h4 className="text-cyan-400 font-semibold mb-2">{phase.phase}</h4>
                  <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Values</h2>
            <div className="bg-slate-800 p-8 rounded-2xl shadow-xl max-w-4xl mx-auto mb-12">
              <div className="flex items-center justify-center mb-6">
                <Heart className="text-red-400 mr-4" size={32} />
                <h3 className="text-2xl font-bold text-white">SORVEN = Strength in Ventures</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">Strength + Opportunity + Resilience + VENture = Sorven Global</span>
                <br />
                Inspired by "Soar + Invent," we're here to help businesses soar with invention and innovation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <div key={value.title} className="bg-slate-800 p-8 rounded-2xl shadow-xl text-center">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
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
            Ready to Work Together?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's discuss how we can help your business soar with our innovative solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Contact Us</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;