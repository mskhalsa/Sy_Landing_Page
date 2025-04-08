import React from 'react';

const Projects = ({ loaded }) => {
  const achievements = [
    {
      title: '17% Reduction in Inventory Waste',
      description: 'Automated end-to-end inventory workflows with a Full-Stack solution',
      tech: 'C++, Python, React'
    },
    {
      title: 'Automated ETL Workflows',
      description: 'Fully automated sales data ingestion and preprocessing',
      tech: 'Python, Pandas, Airflow'
    },
    {
      title: '15% Revenue Increase',
      description: 'Implemented AI-driven time-series regression forecasting',
      tech: 'Prophet, Python, AWS'
    },
    {
      title: '30% Cost Elimination',
      description: 'Leveraged AWS serverless architecture for backend operations',
      tech: 'AWS Lambda, DynamoDB, API Gateway'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">Results Delivered</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className={`bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-500 ${
                loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                {achievement.title}
              </h3>
              <p className="text-gray-300 mb-6">{achievement.description}</p>
              <div className="flex flex-wrap gap-2">
                {achievement.tech.split(', ').map(tech => (
                  <span key={tech} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-cyan-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;