import React from 'react';
import {Clock3, MapPin, MessageCircle} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {locations, openWhatsApp} from '../components/siteData';

export default function Timings() {
  return (
    <>
      <PageHeader title="Clinics, locations & consultation timings" lead="Consultation days and timings vary by clinic location. Please confirm the latest schedule before your visit." />

      <section className="section">
        <div className="container location-collection">
          {locations.map((l) => (
            <article className="location-card" key={l.name}>
              <div className="location-title">
                <MapPin size={19} />
                <div>
                  <h3>{l.name}</h3>
                  <span>{l.area}</span>
                </div>
              </div>

              <div className="detail-row">
                <Clock3 size={17} />
                <div>
                  <strong>{l.days}</strong>
                  <span>{l.time}</span>
                </div>
              </div>

              <p>{l.address}</p>
              <a href={l.map} target="_blank" rel="noreferrer">View location</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-soft">
        <div className="container page-cta">
          <div>
            <div className="section-label">Need help choosing a slot?</div>
            <h2>Message the clinic on WhatsApp.</h2>
            <p>Share your preferred location and day and the clinic team can guide you on current availability.</p>
          </div>
          <button className="primary-btn" onClick={() => openWhatsApp('Hello Dr. Sadiq Mulla clinic, please help me with the current consultation timings and appointment availability.') }>
            <MessageCircle size={18} /> WhatsApp the clinic
          </button>
        </div>
      </section>
    </>
  );
}

