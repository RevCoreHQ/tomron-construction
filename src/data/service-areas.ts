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
    slug: 'langley',
    city: 'Langley',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Langley | Tomron Construction',
    metaDescription:
      'Expert siding installation, window replacement, building envelope, and renovation services in Langley, BC. Family-owned, 10+ years experience. Free quotes.',
    h1: 'Siding & Exterior Construction in Langley',
    intro:
      'Langley homeowners trust Tomron Construction for expert siding installation, window and door replacement, building envelope solutions, and home renovations. From the charming streets of Fort Langley to the growing communities of Willoughby and Brookswood, our team brings reliable craftsmanship and honest service to every Langley project.',
    isPrimary: true,
    body: [
      {
        heading: 'Serving Langley\'s Growing Communities',
        text: "Langley is one of the fastest-growing communities in the Lower Mainland, with a mix of heritage homes, established neighbourhoods, and brand-new developments. Whether your home is a character property in Fort Langley that needs careful siding restoration, a family home in Walnut Grove requiring window upgrades, or a newer build in Willoughby where you want to enhance curb appeal, Tomron Construction has the experience to handle it. We tailor every project to the specific needs of your home and neighbourhood.",
      },
      {
        heading: 'Weather Protection for Langley Homes',
        text: "Langley's location in the Fraser Valley means homes face significant rainfall, morning fog, and temperature swings throughout the year. Proper exterior protection is essential. Tomron Construction installs siding, flashing, and building envelope systems designed for these demanding conditions, using premium materials and installation methods that ensure your home stays dry and comfortable for decades to come.",
      },
    ],
  },
  {
    slug: 'surrey',
    city: 'Surrey',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Surrey | Tomron Construction',
    metaDescription:
      'Professional siding, window, door, and building envelope services in Surrey, BC. 10+ years experience, family-owned. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Surrey',
    intro:
      'Surrey is the Lower Mainland\'s largest city and one of our busiest service areas. Tomron Construction provides siding installation, window and door replacement, building envelope solutions, and home renovations to homeowners across every Surrey neighbourhood — from Cloverdale and South Surrey to Newton, Fleetwood, and Guildford.',
    isPrimary: true,
    body: [
      {
        heading: 'Covering All of Surrey',
        text: "Surrey's massive size and diverse housing stock means every project is different. Older homes in Newton and Whalley often need comprehensive siding replacement and building envelope repairs, while newer developments in Grandview Heights and Clayton may benefit from energy-efficient window upgrades or custom exterior finishes. Tomron Construction has completed projects across Surrey's many communities and understands the specific needs and building styles found in each area.",
      },
      {
        heading: 'Quality Exterior Solutions for Surrey Homes',
        text: "With its mix of rain, wind, and occasional coastal weather, Surrey homes need exterior systems built to last. Tomron Construction uses premium materials and proven installation techniques to ensure your siding, windows, and building envelope perform reliably through every season. We provide free on-site consultations so you can see exactly what your home needs before any work begins.",
      },
    ],
  },
  {
    slug: 'delta',
    city: 'Delta',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Delta | Tomron Construction',
    metaDescription:
      'Siding installation, window replacement, and home renovation services in Delta, BC. Family-owned contractor, 10+ years experience. Free quotes.',
    h1: 'Siding & Exterior Construction in Delta',
    intro:
      'Delta homeowners count on Tomron Construction for quality siding, window, and door installation, building envelope repairs, and home renovations. From Ladner and North Delta to the farming communities of East Delta, our team provides expert craftsmanship backed by over a decade of Lower Mainland experience.',
    isPrimary: true,
    body: [
      {
        heading: 'Serving Ladner, Tsawwassen & North Delta',
        text: "Delta's unique geography — bordered by the ocean, river, and farmland — creates specific challenges for home exteriors. Coastal moisture, wind exposure, and salt air can accelerate siding deterioration and compromise building envelopes. Tomron Construction understands these conditions and selects materials and installation methods that protect Delta homes for the long term, whether your property is in the heritage heart of Ladner or the residential neighbourhoods of North Delta.",
      },
      {
        heading: 'Protecting Your Investment',
        text: "Delta's desirable location and strong real estate market mean your home is a significant investment. Quality exterior work from Tomron Construction protects that investment with lasting curb appeal and reliable weather protection. We use premium siding materials, precision window installations, and meticulous flashing details that add real value to your property.",
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
    slug: 'tsawwassen',
    city: 'Tsawwassen',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Tsawwassen | Tomron Construction',
    metaDescription:
      'Professional siding, window, and exterior services in Tsawwassen, BC. Family-owned with 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Tsawwassen',
    intro:
      'Tsawwassen homeowners trust Tomron Construction for expert siding, window, and door installation, building envelope solutions, and home renovations. Our team understands the unique coastal conditions that Tsawwassen properties face and delivers exterior work built to last in an oceanside environment.',
    isPrimary: true,
    body: [
      {
        heading: 'Coastal Expertise for Tsawwassen Homes',
        text: "Tsawwassen's peninsula location means homes are exposed to salt air, coastal winds, and persistent moisture — conditions that can accelerate siding deterioration and compromise building envelopes more quickly than in inland communities. Tomron Construction selects materials and installation methods specifically suited to coastal environments, ensuring your exterior stands up to Tsawwassen's unique weather patterns year after year.",
      },
      {
        heading: 'Premium Exterior Work in a Premium Community',
        text: "Tsawwassen's desirable location and established residential character mean homeowners expect quality. Tomron Construction delivers premium siding installations, precise window replacements, and meticulous building envelope work that matches the high standard of Tsawwassen homes. From the established streets near the village to Beach Grove and newer developments, we bring the same attention to detail to every project.",
      },
    ],
  },
  {
    slug: 'white-rock',
    city: 'White Rock',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in White Rock | Tomron Construction',
    metaDescription:
      'Expert siding installation, window replacement, and renovation services in White Rock, BC. 10+ years experience, family-owned. Free quotes.',
    h1: 'Siding & Exterior Construction in White Rock',
    intro:
      'White Rock homeowners choose Tomron Construction for expert exterior work that protects and enhances their coastal properties. From siding installation and window replacement to building envelope solutions and full renovations, our family-run team delivers quality craftsmanship throughout this oceanside community.',
    isPrimary: true,
    body: [
      {
        heading: 'Built for White Rock\'s Oceanside Conditions',
        text: "White Rock's stunning ocean views come with exterior challenges — salt spray, coastal winds, and persistent humidity put extra demands on siding, windows, and building envelopes. Tomron Construction understands these conditions and uses materials and techniques proven to perform in coastal environments. Whether your home overlooks the promenade or sits in the hillside neighbourhoods above, we ensure your exterior is protected against the elements.",
      },
      {
        heading: 'Enhancing White Rock\'s Character Homes',
        text: "White Rock is home to many beautiful character properties and heritage-style homes alongside modern builds. Tomron Construction has the experience to work with all architectural styles, whether you need historically sympathetic siding restoration or a contemporary exterior upgrade. We deliver clean, detailed work that enhances your home's curb appeal and value.",
      },
    ],
  },
  {
    slug: 'vancouver',
    city: 'Vancouver',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Vancouver | Tomron Construction',
    metaDescription:
      'Siding installation, window replacement, building envelope, and home renovation in Vancouver, BC. 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Vancouver',
    intro:
      'Vancouver homeowners rely on Tomron Construction for professional siding installation, window and door replacement, building envelope repairs, and home renovations. From East Vancouver character homes to West Side properties, our experienced team delivers premium exterior craftsmanship across the city.',
    isPrimary: true,
    body: [
      {
        heading: 'Serving Vancouver\'s Diverse Neighbourhoods',
        text: "Vancouver's housing ranges from heritage Craftsman homes in Kitsilano and Mount Pleasant to modern builds in Cambie and South Granville. Each neighbourhood and housing type presents unique exterior needs. Tomron Construction has the experience to handle everything from restoring heritage siding details to installing contemporary cladding systems on newer properties. We work with homeowners across all Vancouver neighbourhoods to deliver exterior solutions that match the character of each home.",
      },
      {
        heading: 'Vancouver Rain Demands Quality Exteriors',
        text: "Vancouver's famously wet climate makes quality exterior work essential, not optional. Failed siding, deteriorated flashing, and compromised building envelopes lead to moisture intrusion, mould, and structural damage. Tomron Construction installs exterior systems engineered for Vancouver's rainfall, using premium moisture barriers, meticulous sealing, and proven materials that keep your home dry and protected year-round.",
      },
    ],
  },
  {
    slug: 'new-westminster',
    city: 'New Westminster',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in New Westminster | Tomron Construction',
    metaDescription:
      'Professional siding, window, and exterior services in New Westminster, BC. Family-owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in New Westminster',
    intro:
      'New Westminster homeowners trust Tomron Construction for quality siding installation, window and door replacement, building envelope solutions, and home renovations. Our team has extensive experience working with the diverse housing stock found throughout New Westminster\'s historic and modern neighbourhoods.',
    isPrimary: true,
    body: [
      {
        heading: 'Heritage Homes & Modern Builds',
        text: "As BC's oldest city, New Westminster has a rich architectural heritage. From the grand Victorian and Edwardian homes on Queens Park to mid-century ranchers in Massey Heights and modern developments in Sapperton and Queensborough, Tomron Construction works with every era and style. We understand the specific care that heritage homes require and bring the same precision and quality to contemporary properties.",
      },
      {
        heading: 'Reliable Exterior Protection',
        text: "New Westminster's hillside topography and Fraser River proximity create unique moisture exposure patterns. Tomron Construction designs exterior systems that account for these conditions, using quality siding materials, proper drainage planes, and sealed window and door installations that protect your home for the long term.",
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
      'Tomron Construction provides expert siding, window, door, and renovation services to Abbotsford homeowners. Whether your home is in the established neighbourhoods near downtown or the newer developments in east Abbotsford, our team delivers the same quality craftsmanship and personal service that has built our reputation across the Lower Mainland.',
    isPrimary: true,
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
    slug: 'mission',
    city: 'Mission',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Mission | Tomron Construction',
    metaDescription:
      'Professional siding, window, and home renovation services in Mission, BC. Family-owned with 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Mission',
    intro:
      'Mission homeowners rely on Tomron Construction for expert siding installation, window and door replacement, building envelope solutions, and home renovations. Our Maple Ridge base means Mission is right in our backyard, and we bring the same personal, family-run service to every project in the community.',
    isPrimary: true,
    body: [
      {
        heading: 'Your Neighbour Contractor',
        text: "As a Maple Ridge-based company, Mission is one of the closest communities we serve. We know the local housing styles, the common exterior issues from Fraser Valley weather, and what Mission homeowners expect from a contractor. Many of our Mission clients come through referrals from neighbours and friends who have experienced our quality and reliability firsthand.",
      },
      {
        heading: 'Built for Fraser Valley Weather',
        text: "Mission's location at the eastern edge of the Lower Mainland means heavy rainfall and significant moisture exposure throughout much of the year. Tomron Construction installs exterior systems designed for these conditions — quality siding with proper moisture barriers, precision window installations, and building envelope solutions that keep your home dry and protected regardless of what the weather brings.",
      },
    ],
  },
  {
    slug: 'richmond',
    city: 'Richmond',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Richmond | Tomron Construction',
    metaDescription:
      'Expert siding, window, and exterior services in Richmond, BC. 10+ years experience, family-owned contractor. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Richmond',
    intro:
      'Richmond homeowners trust Tomron Construction for professional siding installation, window and door replacement, building envelope repairs, and home renovations. Our team delivers reliable, high-quality exterior work throughout Richmond\'s diverse residential communities.',
    isPrimary: true,
    body: [
      {
        heading: 'Serving Richmond\'s Residential Communities',
        text: "Richmond's housing stock includes everything from established single-family homes in Steveston and Broadmoor to newer developments across the city. Each type of property has different exterior needs, and Tomron Construction brings the experience and expertise to handle them all. Whether you need a complete siding replacement, energy-efficient windows, or a building envelope assessment, we deliver quality work tailored to your home.",
      },
      {
        heading: 'Low-Lying Climate Considerations',
        text: "Richmond's sea-level geography and proximity to the Fraser River create unique moisture challenges for homeowners. Persistent humidity, coastal weather, and seasonal rainfall demand exterior systems that perform reliably over the long term. Tomron Construction uses premium materials and meticulous installation techniques to ensure your home stays protected in Richmond's specific conditions.",
      },
    ],
  },
  {
    slug: 'chilliwack',
    city: 'Chilliwack',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Chilliwack | Tomron Construction',
    metaDescription:
      'Siding installation, window replacement, and renovation services in Chilliwack, BC. Family-owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Chilliwack',
    intro:
      'Chilliwack homeowners count on Tomron Construction for quality siding, window, and door installation, building envelope repairs, and home renovations. We bring the same craftsmanship and personal service that has built our reputation across the Lower Mainland to every Chilliwack project.',
    isPrimary: false,
    nearbyNote: 'Chilliwack is within our extended service area. Contact us to confirm availability for your specific project.',
    body: [
      {
        heading: 'Fraser Valley Expertise',
        text: "Chilliwack's location in the upper Fraser Valley means homes face heavy rainfall, mountain runoff, and significant moisture exposure. Tomron Construction understands these conditions and installs exterior systems built to handle them — from quality siding with proper moisture management to sealed windows and doors that keep your home comfortable and dry year-round.",
      },
      {
        heading: 'Quality Work, Fair Pricing',
        text: "Tomron Construction brings the same quality materials, expert installation, and transparent pricing to Chilliwack that we deliver in our core service area. We provide free on-site consultations and detailed proposals so you know exactly what to expect before any work begins.",
      },
    ],
  },
  {
    slug: 'port-coquitlam',
    city: 'Port Coquitlam',
    state: 'BC',
    metaTitle: 'Siding & Exterior Contractor in Port Coquitlam | Tomron Construction',
    metaDescription:
      'Professional siding, window, and renovation services in Port Coquitlam, BC. Family-owned, 10+ years experience. Free quotes from Tomron Construction.',
    h1: 'Siding & Exterior Construction in Port Coquitlam',
    intro:
      'Port Coquitlam homeowners trust Tomron Construction for expert siding installation, window and door replacement, building envelope repairs, and home renovations. As a Maple Ridge-based company, Port Coquitlam is one of our closest service areas, and we bring the same personal attention and quality craftsmanship to every project.',
    isPrimary: true,
    body: [
      {
        heading: 'A Neighbour You Can Trust',
        text: "Port Coquitlam's close proximity to our Maple Ridge base means we know this community well. We have completed numerous projects throughout PoCo's neighbourhoods, from the established homes near the town centre to newer developments in the Citadel and Mary Hill areas. Our reputation in Port Coquitlam is built on quality workmanship, clear communication, and standing behind every job we complete.",
      },
      {
        heading: 'Exterior Protection for PoCo Homes',
        text: "Port Coquitlam sits in a high-rainfall zone, and homes here need exterior systems that handle persistent moisture. Tomron Construction installs siding, windows, flashing, and building envelope systems designed for these conditions, ensuring your home stays dry, comfortable, and structurally sound through every season.",
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
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
