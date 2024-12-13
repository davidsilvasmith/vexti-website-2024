import React from 'react';
import { Wallet, LineChart, Building, Shield } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Wallet className="h-8 w-8" />,
      title: "Wealth Management",
      description: "Comprehensive wealth management strategies tailored to preserve and grow family wealth across generations."
    },
    {
      icon: <LineChart className="h-8 w-8" />,
      title: "Investment Advisory",
      description: "Sophisticated investment solutions with a focus on long-term value creation and risk management."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Estate Planning",
      description: "Strategic estate planning services to ensure efficient wealth transfer and legacy preservation."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Asset Protection",
      description: "Robust asset protection strategies to safeguard family wealth and maintain privacy."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-900 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}