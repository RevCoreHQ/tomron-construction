export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Siding & Cladding', href: '/services/exterior-siding-cladding' },
      { label: 'Metal Flashing', href: '/services/metal-flashing' },
      { label: 'Building Envelope', href: '/services/building-envelope' },
      { label: 'Home Renovation', href: '/services/home-renovation' },
      { label: 'Window Replacement', href: '/services/window-replacement' },
      { label: 'Door Replacement', href: '/services/door-replacement' },
    ],
  },
  {
    label: 'Products',
    href: '/products',
    children: [
      { label: 'All Products & Partners', href: '/products' },
      { label: 'Siding Comparison Guide', href: '/products/siding-comparison' },
      { label: 'Window Buying Guide', href: '/products/window-buying-guide' },
      { label: 'Glass Performance Guide', href: '/products/glass-performance' },
      { label: 'Building Envelope Guide', href: '/products/building-envelope' },
      { label: 'BC Rebates & Incentives', href: '/products/bc-rebates' },
      { label: 'Cost Estimator', href: '/products/cost-estimator' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Maple Ridge', href: '/service-areas/maple-ridge' },
      { label: 'Coquitlam', href: '/service-areas/coquitlam' },
      { label: 'Port Coquitlam', href: '/service-areas/port-coquitlam' },
      { label: 'Pitt Meadows', href: '/service-areas/pitt-meadows' },
      { label: 'Burnaby', href: '/service-areas/burnaby' },
      { label: 'Vancouver', href: '/service-areas/vancouver' },
      { label: 'Surrey', href: '/service-areas/surrey' },
      { label: 'Langley', href: '/service-areas/langley' },
      { label: 'View All Areas', href: '/service-areas' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav = {
  services: [
    { label: 'Siding & Cladding', href: '/services/exterior-siding-cladding' },
    { label: 'Metal Flashing', href: '/services/metal-flashing' },
    { label: 'Building Envelope', href: '/services/building-envelope' },
    { label: 'Home Renovation', href: '/services/home-renovation' },
    { label: 'Window Replacement', href: '/services/window-replacement' },
    { label: 'Door Replacement', href: '/services/door-replacement' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Process', href: '/process' },
    { label: 'Products & Partners', href: '/products' },
    { label: 'Cost Estimator', href: '/products/cost-estimator' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Maple Ridge', href: '/service-areas/maple-ridge' },
    { label: 'Coquitlam', href: '/service-areas/coquitlam' },
    { label: 'Burnaby', href: '/service-areas/burnaby' },
    { label: 'Vancouver', href: '/service-areas/vancouver' },
    { label: 'Surrey', href: '/service-areas/surrey' },
    { label: 'All Service Areas', href: '/service-areas' },
  ],
};
