import React from 'react';
import { Shield, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Premier Family Office Services
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100">
            Serving distinguished individuals with net worth of $10M - $40M since 2015
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trusted Experience</h3>
              <p className="text-blue-100">Operating with excellence since 2015</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-blue-100">Consistent growth and stability</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Elite Clientele</h3>
              <p className="text-blue-100">Serving high-net-worth individuals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}