import React from 'react';
import { createRoot } from 'react-dom/client';
import { Github, Linkedin, Instagram, ArrowUpRight, Mail, Download, Moon, Sun, ExternalLink } from 'lucide-react';
import './styles.css';

const projects = [
  {
    title: 'BrandBoost',
    type: 'Full-Stack Platform',
    description: 'A sponsorship networking platform connecting creators, event organizers and students with brands and agencies.',
    tech: ['React', 'FastAPI', 'MySQL', 'Tailwind'],
    url: 'https://github.com/itsriteshtiwari/BrandBoost'
  },
  {
    title: 'AI Social Sentiment Dashboard',
    type: 'AI + Data',
    description: 'An end-to-end sentiment analysis and EDA dashboard using Gemini-powered classification, a Python API and React visualizations.',
    tech: ['Python', 'FastAPI', 'React', 'Gemini', 'MySQL'],
    url: 'https://github.com/itsriteshtiwari/AI-Powered-Social-Media-Sentiment-Analysis-Pipeline'
  },
  {
    title: 'Shopkeeper Pro',
    type: 'Business Software',
    description: 'A retail inventory management system with FEFO batch tracking, cart workflows, invoices, dashboards and role-based access.',
    tech: ['Flask', 'MySQL', 'React', 'FPDF2'],
    url: 'https://github.com/itsriteshtiwari/Shopkeeper-Pro---Inventory-Management-System'
  },
  {
    title: 'BugLab',
    type: 'Developer Tool',
    description: 'A bug tracking and code analysis application with CRUD workflows, validation, testing and AI-assisted capabilities.',
    tech: ['Python', 'FastAPI', 'React', 'SQLite', 'Gemini'],
    url: 'https://github.com/itsriteshtiwari/Buglab'
  }
];

const skills = ['Python', 'ReactJS', 'JavaScript', 'HTML5', 'CSS3', 'Flask', 'FastAPI', 'MySQL', 'SQLite', 'Git & GitHub', 'REST APIs', 'AI Integration'];

function App() {
  const [dark, setDark] = React.useState(true);
  const [menu, setMenu] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return <div className="app">
    <header className="nav">
      <a className="brand" href="#top">RT<span>.</span></a>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">☰</button>
      <nav className={menu ? 'navlinks open' : 'navlinks'}>
        {['About','Skills','Projects','Journey','Contact'].map(x => <a key={x} href={'#'+x.toLowerCase()} onClick={() => setMenu(false)}>{x}</a>)}
        <button className="theme" onClick={() => setDark(!dark)} aria-label="Toggle theme">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">FULL-STACK DEVELOPER · BSC IT</p>
          <h1>Building digital products that feel <em>simple.</em></h1>
          <p className="lead">I’m Ritesh Tiwari, a developer focused on full-stack web applications, REST APIs, relational databases and practical AI-powered products.</p>
          <div className="actions"><a className="button primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="button secondary" href="mailto:riteshtiwari99999@gmail.com">Let's talk <Mail size={17}/></a></div>
          <div className="socials">
            <a href="https://github.com/itsriteshtiwari" aria-label="GitHub"><Github size={20}/></a>
            <a href="https://www.linkedin.com/in/rstdeveloper/" aria-label="LinkedIn"><Linkedin size={20}/></a>
            <a href="https://www.instagram.com/theritesh_tiwari/" aria-label="Instagram"><Instagram size={20}/></a>
          </div>
        </div>
        <div className="hero-art"><div className="orb"></div><div className="code-card"><span>const</span> developer = {`{`}<br/>  name: <b>'Ritesh'</b>,<br/>  focus: <b>'Full-Stack'</b>,<br/>  mindset: <b>'Build. Learn. Ship.'</b><br/>{`}`};</div></div>
      </section>

      <section id="about" className="section narrow">
        <p className="eyebrow">01 · ABOUT</p><h2>Engineering with curiosity, <em>shipping with purpose.</em></h2>
        <p className="body">I’m a detail-oriented software developer who enjoys taking products from requirements and architecture through development, testing and documentation. My work spans Python backends, React interfaces, SQL databases and AI integrations.</p>
        <p className="body">I care about clean code, usable interfaces and systems that solve real problems. Alongside full-stack development, I’m expanding into C#, ASP.NET Core, Angular, Entity Framework, Azure DevOps and GraphQL.</p>
      </section>

      <section id="skills" className="section">
        <p className="eyebrow">02 · TOOLKIT</p><h2>Technologies I <em>work with.</em></h2>
        <div className="skill-grid">{skills.map((s,i) => <div className="skill" key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</div>)}</div>
      </section>

      <section id="projects" className="section">
        <div className="section-head"><div><p className="eyebrow">03 · SELECTED WORK</p><h2>Things I’ve <em>built.</em></h2></div><a className="textlink" href="https://github.com/itsriteshtiwari">View GitHub <ExternalLink size={15}/></a></div>
        <div className="project-grid">{projects.map((p,i) => <article className="project" key={p.title}><div className="project-top"><span>0{i+1}</span><a href={p.url} aria-label={'Open '+p.title}><ArrowUpRight/></a></div><p className="project-type">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p><div className="tags">{p.tech.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
      </section>

      <section id="journey" className="section narrow">
        <p className="eyebrow">04 · JOURNEY</p><h2>Always learning. <em>Always building.</em></h2>
        <div className="timeline">
          <div><span>2026</span><div><h3>B.Sc. Information Technology</h3><p>Viva College · Software engineering, databases, OOP, DSA and computer systems.</p></div></div>
          <div><span>2026</span><div><h3>AI & Full-Stack Projects</h3><p>Built AI-powered analytics, coding-agent workflows and production-style web applications.</p></div></div>
          <div><span>2025</span><div><h3>Full-Stack Development</h3><p>Developed BugLab, Shopkeeper Pro and other web applications with Python, React and SQL.</p></div></div>
        </div>
      </section>

      <section id="contact" className="contact section">
        <p className="eyebrow">05 · CONTACT</p><h2>Have an idea? <em>Let’s build it.</em></h2><p>Open to opportunities in full-stack development, internships, freelance work and interesting product collaborations.</p>
        <div className="actions"><a className="button primary" href="mailto:riteshtiwari99999@gmail.com">riteshtiwari99999@gmail.com <Mail size={17}/></a><a className="button secondary" href="https://github.com/itsriteshtiwari">GitHub <Github size={17}/></a></div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} Ritesh Tiwari</span><span>Built with React · Designed for the web</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
