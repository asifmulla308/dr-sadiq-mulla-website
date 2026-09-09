# Dr. Sadiq Yunus Mulla — React Clinic Website

Professional multi-page React + Vite website for Dr. Sadiq Yunus Mulla, Consultant Endocrinologist & Diabetologist, Pune.

## Run locally

```bash
npm install
npm run dev
```

## Pages

- Home
- About
- Education
- Specialties
- Experience
- Clinics & Timings
- FAQs
- Contact / Appointment

## WhatsApp appointment

Appointment buttons use a central number in `src/components/siteData.js` so it is easy to replace with the clinic's preferred WhatsApp number.

The packaged default points to Medicover's publicly listed WhatsApp appointment channel, not a private personal number. Replace `doctor.whatsapp` and `doctor.whatsappDisplay` with the clinic's official WhatsApp number before production if a dedicated clinic number is available.
