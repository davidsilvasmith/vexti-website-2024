import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Expertise } from './components/Expertise';
import { TrackRecord } from './components/TrackRecord';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Expertise />
        <TrackRecord />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© {new Date().getFullYear()} Vexti LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;