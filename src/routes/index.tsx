import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef, type FormEvent } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Github, Linkedin, Mail, Phone, Download, ArrowUp, ArrowUpRight,
  Server, Database, Wrench, GraduationCap, Award,
  Sparkles, Send, Menu, X, MessageCircle, PhoneCall, Languages, Layout, Smartphone, Brain,
  Sun, Moon,
} from "lucide-react";
import profileImage from "@/assets/guwani-profile.jpg";
import petCareImg from "@/assets/project-petcare.png";
import campusImg from "@/assets/project-campus.png";
import floranestImg from "@/assets/project-floranest.jpg";
import dailyDoseImg from "@/assets/project-dailydose.png";
import hopepawsImg from "@/assets/project-hopepaws.png";
import onlineExamImg from "@/assets/project-onlineexam.jpg";
import opssImg from "@/assets/project-opss.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guwani Hathurusinghe — Full Stack Developer" },
      { name: "description", content: "Undergraduate Full Stack Developer building scalable web & mobile solutions with React, Spring Boot, Node.js and Kotlin." },
      { property: "og:title", content: "Guwani Hathurusinghe — Full Stack Developer" },
      { property: "og:description", content: "Portfolio — projects, skills and experience." },
      { property: "og:image", content: profileImage },
    ],
  }),
  component: Portfolio,
});

/* ───── Data ───── */

const PHONE = "+94759121130";
const PHONE_DISPLAY = "075 912 1130";
const WHATSAPP = "94759121130";
const WHATSAPP_URL = "https://wa.me/94759121130";
const EMAIL = "guwanihathurusinghe@gmail.com";
const GITHUB = "https://github.com/GuwaniHazel";
const LINKEDIN = "https://www.linkedin.com/in/guwani-hathurusinghe-897929340/";

