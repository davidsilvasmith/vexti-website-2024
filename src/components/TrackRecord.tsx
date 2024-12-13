import React from 'react';

export function TrackRecord() {
  return (
    <section id="track-record" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Our Track Record
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Financial Stability</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Consistent growth since establishment in 2015</li>
              <li>• Strong balance sheet with zero debt</li>
              <li>• Proven history of successful client relationships</li>
              <li>• Conservative risk management approach</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">Client Success</h3>
            <ul className="space-y-4 text-gray-700">
              <li>• Managing substantial family office portfolios</li>
              <li>• High client retention rate</li>
              <li>• Demonstrated expertise in wealth preservation</li>
              <li>• Strong network of financial partnerships</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}