export const doctor = {
  name: 'Dr. Sadiq Yunus Mulla',
  title: 'Consultant Endocrinologist & Diabetologist',
  experience: '10+ years',
  qualifications: ['MBBS', 'MD (General Medicine)', 'DrNB (Endocrinology)'],
  languages: ['English', 'Hindi', 'Marathi'],
  whatsapp: '919730443651',
  whatsappDisplay: '+91 9730443651',
};

export const services = [
  { title:'Diabetes Care', text:'Personalised management for type 2 diabetes, gestational diabetes, young-onset diabetes and long-term risk reduction.', icon:'Droplets' },
  { title:'Thyroid Disorders', text:'Evaluation and treatment of hypothyroidism, hyperthyroidism, thyroid nodules, fatigue and unexplained weight changes.', icon:'Activity' },
  { title:'Obesity & Metabolic Health', text:'Medical weight management, insulin resistance, cholesterol concerns and sustainable metabolic care.', icon:'Scale' },
  { title:'PCOS & Hormonal Health', text:'Support for irregular periods, acne, weight gain, fertility planning and hormonal imbalance in women.', icon:'HeartPulse' },
  { title:'Bone & Mineral Health', text:'Assessment of osteoporosis, vitamin D deficiency, calcium-related issues and parathyroid concerns.', icon:'Bone' },
  { title:'Pituitary & Adrenal Disorders', text:'Specialist evaluation for pituitary and adrenal hormone imbalance, including complex endocrine cases.', icon:'Brain' },
  { title:'Pediatric & Pubertal Endocrinology', text:'Growth, pubertal development and childhood endocrine concerns addressed with a family-friendly, structured approach.', icon:'Baby' },
  { title:'Complex Hormonal Disorders', text:'Integrated review of hormone-related symptoms with a coordinated plan across diagnosis, treatment and follow-up.', icon:'Stethoscope' },
];

export const locations = [
  { name:'Medicover Hospitals', area:'Bhosari, Pimpri-Chinchwad', days:'Monday – Friday', time:'10:00 AM – 12:00 PM', address:'Indrayani Nagar Rd, Sector No. 1, Bhosari, Pimpri-Chinchwad, Pune, Maharashtra 411026', map:'https://www.google.com/maps/search/?api=1&query=Medicover+Hospitals+Bhosari+Pune' },
  { name:'Vitalife Clinic', area:'Pimple Saudagar', days:'Tuesday, Thursday & Saturday', time:'4:00 PM – 5:00 PM', address:'Pimple Saudagar, Pune, Maharashtra', map:'https://www.google.com/maps/search/?api=1&query=Vitalife+Clinic+Pimple+Saudagar+Pune' },
  { name:'Olive Hospital', area:'Kondhwa', days:'Monday, Wednesday & Friday', time:'3:00 PM – 5:00 PM', address:'Kondhwa, Pune, Maharashtra', map:'https://www.google.com/maps/search/?api=1&query=Olive+Hospital+Kondhwa+Pune' },
  { name:'Inamdar Multispeciality Hospital', area:'Wanowrie', days:'Visiting Consultant', time:'On-call / Appointment basis', address:'Fatima Nagar, Wanowrie, Pune, Maharashtra 411040', map:'https://www.google.com/maps/search/?api=1&query=Inamdar+Multispeciality+Hospital+Wanowrie+Pune' },
];

export const timeline = [
  { year:'2009', title:'MBBS', place:'RCSM Government Medical College, Kolhapur' },
  { year:'2017', title:'MD (General Medicine)', place:'B.J. Government Medical College & Sassoon General Hospital, Pune' },
  { year:'2014–2017', title:'Junior Resident – General Medicine', place:'B.J. Government Medical College & Sassoon General Hospital, Pune' },
  { year:'2018–2019', title:'Senior Resident – General Medicine', place:'B.J. Government Medical College & Sassoon General Hospital, Pune' },
  { year:'2019–2022', title:'Assistant Professor – General Medicine', place:'Dr. D. Y. Patil Medical College & Hospital, Pimpri, Pune' },
  { year:'2022–2025', title:'DrNB Training – Endocrinology', place:'P.D. Hinduja Hospital & Medical Research Centre, Mumbai' },
];

export const faqs = [
  ['When should I consult an endocrinologist?','You should consider a specialist review if you have persistent diabetes, abnormal thyroid tests, unexplained weight gain or loss, irregular periods, fertility issues, severe fatigue, bone pain, or growth and puberty concerns.'],
  ['What does an endocrinologist treat?','Endocrinologists evaluate and manage hormone and metabolism-related conditions such as diabetes, thyroid disease, obesity, PCOS, pituitary and adrenal disorders, and bone-mineral health.'],
  ['Do I need lab reports before the visit?','Previous blood tests and reports are helpful, but they are not always required before the first consultation. If available, it can help the doctor understand your symptoms and treatment history more clearly.'],
  ['Can I book an appointment on WhatsApp?','Yes. WhatsApp is the quickest way to coordinate your appointment. Share your preferred clinic, day and the reason for consultation, and the clinic team can guide you on availability.'],
  ['Are consultation timings the same every day?','No. Timings vary by hospital and day. Please check the current schedule on the Clinics & Timings page before visiting.'],
];

export const openWhatsApp = (message = 'Hello Dr. Sadiq Mulla clinic, I would like to book an appointment.') => {
  const url = `https://wa.me/${doctor.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
};
