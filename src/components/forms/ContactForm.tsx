'use client';

import { useState, FormEvent } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const services = [
  'Siding & Cladding',
  'Metal Flashing',
  'Building Envelope',
  'Home Renovation',
  'Window Replacement',
  'Door Replacement',
  'Other',
];

export function ContactForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-display font-extrabold text-charcoal-900 mb-2">Message Sent!</h3>
        <p className="text-slate-600">
          Thank you for reaching out. We will get back to you within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-1.5">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all"
            placeholder="Brendan"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-1.5">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all"
            placeholder="Smith"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
            Phone *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all"
            placeholder="(604) 555-0123"
          />
        </div>
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1.5">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all appearance-none bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">
          Tell Us About Your Project
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all resize-none"
          placeholder="Describe your project, timeline, and any questions you have..."
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 px-4 py-3 rounded-lg">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-brand-600 to-brand-700 rounded-lg shadow-card hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'submitting' ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Request Free Quote
          </>
        )}
      </button>
    </form>
  );
}
