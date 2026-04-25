import './index.css'

function App() {
  return (
    <div className="noise bg-bg text-primary min-h-screen">

      {/* ── NAV ── */}
      <div className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-3">
        <div
          className="pointer-events-auto rounded-full p-px shadow-2xl w-full max-w-[640px]"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 40%, rgba(255,255,255,0.12) 100%)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.06) inset',
          }}
        >
          <nav className="flex items-center justify-between gap-1 px-1 py-1 rounded-full"
            style={{ background: 'rgba(14,14,18,0.88)', backdropFilter: 'blur(24px) saturate(160%)' }}
          >
            {/* Logo / name */}
            <a
              href="#home"
              className="text-primary font-semibold text-[0.83rem] tracking-tight px-3 sm:px-4 py-[0.42rem] rounded-full shrink-0 transition-all duration-200 whitespace-nowrap"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.09), rgba(255,255,255,0.04))',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              Prakash <span className="text-muted font-normal hidden xs:inline">Shukla</span>
            </a>

            {/* Links */}
            <ul className="flex list-none gap-0 flex-1 justify-end">
              {['About','Projects','Skills'].map(item => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="nav-link-item block text-[0.72rem] sm:text-[0.76rem] text-muted hover:text-primary px-[0.55rem] sm:px-[0.9rem] py-[0.42rem] rounded-full transition-colors duration-200 hover:bg-white/[0.06] whitespace-nowrap"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="block text-[0.72rem] sm:text-[0.76rem] font-medium text-primary px-[0.55rem] sm:px-[0.9rem] py-[0.42rem] rounded-full ml-1 transition-all duration-200 whitespace-nowrap hover:bg-white/20"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.07))',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>


      {/* ── HERO ── */}
      <div className="relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full opacity-[0.18] pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, #4a9d6e, transparent)', filter: 'blur(120px)' }} />
        <div className="absolute bottom-0 -left-12 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] rounded-full opacity-[0.18] pointer-events-none -z-10"
          style={{ background: 'radial-gradient(circle, #3a5fa0, transparent)', filter: 'blur(120px)' }} />

        <section id="home" className="relative min-h-screen flex flex-col justify-center px-5 sm:px-10 max-w-[860px] mx-auto">
          <p className="eyebrow-line inline-flex items-center gap-2 text-[0.72rem] tracking-[0.1em] uppercase text-muted mb-7">
            Available for opportunities
          </p>

          <div className="relative inline-block mb-8 sm:mb-10">
            <h1
              className="font-bold relative inline-block text-primary leading-loose"
              style={{ fontSize: 'clamp(1.4rem, 6vw, 2rem)' }}
            >
              Prakash Shukla
            </h1>
          </div>

          <p className="text-secondary text-sm sm:text-base max-w-[480px] leading-relaxed mb-8 sm:mb-10">
            I build fast, scalable web applications and browser tools. Passionate about open source, clean code, and shipping things that work.
          </p>

          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a href="#projects"
              className="text-[0.82rem] font-medium bg-primary text-bg px-5 sm:px-6 py-[0.65rem] rounded-lg transition-opacity hover:opacity-85 tracking-tight">
              View Projects
            </a>
            <a href="https://github.com/PrakashShukla0907" target="_blank" rel="noreferrer"
              className="text-[0.82rem] text-secondary border border-white/10 px-5 sm:px-6 py-[0.65rem] rounded-lg transition-all hover:border-white/25 hover:text-primary">
              GitHub ↗
            </a>
          </div>

          <p className="scroll-line absolute bottom-8 sm:bottom-10 left-5 sm:left-10 text-[0.72rem] text-muted tracking-[0.08em] flex items-center gap-2">
            Scroll
          </p>
        </section>
      </div>


      {/* ── MAIN CONTENT ── */}
      <div className="max-w-[860px] mx-auto px-5 sm:px-10">


        {/* ── ABOUT ── */}
        <section id="about" className="py-16 sm:py-20 border-t border-white/[0.07]">
          <h2 className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] mb-8 sm:mb-12">About</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            <div className="text-secondary text-[0.92rem] sm:text-[0.95rem] leading-relaxed space-y-4">
              <p>
                I'm Prakash Shukla, a Computer Science student at Chandigarh University building real-world products since day one. I focus on the full stack — from REST APIs to React UIs — and care deeply about code that is both maintainable and performant.
              </p>
              <p>
                I actively contribute to open source (6+ merged PRs at Hacktoberfest 2025), which keeps me sharp across diverse codebases. I'm also deeply interested in <span className="text-primary font-medium">game development</span> — I love how games combine systems thinking, real-time performance, and creative problem-solving.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { num: '6+',  label: 'Open Source PRs' },
                { num: '3',   label: 'Live Projects' },
                { num: '2+',  label: 'Years of Building' },
                { num: '∞',   label: 'Interested in game dev' },
              ].map(({ num, label }) => (
                <div key={label}
                  className="bg-surface border border-white/[0.07] rounded-xl p-4 sm:p-5 hover:border-white/[0.15] transition-colors">
                  <div className="text-[1.7rem] sm:text-[2rem] font-bold tracking-[-0.04em] leading-none mb-1 text-primary">{num}</div>
                  <div className="text-[0.72rem] sm:text-[0.75rem] text-muted tracking-wide">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── EDUCATION ── */}
        <section id="education" className="py-16 sm:py-20 border-t border-white/[0.07]">
          <h2 className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] mb-8 sm:mb-12">Education</h2>
          <div className="flex flex-col gap-2">
            {[
              { school: 'Chandigarh University', degree: 'B.E. Computer Science & Engineering', year: '2024 – 2028', location: 'Gharuan, Punjab' },
              { school: 'Red Rose School (MPBSE)', degree: 'Intermediate & Matriculation', year: '2022 & 2024', location: 'Bhopal, M.P.' },
            ].map(({ school, degree, year, location }) => (
              <div key={school}
                className="flex flex-col sm:grid sm:grid-cols-[1fr_auto] items-start gap-2 sm:gap-4 px-4 sm:px-6 py-4 sm:py-5 bg-surface rounded-xl hover:bg-surface2 transition-colors">
                <div>
                  <div className="font-medium text-[0.92rem] mb-[0.2rem]">{school}</div>
                  <div className="text-[0.8rem] text-secondary">{degree}</div>
                </div>
                <div className="sm:text-right">
                  <div className="text-[0.78rem] text-muted">{year}</div>
                  <div className="text-[0.75rem] text-muted mt-[0.15rem]">{location}</div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ── EXPERIENCE ── */}
        <section id="experience" className="py-16 sm:py-20 border-t border-white/[0.07]">
          <h2 className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] mb-8 sm:mb-12">Experience</h2>
          <div className="flex flex-col">
            {[
              {
                date: 'Oct 2025',
                title: 'Open Source Contributor',
                company: 'Hacktoberfest · DigitalOcean',
                desc: 'Made 6+ merged pull requests across open-source projects, demonstrating strong Git skills and the ability to work across unfamiliar codebases in a collaborative environment.',
              },
              {
                date: '2024',
                title: 'Web Development Cohort',
                company: 'Training Program',
                desc: 'Engaged with practical, real-world challenges — analysing problems, implementing solutions, and managing projects with Git/GitHub end-to-end.',
              },
            ].map(({ date, title, company, desc }, i, arr) => (
              <div key={title}
                className={`flex flex-col sm:grid sm:grid-cols-[100px_1fr] gap-2 sm:gap-8 py-6 sm:py-7 ${i < arr.length - 1 ? 'border-b border-white/[0.07]' : ''} ${i === 0 ? 'pt-0' : ''}`}>
                <div className="text-[0.72rem] text-muted sm:pt-[0.2rem]">{date}</div>
                <div>
                  <div className="font-medium text-[0.9rem] mb-[0.1rem]">{title}</div>
                  <div className="text-[0.78rem] text-secondary italic mb-3">{company}</div>
                  <div className="text-[0.82rem] text-secondary leading-relaxed">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ── PROJECTS ── */}
        <section id="projects" className="py-16 sm:py-20 border-t border-white/[0.07]">
          <h2 className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] mb-8 sm:mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Featured project — full width */}
            <div
              className="sm:col-span-2 flex flex-col sm:flex-row gap-5 sm:gap-6 p-5 sm:p-7 rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-1 relative overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
              }}
            >
              <div className="flex-1">
                <div className="w-9 h-9 rounded-lg bg-surface2 border border-white/[0.07] flex items-center justify-center text-base mb-4">🛡️</div>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="font-medium text-[0.92rem]">Focus Shield — Chrome Extension</div>
                  <a href="https://github.com/PrakashShukla0907/FocusShield" target="_blank" rel="noreferrer"
                    className="text-[0.72rem] border border-white/[0.07] px-[0.65rem] py-[0.3rem] rounded-md text-muted hover:text-primary hover:border-white/25 transition-all shrink-0">
                    GitHub ↗
                  </a>
                </div>
                <p className="text-[0.8rem] text-secondary leading-relaxed mb-5">
                  A Manifest V3 Chrome Extension that tracks real-time website usage per domain, enforces customisable time limits, shows live countdown timers, and persists all data via Chrome Storage API.
                </p>
                <div className="flex flex-wrap gap-[0.35rem]">
                  {['React', 'Manifest V3', 'Chrome Storage API', 'Service Workers', 'Chrome Tabs API'].map(t => (
                    <span key={t} className="text-[0.68rem] bg-white/[0.05] border border-white/[0.08] text-secondary px-[0.55rem] py-[0.22rem] rounded-[5px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                icon: '🛒', name: 'Gopal Bakers — MERN E-Commerce', href: 'https://gopal-bakers.vercel.app/', linkLabel: 'Live ↗', github: 'https://github.com/PrakashShukla0907/Cake_Store',
                desc: 'Full-stack bakery store with RESTful APIs, JWT auth, role-based access (User/Admin), order management, and a complete Admin Dashboard with product CRUD.',
                tags: ['MongoDB', 'Express', 'React', 'Node', 'JWT'],
              },
              {
                icon: '🍽️', name: 'Claude Chef — AI Recipe Assistant', href: 'https://chef-claude-ai-six.vercel.app/', linkLabel: 'Live ↗', github: 'https://github.com/PrakashShukla0907/claude-chef',
                desc: 'AI-powered recipe generator that takes user-provided ingredients and produces meal ideas. State-driven UI for seamless ingredient management and API-based rendering.',
                tags: ['React', 'Claude API', 'Tailwind CSS'],
              },
            ].map(({ icon, name, href, linkLabel, desc, tags, github }) => (
              <div key={name}
                className="flex flex-col p-5 sm:p-7 rounded-2xl border border-white/[0.08] transition-all duration-300 hover:border-white/[0.16] hover:-translate-y-1 overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <div className="w-9 h-9 rounded-lg bg-surface2 border border-white/[0.07] flex items-center justify-center text-base mb-4">{icon}</div>
                <div className="flex items-start justify-between mb-3 gap-2">
                  <div className="font-medium text-[0.92rem] leading-tight">{name}</div>
                  <div className="flex gap-[0.4rem] shrink-0">
                    {github && (
                      <a href={github} target="_blank" rel="noreferrer"
                        className="text-[0.72rem] border border-white/[0.07] px-[0.65rem] py-[0.3rem] rounded-md text-muted hover:text-primary hover:border-white/25 transition-all">
                        GitHub ↗
                      </a>
                    )}
                    <a href={href} target="_blank" rel="noreferrer"
                      className="text-[0.72rem] border border-white/[0.07] px-[0.65rem] py-[0.3rem] rounded-md text-muted hover:text-primary hover:border-white/25 transition-all">
                      {linkLabel}
                    </a>
                  </div>
                </div>
                <p className="text-[0.8rem] text-secondary leading-relaxed mb-5 flex-1">{desc}</p>
                <div className="flex flex-wrap gap-[0.35rem]">
                  {tags.map(t => (
                    <span key={t} className="text-[0.68rem] bg-white/[0.05] border border-white/[0.08] text-secondary px-[0.55rem] py-[0.22rem] rounded-[5px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* ── SKILLS ── */}
        <section id="skills" className="py-16 sm:py-20 border-t border-white/[0.07]">
          <h2 className="text-[1.4rem] sm:text-[1.6rem] font-semibold tracking-[-0.03em] mb-8 sm:mb-12">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { label: 'Languages',    skills: ['C++', 'Java', 'JavaScript', 'SQL'] },
              { label: 'Frontend',     skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'] },
              { label: 'Backend',      skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT'] },
              { label: 'Core CS',      skills: ['OOP', 'DSA', 'Computer Networks', 'Operating System'] },
              { label: 'DevOps',       skills: ['Linux', 'Docker', 'Kubernetes', 'Git', 'GitHub Actions'] },
              { label: 'Interests',    skills: ['Game Development', 'Open Source', 'System Design', 'Networking'] },
            ].map(({ label, skills }) => (
              <div key={label}
                className="bg-[rgba(255,255,255,0.03)] border border-white/[0.08] rounded-2xl px-5 sm:px-8 py-6 sm:py-8 min-h-[140px] sm:min-h-[160px] flex flex-col justify-center hover:border-white/[0.16] hover:-translate-y-1 transition-all duration-300"
                style={{
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 2px 20px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)',
                }}
              >
                <div className="text-[0.8rem] text-primary tracking-[0.1em] uppercase mb-4 font-semibold">{label}</div>
                <div className="flex flex-wrap gap-[0.5rem]">
                  {skills.map(s => (
                    <span key={s}
                      className="text-[0.8rem] text-primary bg-white/[0.08] border border-white/[0.12] px-[0.8rem] py-[0.35rem] rounded-full hover:text-white hover:border-white/30 hover:bg-white/[0.15] transition-all cursor-default shadow-sm">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>


      {/* ── CONTACT / FOOTER ── */}
      <div className="max-w-[860px] mx-auto px-5 sm:px-10">
        <div id="contact" className="py-16 sm:py-20 border-t border-white/[0.07] text-center">
          <h2 className="text-[clamp(1.8rem,5vw,3.5rem)] font-bold tracking-[-0.04em] mb-3">
            Let's work <em className="italic font-light text-secondary">together</em>
          </h2>
          <p className="text-[0.88rem] text-secondary mb-8">
            Open to full-time roles, internships, and interesting projects.
          </p>

          <div className="flex justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-16">
            {[
              { label: '✉️ prakashshukla0907@gmail.com', href: 'mailto:prakashshukla0907@gmail.com' },
              { label: '📞 +91 8103743446',             href: 'tel:+918103743446' },
              { label: '🐙 GitHub',                     href: 'https://github.com/PrakashShukla0907' },
              { label: '💼 LinkedIn',                   href: 'https://linkedin.com/in/prakashshukla' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="flex items-center gap-2 text-[0.78rem] sm:text-[0.8rem] border border-white/[0.07] px-[0.9rem] sm:px-[1.1rem] py-2 rounded-lg text-secondary hover:border-white/25 hover:text-primary hover:bg-surface transition-all">
                {label}
              </a>
            ))}
          </div>



          <div className="flex justify-center items-center text-[0.72rem] text-muted pt-6 border-t border-white/[0.07]">
            <span>Prakash Shukla · 2026</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
