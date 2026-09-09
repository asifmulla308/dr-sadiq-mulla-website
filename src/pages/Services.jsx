import React from 'react';
import {Activity, Baby, BadgeCheck, Bone, Brain, Droplets, HeartPulse, Scale, Stethoscope} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {services} from '../components/siteData';

const iconMap = {
  'Diabetes Care': Droplets,
  'Thyroid Disorders': Activity,
  'Obesity & Metabolic Health': Scale,
  'PCOS & Hormonal Health': HeartPulse,
  'Bone & Mineral Health': Bone,
  'Pituitary & Adrenal Disorders': Brain,
  'Pediatric & Pubertal Endocrinology': Baby,
  'Complex Hormonal Disorders': Stethoscope,
};

export default function Services() {
  return (
    <>
      <PageHeader title="Specialties & conditions treated" lead="Dedicated endocrine care for diabetes, hormones, metabolism and long-term wellbeing." />

      <section className="section">
        <div className="container services-intro">
          <div className="section-label">Endocrine & metabolic care</div>
          <h2>Specialist care for diabetes, hormones and the issues that affect daily life.</h2>
          <p>
            Hormonal and metabolic conditions often overlap. From blood sugar and thyroid balance to weight, fertility, growth and bone health,
            a coordinated specialist approach helps connect symptoms, test results and long-term treatment planning.
          </p>
        </div>

        <div className="container service-collection">
          {services.map((s, i) => {
            const Icon = iconMap[s.title] || BadgeCheck;
            return (
              <article className="service-card premium" key={s.title}>
                <div>
                  <div className="service-index">0{i + 1}</div>
                  <div className="service-icon"><Icon size={18} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                <span className="service-note">Specialist endocrine care</span>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container note-panel">
          <div className="section-label">Specialist scope</div>
          <h2>When symptoms and lab reports do not tell the whole story.</h2>
          <p>
            Endocrinology often connects symptoms across multiple systems. A specialist assessment can bring together blood sugar,
            thyroid, hormones, weight, bone health and other metabolic signals into one coordinated care plan.
          </p>
        </div>
      </section>
    </>
  );
}

