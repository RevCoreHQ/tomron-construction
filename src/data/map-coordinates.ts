export interface MapCity {
  slug: string;
  city: string;
  x: number; // SVG viewBox x coordinate (0-1000)
  y: number; // SVG viewBox y coordinate (0-600)
  isPrimary: boolean;
}

// Approximate positions on a simplified Lower Mainland / Fraser Valley SVG map
// ViewBox: 0 0 1000 600
// West (Vancouver) = left, East (Chilliwack) = right
// North = top, South (US border) = bottom
export const mapCities: MapCity[] = [
  // Western cities
  { slug: 'vancouver', city: 'Vancouver', x: 170, y: 220, isPrimary: true },
  { slug: 'burnaby', city: 'Burnaby', x: 280, y: 200, isPrimary: true },
  { slug: 'new-westminster', city: 'New Westminster', x: 320, y: 260, isPrimary: true },
  { slug: 'richmond', city: 'Richmond', x: 200, y: 340, isPrimary: true },
  { slug: 'delta', city: 'Delta', x: 280, y: 410, isPrimary: true },
  { slug: 'tsawwassen', city: 'Tsawwassen', x: 220, y: 470, isPrimary: true },
  { slug: 'white-rock', city: 'White Rock', x: 370, y: 490, isPrimary: true },

  // Central cities
  { slug: 'coquitlam', city: 'Coquitlam', x: 390, y: 180, isPrimary: true },
  { slug: 'port-coquitlam', city: 'Port Coquitlam', x: 440, y: 150, isPrimary: true },
  { slug: 'pitt-meadows', city: 'Pitt Meadows', x: 500, y: 170, isPrimary: true },
  { slug: 'surrey', city: 'Surrey', x: 400, y: 360, isPrimary: true },

  // Eastern cities
  { slug: 'maple-ridge', city: 'Maple Ridge', x: 560, y: 140, isPrimary: true },
  { slug: 'langley', city: 'Langley', x: 520, y: 380, isPrimary: true },
  { slug: 'abbotsford', city: 'Abbotsford', x: 660, y: 370, isPrimary: true },
  { slug: 'mission', city: 'Mission', x: 680, y: 180, isPrimary: true },

  // Far east
  { slug: 'chilliwack', city: 'Chilliwack', x: 830, y: 330, isPrimary: false },
];
