import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import ProductCard from './artome/ProductCard';
import SolutionCard from './artome/SolutionCard';
import TechnologyCard from './artome/TechnologyCard';

interface ArtomePartnerProps {
  partner: {
    name: string;
    description: string;
    website: string;
    solutions: Array<{
      title: string;
      icon: never;
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
      icon: never;
    }>;
  };
}

function ArtomePartner({ partner }: ArtomePartnerProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-900 to-purple-950 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-on-mount">
              Revolutionary
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Mobile Presentation Solutions
              </span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-12 animate-on-mount">
              Transform any space into an immersive presentation environment
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-on-mount">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-100 rounded-lg font-semibold hover:bg-purple-800/50 transition-colors"
              >
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Featured Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partner.products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-24 bg-gradient-to-br from-purple-900 to-purple-950 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partner.solutions.map((solution, index) => (
              <SolutionCard key={index} solution={solution} />
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {partner.technologies.map((tech, index) => (
              <TechnologyCard key={index} technology={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-purple-900 to-purple-950 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Presentations?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact us to learn more about ARTOME's innovative presentation solutions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-100 rounded-lg font-semibold hover:bg-purple-800/50 transition-colors"
              >
                Visit Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtomePartner;