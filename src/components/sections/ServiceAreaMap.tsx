'use client';

import dynamic from 'next/dynamic';
import { MapPin } from 'lucide-react';

const LeafletMap = dynamic(() => import('./LeafletMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] bg-neutral-100 animate-pulse flex items-center justify-center">
      <MapPin className="w-8 h-8 text-neutral-400" />
    </div>
  ),
});

export function ServiceAreaMap() {
  return <LeafletMap />;
}
