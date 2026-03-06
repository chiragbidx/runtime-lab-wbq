"use client";
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  CheckCircle2,
  Quote,
} from 'lucide-react';
import React, { useState } from "react";

const testimonials = [
  {
    quote:
      "GrowthKit gave us the clarity, tools, and confidence to run growth experiments without extra hires. It's the fastest way to build a marketing system for your startup.",
    name: 'Samantha L.',
    title: 'Head of Growth, Finana',
  },
  {
    quote:
      "We went from zero content to a fully operational inbound engine in two weeks. The templates pay for themselves in time saved.",
    name: 'Daniel B.',
    title: 'Founder, Turbocode',
  },
  {
    quote:
      "Our small team doubled qualified leads just by following GrowthKit’s battle-tested playbooks. Worth every penny.",
    name: 'Priya C.',
    title: 'Growth Lead, Clario',
  },
];

const features = [
  {
    name: '50+ Plug-and-Play Marketing Templates',
    desc: 'Landing pages, ads, emails, cold outreach, social scripts, and more—ready to personalize and deploy.',
  },
  {
    name: 'Growth Playbooks that Work',
    desc: 'Step-by-step campaign blueprints for virality, SEO, cold outreach, product launches, and customer onboarding.',
  },
  {
    name: 'Easy Automation Toolkit',
    desc: "Automate follow-ups, reporting, lead routing, and repetitive growth ops with no-code recipes and Zapier packs.",
  },
  {
    name: 'Team Collaboration',
    desc: 'Assign growth tasks, share notes, track progress, and keep everyone aligned on new experiments.',
  },
  {
    name: 'Strategy Library',
    desc: 'Explore proven strategies for every stage—from pre-launch waitlists to paid scaling.',
  },
  {
    name: 'Live Support & Community',
    desc: 'Get expert guidance and join founders tackling the same challenges.',
  },
];

const pricingPlans = [
  {
    name: 'Starter',
    price: '$39/mo',
    desc: 'Ideal for solo founders or small teams validating ideas.',
    features: [
      'All marketing templates',
      '2 growth playbooks/month',
      'Basic automation recipes',
      'Community access',
      'Email support',
    ],
    popular: false,
  },
  {
    name: 'Growth',
    price: '$99/mo',
    desc: 'Designed for growing teams serious about traction.',
    features: [
      'Unlimited marketing templates',
      'All playbooks (50+)',
      'Advanced automation toolkit',
      'Full templates library',
      'Priority support',
      'Team collaboration tools',
      '1:1 onboard session',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Dedicated success, custom automations, and integration help.',
    features: [
      'Custom onboarding',
      'Enterprise support SLA',
      'Dedicated success manager',
      'API access',
      'Private strategy sessions',
    ],
    popular: false,
  },
];

const faqs = [
  {
    q: 'What is GrowthKit?',
    a: 'GrowthKit is an all-in-one platform helping startups accelerate growth with ready-to-use marketing templates, field-tested growth strategies, and simple automation tools for everyday operations.',
  },
  {
    q: "How is GrowthKit different from generic template packs?",
    a: "GrowthKit isn't just templates—it includes actionable playbooks, automation flows, collaboration features, and ongoing updates. It's designed to help you execute real growth campaigns, not just copy-paste assets.",
  },
  {
    q: "Who is GrowthKit for?",
    a: "It's built for founders, marketers, and small teams at SaaS and product startups who want fast traction without building a growth team from scratch.",
  },
  {
    q: "Can my team collaborate inside GrowthKit?",
    a: "Yes! Assign growth tasks, comment on strategies, share notes, and track all experiments—even across multiple workspaces.",
  },
  {
    q: "Do I need coding or no-code experience?",
    a: "No—the toolkit is designed to be usable out of the box. Automation recipes use point-and-click setup, with guides for everything advanced.",
  },
  {
    q: "How does the free trial work?",
    a: "Try all GrowthKit features for 7 days, no credit card required. Upgrade to keep access, or keep your work for later if you pause.",
  },
  {
    q: "How do I get support?",
    a: "All plans include email support. Growth and Enterprise plans include live onboarding and priority channels. Enterprise gets a dedicated manager.",
  },
];

function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
      <a href="/sign-up">
        <Button size="lg" className="rounded-full px-8 text-lg">
          Start Free Trial
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </a>
      <a href="mailto:hi@chirag.co?subject=GrowthKit%20Demo%20Request">
        <Button size="lg" variant="outline" className="rounded-full px-8 text-lg">
          Request a Demo
        </Button>
      </a>
    </div>
  );
}
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="py-24 bg-white w-full" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-gray-200 border rounded-xl bg-gray-50 shadow flex flex-col">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="py-6 px-6 cursor-pointer transition-colors hover:bg-orange-50 group"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-expanded={openIndex === i}
              aria-controls={`faq-panel-${i}`}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setOpenIndex(openIndex === i ? null : i); }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">{faq.q}</h3>
                <span className={`ml-4 transition-transform ${openIndex === i ? "rotate-180" : ""}`}>
                  <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>
              <div
                id={`faq-panel-${i}`}
                className={`overflow-hidden transition-all duration-200 text-gray-700 text-base ${
                  openIndex === i ? "max-h-60 mt-3 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div aria-live={openIndex === i ? "polite" : "off"}>
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function GrowthKitLanding() {
  const staticYear = 2024; // Static, update manually as needed
  return (
    <main className="grow bg-white">
      {/* Headline & PAS Hero */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-orange-50/70 via-white to-white border-b">
        <div className="max-w-4xl mx-auto px-6 lg:px-0">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight">
            GrowthKit helps <span className="text-orange-500">startups grow faster</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-600 md:text-center max-w-2xl mx-auto leading-relaxed">
            <b>Stuck with slow growth and scattered marketing?</b> <br />
            GrowthKit gives you the templates, playbooks, and automations you need to get results—consistently.
          </p>
          <HeroCTAButtons />
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The Problem
          </h2>
          <p className="text-lg text-gray-700">
            Most startups fail to grow because marketing is unpredictable, DIY templates underperform, and every strategy feels like a shot in the dark. Hiring a full-stack growth team? Expensive and slow. Piecing together random advice? Risky. And trying every tool just adds more noise, not results.
          </p>
        </div>
      </section>

      {/* Agitate - Why Existing Solutions Fail */}
      <section className="py-20 bg-orange-50 border-b">
        <div className="max-w-4xl mx-auto px-6 flex flex-col gap-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why Other Solutions Flop
          </h2>
          <ul className="list-disc pl-6 mt-2 space-y-4 text-lg text-gray-800">
            <li>
              <b>Template packs are generic.</b> You still spend hours customizing everything, and there’s zero support for actual growth testing.
            </li>
            <li>
              <b>No-code tools are overwhelming.</b> Lots of pieces, dozens of integrations, but no clear “next step”.
            </li>
            <li>
              <b>Growth agencies are costly.</b> Few understand startup speed or test-and-learn culture. Turnaround times kill momentum.
            </li>
            <li>
              <b>Most automations need ops expertise.</b> You need Zapier superpowers—most founders can’t (and shouldn’t) learn it all from scratch.
            </li>
          </ul>
        </div>
      </section>

      {/* Solution */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            GrowthKit Gives You a Growth Engine in a Box
          </h2>
          <p className="mt-6 text-lg text-gray-700">
            Everything is ready to launch: high-performing templates, field-tested strategies, and prescriptive automation—all mapped to real startup funnels. Stop improvising. Skip copy-paste chaos. GrowthKit puts every campaign step, template, and automation in one place so you can spend less time wondering and more time winning.
          </p>
          <HeroCTAButtons />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-orange-50 border-b" id="features">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            What’s Inside GrowthKit
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((f) => (
              <div className="rounded-xl bg-white p-8 shadow hover:shadow-lg transition-shadow border flex flex-col" key={f.name}>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{f.name}</h3>
                <p className="text-gray-700 text-base">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-b" id="testimonials">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
            What People Are Saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="flex flex-col items-center bg-orange-50 border border-orange-100 rounded-xl p-8 shadow group hover:border-orange-300 transition">
                <Quote className="w-8 h-8 text-orange-500 mb-3" />
                <p className="text-lg italic text-gray-800">“{t.quote}”</p>
                <span className="mt-5 font-semibold text-gray-900 block">{t.name}</span>
                <span className="text-gray-600 text-sm">{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-orange-50 border-b" id="pricing">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-gray-700 text-center">
            Start with a free 7-day trial. Cancel anytime. No hidden fees.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`rounded-xl p-8 shadow-lg flex flex-col border ${plan.popular ? "border-orange-500 bg-white" : "border-gray-200 bg-white"}`}>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  {plan.popular && (
                    <span className="ml-2 px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full">Most Popular</span>
                  )}
                </div>
                <p className="text-3xl text-orange-500 font-extrabold mt-4">{plan.price}</p>
                <p className="mt-1 text-base text-gray-700">{plan.desc}</p>
                <ul className="mt-6 mb-6 space-y-3 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-orange-500 w-5 h-5" /> <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.price === "Custom" ? "mailto:hi@chirag.co?subject=GrowthKit%20Enterprise%20Inquiry" : "/sign-up"}
                  tabIndex={0}
                >
                  <Button size="lg" className="w-full rounded-full" variant={plan.popular ? "default" : "outline"}>
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      {/* CTA: persistent */}
      <section className="py-16 bg-orange-500 text-center">
        <div className="max-w-2xl mx-auto px-6 flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Grow?
          </h2>
          <p className="mb-7 text-lg text-orange-50">
            Accelerate your startup’s growth with GrowthKit today.
          </p>
          <HeroCTAButtons />
        </div>
      </section>

      {/* Footer with owner info */}
      <footer className="bg-gray-900 text-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-start justify-between">
          <div>
            <h3 className="text-xl font-bold">GrowthKit by Growzio</h3>
            <p className="mt-3 text-gray-300 max-w-xs">
              The all-in-one growth launchpad for founders. <br />
              &copy; {staticYear} Chirag Dodiya. All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Get in touch</h4>
            <ul className="mt-3 text-gray-300 space-y-2">
              <li>
                Email:{" "}
                <a className="underline hover:text-white" href="mailto:hi@chirag.co">
                  hi@chirag.co
                </a>
              </li>
              <li>
                {/* Optionally add phone or socials here */}
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Jump to</h4>
            <nav>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a className="hover:text-white" href="#features">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#testimonials">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="mailto:hi@chirag.co">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}