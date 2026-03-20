'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

export const projects = [
  // --- Siding & Cladding ---
  {
    id: 1,
    title: 'Complete Siding Replacement',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb259736f3d988a.webp',
    alt: 'Complete vinyl siding replacement on two-storey home by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 2,
    title: 'Exterior Renovation',
    location: 'Coquitlam, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab257249b849038a781.webp',
    alt: 'Full exterior renovation with new siding and trim by Tomron Construction in Coquitlam, BC',
  },
  {
    id: 4,
    title: 'Siding & Trim Work',
    location: 'Burnaby, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb2591a763d9889.webp',
    alt: 'Siding installation with custom exterior trim detailing by Tomron Construction in Burnaby, BC',
  },
  {
    id: 7,
    title: 'Siding Installation',
    location: 'Abbotsford, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab28cb25912223d988b.webp',
    alt: 'New siding installation on residential home by Tomron Construction in Abbotsford, BC',
  },
  {
    id: 8,
    title: 'Exterior Cladding Project',
    location: 'Burnaby, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2c2389cb1a64f3b17.webp',
    alt: 'Exterior cladding replacement with modern finish by Tomron Construction in Burnaby, BC',
  },
  {
    id: 9,
    title: 'New Home Siding',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e78565a1fbc407e51.webp',
    alt: 'New construction siding installation on residential home by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 10,
    title: 'Exterior Finishing',
    location: 'Coquitlam, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e7fc07c5e0b9783e7.webp',
    alt: 'Exterior finishing with siding and soffit detailing by Tomron Construction in Coquitlam, BC',
  },
  {
    id: 11,
    title: 'Residential Siding Project',
    location: 'Pitt Meadows, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8d3eae32c01b588c.webp',
    alt: 'Residential siding replacement project by Tomron Construction in Pitt Meadows, BC',
  },
  {
    id: 13,
    title: 'Cladding & Trim',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8d3eae49601b5887.webp',
    alt: 'Exterior cladding and trim installation on family home by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 14,
    title: 'Full Exterior Reclad',
    location: 'Abbotsford, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2ec2389c823e4f5e04.webp',
    alt: 'Full exterior reclad with new siding material by Tomron Construction in Abbotsford, BC',
  },
  {
    id: 21,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c935c625850fdedc0f2d.jpg',
    alt: 'James Hardie fibre cement siding installation, front elevation by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 22,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c93599577d6f94570a2d.jpg',
    alt: 'Hardie plank siding with corner trim detail by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 23,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c935e03e915d5dc6ce56.jpg',
    alt: 'Hardie board siding installation, side wall section by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 24,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c935e03e9117f2c6ce55.jpg',
    alt: 'Fibre cement siding with window trim integration by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 25,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c93587f0f21ba74e2c42.jpg',
    alt: 'Hardie siding installation progress showing weather barrier by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 26,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c9359d391448386355e3.jpg',
    alt: 'Completed James Hardie siding, rear elevation by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 27,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c935c625859f8bdc0f28.jpg',
    alt: 'Hardie siding with soffit and fascia finishing by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 28,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c9355b89c7a413df92ca.jpg',
    alt: 'Hardie plank siding gable end detail by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 29,
    title: 'Hardie Siding Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c934c625858ecedc0f17.jpg',
    alt: 'James Hardie siding full home completion by Tomron Construction in Maple Ridge, BC',
  },

  // --- Building Envelope ---
  {
    id: 3,
    title: 'Building Envelope Repair',
    location: 'Pitt Meadows, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2bfc81fd1318a9dbb.webp',
    alt: 'Building envelope moisture barrier repair by Tomron Construction in Pitt Meadows, BC',
  },
  {
    id: 15,
    title: 'Siding & Envelope Work',
    location: 'Coquitlam, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e8cb259358e3db9a1.webp',
    alt: 'Siding and building envelope repair with weather barrier by Tomron Construction in Coquitlam, BC',
  },

  // --- Windows ---
  {
    id: 31,
    title: 'Window Replacement',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca36c625857aecdc253b.jpg',
    alt: 'Energy-efficient window replacement with flashing by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 32,
    title: 'Window Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca36ad02767fce3a53d8.jpg',
    alt: 'New window installation with proper sealing and trim by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 33,
    title: 'Window Replacement',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca365b89c79106dfa9ab.jpg',
    alt: 'Double-pane window replacement on residential home by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 34,
    title: 'Window Replacement',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca3699577d718e5720e7.jpg',
    alt: 'Multiple window replacement with exterior finishing by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 36,
    title: 'Window Installation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca36269d65595dbeeff1.jpg',
    alt: 'Sliding window installation with insulated frame by Tomron Construction in Maple Ridge, BC',
  },

  // --- Metal Flashing ---
  {
    id: 5,
    title: 'Custom Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab278565a8d38405c23.webp',
    alt: 'Custom fabricated metal flashing for water management by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 38,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7c625854b6cdc7e73.jpg',
    alt: 'Custom roof-to-wall metal flashing transition by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 39,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca8ad02763be93aabae.jpg',
    alt: 'Window head flashing installation for water diversion by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 40,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca844d9171eee28ffc5.jpg',
    alt: 'Drip edge metal flashing along roofline by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 41,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca787f0f281814e9d78.jpg',
    alt: 'Corner flashing detail on exterior wall junction by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 42,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7ad0276b1f43aabab.jpg',
    alt: 'Step flashing along roof-wall intersection by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 43,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca844d91707dd28ffc4.jpg',
    alt: 'Kick-out flashing diverter at gutter transition by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 44,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca84fd1a57f91ebb9ee.jpg',
    alt: 'Z-bar metal flashing between siding courses by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 45,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7ad02763bfd3aabaa.jpg',
    alt: 'Window sill flashing with sealed end dams by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 46,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7d230ed376ea42f0a.jpg',
    alt: 'Continuous metal cap flashing on parapet wall by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 47,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca8d230edf879a42f0b.jpg',
    alt: 'Deck-to-wall flashing connection for moisture protection by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 48,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7d230ed1d57a42f09.jpg',
    alt: 'Through-wall flashing at foundation-siding junction by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 49,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca75b89c78584e00328.jpg',
    alt: 'Chimney flashing with counter-flashing detail by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 50,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca744d917811828ffc2.jpg',
    alt: 'Valley flashing installation on roof intersection by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 51,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca75b89c77083e00329.jpg',
    alt: 'Fascia metal capping along roofline edge by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 52,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7ad0276b4b03aabac.jpg',
    alt: 'Custom bent flashing at exterior penetration by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 53,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca84fd1a53573ebb9ed.jpg',
    alt: 'Apron flashing below window with drip edge by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 54,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca8d230ed52e0a42f0c.jpg',
    alt: 'Metal flashing at exterior door threshold by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 55,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca787f0f2d2a64e9d79.jpg',
    alt: 'Galvanized metal flashing around vent penetration by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 56,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7d230edb31ba42f08.jpg',
    alt: 'Rake flashing installation along gable edge by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 57,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca8ad027625473aabad.jpg',
    alt: 'Counter-flashing at material transition point by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 58,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca844d917c54f28ffc6.jpg',
    alt: 'Pan flashing at horizontal surface joint by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 59,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca7c6258580b8dc7e75.jpg',
    alt: 'Soldered metal flashing seam for waterproof joint by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 60,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca81a9c7029a928674a.jpg',
    alt: 'Reglet flashing embedded in masonry wall by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 61,
    title: 'Metal Flashing',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8cca81a9c70e911286749.jpg',
    alt: 'Completed metal flashing system protecting exterior envelope by Tomron Construction in Maple Ridge, BC',
  },

  // --- Bathroom Renovations ---
  {
    id: 16,
    title: 'Bathroom Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c85e9d39141dea634081.jpg',
    alt: 'Modern bathroom renovation with tiled shower by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 17,
    title: 'Bathroom Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c85ee03e910e0fc6b7d9.jpg',
    alt: 'Bathroom vanity and countertop renovation by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 18,
    title: 'Bathroom Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c85ec625854fdfdbf86e.jpg',
    alt: 'Complete bathroom remodel with new fixtures and tile by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 19,
    title: 'Bathroom Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c85e269d652c7dbec4f9.jpg',
    alt: 'Bathroom flooring and wall tile installation by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 20,
    title: 'Bathroom Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8c85eee772d2afaa8ec9e.jpg',
    alt: 'Finished bathroom renovation with walk-in shower by Tomron Construction in Maple Ridge, BC',
  },

  // --- Home Renovations ---
  {
    id: 6,
    title: 'Full Home Exterior',
    location: 'Coquitlam, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19ab2cab7f72b28488946.webp',
    alt: 'Full home exterior renovation including siding, windows, and trim by Tomron Construction in Coquitlam, BC',
  },
  {
    id: 12,
    title: 'Home Renovation',
    location: 'Burnaby, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b19b2e584eaaaf433d832c.webp',
    alt: 'Exterior home renovation with updated siding and windows by Tomron Construction in Burnaby, BC',
  },
  {
    id: 30,
    title: 'Home Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca365b89c71ddcdfa9ac.jpg',
    alt: 'Interior home renovation with structural updates by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 35,
    title: 'Home Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca369d39144aa2636bda.jpg',
    alt: 'Home renovation project with exterior upgrades by Tomron Construction in Maple Ridge, BC',
  },
  {
    id: 37,
    title: 'Home Renovation',
    location: 'Maple Ridge, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69b8ca3699577dfb385720e6.jpg',
    alt: 'Full-scope home renovation project by Tomron Construction in Maple Ridge, BC',
  },

  // --- New Gallery Photos ---
  {
    id: 62,
    title: 'Exterior Construction Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b019f4254c14bb92a.jpg',
    alt: 'Exterior construction project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 63,
    title: 'Residential Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b934c173669366272.jpeg',
    alt: 'Residential construction project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 64,
    title: 'Construction Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c019f4271304bb92b.jpg',
    alt: 'Construction project detail by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 65,
    title: 'Exterior Work',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c9c400e1fda9b7c46.jpg',
    alt: 'Exterior construction work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 66,
    title: 'Residential Construction',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c07f24fe5f3510462.jpeg',
    alt: 'Residential construction by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 67,
    title: 'Building Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b95c6312fca853be9.jpg',
    alt: 'Building project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 68,
    title: 'Exterior Renovation',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b0be72a42beaa5765.jpg',
    alt: 'Exterior renovation project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 69,
    title: 'Home Improvement',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b153db7730f5c4784.jpg',
    alt: 'Home improvement project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 70,
    title: 'Construction Detail',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c2f0e9a3538b7031d.jpg',
    alt: 'Construction detail work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 71,
    title: 'Project Completion',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0cf57fbb6ecde121ae.jpg',
    alt: 'Completed construction project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 72,
    title: 'Exterior Finishing',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c2f0e9a1acdb7031c.jpg',
    alt: 'Exterior finishing work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 73,
    title: 'Residential Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0cf57fbbf744e121ad.jpg',
    alt: 'Residential project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 74,
    title: 'Building Detail',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c33e0b7aa8e79a82f.jpg',
    alt: 'Building detail by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 75,
    title: 'Construction Work',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b0c964d4e79e542b9.jpg',
    alt: 'Construction work in progress by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 76,
    title: 'Exterior Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c1a61f80829ead6ca.jpg',
    alt: 'Exterior project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 77,
    title: 'Home Construction',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c1a61f8f069ead6c9.jpg',
    alt: 'Home construction project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 78,
    title: 'Building Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b019f425b094bb929.jpg',
    alt: 'Building project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 79,
    title: 'Renovation Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0ca37cc24b3e0703bd.jpg',
    alt: 'Renovation project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 80,
    title: 'Exterior Work',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b1a61f834d5ead6b8.jpg',
    alt: 'Exterior construction work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 81,
    title: 'Construction Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c0a31c78cba2f4370.jpg',
    alt: 'Construction project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 82,
    title: 'Residential Work',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b95c6312244853be8.jpg',
    alt: 'Residential construction work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 83,
    title: 'Home Exterior',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b07f24f1441510455.jpg',
    alt: 'Home exterior project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 84,
    title: 'Building Construction',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c153db7b0dd5c4792.jpg',
    alt: 'Building construction by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 85,
    title: 'Exterior Detail',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0ba37cc261a90703b5.jpg',
    alt: 'Exterior detail work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 86,
    title: 'Project Detail',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c33e0b787e579a82e.jpg',
    alt: 'Project detail by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 87,
    title: 'Residential Renovation',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c019f424dba4bb92c.jpg',
    alt: 'Residential renovation by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 88,
    title: 'Construction Progress',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c153db766015c4797.jpg',
    alt: 'Construction progress by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 89,
    title: 'Exterior Upgrade',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b1a61f8f520ead6b9.jpg',
    alt: 'Exterior upgrade project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 90,
    title: 'Home Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b7e33ef07fe774bb9.jpg',
    alt: 'Home project by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 91,
    title: 'Building Exterior',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0b2f5f6560ad4a79bd.jpg',
    alt: 'Building exterior work by Tomron Construction in the Lower Mainland, BC',
  },
  {
    id: 92,
    title: 'Completed Project',
    location: 'Lower Mainland, BC',
    image: 'https://assets.cdn.filesafe.space/oyhdrza3SwoM8YuXOsja/media/69bc2d0c9c400ed00b9b7c45.jpg',
    alt: 'Completed construction project by Tomron Construction in the Lower Mainland, BC',
  },
];

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLightbox(null); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          {/* Masonry layout using CSS columns */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="mb-4 break-inside-avoid cursor-pointer"
                onClick={() => setLightbox(project.image)}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox}
              alt="Project photo by Tomron Construction"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}
