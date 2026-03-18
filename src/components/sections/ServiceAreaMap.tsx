'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/motion/ScrollReveal';

interface ServiceCity {
  slug: string;
  city: string;
  lat: number;
  lng: number;
  isPrimary: boolean;
}

const serviceCities: ServiceCity[] = [
  // HQ
  { slug: 'maple-ridge', city: 'Maple Ridge', lat: 49.2193, lng: -122.5984, isPrimary: true },
  // Primary
  { slug: 'coquitlam', city: 'Coquitlam', lat: 49.2838, lng: -122.7932, isPrimary: true },
  { slug: 'port-coquitlam', city: 'Port Coquitlam', lat: 49.2625, lng: -122.7811, isPrimary: true },
  { slug: 'pitt-meadows', city: 'Pitt Meadows', lat: 49.2330, lng: -122.6890, isPrimary: true },
  { slug: 'burnaby', city: 'Burnaby', lat: 49.2488, lng: -122.9805, isPrimary: true },
  { slug: 'vancouver', city: 'Vancouver', lat: 49.2827, lng: -123.1207, isPrimary: true },
  { slug: 'new-westminster', city: 'New Westminster', lat: 49.2057, lng: -122.9110, isPrimary: true },
  { slug: 'richmond', city: 'Richmond', lat: 49.1666, lng: -123.1336, isPrimary: true },
  { slug: 'surrey', city: 'Surrey', lat: 49.1913, lng: -122.8490, isPrimary: true },
  { slug: 'delta', city: 'Delta', lat: 49.0847, lng: -123.0587, isPrimary: true },
  { slug: 'langley', city: 'Langley', lat: 49.1044, lng: -122.6615, isPrimary: true },
  { slug: 'white-rock', city: 'White Rock', lat: 49.0253, lng: -122.8026, isPrimary: true },
  { slug: 'tsawwassen', city: 'Tsawwassen', lat: 49.0063, lng: -123.0824, isPrimary: true },
  { slug: 'abbotsford', city: 'Abbotsford', lat: 49.0504, lng: -122.3045, isPrimary: true },
  { slug: 'mission', city: 'Mission', lat: 49.1338, lng: -122.3112, isPrimary: true },
  // Extended
  { slug: 'chilliwack', city: 'Chilliwack', lat: 49.1579, lng: -121.9514, isPrimary: false },
];

export function ServiceAreaMap() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // SSR placeholder
    return (
      <section className="bg-neutral-100" aria-label="Interactive service area map">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-neutral-200 animate-pulse flex items-center justify-center">
            <MapPin className="w-8 h-8 text-neutral-400" />
          </div>
        </div>
      </section>
    );
  }

  return <MapInner />;
}

function MapInner() {
  const [leaflet, setLeaflet] = useState<{
    MapContainer: typeof import('react-leaflet')['MapContainer'];
    TileLayer: typeof import('react-leaflet')['TileLayer'];
    Marker: typeof import('react-leaflet')['Marker'];
    Popup: typeof import('react-leaflet')['Popup'];
    L: typeof import('leaflet');
  } | null>(null);

  useEffect(() => {
    // Dynamic import to avoid SSR issues
    Promise.all([
      import('react-leaflet'),
      import('leaflet'),
    ]).then(([rl, L]) => {
      // Fix default marker icons
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
      });

      setLeaflet({
        MapContainer: rl.MapContainer,
        TileLayer: rl.TileLayer,
        Marker: rl.Marker,
        Popup: rl.Popup,
        L: L,
      });
    });
  }, []);

  if (!leaflet) {
    return (
      <section className="bg-neutral-100" aria-label="Interactive service area map">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-neutral-200 animate-pulse flex items-center justify-center">
            <MapPin className="w-8 h-8 text-neutral-400" />
          </div>
        </div>
      </section>
    );
  }

  const { MapContainer, TileLayer, Marker, Popup, L } = leaflet;

  // Custom marker icons
  const primaryIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="#dc5a2c"/>
        <circle cx="14" cy="14" r="6" fill="white"/>
      </svg>
    `),
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -42],
  });

  const extendedIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="40" viewBox="0 0 28 40">
        <path d="M14 0C6.268 0 0 6.268 0 14c0 10.5 14 26 14 26s14-15.5 14-26C28 6.268 21.732 0 14 0z" fill="#64748b"/>
        <circle cx="14" cy="14" r="6" fill="white"/>
      </svg>
    `),
    iconSize: [28, 40],
    iconAnchor: [14, 40],
    popupAnchor: [0, -42],
  });

  const hqIcon = new L.Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="34" height="46" viewBox="0 0 34 46">
        <path d="M17 0C7.611 0 0 7.611 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.611 26.389 0 17 0z" fill="#dc5a2c"/>
        <path d="M17 0C7.611 0 0 7.611 0 17c0 12.75 17 29 17 29s17-16.25 17-29C34 7.611 26.389 0 17 0z" fill="none" stroke="#b5441f" stroke-width="1.5"/>
        <circle cx="17" cy="17" r="8" fill="white"/>
        <text x="17" y="21" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc5a2c" font-family="sans-serif">★</text>
      </svg>
    `),
    iconSize: [34, 46],
    iconAnchor: [17, 46],
    popupAnchor: [0, -48],
  });

  // Center roughly on the service area
  const center: [number, number] = [49.16, -122.7];

  return (
    <section aria-label="Interactive service area map">
      {/* Leaflet CSS */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""
      />

      <ScrollReveal>
        <div className="max-w-7xl mx-auto">
          <div className="rounded-none sm:rounded-xl overflow-hidden border-y sm:border border-neutral-200 sm:mx-4 lg:mx-8">
            <MapContainer
              center={center}
              zoom={9}
              scrollWheelZoom={false}
              style={{ height: '100%', width: '100%' }}
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px] z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {serviceCities.map((city) => (
                <Marker
                  key={city.slug}
                  position={[city.lat, city.lng]}
                  icon={
                    city.slug === 'maple-ridge'
                      ? hqIcon
                      : city.isPrimary
                        ? primaryIcon
                        : extendedIcon
                  }
                >
                  <Popup>
                    <div className="min-w-[180px] p-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-bold text-sm text-gray-900">{city.city}</span>
                        {city.slug === 'maple-ridge' && (
                          <span className="text-[10px] font-bold bg-orange-100 text-orange-600 px-1.5 py-0.5 rounded">
                            HQ
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 mb-2">
                        {city.isPrimary ? 'Primary service area' : 'Extended service area'}
                      </p>
                      <a
                        href={`/service-areas/${city.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-orange-600 hover:text-orange-700"
                      >
                        View services <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </ScrollReveal>

      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 mb-2 px-4">
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded-full bg-brand-600 ring-2 ring-brand-200" />
          <span className="text-xs text-slate-500 font-medium">HQ — Maple Ridge</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-brand-600" />
          <span className="text-xs text-slate-500 font-medium">Primary Area</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-slate-400" />
          <span className="text-xs text-slate-500 font-medium">Extended Area</span>
        </div>
      </div>
    </section>
  );
}
