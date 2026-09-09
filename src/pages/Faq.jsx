import React, {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {faqs} from '../components/siteData';

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageHeader title="Frequently asked questions" lead="Helpful answers to common questions about endocrine care, symptoms and appointment coordination." />

      <section className="section">
        <div className="container faq-layout">
          <div className="faq-intro">
            <div className="section-label">Before your visit</div>
            <h2>Useful information, without the jargon.</h2>
            <p>For a diagnosis or treatment plan tailored to your personal health, a specialist consultation remains the most important step.</p>
          </div>

          <div>
            {faqs.map(([q, a], i) => (
              <div className="faq-item" key={q}>
                <button onClick={() => setOpen(open === i ? -1 : i)}>
                  <span>{q}</span>
                  <ChevronDown className={open === i ? 'rot' : ''} />
                </button>
                {open === i && <p>{a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

