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
      { label: 'Siding & Cladding', href: '/services/exterior-siding-cladding' },
      { label: 'Metal Flashing', href: '/services/metal-flashing' },
      { label: 'Building Envelope', href: '/services/building-envelope' },
      { label: 'Home Renovation', href: '/services/home-renovation' },
      { label: 'Window Replacement', href: '/services/window-replacement' },
      { label: 'Door Replacement', href: '/services/door-replacement' },
    ],
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Process', href: '/process' },
  {
    label: 'Areas',
    href: '/service-areas',
    children: [
      { label: 'Maple Ridge', href: '/service-areas/maple-ridge' },
      { label: 'Coquitlam', href: '/service-areas/coquitlam' },
      { label: 'Pitt Meadows', href: '/service-areas/pitt-meadows' },
      { label: 'Burnaby', href: '/service-areas/burnaby' },
      { label: 'Abbotsford', href: '/service-areas/abbotsford' },
      { label: 'Lower Mainland', href: '/service-areas/lower-mainland' },
    ],
  },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
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
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  areas: [
    { label: 'Maple Ridge', href: '/service-areas/maple-ridge' },
    { label: 'Coquitlam', href: '/service-areas/coquitlam' },
    { label: 'Pitt Meadows', href: '/service-areas/pitt-meadows' },
    { label: 'Burnaby', href: '/service-areas/burnaby' },
    { label: 'Abbotsford', href: '/service-areas/abbotsford' },
    { label: 'Lower Mainland', href: '/service-areas/lower-mainland' },
  ],
};
