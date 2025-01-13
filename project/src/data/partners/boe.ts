import {
  Monitor,
  Smartphone,
  Tv,
  Cpu,
  Shield,
  Rocket
} from 'lucide-react';

export const boeData = {
  name: 'BOE Technology Group',
  icon: Monitor,
  description: 'Global leader in semiconductor display technologies and IoT solutions.',
  longDescription: `BOE Technology Group is a world-leading supplier of semiconductor display technologies, products, and services. With a focus on innovation and quality, BOE provides cutting-edge display solutions across multiple industries including consumer electronics, healthcare, and automotive.`,
  category: 'Display Technology',
  website: 'https://www.boe.com/en/',
  color: 'from-blue-600 to-blue-800',
  features: [
    'IoT Smart Systems',
    'Display Solutions',
    'Healthcare Displays',
    'Automotive Displays',
    'Smart Manufacturing',
    'Flexible OLED Technology',
    'Mini-LED Solutions',
    'Touch Integration'
  ],
  solutions: [
    {
      title: 'Smart Retail',
      icon: Monitor,
      description: 'Interactive retail display solutions for modern commerce',
      features: [
        'Digital Signage Systems',
        'Interactive Kiosk Solutions',
        'Smart Shelf Technology',
        'Customer Analytics Integration'
      ]
    },
    {
      title: 'Smart Mobile',
      icon: Smartphone,
      description: 'Advanced mobile display technology for devices',
      features: [
        'AMOLED Displays',
        'Flexible OLED Screens',
        'High Refresh Rate Panels',
        'Energy Efficient Designs'
      ]
    },
    {
      title: 'Commercial Display',
      icon: Tv,
      description: 'Professional display solutions for business',
      features: [
        'Video Wall Systems',
        'Large Format Displays',
        '8K Resolution Support',
        'HDR Technology'
      ]
    },
    {
      title: 'IoT Solutions',
      icon: Cpu,
      description: 'Connected device ecosystems for smart environments',
      features: [
        'Smart Home Integration',
        'Industrial IoT Systems',
        'Healthcare IoT Platforms',
        'Sensor Networks'
      ]
    }
  ],
  products: [
    {
      name: '8K Professional Display',
      category: 'Professional Displays',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
      description: 'Ultra-high resolution display technology for professional use.',
      features: [
        '8K Resolution (7680×4320)',
        'HDR10+ Support',
        'Wide Color Gamut (DCI-P3)',
        'Professional Calibration',
        'Multiple Input Ports',
        'Low Blue Light',
        'Anti-Glare Coating',
        'Advanced Color Management'
      ]
    },
    {
      name: 'Smart IoT Display',
      category: 'IoT Solutions',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
      description: 'Connected display solution for smart environments.',
      features: [
        'Multi-Touch Technology',
        'Wireless Connectivity',
        'Environmental Sensors',
        'Cloud Integration',
        'Voice Control',
        'Energy Management',
        'Remote Monitoring',
        'AI-Powered Analytics'
      ]
    },
    {
      name: 'Medical Display',
      category: 'Healthcare Solutions',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800',
      description: 'Professional medical-grade display solutions.',
      features: [
        'DICOM Compliance',
        'High Precision Calibration',
        'Anti-bacterial Surface',
        'Multi-modality Support',
        '4K Resolution',
        'Automatic Luminance Control',
        'Quality Assurance Tools',
        'Medical Certification'
      ]
    }
  ],
  technologies: [
    {
      title: 'Display Innovation',
      description: 'Cutting-edge display technology research and development',
      icon: Monitor,
      details: [
        'OLED Technology',
        'Quantum Dot',
        'Mini-LED',
        'Flexible Displays'
      ]
    },
    {
      title: 'Smart Manufacturing',
      description: 'Advanced production systems for quality assurance',
      icon: Cpu,
      details: [
        'Automated Production',
        'Quality Control',
        'IoT Integration',
        'Smart Logistics'
      ]
    },
    {
      title: 'Quality Control',
      description: 'Rigorous quality standards and testing procedures',
      icon: Shield,
      details: [
        'Automated Testing',
        'Quality Certification',
        'Reliability Testing',
        'Performance Validation'
      ]
    },
    {
      title: 'Research & Development',
      description: 'Continuous innovation in display technology',
      icon: Rocket,
      details: [
        'New Materials Research',
        'Process Innovation',
        'Technology Patents',
        'Industry Collaboration'
      ]
    }
  ]
};