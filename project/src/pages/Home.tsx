import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Cpu, Video, Headphones, Building2, Globe, Target, Award } from 'lucide-react';

const services = [
  {
    icon: Headphones,
    title: 'Virtual Reality Solutions',
    description: 'Immersive VR technology from HTC VIVE for education, real estate, and training.'
  },
  {
    icon: Video,
    title: 'Video Conferencing',
    description: 'High-quality video and audio systems in partnership with Logitech and Kramer.'
  },
  {
    icon: Monitor,
    title: 'Display Solutions',
    description: 'Integrated display systems for corporate and educational environments.'
  },
  {
    icon: Cpu,
    title: 'Drones & Video Technology',
    description: 'Advanced drones and cameras for media, agriculture, and surveillance.'
  }
];

function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section with AI Background */}
      <div 
        className="relative bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                <span className="block mb-2">Empowering Business</span>
                <span className="block">Through</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                  Technology Innovation
                </span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-xl md:text-2xl text-gray-200 leading-relaxed">
                Leading technology provider in Oman, delivering cutting-edge solutions for the digital age.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                to="/contact"
                className="px-8 py-4 text-lg font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link
                to="/solutions/vr"
                className="px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 transform hover:scale-105"
              >
                Explore Solutions
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">About BBS Oman</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed">
              Bright Business Solutions (BBS Oman) is a leading technology provider based in Oman, offering cutting-edge hardware and software solutions.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
            <div className="bg-blue-50 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
              <Globe className="mx-auto h-14 w-14 text-blue-600" />
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To empower businesses through cutting-edge technology solutions that enhance communication, efficiency, and innovation.
              </p>
            </div>

            <div className="bg-purple-50 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
              <Target className="mx-auto h-14 w-14 text-purple-600" />
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                To be the leading technology partner in the Middle East, transforming the business landscape with state-of-the-art solutions.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-8 text-center transform transition-all duration-300 hover:scale-105">
              <Award className="mx-auto h-14 w-14 text-green-600" />
              <h3 className="mt-6 text-2xl font-semibold text-gray-900">Our Values</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Innovation, excellence, and commitment to delivering exceptional support and service to our clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-8">Our Services</h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="mt-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <service.icon className="h-14 w-14 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;