function openExternal(url: string) {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const TYPING = [
  "Full Stack Developer",
  "Mobile App Developer",
  "Software Engineer",
  "IT Undergraduate @ SLIIT",
];

const devicon = (slug: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-${variant}.svg`;

type Skill = { name: string; icon?: string; lucide?: typeof Code2Like };
const Code2Like = Brain; // alias for typing

const SKILL_GROUPS: { icon: typeof Languages; title: string; items: Skill[] }[] = [
  {
    icon: Languages, title: "Languages",
    items: [
      { name: "Python", icon: devicon("python") },
      { name: "R", icon: devicon("r") },
      { name: "Java", icon: devicon("java") },
      { name: "JavaScript", icon: devicon("javascript") },
      { name: "PHP", icon: devicon("php") },
      { name: "Kotlin", icon: devicon("kotlin") },
      { name: "C", icon: devicon("c") },
      { name: "C++", icon: devicon("cplusplus") },
    ],
  },
  {
    icon: Layout, title: "Frontend",
    items: [
      { name: "React", icon: devicon("react") },
      { name: "Next.js", icon: devicon("nextjs", "line") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "HTML5", icon: devicon("html5") },
      { name: "CSS3", icon: devicon("css3") },
    ],
  },
  {
    icon: Server, title: "Backend",
    items: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Express.js", icon: devicon("express") },
      { name: "Spring Boot", icon: devicon("spring") },
      { name: "Java Servlets", icon: devicon("java") },
      { name: "PHP", icon: devicon("php") },
    ],
  },
  {
    icon: Smartphone, title: "Mobile",
    items: [
      { name: "Android", icon: devicon("android") },
      { name: "Kotlin", icon: devicon("kotlin") },
      { name: "Java", icon: devicon("java") },
    ],
  },
  {
    icon: Database, title: "Databases",
    items: [
      { name: "MySQL", icon: devicon("mysql") },
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "Oracle", icon: devicon("oracle") },
    ],
  },
  {
    icon: Wrench, title: "Tools",
    items: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github") },
      { name: "VS Code", icon: devicon("vscode") },
      { name: "Postman", icon: devicon("postman") },
      { name: "Playwright", icon: devicon("playwright") },
    ],
  },
  {
    icon: Brain, title: "Concepts",
    items: [
      { name: "OOP" },
      { name: "REST APIs" },
      { name: "MVC" },
      { name: "Agile" },
    ],
  },
];

type Category = "All" | "Web" | "Mobile" | "Full Stack" | "UI/UX";

const PROJECTS: {
  title: string; category: Exclude<Category, "All">; description: string;
  tech: string[]; image: string; github?: string; demo?: string; figma?: string;
}[] = [
  {
    title: "Pet Care Plus",
    category: "Full Stack",
    description: "MERN-stack pet care platform with appointment booking, medical records and an admin dashboard.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    image: petCareImg,
    github: "https://github.com/GuwaniHazel/pet-care-plus",
    demo: "https://www.linkedin.com/posts/guwani-hathurusinghe-897929340_mernstack-fullstackdevelopment-mongodb-ugcPost-7469804033264783362-RLM9/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWRD7MBvJ0-l4TWEJ9e2EdmRgEX4CoOYNg",
  },
  {
    title: "Smart Campus Operations Hub",
    category: "Full Stack",
    description: "Unified campus operations portal with role-based dashboards for students, lecturers and staff.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    image: campusImg,
    github: "https://github.com/GuwaniHazel/smart-campus-operations-hub",
    demo: "https://www.linkedin.com/posts/guwani-hathurusinghe-897929340_springboot-java-react-ugcPost-7471982456414294016-MGnL/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWRD7MBvJ0-l4TWEJ9e2EdmRgEX4CoOYNg",
  },
  {
    title: "FloraNest",
    category: "Web",
    description: "Modern e-commerce platform for plants with cart, checkout, order tracking and seller tools.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: floranestImg,
    github: GITHUB,
  },
  {
    title: "Daily Dose",
    category: "Mobile",
    description: "Android medication & wellness tracker with smart reminders, analytics and goal tracking.",
    tech: ["Kotlin", "Android", "Room", "Jetpack"],
    image: dailyDoseImg,
    github: "https://github.com/GuwaniHazel/daily-dose-android",
  },
  {
    title: "HOPEPAWS+",
    category: "UI/UX",
    description: "End-to-end Figma case study for an animal-shelter adoption platform with full design system.",
    tech: ["Figma", "Prototype", "Design System"],
    image: hopepawsImg,
    demo: "https://www.linkedin.com/posts/guwani-hathurusinghe-897929340_uiuxdesign-uxdesign-uidesign-share-7468385385698541568-6ZZe/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFWRD7MBvJ0-l4TWEJ9e2EdmRgEX4CoOYNg",
    figma: "https://www.figma.com/design/TpOPYRRmcnoMsqfffLtrhX/Untitled?node-id=0-1",
  },
  {
    title: "Online Examination System",
    category: "Web",
    description: "Java MVC web application for conducting and grading online examinations with timed sessions.",
    tech: ["Java", "JSP", "Servlets", "MySQL"],
    image: onlineExamImg,
    github: "https://github.com/GuwaniHazel/online-examination-system",
  },
  {
    title: "OPSS Property System",
    category: "Web",
    description: "PHP-based property listing and management system with search filters and admin controls.",
    tech: ["PHP", "MySQL", "Bootstrap"],
    image: opssImg,
    github: "https://github.com/GuwaniHazel/Online-Property-Sales_System",
  },
];

const CERTS = [
  { title: "MongoDB Atlas Administrator Path", issuer: "MongoDB University", date: "2025", skills: ["Atlas", "Clusters", "Security", "Performance"] },
  { title: "Selenium WebDriver for Java", issuer: "LinkedIn Learning", date: "2025", skills: ["Selenium", "Java", "Automation", "TestNG"] },
  { title: "API Testing Foundations", issuer: "LinkedIn Learning", date: "2025", skills: ["REST", "Postman", "JSON", "Assertions"] },
  { title: "Test Automation Foundations", issuer: "LinkedIn Learning", date: "2024", skills: ["Automation", "Frameworks", "CI/CD", "QA"] },
];

/* ───── Hooks ───── */

function useTypewriter(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), pause);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") { setDel(false); setI((v) => v + 1); }
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [text, del, i, words, speed, pause]);
  return text;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as "light" | "dark" | null;
    const initial = saved ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);
  const toggle = () => {
    setTheme((t) => {
      const next = t === "light" ? "dark" : "light";
      document.documentElement.classList.toggle("dark", next === "dark");
      localStorage.setItem("theme", next);
      return next;
    });
  };
  return { theme, toggle };
}

/* ───── Components ───── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative scroll-mt-24 py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

function SectionDivider() {
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
      <div className="relative h-px w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>
      <div className="mx-auto -mt-1 grid h-2 w-2 place-items-center">
        <span className="block h-2 w-2 rounded-full" style={{ background: "var(--gradient-primary)" }} />
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="mb-12 text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Sparkles className="h-3.5 w-3.5" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{sub}</p>}
    </motion.div>
  );
}

/* ───── Page ───── */

function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const active = useActiveSection(NAV.map((n) => n.id));
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll);
    return () => { clearTimeout(t); window.removeEventListener("scroll", onScroll); };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen text-foreground">
      <AnimatePresence>
        {loading && (
          <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] grid place-items-center bg-background">
            <div className="text-center">
              <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl text-2xl font-extrabold text-white shadow-glow pulse-ring" style={{ background: "var(--gradient-primary)" }}>GH</div>
              <p className="mt-4 text-sm font-medium text-muted-foreground">Loading portfolio…</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div style={{ scaleX: progress }} className="fixed inset-x-0 top-0 z-[60] h-1 origin-left">
        <div className="h-full w-full" style={{ background: "var(--gradient-primary)" }} />
      </motion.div>

      <Navbar active={active} onNavigate={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} theme={theme} toggleTheme={toggle} />

      <main>
        <Hero onNavigate={scrollTo} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Certifications />
        <SectionDivider />
        <Contact />
      </main>

      <Footer onNavigate={scrollTo} />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <button type="button" aria-label="WhatsApp"
           className="grid h-12 w-12 cursor-pointer place-items-center rounded-full bg-[#25D366] text-white shadow-glow transition hover:scale-110"
           onClick={() => openExternal(WHATSAPP_URL)}>
          <MessageCircle className="h-5 w-5" />
        </button>
        <a href={`tel:${PHONE}`} aria-label="Call"
           className="grid h-12 w-12 place-items-center rounded-full text-white shadow-glow transition hover:scale-110" style={{ background: "var(--gradient-primary)" }}>
          <PhoneCall className="h-5 w-5" />
        </a>
        <AnimatePresence>
          {showTop && (
            <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
              className="grid h-12 w-12 place-items-center rounded-full glass-strong text-primary transition hover:scale-110">
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ───── Navbar ───── */

function Navbar({ active, onNavigate, menuOpen, setMenuOpen, theme, toggleTheme }: {
  active: string; onNavigate: (id: string) => void; menuOpen: boolean; setMenuOpen: (v: boolean) => void;
  theme: "light" | "dark"; toggleTheme: () => void;
}) {
  return (
    <header className="fixed inset-x-0 top-1 z-50">
      <div className="mx-auto mt-2 w-full max-w-6xl px-4">
        <div className="glass-strong flex items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
          <button onClick={() => onNavigate("home")} className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl text-sm font-extrabold text-white shadow-glow" style={{ background: "var(--gradient-primary)" }}>GH</div>
            <span className="hidden font-display text-base font-bold sm:block">Guwani<span className="text-primary">.</span></span>
          </button>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => onNavigate(n.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition ${active === n.id ? "text-primary" : "text-foreground/70 hover:text-foreground"}`}>
                {n.label}
                {active === n.id && (
                  <motion.span layoutId="nav-pill" className="absolute inset-0 -z-10 rounded-lg bg-primary/10" transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={toggleTheme} aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-lg glass text-foreground/80 transition hover:text-primary">
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="/cv.pdf" download className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-white shadow-glow transition hover:opacity-90 sm:inline-flex sm:items-center sm:gap-2" style={{ background: "var(--gradient-primary)" }}>
              <Download className="h-4 w-4" /> CV
            </a>
            <button className="grid h-9 w-9 place-items-center rounded-lg glass md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              className="glass-strong mt-2 rounded-2xl p-3 md:hidden">
              {NAV.map((n) => (
                <button key={n.id} onClick={() => onNavigate(n.id)}
                  className={`block w-full rounded-lg px-3 py-2 text-left text-sm font-medium transition ${active === n.id ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-primary/5"}`}>
                  {n.label}
                </button>
              ))}
              <a href="/cv.pdf" download className="mt-2 flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-white" style={{ background: "var(--gradient-primary)" }}>
                <Download className="h-4 w-4" /> Download CV
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

/* ───── Hero ───── */

function Hero({ onNavigate }: { onNavigate: (id: string) => void }) {
  const typed = useTypewriter(TYPING);
  return (
    <Section id="home" className="pt-32 md:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="absolute block rounded-full"
            style={{
              left: `${(i * 53) % 100}%`, top: `${(i * 37) % 100}%`,
              width: `${4 + (i % 4) * 3}px`, height: `${4 + (i % 4) * 3}px`,
              background: i % 2 ? "#C4B5FD" : "#8B5CF6", opacity: 0.25,
              animation: `float ${6 + (i % 5)}s ease-in-out ${i * 0.2}s infinite`,
            }} />
        ))}
      </div>

      <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
        <motion.div initial="hidden" animate="show" variants={fadeUp} className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-primary" /></span>
            Available for opportunities
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-gradient">Guwani Hathurusinghe</span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-foreground/80 sm:text-xl">
            <span className="caret">{typed}</span>
          </p>
          <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Building scalable full-stack and mobile solutions with modern technologies.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a href="/cv.pdf" download className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]" style={{ background: "var(--gradient-primary)" }}>
              <Download className="h-4 w-4" /> Download CV
            </a>
            <button onClick={() => onNavigate("projects")} className="inline-flex items-center gap-2 rounded-xl glass-strong px-5 py-3 text-sm font-semibold text-foreground transition hover:scale-[1.02]">
              View Projects <ArrowUpRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-7 flex items-center gap-3">
            {[
              { href: GITHUB, icon: Github, label: "GitHub" },
              { href: LINKEDIN, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${EMAIL}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => href.startsWith("http") ? (
              <button key={label} type="button" aria-label={label}
                 className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl glass text-foreground/70 transition hover:-translate-y-0.5 hover:text-primary"
                 onClick={() => openExternal(href)}>
                <Icon className="h-5 w-5" />
              </button>
            ) : (
              <a key={label} href={href} aria-label={label}
                 className="grid h-11 w-11 place-items-center rounded-xl glass text-foreground/70 transition hover:-translate-y-0.5 hover:text-primary">
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative mx-auto order-1 md:order-2">
          <div className="absolute -inset-6 rounded-full opacity-70 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative animate-float">
            <div className="rounded-full p-[6px]" style={{ background: "var(--gradient-primary)" }}>
              <div className="rounded-full bg-background p-[6px]">
                <img src={profileImage} alt="Guwani Hathurusinghe portrait" width={480} height={480}
                  loading="eager"
                  className="h-72 w-72 rounded-full object-cover object-top shadow-glow sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-[26rem] lg:w-[26rem]" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl glass-strong px-4 py-3 text-sm shadow-card">
              <div className="font-bold text-primary">3rd Year</div>
              <div className="text-xs text-muted-foreground">IT @ SLIIT</div>
            </div>
            <div className="absolute -top-2 -left-6 rounded-2xl glass-strong px-4 py-3 text-sm shadow-card">
              <div className="font-bold text-primary">7+ Projects</div>
              <div className="text-xs text-muted-foreground">Shipped</div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* ───── About ───── */

function About() {
  return (
    <Section id="about">
      <SectionHeading eyebrow="About me" title="Curious. Driven. Detail-obsessed." />
      <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
        className="glass-strong rounded-3xl p-7 sm:p-10 shadow-card">
        <p className="text-base leading-relaxed text-foreground/80 sm:text-lg">
          I'm a <strong className="text-foreground">3rd-year Information Technology undergraduate at SLIIT</strong> with a
          passion for software development and building impactful digital solutions. I love turning ideas into
          well-engineered products — from clean, responsive interfaces to reliable APIs and data layers behind them.
        </p>
        <p className="mt-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
          Across coursework and personal projects I've shipped MERN apps, Spring Boot services, Android apps in Kotlin
          and full-process UI/UX case studies in Figma. I care about code quality, accessibility and the small details
          that make products feel premium. I'm actively seeking internship and full-time opportunities in full-stack,
          mobile or software-engineering roles where I can keep learning and contribute from day one.
        </p>
        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: "7+", v: "Projects" },
            { k: "20+", v: "Technologies" },
            { k: "4", v: "Certifications" },
            { k: "3rd Yr", v: "SLIIT IT" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl glass p-4 text-center transition hover:-translate-y-1">
              <div className="text-2xl font-extrabold text-gradient">{s.k}</div>
              <div className="mt-1 text-xs font-medium text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl glass p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-primary">
            <GraduationCap className="h-4 w-4" /> Academic Background
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-glow" style={{ background: "var(--gradient-primary)" }}>
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold sm:text-lg">Sri Lanka Institute of Information Technology (SLIIT)</h4>
                <p className="mt-0.5 text-sm font-semibold text-primary">BSc (Hons) in Information Technology</p>
                <p className="mt-0.5 text-xs text-muted-foreground">Nov 2023 – Present · Sri Lanka</p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                  Coursework spanning software engineering, data structures, OOP, web & mobile development,
                  databases, networking and software quality assurance.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl glass text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-base font-bold sm:text-lg">G.C.E. Advanced Level — Physical Science Stream</h4>
                <p className="mt-0.5 text-xs text-muted-foreground">Secondary Education · Sri Lanka</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

/* ───── Skills ───── */

function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = SKILL_GROUPS[activeIdx];
  return (
    <Section id="skills">
      <SectionHeading eyebrow="Skills" title="What I work with" sub="Languages, frameworks, and tools I use to design and ship full-stack & mobile products." />
      <div className="grid gap-6 md:grid-cols-[260px_1fr]">
        {/* Sidebar / Tabs */}
        <div className="glass-strong rounded-3xl p-3 shadow-card md:p-4">
          <div className="flex gap-2 overflow-x-auto md:flex-col md:overflow-visible">
            {SKILL_GROUPS.map((group, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={group.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`flex shrink-0 items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-semibold transition md:w-full ${
                    isActive ? "text-white shadow-glow" : "text-foreground/70 hover:bg-primary/5 hover:text-primary"
                  }`}
                  style={isActive ? { background: "var(--gradient-primary)" } : {}}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${isActive ? "bg-white/20" : "bg-primary/10 text-primary"}`}>
                    <group.icon className="h-4 w-4" />
                  </span>
                  <span className="whitespace-nowrap">{group.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active group panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass-strong rounded-3xl p-6 shadow-card sm:p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-glow" style={{ background: "var(--gradient-primary)" }}>
                <active.icon className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold sm:text-2xl">{active.title}</h3>
              <div className="ml-2 h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {active.items.map((s) => (
                <div key={s.name}
                  className="group flex flex-col items-center justify-center gap-3 rounded-2xl glass px-4 py-6 transition duration-300 hover:-translate-y-1.5 hover:scale-[1.04] hover:shadow-glow">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white/70 ring-1 ring-primary/10 transition group-hover:ring-primary/40 dark:bg-white/90">
                    {s.icon ? (
                      <img src={s.icon} alt={s.name} className="h-10 w-10 object-contain transition group-hover:scale-110" loading="lazy" />
                    ) : (
                      <Brain className="h-8 w-8 text-primary transition group-hover:scale-110" />
                    )}
                  </div>
                  <span className="text-center text-sm font-semibold text-foreground/85">{s.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ───── Projects ───── */

function Projects() {
  const cats: Category[] = ["All", "Web", "Mobile", "Full Stack", "UI/UX"];
  const [filter, setFilter] = useState<Category>("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  return (
    <Section id="projects">
      <SectionHeading eyebrow="Projects" title="Selected work" sub="A mix of academic, team and personal projects across web, mobile and design." />
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setFilter(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              filter === c ? "text-white shadow-glow" : "glass text-foreground/70 hover:text-primary"
            }`} style={filter === c ? { background: "var(--gradient-primary)" } : {}}>
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.article key={p.title} layout
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="group flex flex-col rounded-3xl glass-strong overflow-hidden shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5">
                <img src={p.image} alt={p.title} loading="lazy"
                  className="h-full w-full object-contain p-2 transition duration-500 group-hover:scale-105 sm:object-cover sm:p-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-primary">{p.category}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary">{t}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-2 pt-5">
                  {p.github && (
                    <button type="button" className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-semibold transition hover:text-primary" onClick={() => p.github && openExternal(p.github)}>
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </button>
                  )}
                  {p.demo && (
                    <button type="button" className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white transition hover:opacity-90" style={{ background: "var(--gradient-primary)" }} onClick={() => p.demo && openExternal(p.demo)}>
                      <ArrowUpRight className="h-3.5 w-3.5" /> Live Demo
                    </button>
                  )}
                  {p.figma && (
                    <button type="button" className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg glass px-3 py-2 text-xs font-semibold text-primary transition hover:opacity-90" onClick={() => p.figma && openExternal(p.figma)}>
                      <ArrowUpRight className="h-3.5 w-3.5" /> Figma
                    </button>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}

/* ───── Certifications ───── */

function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading eyebrow="Certifications" title="Always learning" />
      <div className="grid gap-6 md:grid-cols-2">
        {CERTS.map((c, i) => (
          <motion.div key={c.title} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp} transition={{ delay: i * 0.05 }}
            className="group rounded-3xl glass-strong p-6 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white shadow-glow" style={{ background: "var(--gradient-primary)" }}>
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold sm:text-lg">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.issuer} · {c.date}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.skills.map((s) => (
                    <span key={s} className="rounded-md border border-primary/15 bg-primary/5 px-2 py-0.5 text-[11px] font-medium text-primary">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ───── Contact ───── */

function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setSent(true);
    form.current?.reset();
    setTimeout(() => setSent(false), 4000);
  };

  const items = [
    { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Phone, label: "Phone", value: PHONE_DISPLAY, href: `tel:${PHONE}` },
    { icon: MessageCircle, label: "WhatsApp", value: PHONE_DISPLAY, href: WHATSAPP_URL },
    { icon: Github, label: "GitHub", value: "@GuwaniHazel", href: GITHUB },
    { icon: Linkedin, label: "LinkedIn", value: "guwani-hathurusinghe", href: LINKEDIN },
  ];

  return (
    <Section id="contact">
      <SectionHeading eyebrow="Contact" title="Let's build something" sub="Drop a message — I usually reply within a day." />
      <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} className="space-y-3">
          {items.map((it) => it.href.startsWith("http") ? (
            <button key={it.label} type="button"
               className="flex w-full cursor-pointer items-center gap-4 rounded-2xl glass-strong p-4 text-left shadow-card transition hover:-translate-y-0.5 hover:shadow-glow"
               onClick={() => openExternal(it.href)}>
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-primary)" }}>
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                <div className="truncate text-sm font-medium text-foreground">{it.value}</div>
              </div>
            </button>
          ) : (
            <a key={it.label} href={it.href}
               className="flex items-center gap-4 rounded-2xl glass-strong p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-glow">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white" style={{ background: "var(--gradient-primary)" }}>
                <it.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{it.label}</div>
                <div className="truncate text-sm font-medium text-foreground">{it.value}</div>
              </div>
            </a>
          ))}
        </motion.div>

        <motion.form ref={form} onSubmit={submit} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="rounded-3xl glass-strong p-6 shadow-card sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
          </div>
          <div className="mt-4">
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea name="message" required rows={5} placeholder="Tell me about your project or opportunity…"
              className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </div>
          <button type="submit" disabled={sending}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.01] disabled:opacity-70 sm:w-auto"
            style={{ background: "var(--gradient-primary)" }}>
            {sending ? "Sending…" : sent ? "Message sent ✓" : (<><Send className="h-4 w-4" /> Send message</>)}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder, required }: {
  label: string; name: string; type?: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required}
        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20" />
    </div>
  );
}

/* ───── Footer ───── */

function Footer({ onNavigate }: { onNavigate: (id: string) => void }) {
  return (
    <footer className="border-t border-border/60 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>© 2026 Guwani Hathurusinghe · Built with React & Tailwind</p>
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate("home")} className="hover:text-primary">Top</button>
          <button type="button" className="cursor-pointer hover:text-primary" onClick={() => openExternal(GITHUB)}>GitHub</button>
          <button type="button" className="cursor-pointer hover:text-primary" onClick={() => openExternal(LINKEDIN)}>LinkedIn</button>
        </div>
      </div>
    </footer>
  );
}
