import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { HiPaperAirplane } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    

    try {
      // EmailJS Configuration
      // REPLACE THESE WITH YOUR ACTUAL IDs FROM EMAILJS DASHBOARD:
     const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
     const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
     const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;      // e.g., 'user_mnop789'

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'vrudra671@gmail.com'
        },
        PUBLIC_KEY
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'vrudra671@gmail.com',
      link: 'mailto:vrudra671@gmail.com'
    },
    {
      icon: <FaPhone />,
      label: 'Phone',
      value: '+91 6291985921',
      link: 'tel:+916291985921'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Kolkata, India',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={24} />,
      label: 'GitHub',
      link: 'https://github.com/outgoingrudra',
      color: 'hover:bg-gray-700'
    },
    {
      icon: <FaLinkedin size={24} />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/rudra-verma-33258a2a3',
      color: 'hover:bg-blue-600'
    },
    {
      icon: <FaEnvelope size={24} />,
      label: 'Email',
      link: 'mailto:vrudra671@gmail.com',
      color: 'hover:bg-red-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question or want to work together? Drop me a message!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 space-y-6"
          >
            
            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all duration-300"
                >
                  {info.link ? (
                    <a href={info.link} className="flex items-start gap-4 group">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-gray-200 font-medium group-hover:text-blue-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm">{info.label}</p>
                        <p className="text-gray-200 font-medium">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-200 mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-slate-800 text-gray-400 rounded-lg hover:text-white hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-3"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 rounded-xl p-8 shadow-2xl shadow-blue-500/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-gray-300 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane />
                      Send Message
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-center"
                  >
                    ✗ Failed to send message. Please try again or email directly.
                  </motion.div>
                )}

              </form>

           

            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;