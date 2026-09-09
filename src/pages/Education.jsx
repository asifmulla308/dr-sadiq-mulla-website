import React from 'react';
import {GraduationCap, Hospital} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {timeline} from '../components/siteData';

export default function Education() {
  return (
    <>
      <PageHeader title="Education & specialist training" lead="A strong medical foundation in general medicine, followed by advanced endocrine training and hospital-based clinical practice." />

      <section className="section">
        <div className="container timeline-layout">
          <div>
            <div className="section-label">Qualifications</div>
            <h2>Training built on strong medical foundations.</h2>
            <p>Dr. Sadiq’s career path combines undergraduate medical training, internal medicine expertise and advanced endocrine practice across tertiary-care settings in Maharashtra.</p>
          </div>

          <div className="timeline">
            {timeline.map((t, i) => (
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

      <section className="section section-soft">
        <div className="container icon-cards">
          <div className="icon-card">
            <GraduationCap size={24} />
            <h3>Advanced qualification</h3>
            <p>DrNB in Endocrinology from P.D. Hinduja Hospital & Medical Research Centre, Mumbai.</p>
          </div>

          <div className="icon-card">
            <Hospital size={24} />
            <h3>Academic medicine</h3>
            <p>Previous experience as Assistant Professor in General Medicine at Dr. D. Y. Patil Medical College & Hospital.</p>
          </div>
        </div>
      </section>
    </>
  );
}

