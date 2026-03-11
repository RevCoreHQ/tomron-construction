export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Swimming Pool Construction', href: '/services/swimming-pool-construction' },
      { label: '3D Pool Design', href: '/services/pool-design-3d' },
      { label: 'Water Features', href: '/services/water-features' },
      { label: 'Pool Remodeling & Upgrades', href: '/services/pool-renovation-remodeling' },
      { label: 'Landscape Construction', href: '/services/landscape-construction' },
      { label: 'Artificial Turf', href: '/services/artificial-turf' },
      { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
      { label: 'Patios & Walkways', href: '/services/patios-walkways' },
      { label: 'Irrigation & Lighting', href: '/services/irrigation-lighting' },
      { label: 'Concrete Services', href: '/services/concrete-services' },
      { label: 'Concrete Driveways', href: '/services/concrete-driveways' },
      { label: 'Retaining Walls', href: '/services/retaining-walls' },
      { label: 'Stamped & Colored Concrete', href: '/services/stamped-colored-concrete' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Process', href: '/process' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Utah County', href: '/service-areas/utah-county' },
      { label: 'Salt Lake County', href: '/service-areas/salt-lake-county' },
      { label: 'Davis County', href: '/service-areas/davis-county' },
      { label: 'Summit County', href: '/service-areas/summit-county' },
      { label: 'Tooele County', href: '/service-areas/tooele-county' },
      { label: 'Box Elder County', href: '/service-areas/box-elder-county' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Pool Construction', href: '/services/swimming-pool-construction' },
    { label: '3D Pool Design', href: '/services/pool-design-3d' },
    { label: 'Water Features', href: '/services/water-features' },
    { label: 'Landscape Construction', href: '/services/landscape-construction' },
    { label: 'Artificial Turf', href: '/services/artificial-turf' },
    { label: 'Outdoor Kitchens', href: '/services/outdoor-kitchens' },
    { label: 'Concrete Services', href: '/services/concrete-services' },
    { label: 'Retaining Walls', href: '/services/retaining-walls' },
    { label: 'Stamped Concrete', href: '/services/stamped-colored-concrete' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Financing', href: '/financing' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Utah County', href: '/service-areas/utah-county' },
    { label: 'Salt Lake County', href: '/service-areas/salt-lake-county' },
    { label: 'Davis County', href: '/service-areas/davis-county' },
    { label: 'Summit County', href: '/service-areas/summit-county' },
    { label: 'Tooele County', href: '/service-areas/tooele-county' },
    { label: 'Box Elder County', href: '/service-areas/box-elder-county' },
  ],
};
