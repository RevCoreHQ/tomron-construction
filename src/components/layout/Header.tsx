'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { mainNav } from '@/data/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled || mobileOpen
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="https://storage.googleapis.com/msgsndr/VpxNeZuIvxjzZljfxNjd/media/6991e27365ad362154b97372.png"
              alt="Timberline Falls"
              width={200}
              height={48}
              className="h-16 lg:h-20 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {mainNav.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors rounded-lg whitespace-nowrap',
                    scrolled || mobileOpen
                      ? 'text-slate-700 hover:text-brand-600 hover:bg-brand-50/50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-64 bg-white rounded-xl shadow-elevated border border-slate-100 py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:text-brand-600 hover:bg-brand-50/50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors whitespace-nowrap',
                scrolled ? 'text-slate-700 hover:text-brand-600' : 'text-white/90 hover:text-white'
              )}
            >
              <Phone className="w-4 h-4" />
              {siteConfig.phone}
            </a>
            <Button href="/contact" size="sm">
              Free Estimate
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn(
              'lg:hidden p-2 transition-colors',
              scrolled || mobileOpen ? 'text-slate-700 hover:text-brand-600' : 'text-white hover:text-white/80'
            )}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white animate-fade-in">
          <nav className="px-4 py-4 space-y-1" aria-label="Mobile navigation">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2.5 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                  onClick={() => !item.children && setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-6 space-y-0.5">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-slate-600 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
          <div className="px-4 pb-4 pt-2 flex gap-3">
            <Button href="/contact" className="flex-1" size="sm">
              Free Estimate
            </Button>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-xl border-2 border-brand-600 text-brand-700 hover:bg-brand-50 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
