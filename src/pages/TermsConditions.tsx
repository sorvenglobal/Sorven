import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsConditions = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-gray-400">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">
          <div className="prose prose-lg prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                By accessing and using the Sorven Global website (sorvenglobal.com) and our services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Definitions</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li><strong className="text-white">"Company"</strong> (referred to as "we," "us," or "our") refers to Sorven Global.</li>
                <li><strong className="text-white">"Services"</strong> refers to all services provided by Sorven Global, including web development, app development, digital marketing, AI integration, and video editing.</li>
                <li><strong className="text-white">"Client"</strong> or "you" refers to the individual or entity using our services.</li>
                <li><strong className="text-white">"Agreement"</strong> refers to these Terms and Conditions.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Services Description</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Sorven Global provides technology solutions including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Custom web development and design</li>
                <li>Mobile application development (Android and iOS)</li>
                <li>Digital marketing services and campaigns</li>
                <li>Artificial intelligence integration and automation</li>
                <li>Video editing and multimedia services</li>
                <li>IT consulting and technical support</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities</h2>
              <p className="text-gray-300 leading-relaxed mb-4">As a client, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Provide accurate and complete information required for project completion</li>
                <li>Respond to communications and requests for feedback in a timely manner</li>
                <li>Provide necessary access to systems, accounts, and resources as required</li>
                <li>Review and approve deliverables within specified timeframes</li>
                <li>Make payments according to agreed terms and schedules</li>
                <li>Respect intellectual property rights and licensing agreements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Client Content</h3>
                  <p className="text-gray-300 leading-relaxed">
                    You retain ownership of all content, data, and materials you provide to us. You grant us a non-exclusive license to use this content solely for the purpose of providing our services.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Work Product</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Upon full payment, you will own the custom work we create specifically for you, excluding our proprietary tools, frameworks, and methodologies. We reserve the right to showcase completed projects in our portfolio unless otherwise agreed.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Third-Party Components</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Some projects may include third-party components, plugins, or services subject to their respective licenses. You are responsible for compliance with these third-party terms.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Payment terms will be specified in individual project agreements</li>
                <li>Invoices are typically due within 30 days of issue date</li>
                <li>Late payments may incur additional charges as specified in project agreements</li>
                <li>Work may be suspended for overdue accounts until payment is received</li>
                <li>Refunds are handled on a case-by-case basis according to our refund policy</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Project Timelines and Deliverables</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Project timelines are estimates based on the scope of work and client responsiveness. We strive to meet all agreed-upon deadlines, but timelines may be affected by:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>Changes to project scope or requirements</li>
                <li>Delays in client feedback or approvals</li>
                <li>Technical complications or third-party dependencies</li>
                <li>Force majeure events beyond our reasonable control</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p className="text-gray-300 leading-relaxed">
                To the fullest extent permitted by law, Sorven Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, or other economic advantages. Our total liability for any claims shall not exceed the amount paid by you for the specific services giving rise to the claim.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Warranties and Disclaimers</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Our Warranties</h3>
                  <p className="text-gray-300 leading-relaxed">
                    We warrant that our services will be performed in a professional manner consistent with industry standards. We will correct any defects in our work at no additional cost for a specified warranty period.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Disclaimers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Except as expressly stated, all services are provided "as is" without warranty of any kind. We do not warrant that our services will be uninterrupted, error-free, or meet your specific requirements.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Confidentiality</h2>
              <p className="text-gray-300 leading-relaxed">
                We respect the confidentiality of your business information and will not disclose any confidential information to third parties without your consent, except as required by law or as necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate services with written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-300 space-y-2">
                <li>You remain responsible for payment of all work completed</li>
                <li>We will deliver all completed work and materials upon full payment</li>
                <li>Both parties will return or destroy confidential information as applicable</li>
                <li>Ongoing hosting or maintenance services may be discontinued</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p className="text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms or our services shall be subject to the jurisdiction of the courts in India.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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

export default TermsConditions;