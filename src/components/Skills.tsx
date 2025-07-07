import React from 'react';
import { Code, Cloud, Settings, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Programming & Development',
      skills: ['Python', 'JavaScript', 'YAML', 'Bash'],
      gradient: 'from-lime-500 to-green-600'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'Ansible', 'AWS'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Tools & Technologies',
      skills: ['Git', 'GitHub', 'Linux'],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Technologies i master ',
      skills: ['Docker', 'Kubernetes', 'Python',],
      gradient: 'from-teal-500 to-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Skills &{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.gradient} text-white mb-6`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${category.gradient} text-white hover:scale-110 transition-transform duration-200 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;