import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { blogPosts, getBlogPostBySlug } from '@/data/blog';
import { siteConfig } from '@/data/site-config';
import { generatePageMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema, articleSchema } from '@/lib/schema';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', url: siteConfig.url },
            { name: 'Blog', url: `${siteConfig.url}/blog` },
            { name: post.title, url: `${siteConfig.url}/blog/${post.slug}` },
          ]),
          articleSchema(
            post.title,
            post.metaDescription,
            `${siteConfig.url}/blog/${post.slug}`,
            post.datePublished
          ),
        ]}
      />

      {/* Hero */}
      <section className="relative py-12 lg:py-20 bg-gradient-to-br from-slate-900 via-brand-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog' },
              { label: post.title, href: `/blog/${post.slug}` },
            ]}
            variant="dark"
          />
          <div className="max-w-3xl mt-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-600/20 text-brand-300 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1 text-xs text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              {post.h1}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">{post.excerpt}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.map((section, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-display font-bold text-slate-900 mb-4">{section.heading}</h2>
              <p className="text-slate-700 leading-relaxed text-lg">{section.body}</p>
            </div>
          ))}

          {/* CTA inline */}
          <div className="mt-12 p-8 bg-brand-50 rounded-2xl border border-brand-100 text-center">
            <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
              Ready to Get Started?
            </h3>
            <p className="text-slate-600 mb-6">
              Contact Timberline Falls for a free, no-obligation estimate on your project.
            </p>
            <Button href="/contact" size="lg">
              Get Your Free Estimate
            </Button>
          </div>

          {/* Back to blog */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {otherPosts.length > 0 && (
        <section className="section-padding bg-sand-50">
          <div className="container-wide">
            <h2 className="text-2xl font-display font-bold text-slate-900 mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col sm:flex-row gap-4 p-5 bg-white rounded-xl border border-slate-100 shadow-soft hover:shadow-card transition-all"
                >
                  <div className="sm:w-40 shrink-0 aspect-video sm:aspect-square bg-gradient-to-br from-brand-100 to-sand-100 rounded-lg" />
                  <div>
                    <span className="text-xs font-medium text-brand-600 mb-1 block">{p.category}</span>
                    <h3 className="font-display font-semibold text-slate-900 group-hover:text-brand-600 transition-colors mb-2">
                      {p.title}
                    </h3>
                    <p className="text-sm text-slate-500">{p.readTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
