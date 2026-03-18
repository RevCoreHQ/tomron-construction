export interface ProductBrand {
  slug: string;
  name: string;
  category: 'siding' | 'windows' | 'glass' | 'flashing' | 'building-products';
  categoryLabel: string;
  description: string;
  website: string;
  catalogueUrl?: string;
  features: string[];
  isAuthorizedVendor?: boolean;
  logoDomain: string;
  logoUrl?: string;
}

export const productBrands: ProductBrand[] = [
  // Siding Products
  {
    slug: 'james-hardie',
    name: 'James Hardie',
    category: 'siding',
    categoryLabel: 'Fiber Cement Siding',
    description:
      'The world leader in fiber cement siding. James Hardie products are Engineered for Climate with the HZ5 formulation, specifically designed to resist moisture and freeze damage in Canadian conditions. Offering HardiePlank lap siding, HardieShingle, HardiePanel vertical siding, and the premium Artisan Collection, all backed by ColorPlus Technology for lasting colour.',
    website: 'https://www.jameshardie.ca/products',
    catalogueUrl: 'https://www.jameshardie.ca/forms/product-catalog-download',
    logoDomain: 'jameshardie.ca',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e091305324f22ae738.png',
    features: [
      'Engineered for Climate, HZ5 formulation for Canadian weather',
      'ColorPlus Technology, factory-applied, baked-on colour',
      'Non-combustible fiber cement, won\'t rot, warp, or attract pests',
      '30-year substrate warranty, 15-year finish warranty',
    ],
  },
  {
    slug: 'mitten-siding',
    name: 'Mitten Building Products',
    category: 'siding',
    categoryLabel: 'Vinyl Siding',
    description:
      'Canada\'s original vinyl siding manufacturer with over 60 years of experience. Mitten offers the industry\'s largest and boldest colour palette, including the Sentry line with the first-ever true Black vinyl siding. All products are Canadian-made and backed by a lifetime warranty with No Fade Promise on Rustic colours.',
    website: 'https://www.mittensiding.com/',
    logoDomain: 'mittensiding.com',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e0c625850467d8bbfe.png',
    features: [
      'Canadian-made, over 60 years of manufacturing experience',
      'Sentry line, industry\'s first true Black vinyl siding',
      'Largest colour palette in the industry, 37+ colours',
      'Lifetime warranty with No Fade Promise',
    ],
  },
  {
    slug: 'newtech-wood',
    name: 'NewTechWood',
    category: 'siding',
    categoryLabel: 'Composite Siding',
    description:
      'Premium composite siding and cladding made from 95% recycled materials. NewTechWood features UltraShield technology, a co-extruded cap protecting all sides from rot, fade, stains, and mould. Available in Norwegian Fluted, Belgian Fluted, Gap, and Shiplap profiles with natural brushed-wood finishes.',
    website: 'https://www.newtechwood.ca/products/composite-wall-siding/',
    logoDomain: 'newtechwood.ca',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e087f0f227fe4ae8c9.jpeg',
    features: [
      'UltraShield technology, impenetrable protective cap on all sides',
      '95% recycled materials, wood fibers and reclaimed plastic',
      'Zero maintenance, no painting, staining, or sealing ever',
      '25-year warranty with multiple profile options',
    ],
  },
  {
    slug: 'mac-metals',
    name: 'MAC Metal Architectural',
    category: 'siding',
    categoryLabel: 'Steel Siding',
    description:
      'Over 30 years of premium pre-painted steel siding and roofing, designed and manufactured entirely in Canada. MAC offers contemporary profiles including Board & Batten, Reverse Board & Batten, and the Wood Collection that recreates the beauty of real wood without maintenance. Made from 100% recyclable materials.',
    website: 'https://macmetalarchitectural.com/en/',
    catalogueUrl: 'https://macmetalarchitectural.com/wp-content/uploads/2022/05/SIDING-CATALOG_ENG_2023_W.pdf',
    logoDomain: 'macmetalarchitectural.com',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e087f2fb08b0b9b2fd.png',
    features: [
      'Made in Canada, over 30 years of premium steel fabrication',
      'Wood Collection, six distinct wood-grain finishes per colour',
      '40-year warranty on steel siding products',
      '100% recyclable materials with recycled content',
    ],
  },

  {
    slug: 'lp-smartside',
    name: 'LP SmartSide',
    category: 'siding',
    categoryLabel: 'Engineered Wood Siding',
    description:
      'LP SmartSide siding and trim is engineered wood treated to the core through the proprietary LP SmartGuard process, providing superior protection against moisture, fungal decay, and termites. Available in lap siding, panel, shake, nickel gap, and soffit profiles with 16 prefinished ExpertFinish colours plus a Naturals Collection of wood-tone finishes.',
    website: 'https://www.lpcorp.com/products/siding-trim',
    logoDomain: 'lpcorp.com',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69ba2c83dac58450deb8a304.png',
    features: [
      'SmartGuard treated to the core, resists moisture, decay, and termites',
      'ExpertFinish, 16 prefinished colours plus Naturals wood-tone collection',
      'Industry-leading 5/50 warranty, 5-year labour, 50-year substrate',
      'Multiple profiles, lap, panel, shake, nickel gap, and soffit',
    ],
  },

  // Windows & Doors
  {
    slug: 'centra-windows',
    name: 'Centra Windows',
    category: 'windows',
    categoryLabel: 'Vinyl Windows & Doors',
    description:
      'BC\'s #1 window manufacturer, 100% employee-owned and based in Langley, BC. Centra has 40 years of experience manufacturing custom vinyl windows and exterior doors designed for BC\'s climate. Every window is built to order at their Langley plant, backed by an industry-leading 30-year warranty.',
    website: 'https://www.centrawindows.com/',
    logoDomain: 'centrawindows.com',
    features: [
      '100% employee-owned, every team member is an owner',
      'Custom manufactured in Langley, BC, built for local climate',
      'Industry-leading 30-year warranty',
      '40 years of experience, over 550 large-scale projects completed',
    ],
  },
  {
    slug: 'tyee-windows',
    name: 'Tyee Windows',
    category: 'windows',
    categoryLabel: 'Vinyl Windows & Patio Doors',
    description:
      'Family-owned and operated vinyl window manufacturer based in Abbotsford, BC since 1991. Tyee manufactures 100% of their products in-house with strict quality inspections at every stage. All products meet Energy Star standards and feature low-e glass that reduces UV rays by up to 75%.',
    website: 'https://www.tyeewindows.com/',
    logoDomain: 'tyeewindows.com',
    features: [
      'Family-owned, manufacturing in Abbotsford since 1991',
      '100% in-house manufacturing with strict quality inspections',
      'Energy Star certified, reduce energy costs by up to 15%',
      'Lifetime warranty on vinyl extrusions',
    ],
  },
  {
    slug: 'plygem',
    name: 'Ply Gem Canada',
    category: 'windows',
    categoryLabel: 'Windows, Doors & Siding',
    description:
      'North America\'s #1 exterior building products manufacturer. Ply Gem offers vinyl, aluminum-clad vinyl (Design Series), and aluminum-clad wood (Signature Series) windows, all manufactured in Canada. Part of the Cornerstone Building Brands family alongside Mitten Siding, with over 75 years of experience.',
    website: 'https://www.plygem.ca/windows/',
    catalogueUrl: 'https://www.plygem.ca/wp-content/uploads/2023/09/Ply-Gem-Window-Brochure.pdf',
    logoDomain: 'plygem.ca',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e087f2fba71bb9b302.jpeg',
    features: [
      'Made in Canada, part of the Well-Made Here Program',
      'Three material options, vinyl, aluminum-clad vinyl, aluminum-clad wood',
      'Design Series, bold exterior colours without the wood-frame price',
      'Industry-leading warranties across all product lines',
    ],
  },

  // Glass
  {
    slug: 'vitrum-glass',
    name: 'Vitrum Glass Group',
    category: 'glass',
    categoryLabel: 'Sealed Glass Units',
    description:
      'Western Canada\'s largest glass fabricator, manufacturing from a 200,000 sq ft facility in Langley, BC. Every window manufacturer in the Lower Mainland uses Vitrum\'s insulated glass units. As a certified fabricator for Vitro, Guardian, and Saint-Gobain, Vitrum provides exclusive access to the highest-performance low-e glass products available.',
    website: 'https://www.vitrum.ca/',
    logoDomain: 'vitrum.ca',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b2e0ad02764cf536f30f.jpeg',
    features: [
      'Largest glass fabricator in the Pacific Northwest',
      'Certified fabricator for Vitro, Guardian, and Saint-Gobain',
      'IGMAC certified sealed insulating glass units',
      'Exclusive access to Solarban, SunGuard, and Cool-Lite glass',
    ],
  },

  // Building Products
  {
    slug: 'inter-globe',
    name: 'Inter-Globe Building Supplies',
    category: 'building-products',
    categoryLabel: 'Building Supplies & Custom Metal',
    description:
      'Authorized vendor and trusted supplier based in Surrey, BC. Inter-Globe specializes in building supplies and custom metal forming services, offering James Hardie fiber cement, vinyl siding, soffits, gutters, building papers, and custom-fabricated metal flashings made to specification on computerized brake systems.',
    website: 'https://www.inter-globe.ca/',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69ba2c83ad02767181662789.png',
    isAuthorizedVendor: true,
    logoDomain: 'inter-globe.ca',
    features: [
      'Authorized Tomron Construction vendor',
      'Custom metal flashing fabrication, cost efficient and precise',
      'Full range of building supplies, siding, soffits, papers, fasteners',
      'Located in Surrey, BC, serving the Lower Mainland for 17+ years',
    ],
  },

  // Flashing
  {
    slug: 'tri-city-flashing',
    name: 'Tri-City Flashing (TCF)',
    category: 'flashing',
    categoryLabel: 'Metal Flashing & Installation',
    description:
      'Family-owned metal flashing specialists based in Port Coquitlam, BC since 1998. TCF handles both supply and installation of custom flashings for residential and commercial projects, with extensive experience in condo restoration, rain screen systems, and new construction. All flashings formed on computerized brake systems for 100% accuracy.',
    website: 'https://tricityflashing.com/',
    logoDomain: 'tricityflashing.com',
    logoUrl: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8b5b3c625853542d8ff6d.png',
    features: [
      'Family-owned, established in Port Coquitlam since 1998',
      'Supply-only or supply-and-install with competitive pricing',
      'Computerized brake system, 100% accuracy guaranteed',
      'A+ BBB rating, minimum 5-year craftsmanship guarantee',
    ],
  },
];

export const brandCategories = [
  { key: 'siding' as const, label: 'Siding Products', description: 'Premium siding from fiber cement to vinyl, composite, and steel.' },
  { key: 'windows' as const, label: 'Windows & Doors', description: 'Energy-efficient windows and doors from trusted BC manufacturers.' },
  { key: 'glass' as const, label: 'Glass & Sealed Units', description: 'High-performance insulated glass for superior energy efficiency.' },
  { key: 'building-products' as const, label: 'Building Products', description: 'Building supplies and custom fabrication from authorized vendors.' },
  { key: 'flashing' as const, label: 'Flashing & Metal Work', description: 'Precision metal flashing for long-term water management.' },
];

export function getBrandsByCategory(category: ProductBrand['category']) {
  return productBrands.filter((b) => b.category === category);
}
