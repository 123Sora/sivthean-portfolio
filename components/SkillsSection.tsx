'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      subtitle: 'Technologies and tools I use to bring ideas to life',
      skills: [
        { name: 'HTML', level: 95, color: 'bg-orange-500' },
        { name: 'CSS', level: 90, color: 'bg-blue-500' },
         { name: 'Bootstrap', level: 95, color: 'bg-purple-600' }, 
         { name: 'Tailwind CSS', level: 90, color: 'bg-teal-400' },
        { name: 'JavaScript', level: 85, color: 'bg-yellow-500' },
        { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
        { name: 'React', level: 90, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 85, color: 'bg-gray-800' },
        { name: 'Vue.js', level: 80, color: 'bg-green-500' },
        { name: 'Svelte', level: 75, color: 'bg-red-500' },
      ],
    },
    {
      title: 'Design & Animation',
      subtitle: 'Creating beautiful and engaging user experiences',
      skills: [
        { name: 'Tailwind CSS', level: 92, color: 'bg-teal-500' },
        { name: 'Framer Motion', level: 85, color: 'bg-purple-500' },
        { name: 'GSAP', level: 80, color: 'bg-green-600' },
        { name: 'Figma', level: 88, color: 'bg-pink-500' },
        { name: 'Adobe Photoshop', level: 62, color: 'bg-purple-600' },
        { name: 'CSS Animations', level: 87, color: 'bg-indigo-500' },
      ],
    },
    {
      title: 'Technologies I Love Working With',
      subtitle: 'Backend and tools that power modern applications',
      skills: [
        { name: 'Node.js', level: 88, color: 'bg-green-500' },
        { name: 'Express.js', level: 84, color: 'bg-yellow-600' }, 
        { name: 'PHP', level: 87, color: 'bg-indigo-600' },  
        { name: 'Laravel', level: 83, color: 'bg-red-600' },
        { name: 'MySQL', level: 85, color: 'bg-blue-600' },
         { name: 'PostgreSQL', level: 81, color: 'bg-blue-800' },
        { name: 'MongoDB', level: 82, color: 'bg-green-700' },
        { name: 'Git', level: 90, color: 'bg-orange-600' },
        { name: 'GitHub', level: 92, color: 'bg-gray-800' },
        { name: 'CI/CD', level: 80, color: 'bg-blue-500' },
        { name: 'GraphQL', level: 78, color: 'bg-pink-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of the technologies and tools I use to create amazing digital experiences
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                    {category.title}
                  </CardTitle>
                  <p className="text-gray-600 mt-2">{category.subtitle}</p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {skill.name}
                            </h3>
                            <Badge variant="secondary" className="text-xs">
                              {skill.level}%
                            </Badge>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 rounded-full ${skill.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;