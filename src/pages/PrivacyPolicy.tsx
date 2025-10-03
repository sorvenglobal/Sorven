import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 2024";

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 mb-6"
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                At Sorven Global ("we," "our," or "us"), we are committed to protecting your privacy and personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website sorvenglobal.com or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us, including:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
                    <li>Name and contact information (email, phone number)</li>
                    <li>Company or business name</li>
                    <li>Project details and requirements</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-300 leading-relaxed">
                    When you visit our website, we may automatically collect:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-300 space-y-1">
                    <li>IP address and location data</li>
                    <li>Browser type and device information</li>
                    <li>Pages visited and time spent on our website</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Providing and maintaining our services</li>
                <li>Responding to your inquiries and project requests</li>
                <li>Sending you updates about our services and relevant industry information</li>
                <li>Improving our website and service offerings</li>
                <li>Complying with legal obligations</li>
                <li>Protecting against fraud and unauthorized access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations or court orders</li>
                <li>To protect our rights, property, or safety</li>
                <li>With trusted service providers who assist in our operations</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Cookies and Analytics</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. This includes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand website usage (Google Analytics)</li>
                <li>Performance cookies to optimize loading times</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-4">
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
              <p className="text-gray-300 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate information</li>
                <li>Right to delete your personal data</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information 
                from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and maintained on servers located outside of your state, province, country, 
                or other governmental jurisdiction where data protection laws may differ. We ensure appropriate safeguards are in place 
                for such transfers.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy 
                on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-slate-700 p-4 rounded-lg">
                <p className="text-gray-300"><strong className="text-white">Email:</strong> business@sorvenglobal.com</p>
                <p className="text-gray-300"><strong className="text-white">Phone:</strong> +91-8438300993</p>
                <p className="text-gray-300"><strong className="text-white">Website:</strong> sorvenglobal.com</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;