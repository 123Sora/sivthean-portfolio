'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { SiThreads } from 'react-icons/si';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sivtheanv@gmail.com',
      href: 'mailto:sivtheanv@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+855 17 266 864',
      href: 'tel:+85517266864',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/123Sora',
      color: 'hover:text-gray-800',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/siv-thean-b8b96a31a/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://x.com/iam_sivthean',
      color: 'hover:text-blue-400',
    },
    {
      icon: Facebook,
      name: 'Facebook(1)',
      href: 'https://www.facebook.com/SivtheanV',
      color: 'hover:text-blue-400',
    },
    {
      icon: Facebook,
      name: 'Facebook(2)',
      href: 'https://www.facebook.com/xiu.tian.tang',
      color: 'hover:text-blue-400',
    },
    {
      icon: Instagram,
      name: 'Instagram',
      href: 'https://www.instagram.com/_justiam_sora/',
      color: 'hover:text-pink-500',
    },
    {
      icon: SiThreads,
      name: 'Threads',
      href: 'https://www.threads.com/@_justiam_sora',
      color: 'hover:text-black',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your next project? Let&apos;s work together to create something amazing!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Feel free to reach out through any of these channels. I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 h-full">
                      <div className="flex items-center space-x-4 h-full">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{info.title}</h4>
                          <a
                            href={info.href}
                            className="text-gray-600 hover:text-blue-600 transition-colors break-words"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Connect With Me
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Follow me on social media to stay updated with my latest projects and insights. Let&apos;s connect and build something great together!
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={social.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-0 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                    <CardContent className="p-6 h-full">
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center h-full"
                      >
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 ${social.color.replace('hover:', '')}`}>
                          <social.icon className="w-6 h-6" />
                        </div>
                        <span className="font-semibold text-gray-900 text-center">{social.name}</span>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;