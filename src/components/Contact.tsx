import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Message sent successfully!');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-section" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Get in{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl"></div>
              <form
                action="https://formspree.io/f/movwoaar"
                method="POST"
                className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-green-500/30"
              >
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-green-500/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-lime-500 to-green-600 text-white font-medium hover:from-lime-400 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </span>
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                <div className="relative z-10 p-8 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-green-500/30">
                  <h3 className="text-2xl font-bold text-white mb-8">Contact Details</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-lime-500 to-green-600 text-white group-hover:scale-110 transition-transform duration-200">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Email</p>
                        <p className="text-white font-medium">gmharshitha123@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 text-white group-hover:scale-110 transition-transform duration-200">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Phone</p>
                        <p className="text-white font-medium">9xxxxxxxx</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white group-hover:scale-110 transition-transform duration-200">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">Location</p>
                        <p className="text-white font-medium">Karnataka, India</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open to Work Badge */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-green-500/20 rounded-2xl blur-xl"></div>
                <div className="relative z-10 p-6 rounded-2xl bg-gradient-to-br from-gray-900/90 to-black/90 border border-lime-500/30 text-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-500 to-green-500 text-white font-medium">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Open to Work
                  </div>
                  <p className="text-gray-300 mt-4 text-sm">
                    Available for DevOps and Cloud Engineering opportunities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;