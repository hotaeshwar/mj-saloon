import React from 'react';
import { Check, Sparkles, MapPin } from 'lucide-react';

const SingleService = () => {
  const servicesData = {
    'hair-treatment': {
      title: 'Hair Treatment',
      subtitle: 'Professional Hair Care Services',
      image: '/media/hairtreatment.jpg',
      metaDescription: 'Expert hair treatment services at MJ Salon, Alaknanda, Kalkaji & Abohar. Precision cuts, vibrant coloring, keratin treatments, nano plastia, and professional styling for healthy, beautiful hair.',
      intro: 'Transform your look with expert hair services at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Our skilled stylists create stunning hairstyles that enhance your natural beauty.',
      description: 'Premium haircuts, coloring, keratin treatments, nano plastia, and styling services using top-quality products for healthy, shiny, frizz-free, gorgeous hair.',
      features: [
        'Precision haircuts for men and women',
        'Vibrant hair coloring and highlights',
        'Keratin treatment and smoothening',
        'Nano Plastia — advanced frizz-free treatment',
        'Deep conditioning and hair spa',
        'Professional blow dry styling',
        'Hair rebonding and straightening'
      ]
    },
    'makeup': {
      title: 'Makeup Services',
      subtitle: 'Professional Makeup Artistry',
      image: '/media/makeup.jpg',
      metaDescription: 'Professional makeup services at MJ Salon, Alaknanda, Kalkaji & Abohar. Bridal makeup, party makeup, and special occasion looks by expert makeup artists using premium international brands.',
      intro: 'Enhance your natural beauty with professional makeup artistry at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Our certified makeup artists create <strong>flawless, long-lasting looks</strong> for every occasion.',
      description: 'Expert bridal, party, and photoshoot makeup using premium international brands for stunning results.',
      features: [
        'Bridal makeup with pre-wedding trials',
        'Party and event makeup',
        'Professional photoshoot makeup',
        'Airbrush makeup application',
        'HD makeup for video and photography',
        'Natural everyday makeup looks'
      ]
    },
    'nail-extension': {
      title: 'Nail Extension',
      subtitle: 'Beautiful, Lasting Nails',
      image: '/media/nailextension.jpg',
      metaDescription: 'Professional nail extension services at MJ Salon, Alaknanda, Kalkaji & Abohar. Acrylic nails, gel extensions, creative nail art, and meticulous grooming for stunning, durable nails.',
      intro: 'Get stunning, durable nails with professional <strong>nail extension services</strong> at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Our certified technicians create beautiful <strong>acrylic extensions</strong> and modern <strong>gel nails</strong>.',
      description: 'Premium acrylic and gel nail extensions with creative nail art, using hygienic practices for elegant, long-lasting results.',
      features: [
        'Acrylic nail extensions',
        'Gel nail extensions and polish',
        'French manicure and designs',
        'Creative nail art',
        'Nail strengthening treatments',
        'Extension refills and removal'
      ]
    },

    'hydrafacial': {
      title: 'HydraFacial',
      subtitle: 'Next-Gen Skin Resurfacing',
      image: '/media/hydrafacial.jpg',
      metaDescription: 'Advanced HydraFacial treatment at MJ Salon, Alaknanda, Kalkaji & Abohar. Multi-step skin resurfacing with deep cleansing, exfoliation, extraction, hydration, and antioxidant protection for instantly glowing skin.',
      intro: 'Experience the gold standard in skin rejuvenation with <strong>HydraFacial treatments</strong> at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. This clinically proven, <strong>non-invasive skin resurfacing treatment</strong> delivers instant, visible results with zero downtime — suitable for all skin types.',
      description: 'HydraFacial is a patented, multi-step facial treatment that combines cleansing, exfoliation, painless extractions, and deep hydration with nourishing serums in a single session. It targets fine lines, clogged pores, uneven skin tone, oiliness, and dullness — leaving skin visibly brighter, plumper, and healthier after just one visit.',
      features: [
        'Deep cleansing & vortex exfoliation',
        'Painless blackhead & pore extraction',
        'Intense hydration with hyaluronic acid',
        'Antioxidant & peptide infusion',
        'Brightening & even skin tone treatment',
        'Anti-aging serum application',
        'Suitable for sensitive & acne-prone skin',
        'Zero downtime — results in 30 minutes'
      ]
    },
    'korean-facial': {
      title: 'Korean Facial',
      subtitle: 'K-Beauty Glow Ritual',
      image: '/media/koreanfacial.jpg',
      objectPosition: '60% 80%',
      metaDescription: 'Authentic Korean facial treatment at MJ Salon, Alaknanda, Kalkaji & Abohar. K-beauty inspired multi-step skincare ritual with glass skin glow, deep hydration, and advanced brightening techniques for flawless skin.',
      intro: 'Unlock the secret to <strong>glass skin</strong> with our authentic <strong>Korean facial treatment</strong> at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Inspired by the globally celebrated <strong>K-beauty skincare philosophy</strong>, this multi-step ritual focuses on deep nourishment, hydration, and a luminous, porcelain-like complexion.',
      description: 'Our Korean Facial is a luxurious multi-layered skincare ritual drawing from K-beauty traditions. Using sheet masks, essences, ampoules, and brightening serums, this treatment intensely hydrates, firms, and illuminates the skin. Perfect for achieving the sought-after dewy, glass skin look — without any harsh procedures.',
      features: [
        'Korean double-cleansing method',
        'Exfoliation with enzyme peeling',
        'Sheet mask with brightening actives',
        'Essence & ampoule layering technique',
        'Gua sha facial massage for lifting',
        'Glass skin hydration boost',
        'Pore tightening & firming treatment',
        'Suitable for all skin tones'
      ]
    },
    'hair-extension': {
      title: 'Hair Extension',
      subtitle: 'Instant Length & Volume',
      image: '/media/hairextension.jpg',
      metaDescription: 'Professional hair extension services at MJ Salon, Alaknanda, Kalkaji & Abohar. Clip-in, tape-in, fusion, and weft hair extensions for instant length, volume, and natural-looking results.',
      intro: 'Add instant length, volume, and dimension with <strong>professional hair extensions</strong> at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Our trained extension specialists use <strong>100% natural human hair</strong> for seamlessly blended, <strong>damage-free results</strong> that look and feel completely natural.',
      description: 'Whether you want extra length for a special occasion or permanent volume to transform your everyday look, our hair extension services are tailored to your hair type and lifestyle. We offer a range of application methods using ethically sourced, high-quality human hair that matches your natural color and texture perfectly.',
      features: [
        'Clip-in extensions for temporary use',
        'Tape-in extensions — seamless & flat',
        'Fusion / keratin bond extensions',
        'Weft & micro-link extensions',
        'Color matching & blending',
        'Extension care & maintenance advice',
        'Removal & re-application service',
        '100% natural Remy human hair used'
      ]
    },
    'hair-patch': {
      title: 'Hair Patch',
      subtitle: 'Natural-Looking Hair Replacement',
      image: '/media/hairpatch.jpg',
      metaDescription: 'Expert hair patch and non-surgical hair replacement at MJ Salon, Alaknanda, Kalkaji & Abohar. Customized toupee, hair system, and hair patch solutions for men and women with hair loss, thinning hair, or baldness.',
      intro: 'Regain your confidence with our <strong>hair patch and non-surgical hair replacement solutions</strong> at <strong>MJ Salon by Mohit & Jatin</strong> with locations in <strong>Alaknanda (South Delhi)</strong>, <strong>Kalkaji (New Delhi)</strong> and <strong>Abohar (Punjab)</strong>. Designed for men and women experiencing <strong>hair loss, thinning hair, or baldness</strong>, our custom hair systems offer a completely natural look and feel — with zero surgery, zero pain.',
      description: 'Our hair patch service provides a permanent, non-surgical solution for hair loss using high-quality human or synthetic hair systems that are customized to match your scalp tone, hair color, texture, and density. The result is an undetectable, full head of hair that you can style, wash, and live with naturally — boosting your appearance and self-esteem from day one.',
      features: [
        'Custom-fitted human hair patches',
        'Synthetic & blend hair systems',
        'Full scalp & partial coverage options',
        'Natural color & texture matching',
        'Secure bonding & attachment methods',
        'Hair patch styling & cutting',
        'Regular maintenance & re-bonding',
        'Private, confidential consultation'
      ]
    }
  };

  return (
    <article className="relative min-h-screen bg-[#1a1a1a] overflow-hidden">
      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed will-change-transform"
          style={{
            backgroundImage: 'url(/media/background.jpg)',
            filter: 'brightness(0.3)',
          }}
        />
      </div>

      <div className="relative z-10">

        {/* Main Header */}
        <header className="pt-24 sm:pt-28 pb-12 sm:pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center">
              <h1 className="font-bold uppercase mb-2 text-3xl sm:text-4xl md:text-5xl text-[#f5f5f5] leading-tight">
                Our Premium Services
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-[#c4a574]">
                Experience Excellence in Every Detail
              </p>

              {/* Location Tags with Lucide MapPin */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
                {['Alaknanda (South Delhi)', 'Kalkaji (New Delhi)', 'Abohar (Punjab)'].map((loc) => (
                  <span
                    key={loc}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full border border-[#c4a574]/50 text-[#c4a574]"
                  >
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                    {loc}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </header>

        {/* All Services Ladder Layout */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 space-y-16 sm:space-y-24">
          {Object.entries(servicesData).map(([serviceKey, service], serviceIndex) => {
            const isLeft = serviceIndex % 2 === 0;

            return (
              <div
                key={serviceKey}
                className={`${isLeft ? 'md:mr-12 lg:mr-16' : 'md:ml-12 lg:ml-16'} animate-fade-in-up`}
                style={{ animationDelay: `${serviceIndex * 150}ms` }}
              >
                <div className={`relative max-w-5xl ${isLeft ? '' : 'md:ml-auto'}`}>

                  {/* Service Header */}
                  <div className="mb-6 sm:mb-8">
                    <h2 className="font-bold uppercase text-2xl sm:text-3xl md:text-4xl text-[#f5f5f5] mb-1">
                      {service.title}
                    </h2>
                    <p className="text-base sm:text-lg text-[#c4a574]">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Image & Why Choose */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">

                    {/* Image */}
                    <div className={`relative ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                      <div className={`absolute -top-2 ${isLeft ? '-left-2' : '-right-2'} w-10 h-10 pointer-events-none`}>
                        <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-full h-px bg-[#c4a574]`} />
                        <div className={`absolute top-0 ${isLeft ? 'left-0' : 'right-0'} w-px h-full bg-[#c4a574]`} />
                      </div>
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={service.image}
                          alt={`${service.title} at MJ Salon`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          style={{ objectPosition: service.objectPosition || 'center' }}
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Why Choose */}
                    <div className={`flex flex-col justify-center ${isLeft ? 'md:order-2' : 'md:order-1'}`}>
                      <Sparkles className="w-6 h-6 text-[#c4a574] mb-2" />
                      <h3 className="font-bold uppercase text-lg sm:text-xl md:text-2xl text-[#f5f5f5] mb-3">
                        Why Choose <span className="text-[#c4a574]">This Service</span>
                      </h3>
                      <p
                        className="text-sm sm:text-base leading-relaxed text-[#e0e0e0]"
                        dangerouslySetInnerHTML={{ __html: service.intro }}
                      />
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className="relative bg-[#1a1a1a]/40 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-[#c4a574]/20">
                    <div className={`absolute ${isLeft ? '-bottom-2 -left-2' : '-bottom-2 -right-2'} w-10 h-10 pointer-events-none`}>
                      <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-full h-px bg-[#c4a574]`} />
                      <div className={`absolute bottom-0 ${isLeft ? 'left-0' : 'right-0'} w-px h-full bg-[#c4a574]`} />
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base leading-relaxed text-[#e0e0e0] mb-5">
                      {service.description}
                    </p>

                    {/* Features */}
                    <h4 className="font-bold uppercase text-base sm:text-lg text-[#f5f5f5] mb-3 flex items-center gap-2">
                      <span className="text-[#c4a574]">•</span>
                      Services Include
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 opacity-0 animate-fade-in-up"
                          style={{
                            animationDelay: `${(serviceIndex * 150) + (index * 60)}ms`,
                            animationFillMode: 'forwards',
                          }}
                        >
                          <Check className="w-4 h-4 text-[#c4a574] flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-[#e0e0e0] leading-snug">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </section>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </article>
  );
};

export default SingleService;