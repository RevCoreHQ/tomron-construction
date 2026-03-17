export interface FAQ {
  question: string;
  answer: string;
}

export interface BodySection {
  heading: string;
  text: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'exterior' | 'renovation' | 'openings';
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  features: string[];
  body: BodySection[];
  faqs: FAQ[];
  relatedSlugs: string[];
  primaryKeyword: string;
}

export const services: ServiceData[] = [
  {
    slug: 'exterior-siding-cladding',
    title: 'Exterior Siding & Cladding',
    shortTitle: 'Siding & Cladding',
    category: 'exterior',
    metaTitle: 'Exterior Siding & Cladding Installation in the Lower Mainland | Tomron Construction',
    metaDescription: 'Professional siding and cladding installation in Maple Ridge, Coquitlam, Burnaby & the Lower Mainland. Custom solutions, industry-leading warranty. Free quotes from Tomron Construction.',
    h1: 'Expert Siding & Cladding Installation in the Lower Mainland',
    intro: "Your home's exterior is its first line of defence against BC's rain, wind, and seasonal extremes — and its first impression on everyone who passes by. Tomron Construction installs durable, beautiful siding and cladding systems tailored to your home's architecture and your personal style. From vinyl and fiber cement to wood and composite panels, we work with you to choose the right material for your budget, aesthetic, and long-term performance goals.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe287f0f26bbd4cf0b4.png',
    heroAlt: 'Professional siding installation on Lower Mainland home by Tomron Construction',
    features: [
      'Custom siding solutions tailored to your home and budget',
      'Vinyl, fiber cement, wood, and composite material options',
      'Complete removal and disposal of old siding included',
      'Meticulous flashing and moisture barrier integration',
      'Industry-leading warranty on products and installation',
      'Spotless cleanup and clear communication throughout',
    ],
    body: [
      {
        heading: 'Why Siding Matters in the Lower Mainland',
        text: "British Columbia's Lower Mainland receives more rainfall than almost anywhere else in Canada. That constant moisture exposure puts enormous stress on your home's exterior. Damaged, aging, or improperly installed siding allows water to penetrate the building envelope, leading to rot, mould, structural damage, and skyrocketing energy bills. Tomron Construction installs siding systems engineered for the Pacific Northwest climate, with integrated moisture management, proper flashing at every penetration, and materials rated for decades of performance in wet conditions.",
      },
      {
        heading: 'Our Siding Installation Process',
        text: "Every siding project begins with a thorough inspection of your home's existing exterior. We assess the condition of the sheathing, moisture barriers, flashing, and insulation before recommending a solution. You receive a detailed written proposal with no hidden costs. During installation, our crew works methodically from preparation through final trim, ensuring every panel is level, every seam is sealed, and every corner is finished to the highest standard. We treat your property with respect, laying protective coverings and cleaning up completely at the end of every work day.",
      },
      {
        heading: 'Material Options We Install',
        text: "We install a full range of siding materials to suit every style and budget. Vinyl siding offers excellent value and virtually zero maintenance. Fiber cement (such as James Hardie) delivers superior durability and a premium look that resists rot, fire, and insects. Natural wood siding provides timeless character for homeowners who want an authentic aesthetic. Engineered wood and composite panels combine the look of real wood with enhanced weather resistance. During your consultation, we will walk you through the pros and cons of each material for your specific property and help you choose the best option.",
      },
    ],
    faqs: [
      {
        question: 'How long does a siding installation take?',
        answer: 'Most residential siding projects take between 1 to 3 weeks depending on the size of the home and the complexity of the design. We provide a timeline estimate during your free consultation.',
      },
      {
        question: 'What is the best siding material for the Lower Mainland climate?',
        answer: 'Fiber cement siding is one of the best choices for the Lower Mainland due to its resistance to moisture, rot, and insects. However, high-quality vinyl and engineered wood also perform very well when properly installed with correct moisture management.',
      },
      {
        question: 'Do you handle old siding removal?',
        answer: 'Yes. Every siding project includes complete removal and disposal of your existing siding. We also inspect the underlying sheathing and moisture barriers and address any issues before installing new material.',
      },
      {
        question: 'Does new siding increase home value?',
        answer: 'Absolutely. New siding is one of the highest-ROI home improvements, typically returning 70-80% of the investment at resale while dramatically improving curb appeal and energy efficiency.',
      },
    ],
    relatedSlugs: ['metal-flashing', 'building-envelope', 'window-replacement'],
    primaryKeyword: 'siding installation Lower Mainland',
  },
  {
    slug: 'metal-flashing',
    title: 'Metal Flashing',
    shortTitle: 'Metal Flashing',
    category: 'exterior',
    metaTitle: 'Metal Flashing Installation & Repair | Tomron Construction — Lower Mainland BC',
    metaDescription: 'Professional metal flashing installation around windows, doors, and rooflines. Protect your home from water damage. Serving Maple Ridge, Coquitlam & the Lower Mainland.',
    h1: 'Professional Metal Flashing for Lower Mainland Homes',
    intro: "Metal flashing is one of the most critical yet overlooked components of your home's weather protection system. Installed at every vulnerable junction — around windows, doors, rooflines, and wall transitions — proper flashing directs water away from the building structure and prevents costly damage. Tomron Construction provides expert flashing installation and repair as both a standalone service and an integral part of every siding and envelope project we complete.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2269d65be89bda1d9.png',
    heroAlt: 'Metal flashing installation around window by Tomron Construction',
    features: [
      'Custom-bent flashing for perfect fit at every junction',
      'Window, door, roof, and wall-transition flashing',
      'Corrosion-resistant aluminum and galvanized steel',
      'Integration with siding and building envelope systems',
      'Repair and replacement of failed or missing flashing',
      'Prevents water intrusion, rot, and mould growth',
    ],
    body: [
      {
        heading: 'Why Flashing Is Critical in BC',
        text: "The Lower Mainland's extended rainy seasons mean your home faces months of sustained moisture exposure every year. Water is persistent — it finds every gap, seam, and joint in your exterior. Flashing acts as a physical barrier at these vulnerable points, redirecting water outward and away from the building structure. Without proper flashing, or with deteriorated flashing that has failed over time, water enters the wall cavity and causes rot, mould, structural damage, and insulation failure that can cost thousands to remediate.",
      },
      {
        heading: 'Our Approach to Flashing',
        text: "Tomron Construction treats flashing as essential construction, not an afterthought. We custom-bend every piece of flashing on-site to ensure a precise fit for your specific window frames, door headers, roof-to-wall transitions, and wall penetrations. We use high-quality aluminum and galvanized steel rated for decades of exposure to the Pacific Northwest climate. When flashing is part of a larger siding or envelope project, we install it in the correct sequence within the wall assembly to ensure seamless integration with house wrap, moisture barriers, and cladding materials.",
      },
    ],
    faqs: [
      {
        question: 'How do I know if my flashing needs replacement?',
        answer: 'Signs of flashing failure include water stains on interior walls near windows or doors, visible rust or gaps in exterior flashing, peeling paint around window and door frames, and musty odours indicating hidden moisture. We offer free inspections.',
      },
      {
        question: 'Can flashing be replaced without removing all the siding?',
        answer: 'In many cases, yes. Depending on the location and extent of the issue, we can selectively remove and reinstall siding panels to access and replace failed flashing without a full siding tear-off.',
      },
    ],
    relatedSlugs: ['exterior-siding-cladding', 'building-envelope', 'window-replacement'],
    primaryKeyword: 'metal flashing installation BC',
  },
  {
    slug: 'building-envelope',
    title: 'Building Envelope',
    shortTitle: 'Building Envelope',
    category: 'exterior',
    metaTitle: 'Building Envelope Solutions in the Lower Mainland | Tomron Construction',
    metaDescription: 'Comprehensive building envelope services: air barriers, moisture management, and insulation. Protect your Lower Mainland home from the elements. Free quotes from Tomron Construction.',
    h1: 'Building Envelope Solutions for Lower Mainland Homes',
    intro: "The building envelope is the complete system of materials that separates your conditioned interior from the outside environment — controlling air, moisture, and heat flow through your walls, roof, and foundation. In the Lower Mainland's demanding climate, a properly designed and installed building envelope is the difference between a comfortable, energy-efficient home and one plagued by moisture problems, drafts, and high energy costs. Tomron Construction specializes in building envelope assessment, repair, and new installation.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2c625856283dacbae.png',
    heroAlt: 'Building envelope moisture barrier installation by Tomron Construction',
    features: [
      'Complete building envelope assessment and diagnostics',
      'Air barrier and vapour barrier installation',
      'House wrap and weather-resistive barrier systems',
      'Insulation optimization for BC climate zones',
      'Moisture management and ventilation solutions',
      'Integration with siding, flashing, and window systems',
    ],
    body: [
      {
        heading: 'Why the Building Envelope Matters',
        text: "Your building envelope is your home's immune system. It controls three critical flows: air movement, moisture transfer, and heat exchange. When any of these controls fail, problems cascade — condensation forms in wall cavities, insulation becomes waterlogged and loses effectiveness, mould colonies establish in hidden spaces, and structural wood components begin to rot. In the Lower Mainland, where homes can face over 1,200 mm of annual rainfall and significant humidity year-round, the stakes are higher than in most Canadian markets. A compromised building envelope does not just affect comfort — it threatens the structural integrity and long-term value of your home.",
      },
      {
        heading: 'Our Envelope Services',
        text: "Tomron Construction provides a full range of building envelope services. For existing homes, we start with a thorough assessment of your current envelope performance — identifying failures in air barriers, vapour barriers, insulation, and drainage planes. For new construction and major renovations, we design and install complete envelope systems that meet or exceed BC Building Code requirements and perform reliably for decades. Our work integrates seamlessly with our siding, flashing, and window services, allowing us to deliver a unified, properly sequenced installation that eliminates the coordination gaps that cause failures when multiple trades work independently.",
      },
    ],
    faqs: [
      {
        question: 'What are signs of a failing building envelope?',
        answer: 'Common signs include drafts near windows and walls, condensation on interior window surfaces, musty smells, unexpectedly high heating or cooling bills, peeling exterior paint, and visible mould or water stains on interior walls or ceilings.',
      },
      {
        question: 'How much can a proper building envelope save on energy costs?',
        answer: 'A well-sealed building envelope can reduce heating and cooling costs by 20-40% depending on the current condition of your home. The energy savings typically pay for the investment within several years.',
      },
    ],
    relatedSlugs: ['exterior-siding-cladding', 'metal-flashing', 'window-replacement'],
    primaryKeyword: 'building envelope Lower Mainland',
  },
  {
    slug: 'home-renovation',
    title: 'Home Renovation',
    shortTitle: 'Home Renovation',
    category: 'renovation',
    metaTitle: 'Home Renovation Contractor in the Lower Mainland | Tomron Construction',
    metaDescription: 'Full-scale home renovations in Maple Ridge, Coquitlam, Burnaby & the Lower Mainland. Single-room updates to complete transformations. Free quotes from Tomron Construction.',
    h1: 'Home Renovation Services Across the Lower Mainland',
    intro: "Whether you are updating a single room or transforming your entire home, Tomron Construction brings the same precision, communication, and craftsmanship to every renovation project. As a family-run business, we understand that a renovation disrupts your daily life — so we work efficiently, communicate clearly, and treat your home with the same care and respect we would give our own. From structural modifications to finishing details, our experienced crew handles every aspect of the build.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2269d65f1d2bda1da.png',
    heroAlt: 'Home renovation project in the Lower Mainland by Tomron Construction',
    features: [
      'Single-room updates to whole-house transformations',
      'Structural modifications and load-bearing wall removal',
      'Kitchen and bathroom renovations',
      'Interior finishing, trim, and millwork',
      'Project management from permits to final walkthrough',
      'Clear timelines, honest pricing, and daily cleanup',
    ],
    body: [
      {
        heading: 'Renovation Done Right',
        text: "Renovation work demands a contractor who can manage complexity, coordinate trades, and maintain quality across every phase of the project. Tomron Construction brings over a decade of construction experience to every renovation, from the initial design conversation through permits, demolition, structural work, mechanical coordination, finishing, and final inspection. We do not disappear mid-project or leave you guessing about timelines and costs. Our approach is simple: clear communication from day one, honest pricing with no hidden extras, and disciplined execution that keeps the project moving toward completion.",
      },
      {
        heading: 'From Small Updates to Major Transformations',
        text: "Not every renovation needs to be a full gut job. We handle projects of every scale — from refreshing a bathroom or updating a kitchen to opening up floor plans, adding living space, and modernizing older homes that need structural and cosmetic attention. Many of our renovation clients are homeowners who love their neighbourhood and their property but need their home to work better for how they live today. We specialize in finding smart solutions that maximize the value and functionality of your existing space without unnecessary scope creep.",
      },
    ],
    faqs: [
      {
        question: 'How long does a typical home renovation take?',
        answer: 'Timelines vary widely depending on scope. A bathroom renovation might take 2-4 weeks, a kitchen renovation 4-8 weeks, and a whole-house renovation several months. We provide a detailed schedule during the planning phase.',
      },
      {
        question: 'Do you handle permits and inspections?',
        answer: 'Yes. Tomron Construction manages the complete permitting process for every renovation project that requires it, including applications, inspections, and final sign-off.',
      },
      {
        question: 'Can I live in my home during the renovation?',
        answer: 'In most cases, yes. We work to minimize disruption by containing work areas, managing dust and debris, and maintaining access to essential spaces. For major renovations, we will discuss logistics during planning.',
      },
    ],
    relatedSlugs: ['window-replacement', 'door-replacement', 'exterior-siding-cladding'],
    primaryKeyword: 'home renovation Lower Mainland',
  },
  {
    slug: 'window-replacement',
    title: 'Window Replacement',
    shortTitle: 'Window Replacement',
    category: 'openings',
    metaTitle: 'Window Replacement in the Lower Mainland | Tomron Construction',
    metaDescription: 'Professional window replacement and installation in Maple Ridge, Coquitlam, Burnaby & the Lower Mainland. Casement, sliding, picture, European tilt-n-turn & more. Free quotes.',
    h1: 'Professional Window Replacement Across the Lower Mainland',
    intro: "Old, drafty, or damaged windows cost you money every month in wasted energy and make your home less comfortable year-round. Tomron Construction replaces windows of every style, from casement and awning to sliding, picture, arch, and European tilt-and-turn designs. We handle full-frame replacements and retrofit installations, ensuring every window is properly sealed, flashed, and integrated with your home's exterior for maximum performance and lasting beauty.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe2269d65f1d2bda1da.png',
    heroAlt: 'Window replacement project in the Lower Mainland by Tomron Construction',
    features: [
      'Casement, awning, picture, arch, sliding, and tilt-n-turn styles',
      'Full-frame and retrofit installation options',
      'Window-to-door conversions available',
      'Proper flashing and weather-sealing at every opening',
      'Energy-efficient double and triple-pane glass options',
      'Seamless integration with new or existing siding',
    ],
    body: [
      {
        heading: 'When to Replace Your Windows',
        text: "Windows typically last 20-30 years, but performance declines well before total failure. Signs that replacement is overdue include visible condensation between glass panes (indicating seal failure), drafts near closed windows, difficulty opening or closing windows, visible rot in wood frames, and rising energy bills. In the Lower Mainland, failed window seals also create moisture pathways into the wall cavity, compounding the damage beyond the window itself. Tomron Construction provides honest assessments — we will tell you which windows need immediate replacement and which can wait.",
      },
      {
        heading: 'Our Window Installation Approach',
        text: "We install windows to perform flawlessly for decades in the Lower Mainland climate. That means meticulous attention to the flashing and sealing details that most installers rush through. Every window opening is properly prepared with head flashing, sill pan flashing, and flexible membrane at the jambs before the new window is set. We test-fit, level, shim, and secure each window, then complete the exterior trim and interior finishing. If your window replacement is part of a larger siding or envelope project, we sequence the installation to ensure perfect integration with the surrounding wall assembly.",
      },
      {
        heading: 'Window-to-Door Conversions',
        text: "Want to open up your living space with a new patio door or garden entrance where a window currently sits? Tomron Construction handles window-to-door conversions that require structural modification, including header installation, framing adjustments, and proper integration with your home's exterior. The result is a seamless transition that looks like the door was always part of the original design.",
      },
    ],
    faqs: [
      {
        question: 'How long does a window replacement take?',
        answer: 'A single window replacement typically takes a few hours. A whole-house window replacement can take 2-5 days depending on the number of windows, accessibility, and whether the frames require modification.',
      },
      {
        question: 'What is the difference between retrofit and full-frame replacement?',
        answer: 'Retrofit (or insert) installation fits a new window into the existing frame, which is faster and less disruptive. Full-frame replacement removes the entire window assembly down to the rough opening, allowing inspection and repair of the surrounding structure. We recommend full-frame when there is evidence of moisture damage or when new siding is being installed.',
      },
      {
        question: 'Do new windows really save on energy costs?',
        answer: 'Yes. Modern double or triple-pane windows with low-E coatings can reduce heat loss through windows by 30-50% compared to older single-pane or failed double-pane units, noticeably lowering heating costs in the Lower Mainland.',
      },
    ],
    relatedSlugs: ['door-replacement', 'metal-flashing', 'exterior-siding-cladding'],
    primaryKeyword: 'window replacement Lower Mainland',
  },
  {
    slug: 'door-replacement',
    title: 'Door Replacement',
    shortTitle: 'Door Replacement',
    category: 'openings',
    metaTitle: 'Door Replacement & Installation in the Lower Mainland | Tomron Construction',
    metaDescription: 'Entry door and sliding patio door replacement in Maple Ridge, Coquitlam, Burnaby & the Lower Mainland. Energy-efficient options, expert installation. Free quotes from Tomron Construction.',
    h1: 'Door Replacement & Installation in the Lower Mainland',
    intro: "Your entry door is the focal point of your home's exterior, and your patio doors connect your indoor and outdoor living spaces. Tomron Construction replaces and installs entry doors and sliding patio doors with expert precision, ensuring every door is properly weathersealed, flashed, and finished for lasting performance and curb appeal. We work with a range of materials including fiberglass, steel, and wood to match your home's style and your performance requirements.",
    heroImage: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8bfe287f0f272914cf0af.png',
    heroAlt: 'Entry door replacement by Tomron Construction in the Lower Mainland',
    features: [
      'Entry doors in fiberglass, steel, and wood options',
      'Sliding patio door installation and replacement',
      'Energy-efficient options with superior insulation',
      'Proper flashing and weather-sealing at every opening',
      'Custom sizing and hardware selection',
      'Retrofit installations to accommodate new siding',
    ],
    body: [
      {
        heading: 'Entry Doors That Make a Statement',
        text: "Your front door is the centrepiece of your home's curb appeal and the first thing guests experience. Tomron Construction installs high-quality entry doors that combine visual impact with security and energy efficiency. We work with industry-leading door manufacturers to offer fiberglass doors that replicate the look of real wood without the maintenance, insulated steel doors that deliver maximum security, and solid wood doors for homeowners who want authentic character. Every installation includes proper shimming, sealing, flashing, and hardware fitting to ensure smooth operation and a weathertight seal.",
      },
      {
        heading: 'Patio Doors and Sliding Systems',
        text: "Sliding patio doors transform how you use your home by creating a seamless connection to your outdoor living space. Tomron Construction installs sliding glass doors, French-style patio doors, and multi-panel systems that maximize natural light and airflow while maintaining energy efficiency. We ensure proper structural support, threshold waterproofing, and track alignment so your doors glide smoothly for years. If you are replacing an existing patio door, we can also upgrade the opening size or convert a window into a new door location.",
      },
    ],
    faqs: [
      {
        question: 'How long does a door replacement take?',
        answer: 'A standard entry door or patio door replacement typically takes one day. More complex installations involving structural modifications or custom sizing may take 2-3 days.',
      },
      {
        question: 'What door material is best for the Lower Mainland climate?',
        answer: 'Fiberglass doors are the most popular choice for the Lower Mainland because they resist moisture, do not warp, and require minimal maintenance. They also offer excellent insulation and can be finished to look like real wood.',
      },
    ],
    relatedSlugs: ['window-replacement', 'metal-flashing', 'home-renovation'],
    primaryKeyword: 'door replacement Lower Mainland',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as ServiceData[];
}
