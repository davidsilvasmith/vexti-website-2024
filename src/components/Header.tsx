import React from 'react';
import { Building2, Shield, Briefcase } from 'lucide-react';
import { NavLink } from './NavLink';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-900" />
            <span className="ml-2 text-2xl font-semibold text-blue-900">Vexti LLC</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#expertise">Expertise</NavLink>
            <NavLink href="#track-record">Track Record</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}