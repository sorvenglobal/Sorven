import { Link } from 'react-router-dom';
import { ArrowRight, Video, Play, Film, Scissors, ArrowLeft, CheckCircle, Monitor, Volume2, Palette, Sparkles } from 'lucide-react';

const VideoEditing = () => {
  const features = [
    'Trimming, transitions & effects',
    'Motion graphics & titles',
    'Audio cleanup & background music',
    'Social media & promo video edits',
    'Format optimization for all platforms'
  ];

  const benefits = [
    {
      icon: Sparkles,
      title: 'Professional Quality',
      description: 'Polished, broadcast-quality results'
    },
    {
      icon: Monitor,
      title: 'Multi-Platform',
      description: 'Optimized for all social media platforms'
    },
    {
      icon: Volume2,
      title: 'Audio Excellence',
      description: 'Crystal clear audio and sound design'
    },
    {
      icon: Film,
      title: 'Creative Storytelling',
      description: 'Engaging narratives that connect with viewers'
    }
  ];

  const process = [
    {
      icon: Film,
      title: 'Content Review',
      description: 'We review your raw footage and understand your vision, goals, and target audience for the final video.'
    },
    {
      icon: Scissors,
      title: 'Editing & Effects',
      description: 'We cut, trim, and arrange your content, adding transitions, effects, and motion graphics to enhance the story.'
    },
    {
      icon: Volume2,
      title: 'Audio & Music',
      description: 'We clean up audio, add background music, sound effects, and ensure perfect synchronization with visuals.'
    },
    {
      icon: Play,
      title: 'Final Delivery',
      description: 'We deliver your finished video in the optimal format and resolution for your intended platform and use case.'
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
            <span className="text-gray-300">Video Editing</span>
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
                  <Video className="text-white" size={24} />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">
                  Video Editing
                </h1>
              </div>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We turn raw footage into polished, engaging videos that tell your story. Whether it's for social media, 
                marketing, or presentations, we make your content look sharp, professional, and ready to impress.
              </p>

              <div className="bg-slate-800 p-6 rounded-xl border-l-4 border-cyan-400 mb-8">
                <p className="text-cyan-300 italic font-medium">
                  Let's bring your vision to life—frame by frame.
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
                <Video className="text-cyan-400" size={120} />
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
              Professional video editing services for all your content needs
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose Our Video Editing?</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Editing Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From raw footage to final cut, we transform your content into compelling videos
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

      {/* Video Types */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Types of Videos We Edit</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From social media content to corporate videos, we handle all types of video projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Play,
                title: 'Social Media Videos',
                description: 'Short-form content optimized for Instagram, TikTok, YouTube, and other platforms.'
              },
              {
                icon: Palette,
                title: 'Marketing Videos',
                description: 'Promotional videos, product demos, and brand storytelling content.'
              },
              {
                icon: Monitor,
                title: 'Corporate Videos',
                description: 'Training videos, presentations, webinars, and internal communications.'
              }
            ].map((videoType) => {
              const IconComponent = videoType.icon;
              return (
                <div key={videoType.title} className="bg-slate-800 p-6 rounded-xl shadow-xl">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{videoType.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{videoType.description}</p>
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
            Ready to Create Amazing Videos?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Let's transform your footage into compelling videos that captivate your audience and tell your story.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Start Your Video Project</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;