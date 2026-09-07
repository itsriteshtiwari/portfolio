import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetail(){
  const {slug}=useParams(); const p=projects.find(x=>x.slug===slug);
  if(!p) return <main className="not-found"><p className="eyebrow">PROJECT NOT FOUND</p><h1>That project doesn’t exist.</h1><Link className="button primary" to="/">Back home <ArrowLeft size={16}/></Link></main>;
  return <main className="detail section"><Link className="back" to="/"><ArrowLeft size={16}/> Back to projects</Link><p className="eyebrow">CASE STUDY · {p.type}</p><h1>{p.title}</h1><p className="detail-lead">{p.longDescription}</p><div className="detail-actions"><a className="button primary" href={p.github}>View on GitHub <ArrowUpRight size={17}/></a></div><div className="detail-grid"><section><h2>What I built</h2><div className="highlights">{p.highlights.map(x=><div key={x}><CheckCircle2 size={18}/><span>{x}</span></div>)}</div></section><aside><h3>Tech stack</h3><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div></aside></div></main>;
}
