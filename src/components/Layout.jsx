import React, {useEffect, useState} from 'react';
import {Link,NavLink,useLocation} from 'react-router-dom';
import {Menu, X, MessageCircle} from 'lucide-react';
import {doctor,openWhatsApp} from './siteData';

const links=[['/about','About'],['/education','Education'],['/services','Specialties'],['/experience','Experience'],['/timings','Clinics & Timings'],['/faq','FAQs'],['/contact','Contact']];
export default function Layout({children}){
 const [open,setOpen]=useState(false);
 const location = useLocation();

 useEffect(() => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
 }, [location.pathname]);

 return <div className="app-shell">
  <div className="top-notice"><div className="container top-notice-inner"><span>Consultant Endocrinologist &amp; Diabetologist · Pune</span><button onClick={()=>openWhatsApp('Hello Dr. Sadiq Mulla clinic, I would like to book an appointment.')}><MessageCircle size={14}/> WhatsApp Appointment</button></div></div>
  <header className="header"><div className="container nav-wrap">
   <Link to="/" className="brand" onClick={()=>setOpen(false)}><img src="/logo.svg" alt="Dr. Sadiq Mulla" className="brand-logo"/></Link>
   <nav className={open?'nav open':'nav'}>{links.map(([to,label])=><NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}</nav>
   <button className="header-book" onClick={()=>openWhatsApp()}><MessageCircle size={17}/> Book Appointment</button>
   <button className="mobile-toggle" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></header>
  <main>{children}</main>
  <footer className="footer"><div className="container footer-grid"><div><img src="/logo.svg" className="footer-logo" alt="Dr. Sadiq Mulla"/><p>Consultant Endocrinologist & Diabetologist in Pune, focused on evidence-based care for hormonal and metabolic health.</p></div><div><h4>Explore</h4>{links.slice(0,5).map(([to,label])=><Link key={to} to={to}>{label}</Link>)}</div><div><h4>Appointments</h4><button className="footer-wa" onClick={()=>openWhatsApp()}><MessageCircle size={16}/> WhatsApp</button><span>{doctor.whatsappDisplay}</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dr. Sadiq Yunus Mulla. All rights reserved.</span><span>Clinical information is for general education and does not replace medical advice.</span></div></footer>
  <button className="floating-wa" onClick={()=>openWhatsApp()} aria-label="Book appointment on WhatsApp"><MessageCircle size={22}/><span>Book on WhatsApp</span></button>
 </div>
}
