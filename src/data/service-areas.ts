export interface AreaBodySection {
  heading: string;
  text: string;
}

export interface ServiceAreaData {
  slug: string;
  city: string;
  state: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  isPrimary: boolean;
  nearbyNote?: string;
  heroImage?: string;
  body: AreaBodySection[];
}

export const serviceAreas: ServiceAreaData[] = [
  {
    slug: 'maple-ridge',
    city: 'Maple Ridge',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Maple Ridge | Tomron Construction',
    metaDescription:
      'Professional siding installation, window replacement, building envelope, and home renovation services in Maple Ridge, BC. Locally owned. 10+ years experience. Free quotes.',
    h1: 'Siding & Exterior Construction in Maple Ridge',
    intro:
      'Tomron Construction is proudly based in Maple Ridge and has served this community for over a decade. As your neighbours, we understand the unique challenges that Maple Ridge homes face — from heavy rainfall and moisture exposure to the specific building styles and materials common in the area. Whether you need new siding, window replacements, building envelope repairs, or a complete renovation, our family-run team delivers the quality craftsmanship your home deserves.',
    isPrimary: true,
    body: [
      {
        heading: 'Your Local Maple Ridge Contractor',
        text: "Being based in Maple Ridge means we are not just contractors who drive in from across the Lower Mainland — we are part of this community. Our crew lives and works here, our family is rooted here, and our reputation is built on the quality of work visible on homes throughout Maple Ridge neighbourhoods from Albion and Thornhill to Silver Valley and the town centre. When you hire Tomron Construction, you are hiring a neighbour who takes personal pride in every project and stands behind the work long after the job is complete.",
      },
      {
        heading: 'Protecting Maple Ridge Homes From the Elements',
        text: "Maple Ridge receives substantial annual rainfall, and many homes in the area were built during periods when building envelope standards were less rigorous than they are today. This combination means siding failures, flashing deterioration, and moisture intrusion are common issues for local homeowners. Tomron Construction specializes in diagnosing and resolving these problems with comprehensive exterior solutions — new siding with proper moisture barriers, replacement of failed flashing, window and door upgrades that seal out the weather, and building envelope improvements that protect your home for decades to come.",
      },
      {
        heading: 'Full-Service Exterior and Renovation Work',
        text: "Beyond exterior cladding and weatherproofing, Tomron Construction handles home renovations of every scale in Maple Ridge. Whether you are modernizing a kitchen, opening up a floor plan, or completing a whole-house transformation, our experienced team manages every phase of the project with clear communication, honest pricing, and disciplined execution. Many of our Maple Ridge clients start with a siding or window project and return to us for interior work once they experience the quality and professionalism we bring to every job.",
      },
    ],
  },
  {
    slug: 'coquitlam',
    city: 'Coquitlam',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Coquitlam | Tomron Construction',
    metaDescription:
      'Siding installation, window replacement, building envelope, and renovation services in Coquitlam, BC. Locally owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Coquitlam',
    intro:
      'Coquitlam homeowners trust Tomron Construction for expert siding installation, window and door replacement, building envelope solutions, and home renovations. From the established neighbourhoods of Maillardville and Ranch Park to the newer developments in Burke Mountain and Westwood Plateau, our team delivers the same high standard of craftsmanship across every Coquitlam community.',
    isPrimary: true,
    body: [
      {
        heading: 'Serving All Coquitlam Neighbourhoods',
        text: "Coquitlam's diverse housing stock ranges from mid-century ranchers and split-levels in established neighbourhoods to modern custom homes on Burke Mountain and luxury properties in Westwood Plateau. Each type of home presents different exterior challenges and opportunities. Tomron Construction has worked on properties across the full spectrum — from complete siding replacements on older homes that need updated moisture protection to precision window installations on newer builds where aesthetics and energy efficiency are the priority. We tailor our approach to your specific home, neighbourhood, and goals.",
      },
      {
        heading: 'Coquitlam Climate Considerations',
        text: "Coquitlam sits at the base of the mountains, which means it receives even more rainfall than many other Lower Mainland communities. Homes on north-facing slopes and in higher-elevation neighbourhoods like Burke Mountain face particularly intense moisture exposure. Tomron Construction designs every exterior installation with these conditions in mind, using premium moisture barriers, meticulous flashing details, and materials rated for extended wet-weather performance. The result is a home exterior that looks great and performs reliably for decades, regardless of what BC weather throws at it.",
      },
    ],
  },
  {
    slug: 'pitt-meadows',
    city: 'Pitt Meadows',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Pitt Meadows | Tomron Construction',
    metaDescription:
      'Professional siding, window, door, and renovation services in Pitt Meadows, BC. Family-owned contractor with 10+ years experience. Free quotes.',
    h1: 'Siding & Exterior Construction in Pitt Meadows',
    intro:
      'Pitt Meadows is a close-knit community and one of our most active service areas. Tomron Construction provides siding installation, window and door replacement, building envelope repairs, and home renovations to Pitt Meadows homeowners with the personal attention and quality workmanship that a family-run business delivers.',
    isPrimary: true,
    body: [
      {
        heading: 'A Community We Know Well',
        text: "As a Maple Ridge-based company, Pitt Meadows is right next door and one of the communities we serve most frequently. We know the housing styles, the common exterior issues, and the municipal requirements that apply to renovation and exterior work in Pitt Meadows. Many of our Pitt Meadows clients have come to us through referrals from neighbours who saw our work on nearby homes — that word-of-mouth reputation is something we work hard to maintain with every project we complete.",
      },
      {
        heading: 'Exterior Protection for Pitt Meadows Homes',
        text: "Pitt Meadows' location in the Fraser Valley lowlands means homes here face persistent moisture from rainfall, morning fog, and seasonal flooding risks. Maintaining a solid building envelope — quality siding, proper flashing, sealed windows and doors, and effective moisture barriers — is not just about aesthetics; it is essential protection for your home's structure and your family's health. Tomron Construction provides comprehensive exterior solutions that address every layer of your home's weather protection system.",
      },
    ],
  },
  {
    slug: 'burnaby',
    city: 'Burnaby',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Burnaby | Tomron Construction',
    metaDescription:
      'Expert siding installation, window replacement, and home renovation services in Burnaby, BC. 10+ years experience, industry-leading warranty. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Burnaby',
    intro:
      'Burnaby homeowners choose Tomron Construction for reliable, high-quality exterior work and home renovations. From older character homes in the Heights and Capitol Hill to modern properties in Brentwood and Metrotown, we bring expert craftsmanship and personalized service to every project.',
    isPrimary: true,
    body: [
      {
        heading: 'Working With Burnaby\'s Diverse Housing Stock',
        text: "Burnaby is one of the most architecturally diverse cities in the Lower Mainland, with housing ranging from 1950s bungalows and wartime homes to contemporary townhouses and custom-built estates. Older Burnaby homes often need comprehensive exterior upgrades — new siding to replace aging wood or vinyl, window replacements to improve energy efficiency, and building envelope improvements to bring moisture protection up to modern standards. Tomron Construction has extensive experience working with older homes, including navigating the specific considerations around heritage-style properties, asbestos abatement coordination, and structural assessments.",
      },
      {
        heading: 'Quality That Burnaby Homeowners Expect',
        text: "Burnaby's strong real estate market means exterior improvements need to deliver both performance and curb appeal. Tomron Construction works with premium materials and pays meticulous attention to finishing details — clean lines, precise trim work, and colour coordination that enhances your home's architectural character. Whether you are investing in your forever home or preparing a property for sale, our work adds measurable value and lasting protection.",
      },
    ],
  },
  {
    slug: 'abbotsford',
    city: 'Abbotsford',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Abbotsford | Tomron Construction',
    metaDescription:
      'Siding installation, window replacement, and home renovation services in Abbotsford, BC. Family-owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Abbotsford',
    intro:
      'Tomron Construction extends its expert siding, window, door, and renovation services to Abbotsford homeowners. Whether your home is in the established neighbourhoods near downtown or the newer developments in east Abbotsford, our team delivers the same quality craftsmanship and personal service that has built our reputation across the Lower Mainland.',
    isPrimary: false,
    nearbyNote: 'Abbotsford is within our extended service area. Contact us to confirm availability for your specific project.',
    body: [
      {
        heading: 'Serving the Fraser Valley',
        text: "Abbotsford's mix of established homes and newer developments means a wide range of exterior and renovation needs. Older homes may need comprehensive siding replacement and building envelope upgrades, while newer properties often benefit from energy-efficient window upgrades or interior renovations that better utilize the generous lot sizes common in Abbotsford. Tomron Construction brings the same standard of quality to Abbotsford that we deliver throughout our core service area, with competitive pricing that reflects fair, honest business practices.",
      },
      {
        heading: 'Fraser Valley Climate Protection',
        text: "The Fraser Valley receives significant rainfall, and Abbotsford's proximity to the mountains means intense precipitation events are common throughout fall, winter, and spring. Protecting your home with quality siding, proper flashing, sealed windows, and an intact building envelope is critical. Tomron Construction installs exterior systems engineered for these conditions, ensuring your home stays dry, comfortable, and structurally sound through every season.",
      },
    ],
  },
  {
    slug: 'lower-mainland',
    city: 'Lower Mainland',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor — Lower Mainland BC | Tomron Construction',
    metaDescription:
      'Professional siding, window, door, building envelope, and renovation services across the Lower Mainland, BC. Family-owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Exterior Construction & Renovation Across the Lower Mainland',
    intro:
      'Tomron Construction serves homeowners throughout the Lower Mainland with expert siding installation, window and door replacement, building envelope solutions, and home renovations. Based in Maple Ridge, our team travels across the region to deliver quality craftsmanship to communities from Vancouver to Chilliwack and everywhere in between.',
    isPrimary: false,
    body: [
      {
        heading: 'One Team, Many Communities',
        text: "While we are based in Maple Ridge and most active in the eastern Lower Mainland communities, Tomron Construction regularly completes projects across the broader region. Our service area covers Maple Ridge, Pitt Meadows, Coquitlam, Port Coquitlam, Port Moody, Burnaby, New Westminster, Surrey, Langley, Abbotsford, Mission, and surrounding communities. If you are unsure whether we serve your area, give us a call — we are happy to discuss your project and confirm availability.",
      },
      {
        heading: 'Built for BC Weather',
        text: "Every exterior system Tomron Construction installs is engineered for the Lower Mainland's demanding climate. Heavy rainfall, persistent humidity, seasonal temperature swings, and coastal winds all take a toll on home exteriors. We use materials and installation methods specifically chosen for long-term performance in these conditions. From siding and flashing to windows, doors, and building envelope systems, every component is installed with the understanding that it needs to perform reliably for decades in one of Canada's wettest regions.",
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
