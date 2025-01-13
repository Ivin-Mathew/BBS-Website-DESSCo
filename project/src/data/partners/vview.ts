import {
  Monitor,
  Tv,
  Smartphone,
  Cpu,
  Building2,
  ShoppingBag,
  Presentation,
  Settings
} from 'lucide-react';

export const vviewData = {
  name: 'VView',
  icon: Monitor,
  description: 'Innovative display technology solutions for diverse applications.',
  longDescription: `VView specializes in cutting-edge display technology, offering comprehensive solutions for commercial, retail, and industrial applications. Our products combine superior visual performance with reliability and innovation.`,
  category: 'Display Solutions',
  website: 'https://vviewtech.com/',
  color: 'from-blue-600 to-blue-800',
  features: [
    'Commercial Displays',
    'Interactive Solutions',
    'Digital Signage',
    'LED Displays',
    'Touch Screens',
    'Video Walls',
    'Outdoor Displays',
    'Custom Solutions'
  ],
  solutions: [
    {
      title: 'Commercial',
      icon: Building2,
      description: 'Professional display solutions for business environments',
      features: [
        'Meeting Room Displays',
        'Digital Signage',
        'Video Walls',
        'Interactive Screens'
      ]
    },
    {
      title: 'Retail',
      icon: ShoppingBag,
      description: 'Engaging retail display solutions',
      features: [
        'Digital Menu Boards',
        'Interactive Kiosks',
        'Window Displays',
        'POS Displays'
      ]
    },
    {
      title: 'Education',
      icon: Presentation,
      description: 'Interactive education display solutions',
      features: [
        'Interactive Whiteboards',
        'Classroom Displays',
        'Learning Pods',
        'Digital Notice Boards'
      ]
    }
  ],
  products: [
    {
      name: 'Commercial Display Series',
      category: 'Professional Displays',
      image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800',
      description: 'Professional-grade displays for commercial use.',
      features: [
        '4K UHD Resolution',
        '24/7 Operation',
        'Commercial Grade Panel',
        'Smart Platform',
        'Multiple Inputs',
        'RS232 Control',
        'Portrait Mode',
        'Built-in Scheduler'
      ]
    },
    {
      name: 'Interactive Touch Display',
      category: 'Interactive Solutions',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      description: 'Advanced interactive touch display for collaboration.',
      features: [
        '4K Resolution',
        '20-Point Touch',
        'Anti-Glare Glass',
        'Built-in Android',
        'Wireless Sharing',
        'Split Screen',
        'Annotation Tools',
        'Cloud Integration'
      ]
    }
  ],
  technologies: [
    {
      title: 'Display Technology',
      description: 'Advanced display panel technology',
      icon: Monitor,
      details: [
        'IPS Panels',
        'High Brightness',
        'Wide Color Gamut',
        'HDR Support'
      ]
    },
    {
      title: 'Touch Solutions',
      description: 'Responsive touch technology',
      icon: Smartphone,
      details: [
        'IR Touch',
        'PCAP Touch',
        'Anti-Glare',
        'Palm Rejection'
      ]
    },
    {
      title: 'Processing',
      description: 'Smart processing capabilities',
      icon: Cpu,
      details: [
        'Image Processing',
        'Smart Features',
        'Multi-Source',
        'Content Management'
      ]
    }
  ]
};