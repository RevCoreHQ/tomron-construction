export type ProjectType = 'windows' | 'siding' | 'both';

export interface WindowMaterial {
  id: string;
  label: string;
  description: string;
  pricePerWindow: [number, number]; // [low, high]
}

export interface SidingMaterial {
  id: string;
  label: string;
  description: string;
  pricePerSqFt: [number, number]; // [low, high]
}

export interface HomeSizeOption {
  id: string;
  label: string;
  sqFtRange: [number, number];
  exteriorSqFt: number; // approximate exterior wall area
}

export const windowMaterials: WindowMaterial[] = [
  {
    id: 'vinyl',
    label: 'Vinyl (PVC)',
    description: 'Most popular in BC. Excellent value and insulation.',
    pricePerWindow: [600, 1200],
  },
  {
    id: 'alum-clad-vinyl',
    label: 'Aluminum-Clad Vinyl',
    description: 'Premium curb appeal with vinyl insulation.',
    pricePerWindow: [900, 1800],
  },
  {
    id: 'alum-clad-wood',
    label: 'Aluminum-Clad Wood',
    description: 'Real wood interior with protected exterior.',
    pricePerWindow: [1200, 2500],
  },
];

export const sidingMaterials: SidingMaterial[] = [
  {
    id: 'vinyl-siding',
    label: 'Vinyl Siding',
    description: 'Affordable, low maintenance, wide colour selection.',
    pricePerSqFt: [8, 14],
  },
  {
    id: 'fiber-cement',
    label: 'Fiber Cement (Hardie)',
    description: 'Premium durability. Fire-resistant and paintable.',
    pricePerSqFt: [12, 20],
  },
  {
    id: 'engineered-wood',
    label: 'Engineered Wood (LP SmartSide)',
    description: 'Real wood look with engineered performance.',
    pricePerSqFt: [10, 17],
  },
  {
    id: 'composite',
    label: 'Composite',
    description: 'Modern look with minimal maintenance.',
    pricePerSqFt: [14, 24],
  },
];

export const homeSizes: HomeSizeOption[] = [
  { id: 'small', label: 'Small (under 1,200 sq ft)', sqFtRange: [800, 1200], exteriorSqFt: 1200 },
  { id: 'medium', label: 'Medium (1,200 – 2,000 sq ft)', sqFtRange: [1200, 2000], exteriorSqFt: 1800 },
  { id: 'large', label: 'Large (2,000 – 3,000 sq ft)', sqFtRange: [2000, 3000], exteriorSqFt: 2500 },
  { id: 'xlarge', label: 'Extra Large (3,000+ sq ft)', sqFtRange: [3000, 5000], exteriorSqFt: 3500 },
];

export const windowCountOptions = [
  { id: 'few', label: '1 – 5 windows', count: 3 },
  { id: 'some', label: '6 – 10 windows', count: 8 },
  { id: 'many', label: '11 – 15 windows', count: 13 },
  { id: 'full', label: '16+ windows', count: 18 },
];
