import {
  Headset,
  Building2,
  Brain,
  GraduationCap,
  Monitor,
  Wifi,
  Cpu
} from 'lucide-react';

export const htcViveData = {
  name: 'HTC VIVE',
  icon: Headset,
  description: 'Leading virtual reality technology for immersive experiences.',
  longDescription: `HTC VIVE is at the forefront of virtual reality innovation, delivering premium VR solutions for enterprise and entertainment. Our technology revolutionizes how people interact with digital content, creating immersive experiences that transform industries.`,
  category: 'Virtual Reality',
  website: 'https://www.vive.com/us/',
  color: 'from-indigo-600 to-indigo-800',
  features: [
    'Premium VR Hardware',
    'Enterprise Solutions',
    'Wireless Freedom',
    'Precise Tracking',
    'Professional Support',
    'High Resolution Display',
    'Advanced Controllers',
    'Spatial Audio'
  ],
  solutions: [
    {
      title: 'Enterprise VR',
      icon: Building2,
      description: 'Transform business operations with immersive VR solutions',
      features: [
        'Virtual Training Programs',
        '3D Design & Prototyping',
        'Remote Collaboration',
        'Data Visualization'
      ]
    },
    {
      title: 'Gaming & Entertainment',
      icon: Brain,
      description: 'Premium VR gaming and entertainment experiences',
      features: [
        'High-fidelity Graphics',
        'Precise Motion Controls',
        'Wireless Freedom',
        'Immersive Audio'
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      description: 'Revolutionary learning solutions through VR',
      features: [
        'Interactive Learning',
        'Virtual Classrooms',
        'Skill Development',
        'Scientific Visualization'
      ]
    }
  ],
  products: [
    {
      name: 'VIVE Pro 2',
      category: 'Professional VR',
      image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800',
      description: 'Professional-grade VR headset with industry-leading specifications.',
      features: [
        '5K Resolution Display',
        '120Hz Refresh Rate',
        '120° Field of View',
        'Hi-Res Audio',
        'Precision Tracking',
        'Ergonomic Design',
        'Wireless Adapter Support',
        'Enterprise Support'
      ]
    },
    {
      name: 'VIVE Focus 3',
      category: 'Enterprise VR',
      image: 'https://images.unsplash.com/photo-1622979135225-d3b3b3f3cf22?w=800',
      description: 'All-in-one enterprise VR headset for business applications.',
      features: [
        'Qualcomm XR2 Processor',
        'Enterprise Management',
        'Hot-swappable Battery',
        'Wireless Operation',
        '5K Resolution',
        'Wide FOV',
        'Comfort Design',
        'Business Warranty'
      ]
    }
  ],
  technologies: [
    {
      title: 'Visual Technology',
      description: 'Crystal clear 5K resolution displays',
      icon: Monitor,
      details: [
        'High Resolution Panels',
        'Low Persistence',
        'Wide Color Gamut',
        'HDR Support'
      ]
    },
    {
      title: 'Wireless Solutions',
      description: 'Freedom of movement without cables',
      icon: Wifi,
      details: [
        'Low Latency',
        'High Bandwidth',
        'Extended Range',
        'Stable Connection'
      ]
    },
    {
      title: 'Processing Power',
      description: 'Advanced computing capabilities',
      icon: Cpu,
      details: [
        'AI Processing',
        'Graphics Rendering',
        'Tracking Algorithms',
        'Power Management'
      ]
    }
  ]
};