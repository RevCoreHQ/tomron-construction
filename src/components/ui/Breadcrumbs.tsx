import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant?: 'light' | 'dark';
}

export function Breadcrumbs({ items, variant = 'light' }: BreadcrumbsProps) {
  const isDark = variant === 'dark';
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className={`flex items-center gap-1.5 text-sm ${isDark ? 'text-white/70' : 'text-slate-500'}`}>
        <li>
          <Link
            href="/"
            className={`transition-colors ${isDark ? 'hover:text-white text-white/80' : 'hover:text-brand-600'}`}
            aria-label="Home"
          >
            <Home className="w-4 h-4" />
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            <ChevronRight className={`w-3.5 h-3.5 ${isDark ? 'text-white/40' : 'text-slate-300'}`} />
            {i === items.length - 1 ? (
              <span className={`font-medium ${isDark ? 'text-white' : 'text-slate-800'}`}>{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className={`transition-colors ${isDark ? 'hover:text-white text-white/80' : 'hover:text-brand-600'}`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
