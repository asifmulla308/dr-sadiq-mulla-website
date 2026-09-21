import React, { useEffect, useState } from 'react';
import { ArrowRight, CalendarDays, Clock3, MapPin, MessageCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { locations, services, openWhatsApp } from '../components/siteData';

const heroServices = services.slice(0, 6);
const sliderImages = [
  { src: '/dr_sadiq_slider_images/slide-1-expert-care-4k.png', alt: 'Expert care', to: '/services', objectPosition: 'center 55%' },
  { src: '/dr_sadiq_slider_images/slide-2-diabetes-care-4k.png', alt: 'Diabetes care', to: '/services', objectPosition: 'center 50%' },
  { src: '/dr_sadiq_slider_images/slide-3-hormonal-disorders-4k.png', alt: 'Hormonal disorders', to: '/services', objectPosition: 'center 52%' },
  { src: '/dr_sadiq_slider_images/slide-4-healthy-lifestyle-4k.png', alt: 'Healthy lifestyle', to: '/about', objectPosition: 'center 48%' },
  { src: '/dr_sadiq_slider_images/slide-5-why-choose-dr-sadiq-4k.png', alt: 'Why choose Dr. Sadiq Mulla', to: '/about', objectPosition: 'center center' },
  { src: '/dr_sadiq_slider_images/slide-6-book-appointment-4k.png', alt: 'Book appointment', to: '/contact', objectPosition: 'center 45%' },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % sliderImages.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  const visibleSlides = [
    sliderImages[(activeSlide + sliderImages.length - 1) % sliderImages.length],
    sliderImages[activeSlide],
    sliderImages[(activeSlide + 1) % sliderImages.length],
  ];

  return (
    <>
      <section className="hero hero-reference">
        <div className="container hero-reference-wrap">
          <div className="reference-photo-stack-wrap">
            <Link
              className="reference-photo-card hero-slide-full"
              to={sliderImages[activeSlide].to}
              aria-label={sliderImages[activeSlide].alt}
              style={{
                backgroundImage: `url(${sliderImages[activeSlide].src})`,
                backgroundPosition: sliderImages[activeSlide].objectPosition,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />

            <div className="hero-slide-dots" aria-label="Hero image carousel navigation">
              {sliderImages.map((slide, index) => (
                <button
                  key={slide.alt}
                  type="button"
                  className={index === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Show ${slide.alt}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container stat-band">
          <div><strong>10+</strong><span>years of experience</span></div>
          <div><strong>5K+</strong><span>patients</span></div>
          <div><strong>4</strong><span>hospital</span></div>
          <div><strong>8</strong><span>core endocrine care areas</span></div>
        </div>
      </section>

      {/* <section className="proof-strip proof-glass">
        <div className="container proof-grid">
          <div><strong>10+</strong><span>years of experience</span></div>
          <div><strong>5K+</strong><span>patients</span></div>
          <div><strong>4</strong><span>hospital</span></div>
          <div><strong>8</strong><span>core endocrine care areas</span></div>
        </div>
      </section> */}

      <section className="section intro-modern">
        <div className="container premium-summary">
          <div className="summary-copy">
            <div className="section-label">Why patients trust this care</div>
            <h2>Clear, compassionate endocrinology that fits real life.</h2>
          </div>
          <div className="summary-pills">
            <span>Personalised plans</span>
            <span>Evidence-based care</span>
            <span>Long-term guidance</span>
            <span>Compassionate support</span>
          </div>
        </div>
      </section>

      <section className="section intro-modern soft-panel">
        <div className="container intro-grid reference-intro">
          <div>
            <div className="section-label">Award winning patient care</div>
            <h2>Award winning patient care</h2>
          </div>
          <div className="intro-copy">
            <p>Endocrine care is about connecting the dots between hormones, metabolism, daily energy, and long-term heart and bone health.</p>
          </div>
        </div>

        <div className="container reference-feature-grid">
          <div className="reference-feature-card">
            <div className="feature-icon"><Stethoscope size={18} /></div>
            <h3>Hormone &amp; metabolic testing</h3>
            <p>Comprehensive evaluation of blood sugar, thyroid function, metabolism, and hormone-related symptoms.</p>
          </div>
          <div className="reference-feature-card">
            <div className="feature-icon"><ShieldCheck size={18} /></div>
            <h3>Cardio-metabolic risk care</h3>
            <p>Integrated support for insulin resistance, weight concerns, cholesterol and long-term heart protection.</p>
          </div>
          <div className="reference-feature-card">
            <div className="feature-icon"><CalendarDays size={18} /></div>
            <h3>Bone &amp; hormone balance</h3>
            <p>Guidance for vitamin D, calcium balance, bone strength, and hormonal conditions that affect daily wellbeing.</p>
          </div>
        </div>
      </section>

      <section className="section specialty-modern">
        <div className="container">
          <div className="section-head section-head-modern">
            <div><div className="section-label">Areas of expertise</div><h2>Specialist care for your hormonal health.</h2></div>
            <p>Focused care pathways help you find the right expertise without the clutter of a traditional clinic website.</p>
          </div>
          <div className="service-grid modern-service-grid">
            {heroServices.map((s, i) => (
              <Link className="service-card modern-service-card" key={s.title} to="/services" aria-label={`Learn more about ${s.title}`}>
                <span className="service-index">0{i + 1}</span>
                <div className="service-symbol">{i === 0 ? 'DM' : i === 1 ? 'TH' : i === 2 ? 'MH' : i === 3 ? 'PC' : i === 4 ? 'BH' : 'PH'}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Link>
            ))}
          </div>
          <Link className="center-btn" to="/services">View all specialties <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section className="section clinics-modern">
        <div className="container">
          <div className="section-head section-head-modern">
            <div><div className="section-label">Where to consult</div><h2>Choose the location that works for you.</h2></div>
            <Link className="text-link" to="/timings">View all clinic timings <ArrowRight size={16} /></Link>
          </div>
          <div className="location-grid modern-location-grid">
            {locations.map((l) => (
              <article className="location-card modern-location-card" key={l.name}>
                <div className="location-title"><MapPin size={18} /><div><h3>{l.name}</h3><span>{l.area}</span></div></div>
                <div className="timing"><Clock3 size={17} /><div><strong>{l.days}</strong><span>{l.time}</span></div></div>
                <a href={l.map} target="_blank" rel="noreferrer">Get directions <ArrowRight size={15} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section appointment-modern">
        <div className="container appointment-banner glass-panel">
          <div>
            <div className="section-label">Appointments</div>
            <h2>Start with a conversation.</h2>
            <p>Share your preferred clinic and day on WhatsApp. The clinic team can guide you on appointment availability.</p>
          </div>
          <button className="primary-btn" onClick={() => openWhatsApp('Hello Dr. Sadiq Mulla clinic, I would like to book an appointment. My preferred clinic is __ and preferred day is __.') }><CalendarDays size={18} /> Book via WhatsApp</button>
        </div>
      </section>
    </>
  );
}
