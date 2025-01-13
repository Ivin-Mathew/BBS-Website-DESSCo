import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProductCard from './htc/ProductCard';
import SolutionCard from './htc/SolutionCard';
import TechnologyCard from './htc/TechnologyCard';

interface HTCVivePartnerProps {
  partner: {
    name: string;
    description: string;
    website: string;
    solutions: Array<{
      title: string;
      icon: any;
      description: string;
      features: string[];
    }>;
    products: Array<{
      name: string;
      category: string;
      image: string;
      description: string;
      features: string[];
    }>;
    technologies: Array<{
      title: string;
      description: string;
      icon: any;
    }>;
  };
}

function HTCVivePartner({ partner }: HTCVivePartnerProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-blue-900/90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-on-mount">
              Official HTC VIVE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Distributor in Oman
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-on-mount">
              {partner.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-on-mount">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Visit VIVE Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partner.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">VR Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partner.solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partner.technologies.map((tech, index) => (
              <TechnologyCard key={index} technology={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your VR Experience?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact us to learn more about HTC VIVE solutions in Oman
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/helpdesk"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-100 rounded-lg font-semibold hover:bg-blue-800/50 transition-colors"
              >
                Technical Support
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HTCVivePartner;