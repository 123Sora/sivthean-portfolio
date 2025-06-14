'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Calendar, MapPin, ChevronRight } from 'lucide-react';

const EducationSection = () => {
  const educationItems = [
    {
      title: 'Samsung Innovation Campus',
      subtitle: 'Scholarship and Certificate',
      description: 'Advanced training Python and Big Data',
      year: '2024',
      type: 'Scholarship',
      location: 'RUPP Campus',
      achievements: ['python programming', 'Innovation Training', 'Big Data'],
    },
    {
      title: 'Sookmyung UNESCO UNITWIN',
      subtitle: 'Digital and Leadership Training',
      description: '2024 Digital transformation development program',
      year: '2024',
      type: 'Training',
      location: 'RUPP Campus',
      achievements: ['React.Js', 'Technology Innovation', 'networking opportunities'],
    },
    {
      title: 'ISTAD - Institute of Science and Technology Advanced Development',
      subtitle: 'Web Development Fundamentals',
      description: 'Comprehensive program covering web development technologies',
      year: '2023',
      type: 'Scholarship',
      location: 'No. 24, Street 562,Sangkat BoeungKak I,Khan Toul Kork,Phnom Penh',
      achievements: ['Java Fundametals', 'Wed Design', 'Git & GitHub', 'HTML, CSS, JavaScript, JQuery, Ajax', 'Bootstrap, Tailwind CSS', 'PostgreSQL'],
    },
    {
      title: 'Cloud4Cambodia USAID',
      subtitle: 'AWS Cloud Practitioner Fast-Track',
      description: 'Intensive training program for Amazon Web Services Cloud Practitioners',
      year: '2023',
      type: 'Training',
      location: 'RUPP Campus',
      achievements: ['AWS Cloud Services', 'Cloud Architecture'],
    },
    {
      title: 'Udemy Professional Certifications',
      subtitle: 'Multiple Technology Certifications',
      description: 'Various professional certifications in web development and cloud technologies',
      year: '2023-2025',
      type: 'Certification',
      location: 'Online',
      achievements: ['React Development', 'Node.js', 'PHP & MySQL', 'TypeScript', 'Docker'],
    },
    {
      title: 'Simplilearn',
      subtitle: 'Online Courses & Bootcamp Certification',
      description: 'Advanced bootcamp programs and professional certifications',
      year: '2023-2025',
      type: 'Certification',
      location: 'Online',
      achievements: ['ReactJs & VueJS', 'Introduction to SQL', 'CI/CD Pipeline'],
    },  
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Scholarship': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Education': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Training': return 'bg-green-100 text-green-800 border-green-200';
      case 'Certification': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Bootcamp': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My continuous learning journey through prestigious institutions and professional development programs
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-blue-600"></div>

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-full h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`border ${getTypeColor(item.type)}`}>
                              {item.type}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="w-4 h-4 mr-1" />
                              {item.year}
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {item.title}
                          </h3>
                          <h4 className="text-lg font-semibold text-blue-600 mb-2">
                            {item.subtitle}
                          </h4>
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <MapPin className="w-4 h-4 mr-1" />
                            {item.location}
                          </div>
                        </div>
                        <Award className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-800 flex items-center">
                          <ChevronRight className="w-4 h-4 mr-1" />
                          Key Achievements:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {item.achievements.map((achievement, achievementIndex) => (
                            <Badge
                              key={achievementIndex}
                              variant="outline"
                              className="text-xs bg-gradient-to-r from-gray-50 to-blue-50 text-gray-700 border-gray-200 hover:border-blue-300 transition-colors"
                            >
                              {achievement}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          {[
            { number: '6+', label: 'Educational Programs' },
            { number: '2', label: 'International Scholarships' },
            { number: '15+', label: 'Professional Certifications' },
            { number: '3', label: 'Countries' },
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-0">
                <motion.div
                  className="text-3xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div> */}
      </div>
    </section>
  );
};

export default EducationSection;