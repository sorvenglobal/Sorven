<<<<<<< HEAD
import { Phone, Mail, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
=======
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook, Twitter } from 'lucide-react';
>>>>>>> ec67f1d3edec18ceff062256b6e57cbd9fb32cce
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp',
      info: '+91-8438300993',
      link: 'https://wa.me/918438300993'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'business@sorvenglobal.com',
      link: 'mailto:business@sorvenglobal.com'
    }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/company/sorven-global/?viewAsMember=true',
      handle: 'Sorven Global'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/sorvenglobal/',
      handle: '@sorvenglobal'
    },
    {
      name: 'Threads',
      icon: Instagram,
      href: 'https://www.threads.com/@sorvenglobal?xmt=AQF0p5BWLoXtywgNJYZOmaBTSiiYOBHxiV5GABMQ4ixWV10',
      handle: 'Sorven Global'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://www.facebook.com/profile.php?id=61581476070865',
      handle: 'Profile'
    },
    {
      name: 'Twitter/X',
      icon: Twitter,
      href: 'https://x.com/SorvenGlobal',
      handle: '@SorvenGlobal'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your project? We'd love to hear from you. 
            Let's discuss how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <ContactForm 
                title="Let's Start a Conversation"
                subtitle="Fill out the form below and we'll get back to you within 24 hours"
              />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Other Ways to Reach Us</h2>
                
                {/* Contact Methods */}
                <div className="space-y-6 mb-12">
                  {contactMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <a
                        key={method.title}
                        href={method.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-colors duration-200"
                      >
                        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center">
                          <IconComponent className="text-white" size={20} />
                        </div>
                        <div>
                          <h3 className="text-white font-semibold">{method.title}</h3>
                          <p className="text-gray-300">{method.info}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
<<<<<<< HEAD
=======

                {/* Business Hours */}
                <div className="bg-slate-700 p-6 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="text-cyan-400" size={20} />
                    <h3 className="text-white font-semibold">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                    <p className="text-sm text-gray-400 mt-3">
                      * Response times may vary during weekends and holidays
                    </p>
                  </div>
                </div>
>>>>>>> ec67f1d3edec18ceff062256b6e57cbd9fb32cce
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 bg-slate-700 p-4 rounded-lg hover:bg-slate-600 transition-colors duration-200"
                      >
                        <IconComponent className="text-cyan-400" size={20} />
                        <div>
                          <span className="text-white font-medium">{social.name}</span>
                          <span className="text-gray-400 text-sm ml-2">{social.handle}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-6 rounded-xl border border-blue-500/30">
                <h3 className="text-white font-semibold mb-2">Quick Response Guarantee</h3>
                <p className="text-gray-300 text-sm">
                  We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call or WhatsApp us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ or Additional Info */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            What Happens Next?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-white font-semibold mb-2">We Review</h3>
              <p className="text-gray-300 text-sm">We'll review your message and understand your project requirements</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-white font-semibold mb-2">We Connect</h3>
              <p className="text-gray-300 text-sm">We'll reach out within 24 hours to schedule a consultation</p>
            </div>
            
            <div className="bg-slate-800 p-6 rounded-xl">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-white font-semibold mb-2">We Deliver</h3>
              <p className="text-gray-300 text-sm">We'll create a custom proposal tailored to your needs</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;