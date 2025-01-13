import { LucideIcon } from 'lucide-react';

interface Solution {
  title: string;
  icon: LucideIcon;
  description: string;
  features: string[];
}

interface Product {
  name: string;
  category: string;
  image: string;
  description: string;
  features: string[];
}

interface Technology {
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface PartnerData {
  name: string;
  icon: LucideIcon;
  description: string;
  longDescription: string;
  category: string;
  website: string;
  color: string;
  features: string[];
  solutions: Solution[];
  products: Product[];
  technologies: Technology[];
}

export interface KramerData extends PartnerData {}
export interface VViewData extends PartnerData {}
export interface PropGotoData extends PartnerData {}
export interface ClassVRData extends PartnerData {}