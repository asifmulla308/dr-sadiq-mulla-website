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
          <div className="section-label">Clinical focus</div>
          <h2>Endocrine care built around diagnosis, balance and long-term health.</h2>
          <p>
            Dr. Sadiq Mulla supports patients with a wide range of hormone and metabolism-related concerns. Care is designed to be practical,
            patient-friendly and focused on identifying the root cause behind symptoms like tiredness, weight changes, irregular cycles,
            blood sugar imbalance and poor energy levels.
          </p>
        </div>

        <div className="container value-grid">
          <div className="value-card">
            <div className="icon-box"><Activity size={20} /></div>
            <h3>Whole-person assessment</h3>
            <p>Reviewing symptoms, history and lab findings together to uncover the real cause of hormonal imbalance.</p>
          </div>
          <div className="value-card">
            <div className="icon-box"><HeartPulse size={20} /></div>
            <h3>Long-term treatment planning</h3>
            <p>Helping patients build sustainable care plans for diabetes, thyroid issues, fertility, weight and metabolic risk.</p>
          </div>
          <div className="value-card">
            <div className="icon-box"><BadgeCheck size={20} /></div>
            <h3>Clear, guided follow-up</h3>
            <p>Turning test results into practical next steps, with monitoring that supports lasting health improvement.</p>
          </div>
        </div>
      </section>

      <section className="section">
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

