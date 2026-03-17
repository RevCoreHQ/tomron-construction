import { Metadata } from 'next';
import Script from 'next/script';
import { generatePageMetadata } from '@/lib/metadata';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { siteConfig } from '@/data/site-config';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { ScrollReveal } from '@/components/motion/ScrollReveal';
import { TextReveal } from '@/components/motion/TextReveal';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Tomron Construction, Free Quote | Siding & Exterior Contractor BC',
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
            <ScrollReveal direction="left">
              <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-2">Get In Touch</p>
              <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-charcoal-900 mb-6">
                Request Your Free Quote
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Tell us about your project and we will be in touch within one business day. Or call us directly, we are always happy to talk.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
            <div className="space-y-5">
              <a href={`tel:${siteConfig.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Phone className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Call Us</p>
                  <p className="font-semibold text-slate-900">{siteConfig.phone}</p>
                </div>
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0 group-hover:bg-brand-100 transition-colors">
                  <Mail className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-semibold text-slate-900">{siteConfig.email}</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Location</p>
                  <p className="font-semibold text-slate-900">{siteConfig.address.full}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Hours</p>
                  <p className="font-semibold text-slate-900">Mon–Sat {siteConfig.hours.weekday}</p>
                  <p className="text-sm text-slate-500">Sunday: {siteConfig.hours.sunday}</p>
                </div>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Right - Form */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-3">
            <div className="bg-white rounded-lg border border-slate-100 shadow-card overflow-hidden" style={{ minHeight: '673px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/eAlelJLQv1ucn16rsfqu"
                style={{ width: '100%', height: '673px', border: 'none', borderRadius: '3px' }}
                id="inline-eAlelJLQv1ucn16rsfqu"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Website Quote Form"
                data-height="673"
                data-layout-iframe-id="inline-eAlelJLQv1ucn16rsfqu"
                data-form-id="eAlelJLQv1ucn16rsfqu"
                title="Website Quote Form"
              />
            </div>
            <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
          </ScrollReveal>
        </div>
      </div>
    </div>
    </>
  );
}
