import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/site-config';
import { Phone } from 'lucide-react';

interface HeroProps {
  headline: string;
  subheadline?: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  backgroundImage?: string;
  backgroundVideo?: string;
  overlay?: boolean;
}

export function Hero({
  headline,
  subheadline,
  description,
  primaryCta = { label: 'Get Your Free Estimate', href: '/contact' },
  secondaryCta,
  backgroundImage,
  backgroundVideo,
  overlay = true,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background video */}
      {backgroundVideo ? (
        <>
          {backgroundImage && (
            <Image
              src={backgroundImage}
              alt=""
              fill
              priority
              sizes="100vw"
              quality={70}
              className="object-cover object-center"
            />
          )}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover object-center"
          >
            <source src={backgroundVideo} type="video/mp4" />
          </video>
        </>
      ) : backgroundImage ? (
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          quality={70}
          className="object-cover object-center"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900" />
      )}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-950/40" />
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="max-w-2xl">
          {subheadline && (
            <div className="animate-fade-in mb-6">
              <p className="inline-flex items-center gap-2 text-sm sm:text-base font-medium tracking-wider uppercase">
                <span className="w-8 h-px bg-accent-gold" />
                <span className="gradient-text-gold">{subheadline}</span>
                <span className="w-8 h-px bg-accent-gold" />
              </p>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold text-white leading-[1.05] mb-8 animate-slide-up" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300/90 leading-relaxed mb-10 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button href={primaryCta.href} size="lg">
              {primaryCta.label}
            </Button>
            {secondaryCta ? (
              <Button href={secondaryCta.href} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                {secondaryCta.label}
              </Button>
            ) : (
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-white border-2 border-white/20 rounded-xl hover:bg-white/10 hover:border-white/40 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
