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
  category: 'pools' | 'landscape' | 'concrete';
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
    slug: 'swimming-pool-construction',
    title: 'Swimming Pool Construction',
    shortTitle: 'Pool Construction',
    category: 'pools',
    metaTitle: 'Swimming Pool Construction in Utah | Custom Pools — Timberline Falls',
    metaDescription: 'Custom swimming pool construction in Saratoga Springs & Bountiful, UT. 20+ years experience, 3D design approval, and free estimates. Build your dream backyard.',
    h1: 'Custom Swimming Pool Construction in Utah',
    intro: "Your backyard deserves more than ordinary. Timberline Falls designs and builds custom in-ground swimming pools that transform your outdoor space into a private resort. From initial concept to the moment you dive in, our team manages every detail, including excavation, plumbing, electrical, finishing, and final landscaping, so you enjoy a seamless, stress-free build.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a373f7b617a75f22226c07.png',
    heroAlt: 'Custom swimming pool construction in Saratoga Springs, Utah — Timberline Falls',
    features: [
      'Custom in-ground pool design tailored to your property and lifestyle',
      'Full 3D design renderings for your approval before construction begins',
      'Complete project management, excavation, plumbing, electrical, and finishing',
      'Premium materials and equipment from trusted manufacturers',
      'Permit coordination and HOA compliance handled for you',
      'Integrated landscape and hardscape design around your new pool',
    ],
    body: [
      {
        heading: 'How Our Pool Construction Process Works',
        text: "Building a custom swimming pool is a major investment, and our structured process ensures every detail is handled with precision. It begins with an on-site consultation where we evaluate your property, discuss your vision, and establish a realistic budget. From there, our design team creates a detailed 3D rendering so you can see exactly what your finished pool will look like, including the surrounding landscape, hardscape, and any water features. Once the design is approved, we handle all permit applications and HOA submissions. Construction typically follows a sequence of excavation, steel reinforcement, plumbing and electrical rough-in, gunite application, tile and coping installation, interior finishing, equipment hookup, and final landscaping. Throughout the build, you'll have a dedicated project manager keeping you informed at every stage. Most custom pool builds are completed within 8 to 14 weeks, depending on the scope of features and site conditions.",
      },
      {
        heading: 'Why Gunite Pools Are the Best Choice for Utah Homeowners',
        text: "We specialize in gunite (shotcrete) pool construction because it is the strongest, most flexible, and longest-lasting pool type available. Unlike fiberglass shells that come in fixed shapes and sizes, gunite pools are built entirely on-site and can be customized to any shape, depth, or size your property allows. The steel-reinforced concrete shell is designed to handle Utah's freeze-thaw cycles, expansive clay soils, and seismic activity along the Wasatch Front. Gunite pools also accept any interior finish, from classic white plaster to premium pebble and quartz surfaces, giving you complete control over the look and feel of your pool. While the initial investment is higher than a vinyl liner or fiberglass pool, gunite pools have a lifespan of 50+ years and add significantly more value to your home.",
      },
      {
        heading: 'Custom Features to Make Your Pool Unique',
        text: "Every Timberline Falls pool is designed around your lifestyle. Popular features include built-in spas with separate temperature control, tanning ledges (also called Baja shelves) perfect for lounging in shallow water, natural rock waterfalls that create a resort-like atmosphere, and swim-up bars for entertaining. For families, we design pools with graduated depth entries and safety ledges. For fitness enthusiasts, we build lap pools and can install swim jets for resistance training. We also integrate smart automation systems that let you control your pool's temperature, lighting, water features, and chemical management from your phone. LED color-changing lights allow you to set the mood for evening gatherings, and fire and water bowl combinations create dramatic focal points around the pool deck.",
      },
      {
        heading: 'Pool Construction Costs and Financing in Utah',
        text: "Custom pool construction in Utah typically ranges from $50,000 to $150,000 or more, depending on size, features, materials, and site conditions. A basic pool with standard finishes and minimal features will be at the lower end, while a large pool with a spa, waterfall, custom lighting, and extensive decking will be at the higher end. Site-specific factors like access, soil conditions, slope, and distance from utilities also affect pricing. Timberline Falls provides detailed, transparent estimates so you know exactly what you are paying for before construction begins. We also work with financing partners who offer competitive rates for pool construction loans, making it easier to spread the investment over time. Many Utah homeowners find that a well-built pool adds $50,000 to $100,000 in property value.",
      },
    ],
    faqs: [
      { question: 'How much does it cost to build a swimming pool in Utah?', answer: 'Pool construction costs in Utah typically range from $50,000 to $150,000+, depending on size, features, materials, and site conditions. Timberline Falls provides free estimates so you get an accurate price for your specific project.' },
      { question: 'How long does pool construction take?', answer: 'Most custom pool builds take 8 to 14 weeks from groundbreaking to completion. Factors like weather, permit timelines, and custom features can affect the schedule. We keep you informed at every stage.' },
      { question: 'Do you handle pool permits in Utah?', answer: 'Yes. Timberline Falls manages the entire permit process, including city building permits, inspections, and any HOA approvals required for your project.' },
      { question: 'Can I see a design before construction starts?', answer: "Absolutely. We create a detailed 3D rendering of your pool design for your review and approval before any construction begins. You'll know exactly what you're getting." },
      { question: 'What type of pool do you build?', answer: 'We specialize in custom gunite (shotcrete) in-ground pools, which are the strongest and most versatile pool type available. Every pool is engineered specifically for your property.' },
    ],
    relatedSlugs: ['pool-design-3d', 'water-features', 'pool-renovation-remodeling', 'landscape-construction'],
    primaryKeyword: 'swimming pool construction Utah',
  },
  {
    slug: 'pool-design-3d',
    title: '3D Pool Design',
    shortTitle: '3D Design',
    category: 'pools',
    metaTitle: '3D Pool Design Services in Utah — Timberline Falls',
    metaDescription: "See your dream pool before it's built with our photorealistic 3D pool design service. Free consultations in Saratoga Springs & Bountiful, UT.",
    h1: 'See Your Dream Pool in 3D Before Construction Begins',
    intro: "Don't leave your biggest backyard investment to guesswork. Timberline Falls uses advanced 3D design software to create photorealistic renderings of your custom pool, so you can explore, refine, and approve every detail before we break ground.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a374b8b617a7eb3b22890e.png',
    heroAlt: '3D pool design rendering for Utah homeowner — Timberline Falls',
    features: ['Photorealistic 3D renderings from multiple angles', 'Virtual walkthrough of your completed backyard', 'Explore material, color, and finish options visually', 'Accurate scale modeling based on your property survey', 'Revisions included until you love the design', 'Integrated landscape and hardscape visualization'],
    body: [
      {
        heading: 'How 3D Pool Design Works',
        text: "Our 3D pool design process begins with an on-site property survey where we measure your yard, note elevation changes, and photograph existing structures. We then import this data into professional-grade design software that generates an accurate digital model of your property. From there, our designers build your custom pool, spa, water features, decking, landscaping, and outdoor structures directly into the model. The result is a photorealistic rendering that shows exactly what your finished backyard will look like, from multiple angles, at different times of day, and even with nighttime lighting effects. This technology eliminates the guesswork that comes with flat blueprints and gives Utah homeowners the confidence to invest in a project they can truly visualize before a single shovel hits the ground.",
      },
      {
        heading: 'Technology Behind Our Design Renderings',
        text: "Timberline Falls uses industry-leading 3D design and rendering software trusted by top pool builders nationwide. Our platform allows us to model realistic water reflections, shadow patterns based on your property's orientation, and accurate material textures for stone, tile, concrete, and plantings. We can show you how different plaster colors will look under water, how a natural rock waterfall will sit against your fence line, and how your new patio will connect to your home's existing architecture. Because our models are built to scale from your actual property dimensions, what you see in the rendering is what you get in the final build. This level of precision is especially valuable for Utah properties with slopes, irregular lot shapes, or specific HOA design requirements that demand careful planning.",
      },
      {
        heading: 'Benefits of Seeing Your Pool Before It Is Built',
        text: "One of the biggest advantages of 3D pool design is the ability to make changes before construction begins, when changes are free. Moving a spa, adjusting pool depth, changing the shape, or swapping a tanning ledge for a swim-up bar costs nothing in the design phase but could cost thousands once concrete is poured. Our Utah homeowners consistently tell us that seeing their project in 3D helped them make better decisions about sizing, feature placement, and material selection. It also makes it easier to communicate your vision with family members, ensuring everyone is on the same page. For many homeowners, the 3D rendering is the moment the project becomes real and exciting rather than abstract and uncertain.",
      },
      {
        heading: 'Our Revision Process Until You Love the Design',
        text: "At Timberline Falls, we include multiple rounds of design revisions at no extra cost. After presenting your initial 3D rendering, we walk through every element together, covering pool shape, depth, features, decking material, landscaping, and lighting. You tell us what you love and what you want to adjust, and our team updates the model accordingly. Most clients go through two to four revisions before arriving at a design they are completely thrilled with. We never rush this process because we believe the design phase is the foundation of a successful build. Once you give final approval, the design becomes the construction blueprint that our crew follows precisely. This approach has helped us maintain an exceptional track record of satisfied homeowners across Saratoga Springs, Bountiful, and the greater Utah area.",
      },
    ],
    faqs: [
      { question: 'Is the 3D design included in the construction price?', answer: 'Yes. When you move forward with Timberline Falls for construction, the 3D design is included at no additional charge as part of our standard process.' },
      { question: 'How many revisions do I get on the pool design?', answer: "We include multiple rounds of revisions until you're completely happy with the design. Our goal is for you to love your pool before we build it." },
    ],
    relatedSlugs: ['swimming-pool-construction', 'water-features', 'landscape-construction'],
    primaryKeyword: '3D pool design Utah',
  },
  {
    slug: 'water-features',
    title: 'Water Features',
    shortTitle: 'Water Features',
    category: 'pools',
    metaTitle: 'Custom Water Features — Waterfalls, Fountains & Grottos | Timberline Falls UT',
    metaDescription: 'Custom waterfalls, fountains, bubblers, and grottos in Saratoga Springs & Bountiful, UT. Elevate your pool or landscape.',
    h1: 'Custom Water Features That Elevate Your Outdoor Space',
    intro: 'The sound of flowing water transforms any backyard into a tranquil retreat. Timberline Falls designs and installs custom water features, from cascading rock waterfalls to elegant deck jets, that complement your pool, landscape, or standalone outdoor area.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4b5e095735c6fe33e039d.png',
    heroAlt: 'Custom waterfall water feature on pool in Utah — Timberline Falls',
    features: ['Natural rock waterfalls and cascades', 'Sheer-descent wall features and scuppers', 'Deck jets, bubblers, and laminar jets', 'Standalone landscape water features', 'LED-lit features for dramatic nighttime effects', 'Integrated with pool automation systems'],
    body: [
      {
        heading: 'Types of Water Features We Build',
        text: "Timberline Falls designs and installs a wide range of water features to suit every style and budget. Natural rock waterfalls are our most popular option, using real Utah stone or carefully selected boulders to create cascading water that looks like it belongs in the mountains. Sheer-descent features produce a smooth, glass-like sheet of water flowing from a raised wall, perfect for modern and contemporary pool designs. Deck jets shoot arcs of water from the pool deck into the water, creating a playful and visually striking effect that kids love. Bubblers installed on tanning ledges add gentle movement and sound to shallow areas. Laminar jets produce clear, glass-like streams of water that can be lit with LED lights for a dramatic nighttime display. We also build standalone water features for landscapes that do not include a pool.",
      },
      {
        heading: 'How Water Features Enhance Your Pool and Backyard',
        text: "Water features do more than look beautiful, they transform the entire atmosphere of your outdoor space. The sound of flowing water masks neighborhood noise, creating a private, resort-like feel in your own backyard. Visually, water features add depth, texture, and movement to your pool area, making even modest-sized pools feel larger and more luxurious. A well-placed waterfall can serve as a stunning focal point visible from your kitchen window or patio seating area. For Utah homeowners who entertain outdoors during the warm months, water features consistently impress guests and create a memorable setting. They also increase your property value, as homes with custom pool features sell faster and at higher prices than those with basic pool installations.",
      },
      {
        heading: 'Water Feature Installation Process',
        text: "Every water feature project at Timberline Falls begins with a design consultation where we evaluate your existing pool or landscape and discuss your vision. For new pool builds, water features are integrated into the overall 3D design so you can see exactly how they will look. For retrofits to existing pools, we assess the current plumbing, electrical, and structural setup to determine what is feasible. Installation typically involves running dedicated plumbing lines, installing a pump sized to the feature, setting stone or fabricated elements, and connecting everything to your pool's automation system. Our crews handle all electrical and plumbing work to code. Most water feature installations on existing pools take three to seven days, while features built into new pool construction are completed as part of the overall build timeline.",
      },
      {
        heading: 'Maintaining Your Water Features',
        text: "One of the best things about pool-integrated water features is that they require very little additional maintenance beyond your normal pool care. The water circulates through the same filtration and sanitation system as the rest of your pool. We recommend running your water features regularly, as daily use actually helps prevent algae buildup in the plumbing lines and keeps the pump seals in good condition. For natural rock waterfalls, occasional brushing of the stone surface prevents mineral deposits from building up, especially in Utah where water tends to be hard. Sheer-descent features and deck jets should be inspected seasonally to ensure the nozzles are clear. Timberline Falls also offers maintenance services if you prefer to have our team handle seasonal checkups and winterization of your water feature equipment.",
      },
    ],
    faqs: [
      { question: 'Can water features be added to an existing pool?', answer: "Yes. Many water features can be retrofitted to existing pools. We'll assess your current setup during a free consultation." },
      { question: 'How much do water features cost?', answer: 'Costs vary from a few thousand dollars for deck jets to $15,000+ for large rock waterfalls. Contact us for a free estimate.' },
    ],
    relatedSlugs: ['swimming-pool-construction', 'pool-design-3d', 'landscape-construction'],
    primaryKeyword: 'water features pool Utah',
  },
  {
    slug: 'pool-renovation-remodeling',
    title: 'Pool Remodeling & Upgrades',
    shortTitle: 'Pool Remodeling',
    category: 'pools',
    metaTitle: 'Pool Remodeling & Upgrades in Utah — Timberline Falls',
    metaDescription: 'Upgrade your existing pool with new finishes, features, and equipment. Pool remodeling services in Saratoga Springs & Bountiful, UT.',
    h1: 'Breathe New Life Into Your Existing Pool',
    intro: "Your pool doesn't need to look its age. Timberline Falls offers pool remodeling services that refresh tired finishes, add modern features, and bring your backyard up to today's standards.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a377e095735c3bbd17bfe3.png',
    heroAlt: 'Pool remodeling and upgrade project in Utah — Timberline Falls',
    features: ['Surface refinishing, plaster, pebble, or quartz', 'New tile, coping, and deck updates', 'Equipment upgrades, pumps, heaters, automation', 'LED lighting and color upgrades', 'Water feature additions', 'Energy-efficiency improvements'],
    body: [
      {
        heading: 'Signs Your Pool Needs Remodeling',
        text: "If your pool surface feels rough underfoot, shows staining that chemicals cannot remove, or has visible cracks and discoloration, it is time for a remodel. Outdated tile lines, chipped coping, and faded deck surfaces all signal that your pool has aged past its prime. Beyond aesthetics, older pools often run on inefficient single-speed pumps, outdated heaters, and manual chemical systems that cost more to operate every month. Many Utah homeowners also find that their pool no longer fits their lifestyle, maybe needing a tanning ledge for young children, a spa addition for relaxation, or an updated deck for entertaining. Timberline Falls evaluates every aspect of your existing pool and provides honest recommendations about which upgrades will deliver the most value and enjoyment for your investment.",
      },
      {
        heading: 'Pool Surface and Finish Options',
        text: "The interior finish is the most visible part of any pool remodel, and today's options go far beyond basic white plaster. Timberline Falls offers standard plaster for budget-conscious updates, pebble finishes like PebbleTec and PebbleSheen for a natural, textured appearance and 15-plus-year lifespan, and quartz aggregate finishes that combine durability with a smooth, sparkling surface. Each finish comes in a wide range of colors that affect the water's appearance, with darker finishes creating a lagoon-like deep blue and lighter finishes producing a classic Caribbean look. We also replace waterline tile with modern glass, porcelain, or stone options and install new coping in natural stone or precast concrete. Our team helps you select combinations that complement your home's architecture and landscape, ensuring a cohesive result.",
      },
      {
        heading: 'Equipment Upgrades That Save Money',
        text: "A pool remodel is the ideal time to upgrade aging equipment. Replacing a single-speed pump with a variable-speed model can cut energy costs by 60 to 80 percent, often paying for itself within two years. Modern pool heaters are significantly more efficient than units from even ten years ago, and heat pumps offer an energy-efficient alternative for Utah's climate. Smart automation systems like Pentair IntelliCenter or Jandy iAquaLink let you control your pool's temperature, lighting, water features, and chemical management from your smartphone. Salt chlorine generators reduce the need to handle and store harsh chemicals. Timberline Falls evaluates your current equipment, identifies inefficiencies, and recommends upgrades that improve your pool experience while reducing ongoing operating costs.",
      },
      {
        heading: 'The Transformation From Tired to Stunning',
        text: "The difference between a dated pool and a freshly remodeled one is dramatic. Homeowners are often amazed at how a new surface, updated tile and coping, modern lighting, and a few well-chosen features can make their pool look and feel brand new, without the cost and disruption of a full tear-out and rebuild. Timberline Falls has completed hundreds of pool remodels across the Saratoga Springs and Bountiful areas, and we take pride in delivering transformations that exceed expectations. We document every project with before-and-after photography so you can see the possibilities. A well-executed remodel not only restores your pool's beauty and function but also adds significant value to your home, making it one of the smartest investments a Utah homeowner can make.",
      },
    ],
    faqs: [
      { question: 'How long does pool remodeling take?', answer: 'Most pool remodeling takes 1 to 4 weeks. A simple resurface may take a week, while a full renovation could take several weeks.' },
      { question: 'Can you remodel a pool without replacing it entirely?', answer: 'Absolutely. Most pools are structurally sound and just need updated surfaces, equipment, or features.' },
    ],
    relatedSlugs: ['swimming-pool-construction', 'water-features', 'pool-design-3d'],
    primaryKeyword: 'pool remodeling Utah',
  },
  {
    slug: 'landscape-construction',
    title: 'Landscape Construction',
    shortTitle: 'Landscaping',
    category: 'landscape',
    metaTitle: 'Landscape Construction & Design in Utah — Timberline Falls',
    metaDescription: 'Expert landscape construction in Saratoga Springs & Bountiful, UT. Custom landscape design, installation, and outdoor living spaces. Free estimates.',
    h1: 'Professional Landscape Construction That Transforms Your Property',
    intro: "A well-designed landscape adds real value to your home and creates outdoor living space you'll enjoy every day. Timberline Falls provides comprehensive landscape construction, from custom design through final installation, including grading, irrigation, planting, hardscaping, lighting, and everything in between.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a377d1753f158f4945e874.png',
    heroAlt: 'Professional landscape construction in Saratoga Springs, Utah — Timberline Falls',
    features: ['Custom landscape design with 3D visualization', 'Complete site preparation and land grading', 'Sod installation and hydroseeding', 'Irrigation system design and installation', 'Outdoor lighting design and installation', 'Planter boxes, garden beds, and tree installation'],
    body: [
      {
        heading: 'Our Full Design-Build Landscape Process',
        text: "Timberline Falls is a true design-build landscape contractor, meaning we handle every phase of your project from the initial concept through final installation. Our process begins with a thorough site analysis where we evaluate soil conditions, drainage patterns, sun exposure, and existing structures. We then create a comprehensive landscape plan, often with 3D visualization, that addresses grading, irrigation zones, planting areas, hardscape features, lighting, and outdoor living spaces. Once you approve the design, our in-house crews handle all site preparation, grading, utility trenching, irrigation installation, hardscape construction, planting, sod or hydroseeding, lighting, and final cleanup. Because we manage every trade internally, there are no communication gaps between subcontractors, and the finished result matches the original design precisely. This integrated approach saves Utah homeowners time, money, and frustration.",
      },
      {
        heading: 'Plant Selection for Utah Climate',
        text: "Choosing the right plants is critical for a landscape that thrives in Utah's unique climate. Our region experiences hot, dry summers, cold winters with heavy frost, and alkaline soils that many common nursery plants cannot tolerate. Timberline Falls selects drought-tolerant, cold-hardy species that are proven performers along the Wasatch Front. We use a mix of native and adapted plants including ornamental grasses, perennials like Russian sage and lavender, flowering shrubs such as butterfly bush and spirea, and shade trees like honeylocust and autumn blaze maple. We also incorporate evergreen elements, junipers, boxwood, and ornamental pines, to provide year-round structure and color. Every planting plan accounts for mature size, water requirements, and seasonal interest so your landscape looks beautiful in every season without excessive maintenance or water consumption.",
      },
      {
        heading: 'Why Irrigation Is Essential in Utah',
        text: "No landscape investment survives without proper irrigation in Utah's semi-arid climate. Average annual rainfall along the Wasatch Front is only about 16 inches, far less than what most plants, trees, and turf need to thrive. Timberline Falls designs and installs zone-controlled irrigation systems tailored to the specific water needs of each area in your landscape. Turf zones, drip zones for planting beds, and tree bubblers are all managed independently so every plant gets the right amount of water without waste. We install smart controllers that adjust watering schedules based on weather data, soil moisture, and seasonal changes. Proper irrigation not only keeps your landscape healthy and green but also protects your investment in plants, trees, and sod that would otherwise fail within the first season without consistent, efficient watering.",
      },
      {
        heading: 'Integrating Outdoor Living Into Your Landscape',
        text: "Modern landscape construction goes far beyond planting shrubs and laying sod. Utah homeowners increasingly want their yards to function as true outdoor living spaces, with patios for dining, fire features for cool evenings, outdoor kitchens for entertaining, and defined zones for play, relaxation, and gardening. Timberline Falls designs landscapes that integrate all of these elements into a cohesive plan. Hardscape areas flow naturally into planted areas, lighting extends usability into the evening hours, and privacy screening creates intimate spaces without feeling closed in. Because we also build pools, outdoor kitchens, patios, and retaining walls in-house, we can coordinate every element of your outdoor space as a single project rather than piecemealing it together over years with different contractors.",
      },
    ],
    faqs: [
      { question: "What's included in landscape construction?", answer: 'Our service covers design, site prep, grading, irrigation, planting, sod or hydroseeding, hardscaping, lighting, and cleanup. We tailor each project to your property and budget.' },
      { question: 'How much does landscaping cost in Utah?', answer: 'Landscape construction typically ranges from $10,000 to $75,000+ depending on property size, scope, and materials. Contact us for a free estimate.' },
      { question: 'Do you work with existing landscaping?', answer: "We do both new installs and renovations. Whether you're starting from scratch or updating an existing landscape, we can help." },
    ],
    relatedSlugs: ['artificial-turf', 'outdoor-kitchens', 'patios-walkways', 'irrigation-lighting'],
    primaryKeyword: 'landscape construction Utah',
  },
  {
    slug: 'artificial-turf',
    title: 'Artificial Turf Installation',
    shortTitle: 'Artificial Turf',
    category: 'landscape',
    metaTitle: 'Artificial Turf Installation in Utah — Timberline Falls',
    metaDescription: 'Professional artificial turf installation in Saratoga Springs & Bountiful, UT. Water-saving synthetic grass. Free estimates.',
    h1: 'Low-Maintenance Artificial Turf That Looks Incredible Year-Round',
    intro: "Enjoy a perfectly green lawn every day without mowing, watering, or fertilizing. Timberline Falls installs premium artificial turf that saves water in Utah's dry climate and stays beautiful through every season.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a3791295735c1b8517e6b8.png',
    heroAlt: 'Artificial turf installation in Utah backyard — Timberline Falls',
    features: ['Premium, realistic-looking synthetic turf', 'Proper base preparation for drainage and longevity', 'Pet-friendly and child-safe options', 'Custom putting greens and sport surfaces', 'Significant water savings vs. natural grass', 'Professional seaming and edging'],
    body: [
      {
        heading: 'How We Install Artificial Turf',
        text: "Proper installation is what separates artificial turf that looks and performs beautifully from turf that wrinkles, drains poorly, or fails prematurely. Timberline Falls follows a meticulous multi-step process for every turf installation. We begin by removing existing sod or soil to a depth of three to four inches, then install a weed barrier to prevent growth from below. A compacted base layer of decomposed granite or crushed rock provides a stable, well-draining foundation. The turf is then rolled out, precisely cut to fit your space, and secured with landscape stakes and adhesive at seams. Finally, we apply infill material, typically silica sand or a specialized blend, that supports the turf fibers, adds weight for stability, and improves drainage. The result is a surface that looks, feels, and drains like a professionally maintained natural lawn.",
      },
      {
        heading: 'Water Savings in Utah Drought Conditions',
        text: "Utah consistently ranks among the driest states in the nation, and ongoing drought conditions have pushed municipalities to implement water restrictions and tiered pricing that makes maintaining a green lawn increasingly expensive. A typical Utah lawn requires 50,000 to 80,000 gallons of water per year, water that artificial turf eliminates entirely. For homeowners in Saratoga Springs, Bountiful, and surrounding communities, switching to synthetic turf can reduce household water usage by 50 percent or more. Many local water districts offer rebates for turf removal and water-wise landscaping conversions, which can offset a significant portion of the installation cost. Beyond the environmental benefits, the monthly savings on water bills, fertilizer, herbicides, mowing, and aeration add up quickly, making artificial turf a financially smart choice for Utah homeowners.",
      },
      {
        heading: 'Durability That Handles Utah Weather',
        text: "Quality artificial turf is engineered to withstand conditions far more demanding than a residential backyard. The turf products Timberline Falls installs are UV-stabilized to resist fading from Utah's intense high-altitude sun, rated for temperature extremes from well below zero to over 100 degrees, and backed by manufacturer warranties of 8 to 15 years. Unlike natural grass that goes dormant and brown in winter, synthetic turf stays green and uniform year-round. Heavy snowfall will not damage the turf, as it simply melts and drains through the permeable backing. Foot traffic, patio furniture, and play equipment are all handled without the bare spots and wear patterns that plague natural lawns. Timberline Falls selects turf products with high face weight and dense fiber counts that maintain their appearance and performance for well over a decade.",
      },
      {
        heading: 'Safe for Pets and Children',
        text: "Families with children and pets are among the biggest beneficiaries of artificial turf installation. Modern synthetic turf is manufactured without lead, heavy metals, or harmful chemicals, making it safe for kids to play on barefoot. For pet owners, Timberline Falls offers turf products specifically designed with enhanced drainage systems that allow liquids to pass through instantly, preventing odors and making cleanup as simple as rinsing with a hose. Unlike natural grass, artificial turf does not develop muddy patches that get tracked into your home, does not harbor fleas or ticks, and does not require chemical fertilizers or herbicides that could harm pets. We install antimicrobial infill options that further reduce bacteria and odor. The result is a clean, safe, and low-maintenance surface where your entire family, including the four-legged members, can play comfortably year-round.",
      },
    ],
    faqs: [
      { question: 'How long does artificial turf last in Utah?', answer: "Quality artificial turf typically lasts 15 to 20 years with minimal maintenance. UV-stabilized fibers resist fading from Utah's intense sun." },
      { question: 'Is artificial turf safe for kids and pets?', answer: 'Yes. Modern artificial turf is non-toxic, lead-free, and designed for heavy use. We offer pet-specific options with enhanced drainage.' },
    ],
    relatedSlugs: ['landscape-construction', 'patios-walkways', 'irrigation-lighting'],
    primaryKeyword: 'artificial turf installation Utah',
  },
  {
    slug: 'outdoor-kitchens',
    title: 'Outdoor Kitchens',
    shortTitle: 'Outdoor Kitchens',
    category: 'landscape',
    metaTitle: 'Outdoor Kitchen Construction in Utah — Timberline Falls',
    metaDescription: 'Custom outdoor kitchen design and construction in Saratoga Springs & Bountiful, UT. Grills, countertops, bars. Free estimates.',
    h1: 'Custom Outdoor Kitchens Built for Utah Living',
    intro: "Take outdoor entertaining to the next level with a custom-built kitchen featuring built-in grills, countertops, sinks, refrigeration, bars, and seating, designed to complement your pool, patio, and landscape.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4b74b167da41c4aad2e13.png',
    heroAlt: 'Custom outdoor kitchen construction in Utah — Timberline Falls',
    features: ['Custom design to match your entertaining style', 'Built-in grills, smokers, and pizza ovens', 'Natural stone or tile countertops', 'Outdoor sinks, refrigeration, and storage', 'Bar seating and dining areas', 'Gas, electrical, and plumbing installation'],
    body: [
      {
        heading: 'Designing Your Perfect Outdoor Kitchen',
        text: "Every outdoor kitchen project at Timberline Falls starts with understanding how you cook, entertain, and use your outdoor space. A family that hosts large gatherings needs a different layout than a couple who enjoys quiet dinners al fresco. We consider traffic flow between the grill, prep area, and seating to create an efficient workspace that keeps the cook connected to guests rather than isolated in a corner. Proximity to your home's interior kitchen matters for convenience, while distance from neighbors and property lines may affect placement of gas lines and ventilation. We also factor in views, prevailing wind direction, and sun exposure so your outdoor kitchen is comfortable to use throughout Utah's warm season. Timberline Falls presents your design in 3D so you can visualize the finished kitchen before construction begins.",
      },
      {
        heading: 'Material Choices That Handle Utah Weather',
        text: "Utah's climate demands materials that can handle intense summer sun, freezing winter temperatures, and everything in between. Timberline Falls builds outdoor kitchen structures using concrete block or steel stud framing with cement board sheathing, never wood framing that can rot or warp. Exterior finishes include natural stone veneer, stacked stone, stucco, and porcelain tile, all selected for durability and freeze-thaw resistance. Countertops are typically granite, quartzite, or engineered stone rated for outdoor use. We avoid materials like marble and certain limestones that are too porous for Utah's weather cycles. All gas lines, electrical wiring, and plumbing are installed to code and rated for outdoor exposure. The result is an outdoor kitchen that maintains its appearance and structural integrity through decades of Utah seasons.",
      },
      {
        heading: 'Appliance Options for Every Cook',
        text: "The appliances you choose define the capability of your outdoor kitchen. Timberline Falls installs premium brands like Lynx, DCS, Blaze, and Bull that are specifically manufactured for outdoor use with stainless steel components rated to resist rust and weather. Popular options include built-in gas grills ranging from 30 to 54 inches, side burners for sauces and sides, wood-fired pizza ovens that reach 800-plus degrees, smokers for low-and-slow cooking, and flat-top griddles. Refrigeration options include under-counter refrigerators, ice makers, and beverage coolers that keep drinks cold poolside. Sinks with hot and cold water make food prep and cleanup convenient, while built-in trash and recycling pullouts keep the area tidy. We help you select the right combination of appliances based on your cooking style and budget.",
      },
      {
        heading: 'Integrating Your Outdoor Kitchen With Pools and Patios',
        text: "An outdoor kitchen reaches its full potential when it connects seamlessly with your pool area, patio, and landscape. Timberline Falls specializes in designing unified outdoor living spaces where the kitchen, dining area, fire feature, pool deck, and landscape all work together as a single cohesive environment. A swim-up bar built into the pool edge adjacent to the kitchen creates a resort-like experience. A covered pergola or pavilion over the kitchen provides shade during summer and protection from light rain, extending the usability of the space. Fire pits or outdoor fireplaces near the dining area keep guests comfortable on cool Utah evenings. Because we handle pool construction, hardscaping, landscaping, and outdoor kitchens in-house, we coordinate all of these elements during the design phase to ensure a finished product that flows naturally and looks intentional.",
      },
    ],
    faqs: [
      { question: 'How much does an outdoor kitchen cost?', answer: "Costs range from $10,000 for a basic grill station to $50,000+ for a full kitchen with appliances and seating. We'll design to your budget." },
      { question: 'Can an outdoor kitchen be built near a pool?', answer: "Absolutely, it's one of the most popular configurations. We design outdoor kitchens that integrate seamlessly with pool areas." },
    ],
    relatedSlugs: ['landscape-construction', 'patios-walkways', 'swimming-pool-construction'],
    primaryKeyword: 'outdoor kitchen construction Utah',
  },
  {
    slug: 'patios-walkways',
    title: 'Patios & Walkways',
    shortTitle: 'Patios & Walkways',
    category: 'landscape',
    metaTitle: 'Patio & Walkway Installation in Utah — Timberline Falls',
    metaDescription: 'Custom patio and walkway construction in Saratoga Springs & Bountiful, UT. Pavers, natural stone, stamped concrete. Free estimates.',
    h1: 'Beautiful Patios & Walkways That Define Your Outdoor Space',
    intro: 'A well-crafted patio creates the foundation for outdoor living. Timberline Falls designs and installs custom patios and walkways using pavers, natural stone, stamped concrete, and other premium materials.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4b90795735cbf4e3e8734.png',
    heroAlt: 'Custom patio and walkway installation in Utah — Timberline Falls',
    features: ['Custom patio design in pavers, natural stone, or concrete', 'Walkway and pathway installation', 'Deck and patio integration with pools', 'Fire pit and outdoor fireplace surrounds', 'Proper grading and drainage engineering', 'Permeable paver options'],
    body: [
      {
        heading: 'Comparing Patio Materials: Pavers vs. Natural Stone vs. Concrete',
        text: "Choosing the right patio material is one of the most important decisions in your outdoor living project. Interlocking pavers offer excellent durability, a wide range of colors and patterns, and the unique advantage of being individually replaceable if one becomes damaged. Natural stone, including flagstone, travertine, and bluestone, delivers an unmatched organic beauty and each piece is unique, though it comes at a higher price point. Stamped concrete provides the look of stone or brick at a lower cost and is poured as a single surface, making it ideal for large areas. Standard broom-finished concrete is the most affordable option and works well for functional spaces. Timberline Falls helps Utah homeowners weigh the pros and cons of each material based on their aesthetic preferences, budget, intended use, and long-term maintenance expectations to arrive at the best choice for their property.",
      },
      {
        heading: 'Our Patio and Walkway Design Process',
        text: "Great patio design goes beyond choosing a material, it considers how you will use the space, how it connects to your home and yard, and how it relates to other features like pools, kitchens, and fire pits. Timberline Falls begins every project with an on-site consultation to understand your goals and evaluate the site. We measure the area, note drainage patterns and elevation changes, and discuss layout options that maximize usable space while maintaining natural traffic flow. Our design team creates a detailed plan showing the patio footprint, material selection, border treatments, step locations, and integration with adjacent landscape and hardscape elements. For larger projects, we provide 3D visualization so you can see the finished result. Every design accounts for proper slope and drainage to keep water moving away from your home's foundation.",
      },
      {
        heading: 'Why Drainage Is Critical for Utah Patios',
        text: "Drainage is arguably the most important technical aspect of patio construction, and one that many contractors overlook. Water that pools on or around a patio causes surface deterioration, undermines the base material, and can direct moisture toward your home's foundation. In Utah, where afternoon thunderstorms can drop significant rain in a short period and spring snowmelt produces sustained runoff, proper drainage engineering is essential. Timberline Falls grades every patio surface with a minimum slope of one to two percent away from structures. We install French drains, channel drains, or catch basins where needed to manage water that cannot sheet-drain naturally. For areas with poor soil drainage, we use permeable paver systems that allow water to infiltrate through the surface and into a gravel reservoir below, reducing runoff and preventing standing water.",
      },
      {
        heading: 'Handling Utah Freeze-Thaw Cycles',
        text: "Utah's Wasatch Front experiences over 100 freeze-thaw cycles per year, with temperature swings where water in the ground and in patio materials repeatedly freezes and thaws, expanding and contracting with each cycle. This is the single biggest cause of patio failure in our climate. Timberline Falls addresses this challenge through proper base preparation: we excavate to a depth of six to eight inches, install a compacted gravel base that drains freely and resists frost heave, and use a layer of bedding sand for paver and stone installations. For concrete patios, we use air-entrained concrete mixes that resist freeze-thaw damage and install control joints at proper intervals to manage cracking. Paver systems have a natural advantage in freeze-thaw climates because the joints between pavers allow for slight movement without cracking, one of the many reasons we often recommend pavers for Utah patios.",
      },
    ],
    faqs: [
      { question: "What's the best patio material for Utah?", answer: "Pavers and natural stone both perform well. Pavers handle freeze-thaw cycles better than poured concrete, while natural stone offers a premium look." },
      { question: 'How long does patio installation take?', answer: "Most installations take 3 to 10 days depending on size and complexity. We'll provide a timeline during your free estimate." },
    ],
    relatedSlugs: ['landscape-construction', 'outdoor-kitchens', 'stamped-colored-concrete'],
    primaryKeyword: 'patio installation Utah',
  },
  {
    slug: 'irrigation-lighting',
    title: 'Irrigation & Outdoor Lighting',
    shortTitle: 'Irrigation & Lighting',
    category: 'landscape',
    metaTitle: 'Irrigation & Outdoor Lighting Installation in Utah — Timberline Falls',
    metaDescription: 'Professional irrigation and outdoor lighting installation in Saratoga Springs & Bountiful, UT. Efficient watering and landscape lighting.',
    h1: 'Smart Irrigation & Outdoor Lighting for Your Utah Landscape',
    intro: 'A thriving landscape needs efficient watering, and a beautiful landscape deserves to be seen after dark. Timberline Falls installs irrigation systems and outdoor lighting that keep your property healthy and extend your living hours.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4b9cd133a4066807e0098.png',
    heroAlt: 'Outdoor lighting and irrigation installation in Utah — Timberline Falls',
    features: ['Zone-controlled sprinkler and drip irrigation', 'Smart controllers with weather-based scheduling', 'Water-efficient design for dry climate', 'LED pathway and accent lighting', 'Uplighting for trees and architecture', 'Low-voltage systems for safety and savings'],
    body: [
      {
        heading: 'Smart Irrigation Designed for Utah Dry Climate',
        text: "Utah receives an average of just 12 to 16 inches of rainfall per year along the Wasatch Front, making a well-designed irrigation system essential for any landscape. Timberline Falls designs zone-controlled irrigation systems that deliver the right amount of water to each area of your yard based on plant type, sun exposure, and soil conditions. Turf areas receive pop-up rotary or spray heads, planting beds get drip irrigation with individual emitters, and trees receive dedicated bubblers that deliver water directly to the root zone. We separate high-water and low-water zones so drought-tolerant plantings are not overwatered while thirsty turf gets what it needs. Every system includes a rain sensor or smart controller that automatically adjusts schedules based on real-time weather data, preventing waste from watering during rain or cool periods. This approach keeps your landscape healthy while respecting Utah's limited water resources.",
      },
      {
        heading: 'Outdoor Lighting Design That Extends Your Living Hours',
        text: "A thoughtfully designed outdoor lighting system transforms your yard from a daytime space into an evening destination. Timberline Falls approaches lighting design with the same attention to detail we bring to landscape and hardscape projects. We layer three types of lighting to create depth and drama: ambient lighting for overall illumination of patios and gathering areas, task lighting for cooking and dining spaces, and accent lighting to highlight architectural features, specimen trees, and water features. Pathway lights guide guests safely through your yard while creating a welcoming atmosphere. Uplights placed at the base of trees cast dramatic shadows and showcase mature canopies. Well lights recessed into the ground illuminate walls and columns without visible fixtures. The result is a landscape that looks stunning after dark and extends the hours you can enjoy your outdoor investment.",
      },
      {
        heading: 'LED Technology and Energy Efficiency',
        text: "Timberline Falls exclusively installs LED landscape lighting because it offers superior performance in every category that matters. LED fixtures consume 75 to 80 percent less energy than traditional halogen landscape lights, dramatically reducing your electricity costs. They produce virtually no heat, making them safe around plants, mulch, and areas where children play. LED bulbs last 40,000 to 50,000 hours compared to 2,000 to 4,000 hours for halogen, meaning you may never need to replace a bulb. Modern LED fixtures are available in a range of color temperatures from warm amber to cool white, allowing us to match the lighting mood to your design preferences. Many of our lighting systems include smart controls that let you adjust brightness, set schedules, and create scenes from your smartphone. The upfront cost of LED is slightly higher than halogen, but the energy savings and zero-maintenance operation make it the clear long-term value choice.",
      },
      {
        heading: 'Water Conservation and Rebate Opportunities',
        text: "Efficient irrigation is not just good for your landscape, it saves real money and may qualify you for rebates from your local water district. Many Utah municipalities, including those served by the Jordan Valley Water Conservancy District, offer financial incentives for installing smart irrigation controllers, converting spray heads to drip systems, and reducing overall water consumption. Timberline Falls stays current on available rebate programs and can help you take advantage of these savings. Beyond rebates, a properly designed irrigation system can reduce water usage by 30 to 50 percent compared to a poorly designed or outdated system. With Utah water rates increasing and tiered pricing penalizing heavy users, investing in an efficient irrigation system pays for itself faster than most homeowners expect. We also offer irrigation audits for existing systems to identify leaks, coverage gaps, and efficiency improvements.",
      },
    ],
    faqs: [
      { question: 'Do you install smart irrigation controllers?', answer: 'Yes. We install smart controllers that adjust based on weather and soil moisture, saving significant water compared to traditional timers.' },
      { question: 'What type of outdoor lighting do you install?', answer: 'We install low-voltage LED landscape lighting including pathway lights, uplights, spotlights, and accent features.' },
    ],
    relatedSlugs: ['landscape-construction', 'artificial-turf', 'patios-walkways'],
    primaryKeyword: 'irrigation installation Utah',
  },
  {
    slug: 'concrete-services',
    title: 'Concrete Services',
    shortTitle: 'Concrete',
    category: 'concrete',
    metaTitle: 'Concrete Services in Utah — Driveways, Retaining Walls & More | Timberline Falls',
    metaDescription: 'Professional concrete services in Saratoga Springs & Bountiful, UT. Driveways, retaining walls, sidewalks, stamped concrete. Free estimates.',
    h1: 'Professional Concrete Services Built to Last',
    intro: "From driveways to retaining walls, Timberline Falls delivers concrete work that combines structural integrity with a clean, finished appearance. Our experienced crews handle site prep, forming, rebar, pouring, finishing, and curing with the precision that 20+ years of Utah work demands.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4c31095735c5d82404462.png',
    heroAlt: 'Professional concrete services in Utah — Timberline Falls',
    features: ['Concrete driveway installation and replacement', 'Retaining wall construction', 'Sidewalk and pathway installation', 'RV pad installation', 'Stamped and colored concrete', 'Proper base prep, rebar, and finishing'],
    body: [
      {
        heading: 'Overview of Our Concrete Capabilities',
        text: "Timberline Falls provides a full range of residential and commercial concrete services across the Saratoga Springs, Bountiful, and greater Utah County and Davis County areas. Our experienced crews handle everything from straightforward driveway replacements to complex multi-phase projects involving retaining walls, stamped decorative surfaces, and graded foundations. We pour standard broom-finish concrete, exposed aggregate, stamped and colored decorative concrete, and structural concrete for walls and footings. Our capabilities also include sidewalks, RV pads, curb and gutter, garage floors, and approach aprons. Every project receives the same level of attention to base preparation, reinforcement, forming, finishing, and curing, whether it is a simple walkway or a large commercial pour. With over 20 years of concrete work in Utah, Timberline Falls has built a reputation for quality, reliability, and clean jobsites.",
      },
      {
        heading: 'Proper Base Preparation for Utah Soil Conditions',
        text: "The longevity of any concrete installation depends on what is beneath it, and Utah's soil presents specific challenges that demand expert preparation. Much of the Wasatch Front sits on expansive clay soils that swell when wet and shrink when dry, creating movement that can crack and heave improperly supported concrete. Timberline Falls addresses this by excavating to adequate depth, removing organic material and unstable soil, and installing a compacted gravel base that provides a stable, well-draining foundation. In areas with particularly poor soil, we may over-excavate and import engineered fill material. We compact the base in lifts using vibratory equipment and verify compaction before forming and pouring. This preparation adds time to the project but is the single most important factor in whether your concrete will perform for five years or fifty years in Utah conditions.",
      },
      {
        heading: 'Why Quality Concrete Work Matters',
        text: "Concrete is one of those materials where the difference between good work and poor work may not be visible on day one, but it becomes painfully obvious within a few years. A driveway poured on an inadequate base will crack and settle. A retaining wall without proper drainage will lean and eventually fail. Stamped concrete with inconsistent coloring or poorly placed joints looks worse every season. Timberline Falls invests in doing the job right the first time because we know that concrete is permanent and our reputation depends on its long-term performance. We use properly graded mixes specified for the application, install rebar or fiber reinforcement as appropriate, place control joints at correct intervals, and follow proper curing practices. These details separate professional concrete work from the kind of work that leads to costly repairs and replacements.",
      },
      {
        heading: 'Residential and Commercial Concrete Services',
        text: "While the majority of our concrete work serves homeowners, Timberline Falls also handles commercial concrete projects including parking lots, sidewalks, loading areas, retaining walls, and decorative entryways for businesses and HOA common areas. Commercial projects require the same attention to base preparation, reinforcement, and finishing as residential work, but often involve larger pours, thicker sections, heavier reinforcement, and coordination with other trades and municipal inspectors. Our crews are experienced in phased pours that keep businesses operational during construction and ADA-compliant installations for public-facing areas. Whether you are a homeowner planning a new driveway or a property manager upgrading a commercial site, Timberline Falls brings the same commitment to quality, clear communication, and on-time completion to every project we take on.",
      },
    ],
    faqs: [
      { question: 'What concrete services do you offer?', answer: 'We provide driveway installation/replacement, retaining walls, sidewalks, RV pads, patios, stamped concrete, colored concrete, and curb/gutter work.' },
      { question: 'How long does concrete last in Utah?', answer: 'Properly installed concrete with adequate base prep and reinforcement lasts 25 to 50+ years in Utah.' },
    ],
    relatedSlugs: ['concrete-driveways', 'retaining-walls', 'stamped-colored-concrete'],
    primaryKeyword: 'concrete services Utah',
  },
  {
    slug: 'concrete-driveways',
    title: 'Concrete Driveways',
    shortTitle: 'Driveways',
    category: 'concrete',
    metaTitle: 'Concrete Driveway Installation in Utah — Timberline Falls',
    metaDescription: 'Expert concrete driveway installation in Saratoga Springs & Bountiful, UT. Proper base prep, rebar reinforcement. Free estimates.',
    h1: "Concrete Driveway Installation That Stands Up to Utah Winters",
    intro: "Your driveway takes a beating from Utah's freeze-thaw cycles, heavy vehicles, and road salt. Timberline Falls installs concrete driveways with proper base preparation, rebar reinforcement, and finishing that stand up to decades of daily use.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4bf56b617a7c88b4c75a5.png',
    heroAlt: 'Concrete driveway installation in Utah — Timberline Falls',
    features: ['New installation and old driveway replacement', 'Proper base excavation and compaction', 'Rebar or fiber reinforcement', 'Standard, stamped, or colored finishes', 'Expansion and control joints', 'RV pad extensions and widening'],
    body: [
      {
        heading: 'The Prep and Pour Process for Concrete Driveways',
        text: "A concrete driveway that lasts decades starts long before the truck arrives. Timberline Falls begins every driveway project with a thorough site evaluation to assess existing conditions, soil type, drainage patterns, and access. If replacing an existing driveway, we demolish and haul away the old concrete, then excavate the subgrade to a minimum depth of six inches below the finished surface. We install and compact a four-inch gravel base in lifts, set forms to the correct grade and slope, and place rebar reinforcement on chairs to ensure it sits in the proper position within the slab. Control joints are planned at intervals no greater than ten feet to manage cracking. On pour day, our crew places, screeds, floats, and finishes the concrete in a continuous operation, then applies a curing compound to ensure proper hydration. The result is a clean, durable driveway built to perform in Utah conditions.",
      },
      {
        heading: 'Thickness and Reinforcement for Utah Conditions',
        text: "Standard residential driveways in Utah should be a minimum of four inches thick on a compacted gravel base. However, Timberline Falls frequently recommends increasing to five or six inches for driveways that will support heavy vehicles like RVs, trailers, or work trucks. Thicker concrete resists cracking under heavy loads and provides additional durability against frost heave in Utah's freeze-thaw climate. We reinforce every driveway with either a grid of number-four rebar on 24-inch centers or fiber-mesh reinforcement, depending on the application. For driveways on expansive clay soils, common throughout Utah County and Davis County, rebar reinforcement is strongly preferred because it holds the slab together even if the soil shifts beneath it. We also use air-entrained concrete mixes that contain microscopic air bubbles, allowing the concrete to flex during freeze-thaw cycles without surface scaling or spalling.",
      },
      {
        heading: 'Driveway Maintenance Tips for Utah Homeowners',
        text: "Once your new concrete driveway is installed, a few simple maintenance practices will keep it looking great and performing well for decades. Avoid applying de-icing salt during the first winter, use sand for traction instead. After the first year, use calcium chloride or magnesium chloride products rather than rock salt, which can damage concrete surfaces. Seal your driveway with a quality concrete sealer every two to three years to protect against moisture penetration, staining, and surface wear. Clean oil and grease stains promptly with a degreaser to prevent permanent discoloration. Keep the edges of your driveway supported by maintaining soil and landscaping at the same level as the concrete, as unsupported edges are more likely to crack. If you notice any cracks developing, address them early with a concrete caulk before water infiltration causes the problem to worsen through freeze-thaw cycles.",
      },
      {
        heading: 'Driveway Replacement vs. Overlay: Which Is Right for You',
        text: "If your existing driveway is cracked, settled, or deteriorating, you may wonder whether you need a full replacement or can get away with an overlay. The answer depends on the condition of the existing slab. If the concrete is structurally sound with minor surface damage, a two-to-three-inch overlay bonded to the existing surface can restore appearance at a lower cost than full replacement. However, if the slab has significant cracking, settlement, heaving, or base failure, which is common with older driveways on Utah's clay soils, an overlay will eventually reflect the same problems. In these cases, Timberline Falls recommends full removal and replacement with proper base preparation and reinforcement. During your free consultation, our team evaluates the existing driveway honestly and recommends the approach that delivers the best long-term value rather than simply the cheapest short-term fix.",
      },
    ],
    faqs: [
      { question: 'How thick should a concrete driveway be?', answer: 'At least 4 inches on a compacted gravel base. For heavy vehicles like RVs, we recommend 6 inches with rebar reinforcement.' },
      { question: 'How much does a concrete driveway cost in Utah?', answer: 'Typically $8 to $15 per square foot for standard concrete. Stamped or colored options cost more. We provide free estimates.' },
      { question: 'Do you use rebar in concrete driveways?', answer: "Yes. We use rebar or fiber-mesh reinforcement in every driveway. This significantly reduces cracking, especially important in Utah's freeze-thaw climate." },
    ],
    relatedSlugs: ['concrete-services', 'stamped-colored-concrete', 'retaining-walls'],
    primaryKeyword: 'concrete driveway installation Utah',
  },
  {
    slug: 'retaining-walls',
    title: 'Retaining Walls',
    shortTitle: 'Retaining Walls',
    category: 'concrete',
    metaTitle: 'Retaining Wall Installation in Utah — Timberline Falls',
    metaDescription: 'Expert retaining wall construction in Saratoga Springs & Bountiful, UT. Concrete block, natural stone, poured concrete. Free estimates.',
    h1: 'Retaining Walls That Solve Problems and Look Great',
    intro: "Retaining walls manage slopes, prevent erosion, and create usable flat spaces on uneven terrain. Timberline Falls builds retaining walls that are structurally sound and designed to enhance your property's appearance.",
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4c15d95735c81683ff62b.png',
    heroAlt: 'Retaining wall construction in Utah — Timberline Falls',
    features: ['Structural and decorative retaining walls', 'Concrete block, natural stone, and poured options', 'Proper drainage and backfill engineering', 'Terracing for sloped lots', 'Garden walls and raised planters', 'Permit coordination for walls over 4 feet'],
    body: [
      {
        heading: 'Engineering Considerations for Retaining Walls',
        text: "Retaining walls are structural elements that must resist enormous lateral pressure from the soil they hold back. A four-foot wall retaining saturated soil can experience thousands of pounds of force per linear foot, and that force increases exponentially with height. Timberline Falls approaches every retaining wall project with structural integrity as the top priority. For walls over four feet, we work with licensed structural engineers who design the wall system based on soil type, surcharge loads, slope angle, and drainage conditions specific to your property. Proper engineering accounts for footing depth and width, reinforcement requirements, geogrid placement for segmental block walls, and drainage provisions. Cutting corners on engineering is the primary reason retaining walls fail, and a failed wall is dangerous, expensive to repair, and may create liability issues. Our engineering-first approach ensures your wall performs safely for decades.",
      },
      {
        heading: 'Retaining Wall Material Options',
        text: "Timberline Falls builds retaining walls using several material systems, each with distinct advantages. Segmental concrete block (such as Belgard or Pavestone) is our most popular option for residential walls, offering a clean, consistent appearance, multiple colors and textures, and an interlocking design with geogrid reinforcement for structural walls. Natural stone walls deliver a timeless, organic look that complements mountain and rustic-style homes common in Utah. Poured concrete walls provide maximum strength and are often used for tall walls, basement foundation walls, and commercial applications where structural demands are highest. Boulder walls use large natural rocks stacked with calculated setback and are ideal for creating a natural, rugged aesthetic on larger properties. We help you select the right material based on the wall's structural requirements, the desired appearance, your budget, and how the wall integrates with your overall landscape design.",
      },
      {
        heading: 'Drainage: The Most Critical Factor in Wall Longevity',
        text: "More retaining walls fail due to poor drainage than any other cause. When water accumulates behind a retaining wall, it dramatically increases the lateral pressure the wall must resist, a condition called hydrostatic pressure. In Utah, spring snowmelt and summer thunderstorms can saturate the soil behind a wall rapidly, and if that water has no way to escape, the wall is under extreme stress. Timberline Falls installs comprehensive drainage systems behind every retaining wall we build. This includes a perforated drain pipe at the base of the wall wrapped in filter fabric, a zone of clean drainage gravel behind the wall face, and weep holes or outlets that allow collected water to exit. We also grade the area behind the wall to direct surface water away from the wall face. These drainage provisions are invisible once the wall is complete, but they are the single most important factor in ensuring the wall stands strong for 50 years or more.",
      },
      {
        heading: 'Permits and Regulations for Tall Retaining Walls',
        text: "In most Utah municipalities, retaining walls over four feet in height require a building permit and a set of engineered construction drawings stamped by a licensed professional engineer. Some cities measure the four-foot threshold from the bottom of the footing to the top of the wall, while others measure only the exposed face height, so it is important to verify local requirements before construction begins. Walls that retain a slope with structures, driveways, or other improvements above them may face additional requirements regardless of height. Timberline Falls handles the entire permitting process as part of our service, including coordinating with structural engineers, preparing permit applications, submitting plans to the building department, and scheduling required inspections during construction. This saves you the hassle of navigating municipal processes and ensures your wall is built to code and fully approved.",
      },
    ],
    faqs: [
      { question: 'How long does a retaining wall last?', answer: 'A properly constructed retaining wall with adequate drainage lasts 50+ years. Good drainage is the key factor.' },
      { question: 'Do retaining walls need permits in Utah?', answer: 'Walls over 4 feet typically require a building permit and may need engineering. We handle permitting as part of our service.' },
    ],
    relatedSlugs: ['concrete-services', 'landscape-construction', 'concrete-driveways'],
    primaryKeyword: 'retaining wall installation Utah',
  },
  {
    slug: 'stamped-colored-concrete',
    title: 'Stamped & Colored Concrete',
    shortTitle: 'Stamped Concrete',
    category: 'concrete',
    metaTitle: 'Stamped & Colored Concrete in Utah — Timberline Falls',
    metaDescription: 'Decorative stamped and colored concrete for patios, driveways, and pool decks in Saratoga Springs & Bountiful, UT. Free estimates.',
    h1: 'Decorative Stamped & Colored Concrete That Elevates Any Surface',
    intro: 'Get the look of stone, brick, or tile at a fraction of the cost. Timberline Falls installs premium stamped and colored concrete for patios, driveways, pool decks, walkways, and more.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a4c23695735c822e4017b9.png',
    heroAlt: 'Stamped colored concrete patio in Utah — Timberline Falls',
    features: ['Wide range of stamp patterns, stone, brick, slate, wood', 'Integral and surface-applied coloring', 'Textured finishes for slip resistance', 'Ideal for patios, driveways, pool decks', 'Sealed for long-lasting beauty', 'More affordable than natural stone'],
    body: [
      {
        heading: 'Pattern and Color Options for Stamped Concrete',
        text: "Stamped concrete offers an enormous range of design possibilities that can replicate the appearance of almost any natural material. Timberline Falls maintains an extensive library of stamp patterns including Ashlar slate, random stone, flagstone, herringbone brick, cobblestone, and even wood plank textures. Each pattern is available with multiple color combinations using integral color, pigment mixed directly into the concrete, combined with a surface-applied release agent that creates realistic depth and variation. Popular color choices among Utah homeowners include warm sandstone and desert tan tones that complement the natural landscape, rich gray tones that pair with modern architecture, and terra cotta shades that evoke a Mediterranean feel. We can also create custom color blends to match your home's existing stone, brick, or siding. During your consultation, we bring sample boards so you can see and feel actual finished textures and colors before making your selection.",
      },
      {
        heading: 'Durability and Long-Term Performance',
        text: "Stamped concrete is poured, reinforced, and finished using the same structural standards as any high-quality concrete installation, and it simply receives an additional decorative treatment during the finishing process. This means your stamped patio, driveway, or pool deck has the same 25-to-50-year structural lifespan as standard concrete. The decorative surface is protected by a high-quality acrylic or polyurethane sealer that shields the color from UV fading, prevents moisture penetration, and resists staining from food, oil, and organic matter. Timberline Falls uses air-entrained concrete mixes for all exterior stamped work in Utah, providing essential protection against freeze-thaw surface damage. We also apply textured release agents that leave a slightly rough surface profile, providing slip resistance even when wet, an important safety consideration for pool decks and walkways that receive foot traffic year-round.",
      },
      {
        heading: 'Sealing and Maintaining Stamped Concrete',
        text: "Sealing is the key to keeping stamped concrete looking vibrant and protected over time. Timberline Falls applies an initial sealer coat after the concrete has cured for approximately 28 days. This sealer enhances color depth, adds a subtle sheen, and creates a protective barrier against moisture, stains, and UV exposure. We recommend resealing every two to three years to maintain optimal protection and appearance, a process that takes only a few hours for most patios and driveways. Between sealings, regular maintenance is straightforward: sweep or blow off debris, wash with a garden hose or pressure washer on a low setting, and address any stains promptly with a mild detergent. Avoid using de-icing salts during the first winter and use non-corrosive alternatives in subsequent years. With this simple maintenance routine, your stamped concrete will retain its color, texture, and beauty for many years.",
      },
      {
        heading: 'Stamped Concrete vs. Natural Stone: Making the Right Choice',
        text: "Homeowners often debate between stamped concrete and natural stone for patios, walkways, and pool decks. Both are excellent choices, but they serve different priorities. Stamped concrete costs significantly less per square foot, typically 30 to 50 percent less than natural stone installation, while still delivering a convincing stone-like appearance. It is poured as a continuous surface, which means fewer joints and a more uniform result over large areas. Natural stone, on the other hand, offers an authenticity and variation that stamped concrete cannot perfectly replicate. Each natural stone piece is unique, and premium materials like travertine and bluestone have a depth of character that is difficult to match. Timberline Falls installs both and can help you determine which option best fits your design vision, budget, and maintenance preferences. In many projects, we combine the two, using natural stone for high-visibility areas and stamped concrete for larger expanses where cost efficiency matters.",
      },
    ],
    faqs: [
      { question: "What's the difference between stamped and regular concrete?", answer: 'Stamped concrete is imprinted with patterns and colored to resemble natural stone, brick, or tile. It costs more than plain concrete but less than natural materials.' },
      { question: 'Does stamped concrete crack?', answer: "Like all concrete, it can develop minor cracks over time. Proper base prep, reinforcement, and control joints minimize this. Cracks typically follow pattern lines and are barely noticeable." },
      { question: 'How often does stamped concrete need resealing?', answer: 'Every 2 to 3 years to maintain color and protection. It\'s a simple process that keeps your concrete looking new.' },
    ],
    relatedSlugs: ['concrete-services', 'concrete-driveways', 'patios-walkways'],
    primaryKeyword: 'stamped concrete Utah',
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getServicesByCategory(cat: ServiceData['category']) {
  return services.filter((s) => s.category === cat);
}

export function getRelatedServices(slugs: string[]) {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as ServiceData[];
}
