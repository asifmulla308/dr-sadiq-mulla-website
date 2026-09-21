import React from 'react';
import {MapPin, MessageCircle, Phone} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import {doctor, locations, openWhatsApp} from '../components/siteData';

export default function Contact() {
  return (
    <>
      <PageHeader title="Book an appointment" lead="Connect on WhatsApp for appointment coordination, preferred clinic timing, and a clearer understanding of your endocrine health concerns." />

      <section className="section contact-reference">
        <div className="container reference-contact-grid">
          <div className="reference-contact-card">
            <div className="icon-wrap"><Phone size={18} /></div>
            <h3>Call / WhatsApp</h3>
            <p>{doctor.whatsappDisplay}</p>
          </div>
          <div className="reference-contact-card">
            <div className="icon-wrap"><MessageCircle size={18} /></div>
            <h3>Consultation mode</h3>
            <p>{doctor.consultationMode}</p>
          </div>
          <div className="reference-contact-card">
            <div className="icon-wrap"><MapPin size={18} /></div>
            <h3>Coverage</h3>
            <p>{doctor.clinicLocations}</p>
          </div>
        </div>

        <div className="container">
          <div className="section-label" style={{ textAlign: 'center', display: 'block', marginBottom: '12px' }}>Get in touch</div>
          <h2 style={{ textAlign: 'center', margin: '0 auto 12px', maxWidth: '520px' }}>Share your concern and preferred clinic</h2>
          <p style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto 30px', color: '#697d8d' }}>Tell us your symptoms, preferred location, and appointment day. The clinic team can help you with the next step.</p>

          <form className="reference-form" onSubmit={(e) => { e.preventDefault(); openWhatsApp('Hello Dr. Sadiq Mulla clinic, I would like to book an appointment. My preferred clinic is __ and my preferred day is __.'); }}>
            <div className="reference-form-grid">
              <input type="text" placeholder="Your Full Name" />
              <input type="email" placeholder="Your Email Address" />
              <input type="text" placeholder="Concern / Query Type" />
              <input type="tel" placeholder="Your Phone Number" />
              <textarea placeholder="Tell us about your symptoms or preferred consultation details" />
            </div>
            <button className="primary-btn" type="submit">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}

