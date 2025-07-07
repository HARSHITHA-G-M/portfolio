import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies = [
    'Python', 'Docker', 'Kubernetes', 'Ansible', 'CI/CD', 'Git & GitHub',
    'Jenkins', 'AWS', 'Terraform','Linux' , 'shell scripting' , 'argocd'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-white">
            About{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <p className="text-lg sm:text-xl text-gray-300 mb-16 leading-relaxed">
            I’m passionate about automation and solving real-world challenges through DevOps. I like working on collaborative projects and am always eager to learn, adapt, and grow with technology. I'm on a mission to build smarter systems and contribute to high-performing engineering teams.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className={`group relative p-4 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 hover:border-green-400/60 transition-all duration-300 hover:scale-105 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-emerald-500/0 group-hover:from-green-500/20 group-hover:to-emerald-500/20 rounded-xl transition-all duration-300"></div>
                <span className="relative z-10 text-white font-semibold text-sm sm:text-base">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;