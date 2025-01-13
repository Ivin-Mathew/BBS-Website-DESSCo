import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

function Contact() {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/people/Bright-Business-Solutions/61556720815305/',
      color: 'text-blue-600 hover:text-blue-700'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/brightbusinesssolutions',
      color: 'text-pink-600 hover:text-pink-700'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/bright-business-solutions',
      color: 'text-blue-700 hover:text-blue-800'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/brightbusiness',
      color: 'text-blue-400 hover:text-blue-500'
    }
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-700">
                  123 Business Avenue, Tech City, TC 12345
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-700">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-700">contact@brightbusiness.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-700">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transform transition-transform hover:scale-110 ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-8 w-8" />
                  </a>
                ))}
              </div>
            </div>

            {/* Support Button */}
            <div className="mt-8">
              <Link
                to="/helpdesk"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Need Support?
              </Link>
            </div>
          </div>

          <div className="mt-12 md:mt-0">
            <iframe
              title="map"
              className="w-full h-96 rounded-lg shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30596073366!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043435129!5m2!1sen!2s"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;