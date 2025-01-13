import {
  GraduationCap,
  Brain,
  Users,
  Gamepad2,
  Globe,
  BookOpen,
  Microscope,
  Rocket
} from 'lucide-react';

export const classvrData = {
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
};