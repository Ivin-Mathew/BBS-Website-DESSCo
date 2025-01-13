import { 
  Monitor, 
  Tv, 
  Laptop, 
  Smartphone, 
  Headset, 
  Building2, 
  GraduationCap,
  Users,
  Presentation,
  Wifi,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Network,
  Video,
  ShoppingBag,
  Home,
  BarChart,
  Settings,
  BookOpen,
  Microscope,
  FileText,
  Calendar,
  Gamepad2,
  Globe,
} from 'lucide-react';

export const partnerData = {
  'artome': {
    name: 'ARTOME',
    icon: Tv,
    description: 'Revolutionary mobile presentation and display solutions.',
    longDescription: 'ARTOME specializes in creating innovative mobile presentation solutions that transform any space into an immersive presentation environment.',
    category: 'Mobile Display Solutions',
    website: 'https://artome.fi/en/',
    color: 'from-purple-600 to-purple-800',
    features: [
      'Mobile Presentation Systems',
      'Interactive Displays',
      'Wireless Connectivity',
      'Space-Efficient Design',
      'Professional Audio Integration'
    ],
    solutions: [
      {
        title: 'Education',
        icon: GraduationCap,
        description: 'Transform learning spaces instantly',
        features: ['Interactive Learning', 'Flexible Classrooms', 'Easy Setup']
      },
      {
        title: 'Corporate',
        icon: Building2,
        description: 'Professional presentation solutions',
        features: ['Meeting Rooms', 'Conference Halls', 'Training Facilities']
      },
      {
        title: 'Events',
        icon: Users,
        description: 'Mobile event display solutions',
        features: ['Quick Deployment', 'High Impact', 'Professional Quality']
      },
      {
        title: 'Digital Signage',
        icon: Presentation,
        description: 'Dynamic digital signage solutions',
        features: ['HD Display', 'Content Management', 'Remote Control']
      }
    ],
    products: [
      {
        name: 'ARTOME M10',
        category: 'Mobile Presentation',
        image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800',
        description: 'All-in-one mobile presentation solution.',
        features: [
          'Ultra-Short Throw Projector',
          'Integrated Sound System',
          'Wireless Connectivity',
          'Compact Design'
        ]
      },
      {
        name: 'ARTOME M6',
        category: 'Compact Solution',
        image: 'https://images.unsplash.com/photo-1517436073-3b3ee1ee4544?w=800',
        description: 'Compact mobile presentation system.',
        features: [
          'Portable Design',
          'Quick Setup',
          'HD Projection',
          'Built-in Audio'
        ]
      },
      {
        name: 'ARTOME Display',
        category: 'Interactive Display',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
        description: 'Interactive touch display solution.',
        features: [
          '4K Resolution',
          'Multi-touch Support',
          'Wireless Screen Sharing',
          'Mobile Stand'
        ]
      }
    ],
    technologies: [
      {
        title: 'Projection',
        description: 'Advanced projection technology',
        icon: Presentation
      },
      {
        title: 'Audio',
        description: 'Professional sound systems',
        icon: Headset
      },
      {
        title: 'Connectivity',
        description: 'Wireless integration',
        icon: Wifi
      },
      {
        title: 'Mobility',
        description: 'Space-efficient design',
        icon: Laptop
      }
    ]
  },

  'htc-vive': {
    name: 'HTC VIVE',
    icon: Headset,
    description: 'Leading virtual reality technology for immersive experiences.',
    longDescription: 'HTC VIVE delivers premium VR solutions for enterprise and entertainment, revolutionizing how we interact with digital content.',
    category: 'Virtual Reality',
    website: 'https://www.vive.com/us/',
    color: 'from-indigo-600 to-indigo-800',
    features: [
      'Premium VR Hardware',
      'Enterprise Solutions',
      'Wireless Freedom',
      'Precise Tracking',
      'Professional Support'
    ],
    solutions: [
      {
        title: 'Enterprise VR',
        icon: Building2,
        description: 'Transform business with immersive solutions',
        features: ['Training', 'Design', 'Collaboration']
      },
      {
        title: 'Gaming',
        icon: Brain,
        description: 'Premium VR gaming experiences',
        features: ['High-fidelity', 'Precise Controls', 'Wireless']
      },
      {
        title: 'Education',
        icon: GraduationCap,
        description: 'Revolutionary learning solutions',
        features: ['Interactive', 'Immersive', 'Engaging']
      }
    ],
    products: [
      {
        name: 'VIVE Pro 2',
        category: 'Professional VR',
        image: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800',
        description: '5K resolution professional VR headset.',
        features: [
          '5K Resolution',
          '120Hz Refresh Rate',
          '120° FOV',
          'Hi-Res Audio'
        ]
      },
      {
        name: 'VIVE Focus 3',
        category: 'Enterprise',
        image: 'https://images.unsplash.com/photo-1622979135225-d3b3b3f3cf22?w=800',
        description: 'All-in-one enterprise VR headset.',
        features: [
          'Qualcomm XR2',
          'Enterprise Features',
          'Replaceable Battery',
          'Wireless'
        ]
      }
    ],
    technologies: [
      {
        title: 'Visual Fidelity',
        description: 'Crystal clear 5K resolution',
        icon: Monitor
      },
      {
        title: 'Wireless',
        description: 'Freedom of movement',
        icon: Wifi
      },
      {
        title: 'Processing',
        description: 'Advanced computing power',
        icon: Cpu
      }
    ]
  },

  'boe': {
    name: 'BOE Technology Group',
    icon: Monitor,
    description: 'Global leader in semiconductor display technologies and IoT solutions.',
    longDescription: 'BOE Technology Group is a world-leading supplier of semiconductor display technologies, products, and services.',
    category: 'Display Technology',
    website: 'https://www.boe.com/en/',
    color: 'from-blue-600 to-blue-800',
    features: [
      'IoT Smart Systems',
      'Display Solutions',
      'Healthcare Displays',
      'Automotive Displays',
      'Smart Manufacturing'
    ],
    solutions: [
      {
        title: 'Smart Retail',
        icon: Monitor,
        description: 'Interactive retail display solutions',
        features: ['Digital Signage', 'Interactive Kiosks', 'Smart Shelves']
      },
      {
        title: 'Smart Mobile',
        icon: Smartphone,
        description: 'Advanced mobile display technology',
        features: ['AMOLED', 'LCD Displays', 'Flexible Screens']
      },
      {
        title: 'Commercial Display',
        icon: Tv,
        description: 'Professional display solutions',
        features: ['Video Walls', 'Digital Signage', '8K Displays']
      },
      {
        title: 'IoT Solutions',
        icon: Cpu,
        description: 'Connected device ecosystems',
        features: ['Smart Home', 'Industrial IoT', 'Healthcare IoT']
      }
    ],
    products: [
      {
        name: '8K Display Solutions',
        category: 'Professional Displays',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
        description: 'Ultra-high resolution display technology.',
        features: [
          '8K Resolution',
          'HDR Support',
          'Wide Color Gamut',
          'Professional Calibration'
        ]
      },
      {
        name: 'Smart IoT Displays',
        category: 'IoT Solutions',
        image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800',
        description: 'Connected display solutions for smart environments.',
        features: [
          'Touch Integration',
          'Wireless Connectivity',
          'Smart Sensors',
          'Cloud Integration'
        ]
      },
      {
        name: 'Healthcare Displays',
        category: 'Medical Solutions',
        image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800',
        description: 'Medical-grade display solutions.',
        features: [
          'High Precision',
          'DICOM Compliance',
          'Anti-bacterial Surface',
          'Multi-modality Support'
        ]
      }
    ],
    technologies: [
      {
        title: 'Display Innovation',
        description: 'Cutting-edge display technology',
        icon: Monitor
      },
      {
        title: 'Smart Manufacturing',
        description: 'Advanced production systems',
        icon: Cpu
      },
      {
        title: 'Quality Control',
        description: 'Rigorous quality standards',
        icon: Shield
      },
      {
        title: 'R&D',
        description: 'Continuous innovation',
        icon: Rocket
      }
    ]
  },
  'kramer':{
    name: 'Kramer',
  icon: Monitor,
  description: 'Advanced audio-visual and collaboration solutions.',
  longDescription: `Kramer is a leading provider of professional audio-visual solutions, specializing in innovative technologies for enterprise and education sectors. With a focus on seamless collaboration and high-performance AV distribution.`,
  category: 'AV Solutions',
  website: 'https://www.kramerav.com/',
  color: 'from-green-600 to-green-800',
  features: [
    'Pro AV Solutions',
    'Wireless Presentation',
    'Room Control Systems',
    'Audio Solutions',
    'Video Distribution',
    'Collaboration Platforms',
    'Digital Signage',
    'Control Solutions'
  ],
  solutions: [
    {
      title: 'Corporate',
      icon: Building2,
      description: 'Complete AV solutions for modern workplaces',
      features: [
        'Meeting Room Systems',
        'Wireless Presentation',
        'Video Conferencing',
        'Room Automation'
      ]
    },
    {
      title: 'Education',
      icon: GraduationCap,
      description: 'Interactive learning environment solutions',
      features: [
        'Classroom Technology',
        'Distance Learning',
        'Lecture Capture',
        'Student Engagement Tools'
      ]
    },
    {
      title: 'Control Solutions',
      icon: Cpu,
      description: 'Advanced control and automation systems',
      features: [
        'Room Controllers',
        'Touch Panels',
        'Control Gateways',
        'Automation Systems'
      ]
    },
    {
      title: 'Collaboration',
      icon: Users,
      description: 'Enhanced collaboration solutions',
      features: [
        'VIA Wireless Presentation',
        'Content Sharing',
        'BYOD Support',
        'Multi-User Interaction'
      ]
    }
  ],
  products: [
    {
      name: 'VIA Connect²',
      category: 'Wireless Collaboration',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      description: 'Advanced wireless presentation and collaboration solution.',
      features: [
        'Wireless Presentation',
        '4K60 Support',
        'Multi-User Collaboration',
        'iOS/Android Mirroring',
        'Enhanced Security',
        'Digital Signage',
        'Power over Ethernet',
        'Room Calendar Integration'
      ]
    },
    {
      name: 'AFM-20DSP',
      category: 'Audio Solutions',
      image: 'https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=800',
      description: 'Professional audio matrix with DSP.',
      features: [
        '20x20 Audio Matrix',
        'Advanced DSP',
        'Dante Support',
        'Automatic Feedback Prevention',
        'Room Combining',
        'Remote Management',
        'Preset Configurations',
        'Audio Processing'
      ]
    },
    {
      name: 'Control Solutions',
      category: 'Control Systems',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      description: 'Complete control and automation system.',
      features: [
        'Touch Panel Control',
        'Room Automation',
        'Device Management',
        'Scheduling',
        'Mobile Control',
        'Multi-Room Control',
        'Custom Programming',
        'Integration Capabilities'
      ]
    }
  ],
  technologies: [
    {
      title: 'AV over IP',
      description: 'Advanced networked AV distribution',
      icon: Network,
      details: [
        '4K60 4:4:4',
        'Zero Latency',
        'Flexible Scaling',
        'Network Security'
      ]
    },
    {
      title: 'Video Processing',
      description: 'High-performance video processing',
      icon: Video,
      details: [
        '4K Processing',
        'HDR Support',
        'Color Space Conversion',
        'Scaling Technology'
      ]
    },
    {
      title: 'Control Systems',
      description: 'Intelligent control and automation',
      icon: Cpu,
      details: [
        'Brain-OS',
        'Cloud Management',
        'API Integration',
        'Smart Logic'
      ]
    },
    {
      title: 'Collaboration',
      description: 'Next-gen collaboration technology',
      icon: Presentation,
      details: [
        'Wireless Presentation',
        'Multi-User Support',
        'Cross-Platform',
        'Enterprise Security'
      ]
    }
  ]
  },
  'vview':{
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
  },
  'propgoto':{
    name: 'propGOTO',
  icon: Building2,
  description: 'Automated property management solutions for real estate.',
  longDescription: `propGOTO delivers comprehensive property management automation solutions, streamlining operations for real estate professionals. Our platform combines powerful features with user-friendly interfaces to optimize property management workflows.`,
  category: 'Property Management',
  website: 'https://propertyautomate.com/',
  color: 'from-yellow-600 to-yellow-800',
  features: [
    'Property Management',
    'Tenant Portal',
    'Maintenance Tracking',
    'Financial Management',
    'Document Management',
    'Reporting Tools',
    'Communication Platform',
    'Automation Features'
  ],
  solutions: [
    {
      title: 'Property Management',
      icon: Home,
      description: 'Comprehensive property management solution',
      features: [
        'Property Database',
        'Unit Management',
        'Tenant Tracking',
        'Maintenance Scheduling'
      ]
    },
    {
      title: 'Financial Management',
      icon: BarChart,
      description: 'Complete financial management system',
      features: [
        'Rent Collection',
        'Expense Tracking',
        'Financial Reports',
        'Budget Management'
      ]
    },
    {
      title: 'Tenant Management',
      icon: Users,
      description: 'Efficient tenant relationship management',
      features: [
        'Tenant Portal',
        'Communication Tools',
        'Maintenance Requests',
        'Document Sharing'
      ]
    },
    {
      title: 'Operations',
      icon: Settings,
      description: 'Streamlined operational management',
      features: [
        'Task Automation',
        'Workflow Management',
        'Team Collaboration',
        'Performance Analytics'
      ]
    }
  ],
  products: [
    {
      name: 'Property Management Suite',
      category: 'Core Platform',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
      description: 'Complete property management solution.',
      features: [
        'Property Database',
        'Tenant Management',
        'Maintenance Tracking',
        'Financial Tools',
        'Document Storage',
        'Reporting System',
        'Mobile Access',
        'Integration APIs'
      ]
    },
    {
      name: 'Tenant Portal',
      category: 'User Portals',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800',
      description: 'Dedicated portal for tenant interactions.',
      features: [
        'Rent Payments',
        'Maintenance Requests',
        'Document Access',
        'Communication Tools',
        'Announcements',
        'Service History',
        'Profile Management',
        'Mobile App'
      ]
    }
  ],
  technologies: [
    {
      title: 'Automation',
      description: 'Advanced automation capabilities',
      icon: Settings,
      details: [
        'Task Automation',
        'Workflow Engine',
        'Smart Scheduling',
        'Process Optimization'
      ]
    },
    {
      title: 'Security',
      description: 'Enterprise-grade security features',
      icon: Shield,
      details: [
        'Data Encryption',
        'Access Control',
        'Audit Trails',
        'Compliance Tools'
      ]
    },
    {
      title: 'Integration',
      description: 'Comprehensive integration capabilities',
      icon: FileText,
      details: [
        'API Access',
        'Third-party Integration',
        'Data Import/Export',
        'Custom Connectors'
      ]
    },
    {
      title: 'Scheduling',
      description: 'Intelligent scheduling system',
      icon: Calendar,
      details: [
        'Smart Calendar',
        'Resource Planning',
        'Automated Reminders',
        'Availability Management'
      ]
    }
  ]
  },
  'classvr':{
    name: 'ClassVR',
  icon: GraduationCap,
  description: 'Virtual and augmented reality solutions for education.',
  longDescription: `ClassVR is a groundbreaking virtual and augmented reality system designed specifically for the classroom. Our complete solution provides everything teachers need to deliver engaging VR lessons and create immersive learning experiences.`,
  category: 'Educational Technology',
  website: 'https://www.classvr.com/',
  color: 'from-green-600 to-green-800',
  features: [
    'VR Headsets',
    'Educational Content',
    'Teacher Controls',
    'Lesson Planning',
    'Student Analytics',
    'Content Creation',
    'Classroom Management',
    'Professional Development'
  ],
  solutions: [
    {
      title: 'K-12 Education',
      icon: BookOpen,
      description: 'Immersive learning for primary and secondary education',
      features: [
        'Curriculum-Aligned Content',
        'Interactive Lessons',
        'Virtual Field Trips',
        'Student Engagement'
      ]
    },
    {
      title: 'Higher Education',
      icon: GraduationCap,
      description: 'Advanced VR solutions for universities',
      features: [
        'Research Tools',
        'Virtual Labs',
        'Distance Learning',
        'Collaborative Projects'
      ]
    },
    {
      title: 'STEM Education',
      icon: Microscope,
      description: 'Enhanced STEM learning experiences',
      features: [
        'Scientific Simulations',
        'Virtual Experiments',
        '3D Models',
        'Interactive Diagrams'
      ]
    },
    {
      title: 'Special Education',
      icon: Brain,
      description: 'Adaptive learning solutions',
      features: [
        'Sensory Experiences',
        'Life Skills Training',
        'Therapeutic Tools',
        'Personalized Learning'
      ]
    }
  ],
  products: [
    {
      name: 'ClassVR Premium',
      category: 'VR Hardware',
      image: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=800',
      description: 'Complete VR solution for classrooms.',
      features: [
        'All-in-One VR Headsets',
        'Classroom Management Portal',
        'Content Library Access',
        'Teacher Controls',
        'Student Analytics',
        'Sanitization Case',
        'Professional Training',
        'Technical Support'
      ]
    },
    {
      name: 'ClassVR Portal',
      category: 'Software Platform',
      image: 'https://images.unsplash.com/photo-1488998427799-e3362cec87c3?w=800',
      description: 'Comprehensive VR content management system.',
      features: [
        'Lesson Planning Tools',
        'Content Library',
        'Student Progress Tracking',
        'Device Management',
        'Custom Content Upload',
        'Assessment Tools',
        'Collaboration Features',
        'Resource Sharing'
      ]
    }
  ],
  technologies: [
    {
      title: 'VR Technology',
      description: 'Advanced virtual reality hardware',
      icon: Gamepad2,
      details: [
        'All-in-One Design',
        'Hand Controllers',
        'Gesture Control',
        'Classroom Safety'
      ]
    },
    {
      title: 'Content Platform',
      description: 'Extensive educational content library',
      icon: Globe,
      details: [
        'Curriculum Resources',
        'Interactive Content',
        '360° Experiences',
        '3D Models'
      ]
    },
    {
      title: 'Learning Analytics',
      description: 'Comprehensive student tracking',
      icon: Brain,
      details: [
        'Progress Monitoring',
        'Assessment Tools',
        'Engagement Metrics',
        'Performance Reports'
      ]
    },
    {
      title: 'Innovation',
      description: 'Cutting-edge educational technology',
      icon: Rocket,
      details: [
        'AR Integration',
        'Mixed Reality',
        'AI-Enhanced Learning',
        'Adaptive Content'
      ]
    }
  ]
  }

};