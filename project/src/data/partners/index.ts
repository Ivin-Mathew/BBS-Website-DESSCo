import { Monitor, Tv, Laptop, Smartphone, Headset, Building2, GraduationCap } from 'lucide-react';
import { artomeData } from './artome';
import { boeData } from './boe';
import { htcViveData } from './htc-vive';
import { kramerData } from './kramer';
import { vviewData } from './vview';
import { propgotoData } from './propgoto';
import { classvrData } from './classvr';

export const partnerData = {
  'artome': artomeData,
  'boe': boeData,
  'htc-vive': htcViveData,
  'kramer': kramerData,
  'vview': vviewData,
  'propgoto': propgotoData,
  'classvr': classvrData
};

export const partners = [
  {
    id: 'boe',
    name: 'BOE Technology Group',
    icon: Monitor,
    description: 'Global leader in semiconductor display technologies and IoT solutions.',
    category: 'Display Technology',
    website: 'https://www.boe.com/en/',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
    color: 'from-blue-600 to-blue-800'
  },
  {
    id: 'artome',
    name: 'ARTOME',
    icon: Tv,
    description: 'Revolutionary mobile presentation and display solutions.',
    category: 'Mobile Display Solutions',
    website: 'https://artome.fi/en/',
    bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
    color: 'from-purple-600 to-purple-800'
  },
  {
    id: 'kramer',
    name: 'Kramer',
    icon: Laptop,
    description: 'Advanced audio-visual solutions for enterprise and education sectors.',
    category: 'AV Solutions',
    website: 'https://www.kramerav.com/',
    bgImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200',
    color: 'from-green-600 to-green-800'
  },
  {
    id: 'vview',
    name: 'VView',
    icon: Smartphone,
    description: 'Innovative display technology solutions for diverse applications.',
    category: 'Display Solutions',
    website: 'https://vviewtech.com/',
    bgImage: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?w=1200',
    color: 'from-red-600 to-red-800'
  },
  {
    id: 'htc-vive',
    name: 'HTC VIVE',
    icon: Headset,
    description: 'Leading virtual reality technology for immersive experiences.',
    category: 'Virtual Reality',
    website: 'https://www.vive.com/us/',
    bgImage: 'https://images.unsplash.com/photo-1478416272538-5f7e51dc5400?w=1200',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    id: 'propgoto',
    name: 'propGOTO',
    icon: Building2,
    description: 'Automated property management solutions for real estate.',
    category: 'Property Management',
    website: 'https://propertyautomate.com/',
    bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
    color: 'from-yellow-600 to-yellow-800'
  },
  {
    id: 'classvr',
    name: 'ClassVR',
    icon: GraduationCap,
    description: 'Virtual and augmented reality solutions for education.',
    category: 'Educational Technology',
    website: 'https://www.classvr.com/',
    bgImage: 'https://images.unsplash.com/photo-1497493292307-31c376b6e479?w=1200',
    color: 'from-cyan-600 to-cyan-800'
  }
];