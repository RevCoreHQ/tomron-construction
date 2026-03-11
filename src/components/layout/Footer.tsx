import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { siteConfig } from '@/data/site-config';
import { footerNav } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-925 text-slate-300 relative">
      {/* Premium gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
      <div className="absolute top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <Image
                src="https://storage.googleapis.com/msgsndr/VpxNeZuIvxjzZljfxNjd/media/6991df6ea9efde37c4700a3e.png"
                alt="Timberline Falls"
                width={48}
                height={48}
                className="w-10 h-10 rounded-lg"
              />
              <span className="font-display text-xl font-semibold text-white">
                Timberline Falls
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Premium pool construction, landscape design, and concrete services in
              Saratoga Springs, Bountiful, and surrounding Utah communities. Over 20
              years of trusted craftsmanship.
            </p>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-500" />
                {siteConfig.phone}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-brand-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-500" />
                {siteConfig.email}
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0" />
                {siteConfig.address.full}
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-500 shrink-0" />
                Mon–Sat {siteConfig.hours.weekday}
              </div>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas column */}
          <div>
            <h3 className="text-white font-display font-semibold text-lg mb-4">Areas We Serve</h3>
            <ul className="space-y-2.5">
              {footerNav.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-brand-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-slate-850 rounded-xl border border-slate-800" style={{ borderTop: '2px solid var(--gold-dark)' }}>
              <p className="text-xs font-medium text-slate-300 mb-2">Licensed, Bonded & Insured</p>
              <p className="text-xs text-slate-500">Free Estimates · 3D Design Approval</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
