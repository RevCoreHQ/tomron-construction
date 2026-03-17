import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';
import { Button } from '@/components/ui/Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-neutral-200 text-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <span className="font-display text-2xl tracking-tight text-charcoal-900 uppercase">
                <span className="font-bold">Tomron</span>{' '}
                <span className="font-extralight">Construction</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 mb-6 leading-relaxed max-w-xs">
              Expert siding, window & door replacement, building envelope, and home renovations across the Lower Mainland.
            </p>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-brand-600 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-600" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-600 hover:text-brand-600 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-600" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5 text-slate-600">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
                {siteConfig.address.full}
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold text-charcoal-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-brand-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-4">
            <div className="bg-charcoal-900 rounded-lg p-6">
              <h3 className="font-display text-lg font-bold text-white mb-2">Start Your Project</h3>
              <p className="text-sm text-white/60 mb-5 leading-relaxed">
                Get a free on-site consultation and detailed quote for your next project.
              </p>
              <Button href="/contact" size="sm" className="w-full">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <a href="https://revcorehq.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-brand-600 transition-colors">
            Powered by
            <Image
              src="https://assets.cdn.filesafe.space/NYlSya2nYSkSnnXEbY2l/media/69a9af9fb003fa7bb8bb92ee.png"
              alt="RevCore"
              width={16}
              height={16}
              className="opacity-60"
            />
            <span className="font-medium text-slate-500">RevCore</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
