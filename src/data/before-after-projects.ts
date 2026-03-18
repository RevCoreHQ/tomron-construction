export interface BeforeAfterProject {
  id: string;
  title: string;
  location: string;
  description: string;
  service: string;
  // Replace these placeholder images with actual before/after photos from the client
  beforeImage: string;
  afterImage: string;
}

export const beforeAfterProjects: BeforeAfterProject[] = [
  {
    id: 'ba-1',
    title: 'Complete Siding Replacement',
    location: 'Maple Ridge, BC',
    description: 'Removed aging vinyl siding, repaired sheathing damage, installed rain screen and new James Hardie fiber cement board.',
    service: 'Siding & Cladding',
    // Placeholder: using existing gallery images until client provides real before/after pairs
    beforeImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb259736f3d988a.webp',
    afterImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab257249b849038a781.webp',
  },
  {
    id: 'ba-2',
    title: 'Full Window Upgrade',
    location: 'Coquitlam, BC',
    description: 'Replaced 12 single-pane windows with triple-glazed Ply Gem units. Improved energy efficiency and eliminated drafts.',
    service: 'Window Replacement',
    beforeImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2bfc81fd1318a9dbb.webp',
    afterImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb2591a763d9889.webp',
  },
  {
    id: 'ba-3',
    title: 'Exterior Renovation',
    location: 'Burnaby, BC',
    description: 'Complete exterior overhaul including new siding, windows, soffit, fascia, and custom metal flashing details.',
    service: 'Exterior Renovation',
    beforeImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab278565a8d38405c23.webp',
    afterImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2cab7f72b28488946.webp',
  },
];
