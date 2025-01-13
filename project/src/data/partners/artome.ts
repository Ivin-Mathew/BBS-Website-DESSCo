import { 
  GraduationCap,
  Building2,
  Users,
  Presentation,
  Headset,
  Wifi,
  Laptop,
  Tv
} from 'lucide-react';

export const artomeData = {
  name: 'ARTOME',
  icon: Tv,
  description: 'Revolutionary mobile presentation and display solutions.',
  longDescription: `ARTOME is a pioneering Finnish technology company specializing in innovative mobile presentation solutions. Our products transform any space into an immersive presentation environment, combining cutting-edge projection technology with space-efficient design.`,
  category: 'Mobile Display Solutions',
  website: 'https://artome.fi/en/',
  color: 'from-purple-600 to-purple-800',
  features: [
    'Mobile Presentation Systems',
    'Interactive Displays',
    'Wireless Connectivity',
    'Space-Efficient Design',
    'Professional Audio Integration',
    'Ultra-Short Throw Projection',
    'Plug-and-Play Setup',
    'Multi-Device Compatibility'
  ],
  solutions: [
    {
      title: 'Education',
      icon: GraduationCap,
      description: 'Transform learning spaces instantly with mobile presentation solutions',
      features: [
        'Interactive Learning Environments',
        'Flexible Classroom Setups',
        'Easy Teacher-Student Interaction',
        'Multi-Room Deployment'
      ]
    },
    {
      title: 'Corporate',
      icon: Building2,
      description: 'Professional presentation solutions for modern workplaces',
      features: [
        'Dynamic Meeting Spaces',
        'Conference Room Solutions',
        'Training Facility Setup',
        'Collaborative Workspaces'
      ]
    },
    {
      title: 'Events',
      icon: Users,
      description: 'Mobile display solutions for impactful events',
      features: [
        'Rapid Deployment',
        'High-Impact Presentations',
        'Professional Quality Output',
        'Versatile Setup Options'
      ]
    },
    {
      title: 'Digital Signage',
      icon: Presentation,
      description: 'Dynamic digital signage solutions for any space',
      features: [
        'HD Display Quality',
        'Content Management System',
        'Remote Control Options',
        'Scheduled Content Display'
      ]
    }
  ],
  products: [
    {
      name: 'ARTOME M10',
      category: 'Mobile Presentation',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800',
      description: 'All-in-one mobile presentation solution with advanced features.',
      features: [
        'Ultra-Short Throw Laser Projector',
        'Integrated Professional Sound System',
        'Wireless Device Connectivity',
        'Compact Mobile Design',
        '4K Resolution Support',
        'Built-in Audio Mixer',
        'Multiple Input Sources',
        'Quick Setup Time'
      ]
    },
    {
      name: 'ARTOME M6',
      category: 'Compact Solution',
      image: 'https://images.unsplash.com/photo-1517436073-3b3ee1ee4544?w=800',
      description: 'Compact and versatile mobile presentation system.',
      features: [
        'Lightweight Portable Design',
        '5-Minute Setup Time',
        'Full HD Projection',
        'Built-in Audio System',
        'Wireless Screen Sharing',
        'Multiple Connectivity Options',
        'Adjustable Screen Size',
        'Energy Efficient'
      ]
    },
    {
      name: 'ARTOME Display',
      category: 'Interactive Display',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
      description: 'Interactive touch display solution for collaborative environments.',
      features: [
        '4K UHD Resolution',
        'Multi-touch Support (20 Points)',
        'Wireless Screen Sharing',
        'Mobile Stand Included',
        'Built-in Android System',
        'Anti-Glare Surface',
        'Palm Rejection Technology',
        'Educational Software Suite'
      ]
    }
  ],
  technologies: [
    {
      title: 'Projection Technology',
      description: 'Advanced laser projection with ultra-short throw capabilities',
      icon: Presentation,
      details: [
        'Laser Light Source',
        'Ultra-Short Throw Ratio',
        'High Brightness Output',
        'Long Lifetime'
      ]
    },
    {
      title: 'Audio Systems',
      description: 'Professional-grade integrated audio solutions',
      icon: Headset,
      details: [
        'High-Fidelity Speakers',
        'Digital Signal Processing',
        'Wireless Microphone Support',
        'Audio Mixing Capabilities'
      ]
    },
    {
      title: 'Wireless Integration',
      description: 'Seamless wireless connectivity for all devices',
      icon: Wifi,
      details: [
        'Multi-Device Support',
        'Screen Mirroring',
        'Low Latency',
        'Secure Connection'
      ]
    },
    {
      title: 'Mobile Design',
      description: 'Space-efficient and portable engineering',
      icon: Laptop,
      details: [
        'Compact Form Factor',
        'Durable Construction',
        'Easy Transport',
        'Quick Assembly'
      ]
    }
  ]
};