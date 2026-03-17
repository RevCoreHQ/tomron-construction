'use client';

interface BrandLogoProps {
  name: string;
}

export function BrandLogo({ name }: BrandLogoProps) {
  return (
    <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center">
      <span className="text-lg font-display font-bold text-brand-600">
        {name.charAt(0)}
      </span>
    </div>
  );
}
