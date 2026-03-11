import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/forms/ContactForm';
import { siteConfig } from '@/data/site-config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Tomron Construction — Free Quote | Siding & Exterior Contractor BC',
  description: 'Get a free quote for siding installation, window replacement, door installation, or home renovation. Call (604) 754-9392 or fill out our form. Maple Ridge & Lower Mainland, BC.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <>
    <JsonLd data={breadcrumbSchema([
      { name: 'Home', url: siteConfig.url },
      { name: 'Contact', url: `${siteConfig.url}/contact` },
    ])} />
    <div className="section-padding">
      <div className="container-wide">
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="lg:col-span-2">
            <p className="text-brand-600 font-medium text-sm tracking-wide uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-slate-900 mb-6">
              Request Your Free Quote
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Tell us about your project and we will be in touch within one business day. Or call us directly — we are always happy to talk.
            </p>

            <div className="space-y-5">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-semibold text-slate-900">{siteConfig.phone}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">{siteConfig.address.full}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="font-semibold text-slate-900">Mon–Sat {siteConfig.hours.weekday}</p>
                  <p className="text-sm text-slate-500">Sunday: {siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-6 lg:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
