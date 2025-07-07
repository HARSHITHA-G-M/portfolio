import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'GitOps-based Deployment Pipeline using Argo CD',
      description: 'Built a stock prediction web app using FastAPI, containerized with Docker, and deployed on Kubernetes. Implemented ArgoCD for GitOps-based continuous deployment with version-controlled manifests on GitHub. Configured Kubernetes services, managed sync issues, and ensured automated CI/CD for reliable app delivery.',
      technologies: ['FastAPI', 'Docker', 'Kubernetes', 'ArgoCD', 'Git', 'GitHub', 'yfinance'],
      gradient: 'from-lime-500 to-green-600',
      link: 'https://github.com'
    },
    {
      title: 'Flask App Deployment with Jenkins CI/CD & Docker',
      description: 'Complete CI/CD pipeline with Jenkins, Docker, and Flask featuring real-time debugging and container health checks.',
      technologies: ['Jenkins', 'Docker', 'Flask', 'Python', 'CI/CD'],
      gradient: 'from-emerald-500 to-teal-600',
      link: 'https://github.com'
    },
    {
      title: 'Docker Projects Collection',
      description: 'Multiple beginner-level containerized apps including Python, Node.js, PHP, Java, and Nginx implementations.',
      technologies: ['Docker', 'Python', 'Node.js', 'PHP', 'Java', 'Nginx'],
      gradient: 'from-green-500 to-emerald-600',
      link: 'https://github.com'
    },
    {
      title: 'Data Science & Machine Learning Projects',
      description: 'Beginner to intermediate ML projects with Jupyter notebooks covering Data Analysis, Model Building, and Evaluation Metrics.',
      technologies: ['Python', 'Jupyter', 'Pandas', 'Scikit-learn', 'ML'],
      gradient: 'from-teal-500 to-green-600',
      link: 'https://github.com'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Featured{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-gray-800/50 text-gray-300 border border-green-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r ${project.gradient} text-white font-medium hover:scale-105 transition-transform duration-200`}
                    >
                      <Github className="w-4 h-4" />
                      View Project
                    </a>
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500/40 text-gray-300 hover:border-green-400/60 hover:text-white transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
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

export default Projects;