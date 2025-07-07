import React from 'react';
import { Github, Linkedin, Download, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Clean Minimal Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-950"></div>
      </div>

      {/* Main Content Container - Much More Spacious */}
      <div className="relative z-10 max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center space-y-24">
          
          {/* Executive Header with Generous Spacing */}
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-green-400 font-light text-base tracking-[0.3em] uppercase">
              </p>
              <div className="h-px w-16 bg-green-500/30 mx-auto"></div>
            </div>
            
            <div className="space-y-12">
              <h1 className="text-6xl sm:text-8xl lg:text-9xl font-light text-white leading-[0.85] tracking-tight">
                HARSHITHA
                <span className="block mt-8 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                  G M
                </span>
              </h1>
              
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-400 tracking-[0.15em]">
                  DevOps & Cloud Engineer
                </h2>
              </div>
            </div>
          </div>

          {/* Professional Statement with More Space */}
          <div className="max-w-3xl mx-auto space-y-16">
            <p className="text-xl sm:text-2xl text-gray-500 leading-relaxed font-light">
              Passionate DevOps Engineer with hands-on experience in deploying and automating cloud-native infrastructure using Docker,
Kubernetes, Jenkins, and AWS. Skilled in Linux administration, CI/CD pipelines, and Infrastructure as Code (IaC) with
Ansible and Git. Currently expanding expertise in Terraform, Prometheus, Grafana, and cloud security to build scalable systems
            </p>
          </div>

          {/* Executive Actions with Better Spacing */}
          <div className="space-y-16">
            <div className="flex flex-col sm:flex-row justify-center gap-12">
              <button className="group px-16 py-6 bg-gradient-to-r from-lime-500 to-green-600 text-white font-medium text-lg hover:from-lime-400 hover:to-green-500 transition-all duration-300 hover:scale-105">
                <span className="flex items-center gap-4">
                  Download Resume
                  <Download className="w-5 h-5" />
                </span>
              </button>
              
              <button className="group px-16 py-6 border border-green-500/40 text-green-400 font-medium text-lg hover:border-green-400 hover:bg-green-500/5 transition-all duration-300">
                <span className="flex items-center gap-4">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>

            {/* Minimal Social Links */}
            <div className="flex justify-center gap-12">
              <a
                href="https://linkedin.com"
                className="group p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
              >
                <Linkedin className="w-7 h-7 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
              </a>
              <a
                href="https://github.com"
                className="group p-6 border border-green-500/20 hover:border-green-400/40 transition-all duration-300"
              >
                <Github className="w-7 h-7 text-gray-500 group-hover:text-green-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-12 border border-green-400/20 rounded-full flex justify-center">
          <div className="w-1 h-4 bg-green-400/40 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;