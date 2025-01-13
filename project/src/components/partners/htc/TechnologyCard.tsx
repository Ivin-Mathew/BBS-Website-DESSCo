import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TechnologyCardProps {
  technology: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
}

function TechnologyCard({ technology }: TechnologyCardProps) {
  const Icon = technology.icon;
  
  return (
    <div className="bg-gray-50 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105 animate-on-mount">
      <Icon className="h-16 w-16 mx-auto mb-6 text-blue-600" />
      <h3 className="text-xl font-bold mb-4">{technology.title}</h3>
      <p className="text-gray-600">{technology.description}</p>
    </div>
  );
}

export default TechnologyCard;