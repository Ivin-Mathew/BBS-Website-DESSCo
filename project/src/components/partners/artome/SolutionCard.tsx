import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  solution: {
    title: string;
    icon: LucideIcon;
    description: string;
    features: string[];
  };
}

function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;
  
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 animate-on-mount">
      <Icon className="h-12 w-12 text-purple-400 mb-6" />
      <h3 className="text-xl font-bold mb-4 text-white">{solution.title}</h3>
      <p className="text-purple-100 mb-6">{solution.description}</p>
      <ul className="space-y-3">
        {solution.features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-purple-200">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 mr-2"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SolutionCard;