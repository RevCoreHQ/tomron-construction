import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog — Timberline Falls',
  description:
    'Expert tips, cost guides, and project planning advice from Timberline Falls — Utah pool builders, landscapers, and concrete contractors.',
  path: '/blog',
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Blog', url: `${siteConfig.url}/blog` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} variant="dark" />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-6">
              Tips, Guides &amp; Insights
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              Expert advice from the Timberline Falls team to help you plan your outdoor living project, from pool construction cost guides to concrete comparisons and seasonal scheduling tips.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-slate-100 shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all overflow-hidden"
              >
                <div className="relative aspect-[16/9] bg-slate-200">
                  {post.coverImage && (
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      className="object-cover object-center"
                    />
                  )}
                </div>

                <div className="flex-1 p-6 flex flex-col">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-50 text-brand-700 rounded-full mb-3 w-fit">
                    {post.category}
                  </span>
                  <h2 className="text-lg font-display font-bold text-slate-900 group-hover:text-brand-600 transition-colors mb-3">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(post.datePublished).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-brand-600 font-medium group-hover:gap-2 transition-all">
                      Read <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
