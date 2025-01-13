import React from 'react';
import { ExternalLink } from 'lucide-react';

function DefaultPartner({ partner }: { partner: any }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`relative bg-gradient-to-br ${partner.color} py-24`}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <partner.icon className="h-24 w-24 mx-auto text-white mb-8 animate-on-mount" />
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 animate-on-mount">
              {partner.name}
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto animate-on-mount">
              {partner.description}
            </p>
            {partner.website && (
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 mt-8 border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors animate-on-mount"
              >
                Learn More
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-mount">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {partner.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {partner.longDescription}
            </p>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Category</h3>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium">
                {partner.category}
              </span>
            </div>
          </div>

          <div className="animate-on-mount">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <ul className="space-y-4">
                {partner.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-center">
                    <div className="flex-shrink-0 h-2 w-2 rounded-full bg-blue-600 mr-3"></div>
                    <span className="text-lg text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultPartner;