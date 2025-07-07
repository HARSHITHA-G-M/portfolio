import React, { useState } from 'react';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';

const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
  {
    title: 'DevOps Intern',
    company: 'Linux World',
    period: 'Jan 2025 – Present',
    description: `Working on DevOps practices and cloud infrastructure management.
- Implemented CI/CD pipelines using Jenkins and GitHub Actions.
- Managed containerized applications with Docker and Kubernetes.
- Automated infrastructure provisioning using Terraform and Ansible.
- Monitored system performance using Prometheus and Grafana.`,
  },
  {
    title: 'Data Analytics Intern',
    company: 'PrepInsta Technologies',
    period: 'Nov 2023 – Feb 2024',
    description: `Focused on data analysis and machine learning projects.
- Conducted exploratory data analysis (EDA) to derive insights from datasets.
- Built predictive models using Python (scikit-learn, pandas).
- Created interactive dashboards with Power BI and Tableau.
- Collaborated with the team to optimize data pipelines and improve accuracy.`,
  },
  {
    title: 'Web Developer Intern',
    company: 'Colt Assist',
    period: 'Oct 2023 – Dec 2023',
    description: `Developed web applications and improved user interfaces.
- Built responsive front-end components using React.js.
- Integrated RESTful APIs to enhance application functionality.
- Improved UI/UX based on user feedback and usability testing.
- Assisted in debugging and optimizing code for better performance.`,
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering',
    institution: 'VTU (Visvesvaraya Technological University)',
    grade: 'CGPA: 9.45',
    description:
      'Specialized in Computer Science with a focus on software engineering and system design.',
  },
  {
    degree: 'Pre-University',
    institution: 'RNS Pre-University College',
    grade: 'Percentage: 90.44%',
    keySubjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology'],
    description: [
      'Developed teamwork and collaboration skills through group projects and assignments.',
      'Built strong communication skills by participating in seminars and presentations.',
    ],
  },
];

const certifications = [
  {
    title: 'Google Data Analytics Certificate',
    issuer: 'Google',
    date: '2024',
    description:
      'Comprehensive program covering data analysis, visualization, and statistical analysis using tools like R, SQL, and Tableau.',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Statistical Analysis'],
  },
  {
    title: 'Git & GitHub Certificate',
    issuer: 'Udemy',
    date: '2025',
    description:
      'Advanced version control and collaboration using Git and GitHub for software development projects.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'Branching'],
  },
];

  const projects = [
    'Credit Card Fraud Detection',
    'Python basic projects',
    'Bmi calculator using html,css,js',
    'To-Do List Django Project'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Experience, Education &{' '}
            <span className="bg-gradient-to-r from-lime-400 to-emerald-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-900/50 rounded-full p-1 border border-green-500/20">
              <button
                onClick={() => setActiveTab('experience')}
                className={`px-4 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'experience'
                    ? 'bg-gradient-to-r from-lime-500 to-green-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab('education')}
                className={`px-4 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'education'
                    ? 'bg-gradient-to-r from-lime-500 to-green-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab('certifications')}
                className={`px-4 py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeTab === 'certifications'
                    ? 'bg-gradient-to-r from-lime-500 to-green-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Certifications
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                          <p className="text-green-400 font-medium">{exp.company}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                          <p className="text-green-400 font-medium">{edu.institution}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <GraduationCap className="w-4 h-4" />
                          <span className="text-sm font-medium text-lime-400">{edu.grade}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{edu.description}</p>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Academic Projects</h4>
                        <ul className="space-y-1">
                          {projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="text-gray-300 text-sm">
                              • {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'certifications' && (
              <div className="space-y-8">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/50 to-black/50 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-emerald-500/0 group-hover:from-green-500/10 group-hover:to-emerald-500/10 rounded-2xl transition-all duration-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                          <p className="text-green-400 font-medium">{cert.issuer}</p>
                        </div>
                        <div className="flex items-center gap-2 text-gray-400">
                          <Award className="w-4 h-4" />
                          <span className="text-sm">{cert.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{cert.description}</p>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Skills Acquired</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-lime-500 to-green-600 text-white"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;