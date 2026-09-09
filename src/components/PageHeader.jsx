import React from 'react';
export default function PageHeader({eyebrow='Dr. Sadiq Yunus Mulla',title,lead}){return <section className="page-header"><div className="container"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1>{lead&&<p>{lead}</p>}</div></section>}
