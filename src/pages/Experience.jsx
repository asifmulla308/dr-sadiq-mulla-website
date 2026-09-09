import React from 'react';
import {Award, BookOpen, BriefcaseMedical} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {timeline} from '../components/siteData';

export default function Experience() {
  return (
    <>
      <PageHeader title="Experience grounded in hospital and academic medicine." lead="Clinical practice shaped by general medicine training, specialist endocrine experience and hospital-based patient care in Pune." />

      <section className="section">
        <div className="container">
          <div className="experience-grid experience-cards">
            <div>
              <BriefcaseMedical size={22} />
              <strong>Hospital practice</strong>
              <span>Consultant endocrinology care across multispeciality hospitals in Pune, helping patients with diabetes and hormone-related disorders.</span>
            </div>

            <div>
              <BookOpen size={22} />
              <strong>Academic experience</strong>
              <span>Former teaching and clinical responsibilities in General Medicine at a major Pune medical college, strengthening the patient-care foundation.</span>
            </div>

            <div>
              <Award size={22} />
              <strong>Clinical learning</strong>
              <span>Ongoing involvement in endocrinology education and case-based learning focused on practical, patient-centred care.</span>
            </div>
          </div>

          <div className="section-head inner-head">
            <div>
              <div className="section-label">Professional journey</div>
              <h2>From internal medicine to endocrinology.</h2>
            </div>
          </div>

          <div className="timeline wide">
            {timeline.slice(2).map((t, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div>
                  <span>{t.year}</span>
                  <h3>{t.title}</h3>
                  <p>{t.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

