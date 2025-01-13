import {
  Monitor,
  Video,
  Network,
  Cpu,
  Users,
  Building2,
  GraduationCap,
  Presentation
} from 'lucide-react';

export const kramerData = {
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
};