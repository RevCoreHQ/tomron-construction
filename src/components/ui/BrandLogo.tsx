'use client';

import { useState } from 'react';

interface BrandLogoProps {
  domain: string;
  name: string;
}

export function BrandLogo({ domain, name }: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="shrink-0 w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center overflow-hidden">
      {!failed ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={`https://logo.clearbit.com/${domain}`}
          alt={`${name} logo`}
          width={32}
          height={32}
          className="w-8 h-8 object-contain"
          onError={() => setFailed(true)}
        />
      ) : (
        <span className="text-lg font-display font-bold text-brand-600">
          {name.charAt(0)}
        </span>
      )}
    </div>
  );
}
