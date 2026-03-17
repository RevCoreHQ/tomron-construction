'use client';

import { useState } from 'react';

interface BrandLogoProps {
  domain: string;
  name: string;
}

export function BrandLogo({ domain, name }: BrandLogoProps) {
  const [srcIndex, setSrcIndex] = useState(0);

  // Try multiple logo sources in order of quality
  const sources = [
    `https://logo.clearbit.com/${domain}`,
    `https://www.google.com/s2/favicons?domain=${domain}&sz=128`,
  ];

  const hasFallback = srcIndex >= sources.length;

  return (
    <div className="shrink-0 w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden">
      {!hasFallback ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={sources[srcIndex]}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          onError={() => setSrcIndex((i) => i + 1)}
        />
      ) : (
        <span className="text-lg font-display font-bold text-brand-600">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}
