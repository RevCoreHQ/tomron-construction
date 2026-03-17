'use client';

import Image from 'next/image';

interface BrandLogoProps {
  name: string;
  logoUrl?: string;
}

export function BrandLogo({ name, logoUrl }: BrandLogoProps) {
  if (logoUrl) {
    return (
      <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-neutral-200 flex items-center justify-center overflow-hidden">
        <Image
          src={logoUrl}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="w-full h-full object-contain p-1"
        />
      </div>
    );
  }

  return (
    <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
      <span className="text-lg font-display font-bold text-brand-600">
        {name.charAt(0)}
      </span>
    </div>
  );
}
