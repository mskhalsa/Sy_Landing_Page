import React from 'react';
import { Code, Server, BarChart3, Database, Github, Smartphone } from 'lucide-react';

const Skills = ({ loaded }) => {
  const skills = [
    { name: 'Full-Stack Development', icon: <Code className="mr-2" />, tech: 'C++, Python, React' },
    { name: 'Data Engineering', icon: <Database className="mr-2" />, tech: 'Python, Pandas, Airflow' },
    { name: 'AI/ML', icon: <BarChart3 className="mr-2" />, tech: 'Prophet, Time-series forecasting' },
    { name: 'Cloud Infrastructure', icon: <Server className="mr-2" />, tech: 'AWS Serverless Architecture' },
    { name: 'Mobile Development', icon: <Smartphone className="mr-2" />, tech: 'React Native, Expo CLI' },
    { name: 'Automation', icon: <Github className="mr-2" />, tech: 'AWS Textract, NLP, CI/CD' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Technical Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`bg-gray-800 p-6 rounded-xl border border-gray-700 transform transition-all duration-700 ease-out hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4 text-cyan-400">
                {skill.icon}
                <h3 className="text-xl font-semibold">{skill.name}</h3>
              </div>
              <p className="text-gray-400">{skill.tech}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;