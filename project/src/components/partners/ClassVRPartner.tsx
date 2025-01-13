import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

function ClassVRPartner({ partner }: { partner: any }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-900 to-teal-900 py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=1200')] bg-cover bg-center opacity-10"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 animate-on-mount">
              Immersive Learning
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                Through Virtual Reality
              </span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-12 animate-on-mount">
              Transform education with immersive VR and AR experiences
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-on-mount">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-100 rounded-lg font-semibold hover:bg-green-800/50 transition-colors"
              >
                Visit ClassVR Website
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Educational Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partner.solutions.map((solution: any, index: number) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow animate-on-mount">
                <solution.icon className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">VR/AR Products</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partner.products.map((product: any, index: number) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden animate-on-mount">
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, idx: number) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-24 bg-gradient-to-br from-green-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {partner.technologies.map((tech: any, index: number) => (
              <div key={index} className="text-center p-8 rounded-xl bg-white/10 backdrop-blur-lg animate-on-mount">
                <tech.icon className="h-16 w-16 mx-auto mb-6 text-green-300" />
                <h3 className="text-xl font-bold mb-4">{tech.title}</h3>
                <p className="text-green-100">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {partner.features.map((feature: string, index: number) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center animate-on-mount">
                <CheckCircle2 className="h-8 w-8 text-green-500 mx-auto mb-4" />
                <p className="font-medium text-gray-800">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-green-900 to-teal-900 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Transform Your Educational Experience</h2>
            <p className="text-xl text-green-100 mb-8">
              Join the future of immersive learning with ClassVR
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
              >
                Contact Sales
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-green-400 text-green-100 rounded-lg font-semibold hover:bg-green-800/50 transition-colors"
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

export default ClassVRPartner;