import React from 'react';
import PageHeader from '../components/PageHeader';
import {CheckCircle2, HeartPulse, ShieldCheck, Stethoscope} from 'lucide-react';

const highlights = [
  'Consultation plans built around your symptoms, medical history and long-term health goals.',
  'Clear explanations of hormones, blood reports and treatment options without unnecessary jargon.',
  'Practical, long-term care focused on energy, metabolic health, fertility and everyday wellbeing.',
];

const valueCards = [
  { icon: Stethoscope, title: 'Specialist clinical depth', text: 'Management spans diabetes, thyroid disease, obesity, bone health, PCOS and complex hormone disorders.' },
  { icon: HeartPulse, title: 'Patient-centred care', text: 'The consultation style is calm, practical and focused on understanding what matters most to you.' },
  { icon: ShieldCheck, title: 'Evidence-led follow-up', text: 'The emphasis is on structured monitoring, realistic treatment goals and sustainable health improvement.' },
];

export default function About() {
  return (
    <>
      <PageHeader title="A specialist who makes endocrine care easier to understand." lead="Dr. Sadiq Mulla is a Consultant Endocrinologist & Diabetologist with experience in diabetes, thyroid disorders, metabolic health and complex hormonal care." />

      <section className="section">
        <div className="container about-layout">
          <div className="photo-panel">
            <img src="/dr-sadiq-mulla.png" className="about-photo" alt="Dr. Sadiq Mulla" />
          </div>

          <div className="content-panel">
            <div className="section-label">About Dr. Sadiq</div>
            <h2>Evidence-based care, delivered with clarity and continuity.</h2>
            <p>
              Dr. Sadiq’s clinical work is shaped by years of experience in general medicine and endocrine practice across hospital and academic settings in Pune and Maharashtra. His focus includes diabetes, thyroid disorders, obesity, PCOS, bone and mineral health, and complex hormone-related conditions.
            </p>

            <div className="feature-list">
              {highlights.map((item) => (
                <div className="feature-item" key={item}>
                  <CheckCircle2 size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-label">Why patients value this approach</div>
              <h2>Practical expertise for complex hormonal health.</h2>
            </div>
          </div>

          <div className="value-grid">
            {valueCards.map(({ icon: Icon, title, text }) => (
              <article className="value-card" key={title}>
                <div className="icon-box"><Icon size={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

