const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const stats = [
  { value: "9+", label: "Years crafting web experiences" },
  { value: "140+", label: "Websites launched" },
  { value: "42%", label: "Average conversion lift" },
];

const services = [
  {
    title: "Web Strategy",
    description:
      "Discovery workshops, positioning, and content planning to align your site with business goals.",
  },
  {
    title: "Design + Build",
    description:
      "Modern, responsive experiences built in React, Next.js, or Webflow with performance in mind.",
  },
  {
    title: "Launch + Growth",
    description:
      "SEO, analytics, experimentation, and iterative improvements that keep your site converting.",
  },
];

const timeline = [
  {
    role: "Lead Web Developer · Studio North",
    period: "2021 — Present",
    detail:
      "Owned multi-site redesigns for SaaS brands, integrating headless CMS and analytics.",
  },
  {
    role: "Front-end Engineer · Brightline Digital",
    period: "2018 — 2021",
    detail:
      "Architected design systems and optimized UX flows that increased conversion by 31%.",
  },
  {
    role: "Freelance Web Developer",
    period: "2015 — 2018",
    detail:
      "Delivered conversion-focused sites for startups, nonprofits, and local businesses.",
  },
];

const projects = [
  {
    name: "Northwind Labs",
    outcome: "SaaS redesign · 38% lift in inbound leads",
    tags: ["Strategy", "UX", "Next.js"],
  },
  {
    name: "Helio Wellness",
    outcome: "Product launch · 2.4x conversion rate",
    tags: ["Brand", "Webflow", "CRO"],
  },
  {
    name: "Fleetline Logistics",
    outcome: "Enterprise portal · 45% faster onboarding",
    tags: ["Design System", "React", "APIs"],
  },
];

const highlights = [
  "Certified Webflow Professional (2023)",
  "Google UX Design Certificate (2022)",
  "Speaker · Design + Dev Summit",
  "Mentor for early-career developers",
];

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="top">
        <nav className="nav">
          <div className="logo">WillBio</div>
          <div className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="cta" href="#contact">
            Start a Project
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Web Developer · UX-First · Results-Driven</p>
            <h1>Building premium web experiences that turn visitors into clients.</h1>
            <p className="lead">
              I partner with founders and growing teams to craft modern websites and web
              applications that look sharp, load fast, and guide customers toward action.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                View Work
              </a>
              <a className="button ghost" href="#resume">
                Download Resume
              </a>
            </div>
            <div className="stats">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="hero-card">
            <div className="profile">
              <div className="status" />
              <div>
                <h2>Will Bio</h2>
                <p>Full-stack web developer</p>
              </div>
            </div>
            <p>
              I specialize in conversion-focused marketing sites, landing pages, and scalable
              web platforms built with modern stacks.
            </p>
            <ul>
              <li>React, Next.js, and Vue</li>
              <li>Headless CMS + SEO strategy</li>
              <li>Design systems + component libraries</li>
            </ul>
            <a className="button primary" href="#contact">
              Schedule a discovery call
            </a>
          </aside>
        </div>
      </header>

      <main>
        <section className="section" id="about">
          <div className="section-title">
            <p className="eyebrow">Bio</p>
            <h2>About me</h2>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Human-centered development</h3>
              <p>
                I blend thoughtful design with clean, scalable code. My process focuses on
                listening, rapid prototyping, and building experiences that make your audience
                take action.
              </p>
              <p>
                From discovery to launch, I work as an embedded partner—translating business
                goals into a site that tells your story and drives revenue.
              </p>
            </div>
            <div className="card">
              <h3>Client feedback</h3>
              <blockquote>
                “Will redesigned our website in under four weeks, and we saw a 38% lift in
                inbound leads within the first month.”
                <span>— Avery Mills, Founder of Northwind Labs</span>
              </blockquote>
              <blockquote>
                “Clear communication, sharp design, and a flawless handoff. Will was the easiest
                dev we’ve worked with.”
                <span>— Jalen Rivera, Product Lead at Horizon Apps</span>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="section alt" id="services">
          <div className="section-title">
            <p className="eyebrow">Services</p>
            <h2>Everything you need for a standout web presence</h2>
          </div>
          <div className="grid three">
            {services.map((service) => (
              <div className="card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="resume">
          <div className="section-title">
            <p className="eyebrow">Resume</p>
            <h2>Experience & credentials</h2>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Professional Experience</h3>
              <ul className="timeline">
                {timeline.map((item) => (
                  <li key={item.role}>
                    <div className="timeline-row">
                      <h4>{item.role}</h4>
                      <span>{item.period}</span>
                    </div>
                    <p>{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h3>Highlights</h3>
              <ul className="highlights">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <a className="button ghost" href="#contact">
                Request full resume
              </a>
            </div>
          </div>
        </section>

        <section className="section alt" id="work">
          <div className="section-title">
            <p className="eyebrow">Portfolio</p>
            <h2>Selected client work</h2>
          </div>
          <div className="grid three">
            {projects.map((project) => (
              <div className="card project" key={project.name}>
                <h3>{project.name}</h3>
                <p>{project.outcome}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="section-title">
            <p className="eyebrow">Contact</p>
            <h2>Let’s build something remarkable</h2>
          </div>
          <div className="grid two">
            <div className="card">
              <h3>Get in touch</h3>
              <p>
                Tell me about your project, timeline, and goals. I’ll respond within 24 hours with
                next steps.
              </p>
              <div className="contact-info">
                <p>
                  <strong>Email:</strong> hello@willbio.dev
                </p>
                <p>
                  <strong>Location:</strong> Remote · Based in Seattle, WA
                </p>
                <p>
                  <strong>Availability:</strong> Booking projects for Q3 2024
                </p>
              </div>
            </div>
            <form className="card form">
              <label>
                Name
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" placeholder="you@email.com" />
              </label>
              <label>
                Project details
                <textarea rows="4" placeholder="What do you want to build?" />
              </label>
              <button type="submit" className="button primary">
                Send inquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>Will Bio</strong>
          <p>Web developer crafting websites that elevate brands.</p>
        </div>
        <div className="footer-links">
          <a href="#top">Back to top</a>
          <a href="mailto:hello@willbio.dev">hello@willbio.dev</a>
          <a href="#contact">Schedule a call</a>
        </div>
      </footer>
    </div>
  );
}
