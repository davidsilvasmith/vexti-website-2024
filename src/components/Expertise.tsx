import React from 'react';
import { Briefcase, BarChart, Scale, Award } from 'lucide-react';

export function Expertise() {
  const expertiseAreas = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      title: "Family Office Management",
      description: "Comprehensive oversight of family wealth, investments, and operations with a focus on long-term sustainability."
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Portfolio Analysis",
      description: "Sophisticated analysis of investment opportunities and portfolio performance using advanced financial metrics."
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "Risk Management",
      description: "Strategic risk assessment and mitigation strategies to protect and preserve family wealth."
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Legacy Planning",
      description: "Expert guidance in structuring and implementing multi-generational wealth transfer strategies."
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-blue-900 mb-4">{area.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{area.title}</h3>
              <p className="text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}