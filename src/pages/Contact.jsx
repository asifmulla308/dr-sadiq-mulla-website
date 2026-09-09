import React from 'react';
import {MapPin, MessageCircle, Phone} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {doctor, locations, openWhatsApp} from '../components/siteData';

export default function Contact() {
  return (
    <>
      <PageHeader title="Book an appointment" lead="The quickest way to connect is WhatsApp. Share your preferred clinic, day and concern, and the team can guide you on availability." />

      <section className="section">
        <div className="container contact-layout">
          <div>
            <div className="section-label">Contact</div>
            <h2>One message can start the conversation.</h2>
            <p>Use WhatsApp for appointment assistance, or check the clinic timings below to plan your visit.</p>

            <button className="primary-btn" onClick={() => openWhatsApp()}>
              <MessageCircle size={18} /> Book on WhatsApp
            </button>

            <div className="contact-list">
              <div>
                <Phone size={18} />
                <div>
                  <span>Appointment assistance</span>
                  <strong>{doctor.whatsappDisplay}</strong>
                </div>
              </div>

              <div>
                <MessageCircle size={18} />
                <div>
                  <span>Best to share</span>
                  <strong>Clinic name, preferred day and your concern</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-panel">
            <h3>Clinic options</h3>
            {locations.map((l) => (
              <div className="contact-location" key={l.name}>
                <MapPin size={18} />
                <div>
                  <strong>{l.name}</strong>
                  <span>{l.area}</span>
                  <small>{l.days} · {l.time}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

