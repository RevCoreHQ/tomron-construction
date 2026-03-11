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
    slug: 'utah-county',
    city: 'Utah County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Utah County — Timberline Falls',
    metaDescription:
      'Custom pool construction, landscape design, and concrete services throughout Utah County, UT. Locally based. 20+ years experience. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Utah County',
    intro:
      'Timberline Falls is based in Utah County and serves homeowners throughout the entire county with custom swimming pools, professional landscape construction, and expert concrete services. From Saratoga Springs and Eagle Mountain to Lehi, American Fork, Provo, and Spanish Fork, our team brings over 20 years of experience to every project.',
    isPrimary: true,
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699daa922837e844fa25f686.png',
    body: [
      {
        heading: 'Serving All of Utah County',
        text: "Utah County is home to some of the fastest-growing communities in the country, including Saratoga Springs, Eagle Mountain, Lehi, and the Silicon Slopes corridor. Timberline Falls was built here and has worked on projects in virtually every corner of the county. We understand the soil conditions, HOA requirements, permit processes, and climate considerations that vary across the county's diverse geography, from the lake-adjacent communities along Utah Lake to the hillside neighborhoods climbing toward the Wasatch Range. Whether your property is in an established neighborhood in Provo or a brand-new development in Eagle Mountain, our team has the local knowledge to deliver a project that is built right.",
      },
      {
        heading: 'Why Utah County Homeowners Build Outdoor Living Spaces',
        text: "With warm summers stretching from May through September and stunning mountain backdrops from nearly every neighborhood, Utah County is one of the best places in the state to invest in outdoor living. A custom pool becomes the center of family life during the summer months, while a professionally designed landscape extends the usability of your property into spring and fall. Many Utah County homes, particularly those built in the last decade, came with minimal builder-grade landscaping that homeowners are eager to upgrade. Timberline Falls specializes in transforming those blank-slate yards into complete outdoor environments with pools, kitchens, irrigation, lighting, and hardscaping that matches the quality of the home.",
      },
      {
        heading: 'Local Expertise You Can Count On',
        text: "As a locally owned contractor, Timberline Falls has deep roots in Utah County. Our team members live and work here, our relationships with local inspectors and suppliers run deep, and our reputation is built on the quality of completed projects visible in neighborhoods across the county. We are not a franchise or an out-of-area company trying to win bids. We are your neighbors, and we stand behind every project we build.",
      },
    ],
  },
  {
    slug: 'salt-lake-county',
    city: 'Salt Lake County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Salt Lake County — Timberline Falls',
    metaDescription:
      'Custom pool construction, landscape design, and concrete services throughout Salt Lake County, UT. 20+ years experience. Licensed & insured. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Salt Lake County',
    intro:
      'Timberline Falls serves homeowners throughout Salt Lake County with custom swimming pools, complete landscape construction, and concrete services. From Draper and South Jordan to Sandy, Riverton, and Herriman, our experienced team delivers outdoor living spaces that elevate your property and your lifestyle.',
    isPrimary: true,
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f55e08a039e10e7be7e40.jpg',
    body: [
      {
        heading: 'Premium Outdoor Spaces Across the Salt Lake Valley',
        text: "Salt Lake County encompasses one of the most diverse housing markets in Utah, from the established hillside neighborhoods of Draper and Sandy to the newer master-planned communities of Herriman and Riverton. Timberline Falls serves this entire market with the same standard of craftsmanship throughout. Salt Lake County homeowners tend to be design-conscious and expect both quality construction and thoughtful design. Our 3D rendering process allows you to see a photorealistic version of your completed project before a single shovel hits the ground, ensuring the finished result matches your vision.",
      },
      {
        heading: 'Building on the Valley\'s Varied Terrain',
        text: "Salt Lake County's geography ranges from the flat valley floor near the Jordan River to steep hillside lots in Draper and Sandy where mountain views command a premium. Building on slopes requires specialized knowledge in grading, retaining wall engineering, and drainage management. Timberline Falls has extensive experience with hillside construction across the county, including multi-level pool designs, terraced landscapes, and drainage solutions that protect the home and surrounding property. We also navigate the varying building codes and permit requirements that apply across Salt Lake County's many cities and municipalities.",
      },
      {
        heading: 'Serving Salt Lake County Communities',
        text: "Our Salt Lake County work spans communities including Draper, Sandy, South Jordan, West Jordan, Riverton, Herriman, Murray, Midvale, and beyond. Many projects in the south valley involve homeowners who have seen our work in Utah County through referrals and want the same quality brought to their property. We provide free on-site consultations throughout the county and are happy to assess your specific property, terrain, and project goals before providing a detailed estimate.",
      },
    ],
  },
  {
    slug: 'davis-county',
    city: 'Davis County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Davis County — Timberline Falls',
    metaDescription:
      'Pool construction, landscaping, and concrete services throughout Davis County, UT. Serving Bountiful, Farmington, Kaysville, and surrounding communities. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Davis County',
    intro:
      'Davis County homeowners trust Timberline Falls for premium outdoor living construction. Whether you are planning a custom swimming pool, a complete landscape overhaul, or new concrete work, our team serves communities throughout Davis County, including Bountiful, Farmington, Kaysville, Layton, and Syracuse.',
    isPrimary: true,
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f55e09a0c18790b956afe.png',
    body: [
      {
        heading: 'Outdoor Living in Davis County',
        text: "Davis County is one of the most established communities along the Wasatch Front, with tree-lined streets, mature neighborhoods, and properties ranging from charming older homes to newer hillside estates. The county's location between Salt Lake City and Ogden offers convenient access to everything while maintaining a quieter, family-oriented atmosphere. A custom pool turns a Davis County backyard into a private retreat during Utah's warm summers, while a professionally designed landscape enhances curb appeal and creates functional outdoor spaces for family gatherings. Concrete services are also in high demand as homeowners replace aging driveways and add patios and retaining walls to manage the varied terrain common across the county.",
      },
      {
        heading: 'Working With Davis County Properties',
        text: "Many Davis County properties sit on sloped lots along the foothills of the Wasatch Range, particularly in Bountiful and North Salt Lake. Slopes create natural elevation changes that can be incorporated into stunning multi-level pool designs, terraced landscapes, and cascading water features. Building on slopes also requires expert grading, engineered retaining structures, and careful drainage management. Timberline Falls has extensive experience with hillside construction across Davis County and is familiar with the soil conditions, setback requirements, and permit processes that apply in Bountiful, Farmington, Centerville, Kaysville, and the surrounding area.",
      },
      {
        heading: 'Davis County Communities We Serve',
        text: "Our Davis County work covers communities including Bountiful, North Salt Lake, Woods Cross, Centerville, Farmington, Kaysville, Layton, and Syracuse. We provide free on-site consultations throughout the county, and many of our Davis County clients come to us through referrals from neighbors who have seen our completed projects. Whether you are in a newer Farmington subdivision or an established Bountiful neighborhood, our team brings the same professionalism and craftsmanship to every project.",
      },
    ],
  },
  {
    slug: 'summit-county',
    city: 'Summit County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Summit County — Timberline Falls',
    metaDescription:
      'Custom pool construction, landscape design, and concrete services in Summit County, UT. Serving Park City and surrounding mountain communities. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Summit County',
    intro:
      'Timberline Falls brings premium outdoor living construction to Summit County homeowners. From Park City\'s ski-in neighborhoods to the open properties of Kamas and Coalville, our team has the experience to build custom pools, luxury landscapes, and quality concrete work that meets the demands of the mountain environment.',
    isPrimary: false,
    nearbyNote: 'Summit County is within our extended service area. Call us to confirm availability for your specific property.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/699f55e00867dda39aa3c9e8.png',
    body: [
      {
        heading: 'Building for the Mountain Environment',
        text: "Summit County presents unique construction challenges that require specific expertise. Higher elevations mean shorter frost-free seasons, more intense UV exposure, and greater temperature swings than the valley communities we typically serve. Pool shells, concrete, and landscape installations must be engineered with these conditions in mind, including deeper frost protection, appropriate material selection, and plant choices that can handle the mountain climate. Timberline Falls accounts for these factors in every Summit County project, ensuring your investment performs reliably year after year despite the more demanding environment.",
      },
      {
        heading: 'Luxury Outdoor Spaces in Park City and Beyond',
        text: "Summit County attracts homeowners who expect exceptional quality in every aspect of their property. Custom pools in this market often include high-end finishes, sophisticated water features, and integrated spa designs that complement the architectural character of mountain homes. Landscape designs frequently incorporate native and drought-tolerant plants that thrive at elevation while requiring minimal maintenance. Our 3D design process is particularly valuable in Summit County, where the investment level is high and every detail matters before construction begins.",
      },
    ],
  },
  {
    slug: 'tooele-county',
    city: 'Tooele County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Tooele County — Timberline Falls',
    metaDescription:
      'Pool construction, landscaping, and concrete services in Tooele County, UT. Serving Tooele, Grantsville, Stansbury Park, and surrounding areas. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Tooele County',
    intro:
      'Timberline Falls serves Tooele County homeowners with custom pool construction, landscape installation, and concrete services. Whether you are in Tooele City, Grantsville, or the growing Stansbury Park community, our team is ready to help you build the outdoor space you have always envisioned.',
    isPrimary: false,
    nearbyNote: 'Tooele County is within our service area. Please call to confirm availability for your specific address.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a313e995735c720cfcde0e.png',
    body: [
      {
        heading: 'Growing Communities, Growing Demand',
        text: "Tooele County has seen significant residential growth as families seek more affordable housing options west of the Oquirrh Mountains. Communities like Stansbury Park and Grantsville have attracted homeowners who want larger lots and quieter surroundings, and those larger lots are ideal for ambitious outdoor living projects. Many Tooele County homes are relatively new, and homeowners are ready to invest in pools, landscapes, and concrete improvements that make their properties truly feel complete.",
      },
      {
        heading: 'Desert Climate Expertise',
        text: "Tooele County sits in a high-desert environment with hot summers, cold winters, and drier conditions than communities closer to Utah Lake. Pool construction, concrete, and landscape work in this climate must account for greater temperature extremes and lower annual precipitation. Timberline Falls designs irrigation systems appropriate for the desert microclimate, selects materials rated for the temperature range, and engineers pool shells and concrete with the soil expansion and contraction cycles of the region in mind.",
      },
    ],
  },
  {
    slug: 'box-elder-county',
    city: 'Box Elder County',
    state: 'UT',
    metaTitle: 'Pool Builder & Landscaping in Box Elder County — Timberline Falls',
    metaDescription:
      'Pool construction, landscaping, and concrete services in Box Elder County, UT. Serving Brigham City, Tremonton, and surrounding northern Utah communities. Free estimates.',
    h1: 'Pool Construction & Outdoor Living in Box Elder County',
    intro:
      'Timberline Falls extends its pool construction, landscape design, and concrete services to homeowners in Box Elder County. Serving Brigham City, Tremonton, Perry, and surrounding communities, our team brings the same quality craftsmanship to northern Utah that we have delivered across the Wasatch Front for over 20 years.',
    isPrimary: false,
    nearbyNote: 'Box Elder County is at the northern edge of our service area. Call us to discuss your project and confirm availability.',
    heroImage: 'https://assets.cdn.filesafe.space/VpxNeZuIvxjzZljfxNjd/media/69a313e995735c7dcefcde0d.png',
    body: [
      {
        heading: 'Northern Utah Outdoor Living',
        text: "Box Elder County offers a mix of agricultural heritage and growing residential development, with homeowners who take pride in their properties and the wide-open spaces that come with them. Larger rural and semi-rural lots give homeowners room to build comprehensive outdoor environments that combine pools, landscaping, and hardscaping into a cohesive property design. Timberline Falls works with Box Elder County homeowners to create outdoor spaces that fit the scale and character of the property while meeting the same high standards we bring to every project across our service area.",
      },
      {
        heading: 'Quality You Can Count On',
        text: "Box Elder County homeowners may have fewer local contractor options than communities closer to Salt Lake City, which makes choosing the right contractor even more important. Timberline Falls brings licensed, insured, and experienced crews to every project, regardless of location. Our free consultation process includes an on-site property visit where we assess your specific conditions, discuss your goals, and provide a detailed written estimate. We do not cut corners or substitute inferior materials based on location. Every Box Elder County project is built to the same standard as every other project in our portfolio.",
      },
    ],
  },
];

export function getServiceAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}
