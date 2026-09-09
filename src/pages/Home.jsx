import React from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Clock3, MapPin, MessageCircle, ShieldCheck, Stethoscope } from 'lucide-react';
import { Link } from 'react-router-dom';
import { doctor, locations, services, openWhatsApp } from '../components/siteData';

const heroServices = services.slice(0, 6);

export default function Home() {
  return (
    <>
      <section className="hero hero-modern">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
        <div className="container hero-modern-grid">
          <div className="hero-copy">
            <div className="eyebrow hero-kicker"><span>Specialist Endocrine Care</span><span>·</span><span>Pune</span></div>
            <h1>Better diabetes care.<br />Better hormonal health.<br /><em>Better life.</em></h1>
            <p className="hero-lead hero-lead-large">
              Dr. Sadiq Yunus Mulla is a Consultant Endocrinologist &amp; Diabetologist offering personalised, evidence-based care for diabetes, thyroid disorders, obesity, PCOS, bone health and complex hormonal conditions.
            </p>
            <div className="hero-actions">
              <button className="primary-btn hero-appointment" onClick={() => openWhatsApp('Hello Dr. Sadiq Mulla clinic, I would like to book an appointment.')}>
                <MessageCircle size={18} /> Book an Appointment
              </button>
              <Link className="secondary-btn hero-about" to="/about">Know Dr. Sadiq <ArrowRight size={17} /></Link>
            </div>
            <div className="hero-credentials">
              <span><CheckCircle2 size={16} /> DrNB (Endocrinology)</span>
              <span><CheckCircle2 size={16} /> MD (General Medicine)</span>
              <span><CheckCircle2 size={16} /> 10+ years' experience</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-orb" />
            <div className="hero-photo-frame">
              <img src="/dr-sadiq-mulla.png" alt="Dr. Sadiq Yunus Mulla, Consultant Endocrinologist and Diabetologist" />
              <div className="hero-photo-shade" />
              <div className="hero-photo-tag glass-panel">
                <div className="tag-icon"><Stethoscope size={17} /></div>
                <div><strong>Specialist endocrine care</strong><span>Diabetes · Hormones · Metabolism</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip proof-glass">
        <div className="container proof-grid">
          <div><strong>10+</strong><span>years of experience</span></div>
          <div><strong>5K+</strong><span>patients</span></div>
          <div><strong>4</strong><span>hospital</span></div>
          <div><strong>8</strong><span>core endocrine care areas</span></div>
        </div>
      </section>

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
        <div className="container intro-grid">
          <div>
            <div className="section-label">A specialist, not a generic clinic</div>
            <h2>Clear answers for conditions that can feel complicated.</h2>
          </div>
          <div className="intro-copy">
            <p>Hormonal and metabolic conditions can influence energy, weight, blood sugar, fertility, bones and everyday life. The approach is simple: understand the whole picture, explain it clearly and create a practical plan for long-term health.</p>
            <Link className="text-link" to="/about">Explore Dr. Mulla's approach <ArrowRight size={16} /></Link>
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
