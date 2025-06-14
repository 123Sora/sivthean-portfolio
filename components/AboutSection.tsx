'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Palette, Database, Heart } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces with modern frameworks',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Designing beautiful and user-friendly interfaces',
    },
    {
      icon: Heart,
      title: 'Problem Solving',
      description: 'Passionate about solving complex problems with elegant solutions',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64  rounded-full sm:w-80 sm:h-80 overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="/sivthean.png" 
                alt="Sivthean's Image"
                fill
                className="object-cover "
                quality={50}
                
                
              />
            </div>
          </motion.div>

          {/* About Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              I'm a passionate full-stack developer and a third-year Computer Science and Engineering student at the Royal University of Phnom Penh, expected to graduate in 2026. As the eldest sister in a family of seven members, I’ve worked hard to overcome the challenges of growing up in the countryside to pursue higher education in Phnom Penh.
              I currently live at the Phnom Penh New Life Student Center and am honored to be a scholarship recipient of the AEON 1% Club Foundation.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                JavaScript
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                React
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Node.js
              </span>
              <span className="px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium">
                UI/UX
              </span>
            </div> */}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              My Journey
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              I fell in love with technology. Every day, I keep learning new things about web development. At university and through my own projects, I'm gaining hands-on experience with modern technologies. I enjoy solving problems and building useful applications.
              My background taught me to work hard and never give up. I want to use my skills to create technology that helps people and useful. Right now, I'm focused on finishing my degree while improving my coding abilities. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;