import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { partners } from '../data/partners/index';

function Partners() {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-in');
      }, index * 200);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 opacity-90"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Our Technology Partners
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver cutting-edge solutions
            for your business needs.
          </p>
        </div>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="animate-on-mount group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${partner.bgImage})` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} opacity-90`}></div>
              </div>
              
              <div className="relative p-8">
                <partner.icon className="h-12 w-12 text-white mb-6" />
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-100 bg-white/20 px-3 py-1 rounded-full">
                    {partner.category}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{partner.name}</h3>
                <p className="text-gray-100 mb-6">{partner.description}</p>
                
                <div className="flex space-x-4">
                  <Link
                    to={`/partner/${partner.id}`}
                    className="inline-flex items-center px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                  >
                    Learn More
                  </Link>
                  {partner.website && (
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;