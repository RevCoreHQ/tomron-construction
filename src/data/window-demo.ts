export interface WindowComponent {
  id: string;
  label: string;
  description: string;
  position: { top: string; left: string };
}

export interface TourStep {
  componentId: string;
  title: string;
  explanation: string;
  stat?: { label: string; value: string };
}

export interface ComparisonPreset {
  id: string;
  label: string;
  specs: { uFactor: number; shgc: number; vt: number; er: number };
  description: string;
}

export const windowComponents: WindowComponent[] = [
  {
    id: 'outer-pane',
    label: 'Outer Glass Pane',
    description:
      'The exterior pane shields your home from weather and impacts. In a Low-E window, the outer pane carries an invisible metallic coating on its interior surface (surface #2) that reflects long-wave infrared heat.',
    position: { top: '30%', left: '18%' },
  },
  {
    id: 'low-e-coating',
    label: 'Low-E Coating',
    description:
      'A microscopically thin metallic oxide layer (thinner than a human hair) applied to the glass surface. It reflects radiant heat while allowing visible light to pass through — like a one-way mirror for infrared energy.',
    position: { top: '42%', left: '35%' },
  },
  {
    id: 'argon-gas',
    label: 'Argon Gas Fill',
    description:
      'The sealed cavity between panes is filled with argon gas, which is 34% less conductive than air. This dramatically slows heat transfer through the window. Krypton gas offers even better performance in triple-pane units.',
    position: { top: '55%', left: '50%' },
  },
  {
    id: 'inner-pane',
    label: 'Inner Glass Pane',
    description:
      'The interior pane faces your living space. In cold climates, it stays warmer thanks to the Low-E coating and gas fill, reducing condensation and cold drafts near the window.',
    position: { top: '30%', left: '82%' },
  },
  {
    id: 'spacer-bar',
    label: 'Warm-Edge Spacer',
    description:
      'Separates the glass panes at the edges and creates the sealed gas cavity. Modern "warm-edge" spacers use low-conductivity materials instead of aluminum, reducing heat loss at the glass edge by up to 65%.',
    position: { top: '78%', left: '50%' },
  },
  {
    id: 'frame',
    label: 'Vinyl Frame',
    description:
      'Multi-chambered PVC vinyl frames trap dead air in small compartments, creating natural insulation. They require zero maintenance, resist rot and corrosion, and provide excellent thermal performance at the best value.',
    position: { top: '50%', left: '5%' },
  },
  {
    id: 'weatherstrip',
    label: 'Weatherstripping',
    description:
      'Compression seals around the sash prevent air infiltration when the window is closed. Quality weatherstripping blocks drafts and improves the window\'s overall air-tightness rating.',
    position: { top: '12%', left: '50%' },
  },
];

export const tourSteps: TourStep[] = [
  {
    componentId: 'frame',
    title: 'It Starts With the Frame',
    explanation:
      'The frame is the structural backbone. Multi-chambered vinyl frames provide excellent insulation without the maintenance of wood. The chambers trap still air, creating thermal breaks that slow heat transfer.',
    stat: { label: 'Frame Contribution', value: '~20% of total window U-factor' },
  },
  {
    componentId: 'outer-pane',
    title: 'The Outer Pane',
    explanation:
      'The exterior glass faces the elements. It carries the Low-E coating on its interior surface (#2 surface), protecting it from weather while reflecting heat back to its source.',
    stat: { label: 'Glass Thickness', value: '4mm tempered' },
  },
  {
    componentId: 'low-e-coating',
    title: 'The Low-E Coating',
    explanation:
      'This is where the magic happens. Low-E 270 (passive) allows more solar heat gain — great for north-facing windows. Low-E 366 (solar control) blocks excess heat — ideal for south and west exposures.',
    stat: { label: 'Heat Reflection', value: 'Up to 94% of radiant heat' },
  },
  {
    componentId: 'argon-gas',
    title: 'The Gas Fill',
    explanation:
      'Argon gas between the panes is denser than air, slowing convection and conduction. It\'s colourless, odourless, non-toxic, and improves insulation by about 30% over air-filled units.',
    stat: { label: 'Improvement Over Air', value: '~30% less heat loss' },
  },
  {
    componentId: 'inner-pane',
    title: 'The Inner Pane',
    explanation:
      'Thanks to the Low-E coating and gas fill, the inner pane stays closer to room temperature. This eliminates cold spots, reduces condensation, and makes sitting near windows comfortable year-round.',
    stat: { label: 'Surface Temperature', value: '5–10°C warmer than single-pane' },
  },
  {
    componentId: 'spacer-bar',
    title: 'The Warm-Edge Spacer',
    explanation:
      'Traditional aluminum spacers create a thermal bridge at the glass edge, causing condensation. Warm-edge spacers use insulating materials like silicone foam or stainless steel, keeping edges warmer.',
    stat: { label: 'Edge Heat Loss Reduction', value: 'Up to 65%' },
  },
  {
    componentId: 'weatherstrip',
    title: 'Sealed Tight',
    explanation:
      'Multiple compression seals around the sash create an airtight barrier when closed. This prevents drafts and ensures your energy-efficient glass actually performs as rated in real-world conditions.',
    stat: { label: 'Air Leakage Reduction', value: '> 95% vs old windows' },
  },
];

export const comparisonPresets: ComparisonPreset[] = [
  {
    id: 'single',
    label: 'Single Pane',
    specs: { uFactor: 5.0, shgc: 0.86, vt: 0.90, er: -25 },
    description:
      'A single sheet of glass with no coatings or gas fill. Common in homes built before 1980. Very poor insulation — you can feel cold radiating off the glass in winter.',
  },
  {
    id: 'double',
    label: 'Double Pane',
    specs: { uFactor: 2.7, shgc: 0.76, vt: 0.82, er: 5 },
    description:
      'Two panes with an air-filled gap. A basic upgrade from single pane. Reduces noise and condensation but lacks the performance of modern coated glass.',
  },
  {
    id: 'double-lowe270',
    label: 'Double + Low-E 270',
    specs: { uFactor: 1.6, shgc: 0.34, vt: 0.70, er: 29 },
    description:
      'Double pane with Cardinal Low-E 270 passive coating and argon fill. Ideal for north and east-facing windows where you want to let solar heat in while still insulating well.',
  },
  {
    id: 'double-lowe366',
    label: 'Double + Low-E 366',
    specs: { uFactor: 1.4, shgc: 0.22, vt: 0.55, er: 25 },
    description:
      'Double pane with Cardinal Low-E 366 triple-silver solar control coating and argon fill. Best for south and west exposures where excess solar heat causes overheating and glare.',
  },
  {
    id: 'triple-lowe',
    label: 'Triple + Low-E',
    specs: { uFactor: 0.9, shgc: 0.23, vt: 0.48, er: 38 },
    description:
      'Three panes with two Low-E coatings, dual argon fills, and warm-edge spacers. The highest performance available. Meets Passive House standards and eliminates cold drafts entirely.',
  },
];
