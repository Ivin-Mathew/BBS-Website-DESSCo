import {
  Building2,
  Home,
  BarChart,
  Users,
  Calendar,
  FileText,
  Settings,
  Shield
} from 'lucide-react';

export const propgotoData = {
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
};