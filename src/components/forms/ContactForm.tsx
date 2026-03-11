'use client';

import Script from 'next/script';

export function ContactForm() {
  return (
    <>
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/CIX0EdhrhE9U9g6Acu15"
        style={{ width: '100%', height: '712px', border: 'none', borderRadius: '3px' }}
        id="inline-CIX0EdhrhE9U9g6Acu15"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Form 9"
        data-height="712"
        data-layout-iframe-id="inline-CIX0EdhrhE9U9g6Acu15"
        data-form-id="CIX0EdhrhE9U9g6Acu15"
        title="Free Estimate Form"
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />
    </>
  );
}
