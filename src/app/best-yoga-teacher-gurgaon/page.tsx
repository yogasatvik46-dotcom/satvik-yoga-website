import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  CalendarCheck,
  ChevronDown,
  Compass,
  Flower2,
  HeartPulse,
  Laptop,
  Leaf,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Wind,
} from "lucide-react";

/* ───────────────────────── SEO METADATA ───────────────────────── */
const PAGE_URL = "https://www.satvikyog.co.in/best-yoga-teacher-gurgaon";

export const metadata: Metadata = {
  title: "Best Yoga Teacher in Gurgaon & Delhi NCR | Satvik Yoga",

  description:
    "Looking for a famous or best yoga teacher in Gurgaon, Delhi NCR or Faridabad? Learn yoga with Satvik Yoga for beginners and regular practitioners. Guided postures, breathing and mindful practice.",

  keywords: [
    "Famous Yoga Teacher in Gurgaon",
    "Best Yoga Teacher in Gurgaon",
    "Yoga Teacher in Gurgaon",
    "Yoga Teacher in Gurugram",
    "Yoga Trainer in Gurgaon",
    "Yoga Instructor in Gurgaon",
    "Personal Yoga Teacher in Gurgaon",
    "Yoga Teacher in Delhi NCR",
    "Yoga Teacher in Faridabad",
    "Best Yoga Teacher Near Me",
    "Yoga Guru in Gurgaon",
    "Yoga Classes Gurgaon",
  ],

  alternates: { canonical: PAGE_URL },

  robots: { index: true, follow: true },

  openGraph: {
    title: "Best Yoga Teacher in Gurgaon & Delhi NCR | Satvik Yoga",
    description:
      "Learn yoga with guided postures, breath awareness and mindful practice at Satvik Yoga. Serving Gurgaon, Delhi NCR and Faridabad.",
    url: PAGE_URL,
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.satvikyog.co.in/yoga-teacher-gurgaon-satvik-yoga.webp",
        width: 1000,
        height: 1333,
        alt: "Yoga teacher in Gurgaon at Satvik Yoga",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Yoga Teacher in Gurgaon | Satvik Yoga",
    description:
      "Explore guided yoga classes with a yoga teacher in Gurgaon, Delhi NCR and Faridabad.",
  },
};

/* ───────────────────────── OPTIONAL TEACHER PROFILE ─────────────────────────
   Fill these in with REAL details. Anything left empty is simply not shown,
   so nothing placeholder-like ever goes live.                                */
const teacher = {
  name: "", // e.g. "Satvik Sharma"
  title: "", // e.g. "Founder & Lead Yoga Teacher"
  experience: "", // e.g. "8+ years of teaching"
  certifications: [] as string[], // e.g. ["RYT 500", "Yoga Alliance"]
  about: "", // 2-3 lines in the teacher's own words
};

/* ───────────────────────── CONTENT ───────────────────────── */
const areas = [
  "Gurgaon",
  "Gurugram",
  "Sector 47",
  "Delhi NCR",
  "Faridabad",
  "Nearby Areas",
];

const qualities = [
  {
    icon: ShieldCheck,
    title: "Safe, clear instruction",
    text: "A good yoga teacher explains postures clearly and keeps safety first, especially for people who are new to yoga or returning after a break.",
  },
  {
    icon: Target,
    title: "Attention to your level",
    text: "The best teachers respect your current ability. Modifications and a steady pace help you practise within your limits.",
  },
  {
    icon: Wind,
    title: "Breath and alignment",
    text: "Yoga is more than shapes. A skilled teacher connects movement with breath awareness and body alignment.",
  },
  {
    icon: CalendarCheck,
    title: "Consistency over show",
    text: "A sustainable routine matters more than difficult poses. Look for a teacher who helps you build a regular practice.",
  },
  {
    icon: Leaf,
    title: "A welcoming approach",
    text: "Beginners should feel comfortable asking questions. A friendly, patient environment makes it easier to keep going.",
  },
  {
    icon: MessageCircle,
    title: "Clear communication",
    text: "Class timings, formats and availability should be easy to understand. You should know what to expect before you begin.",
  },
];

const styles = [
  {
    icon: Flower2,
    title: "Ashtanga Yoga",
    text: "A structured sequence of postures coordinated with breath.",
    href: "/ashtanga-yoga-gurgaon",
  },
  {
    icon: Leaf,
    title: "Hatha Yoga",
    text: "A measured approach to postures, breathing and relaxation.",
    href: "/hatha-yoga-gurgaon",
  },
  {
    icon: Wind,
    title: "Pranayama & Meditation",
    text: "Breath awareness and focused attention practices.",
    href: "/meditation-pranayama-gurgaon",
  },
  {
    icon: HeartPulse,
    title: "Therapeutic Yoga",
    text: "A gentle, supportive approach to everyday movement.",
    href: "/therapeutic-yoga-gurgaon",
  },
  {
    icon: Briefcase,
    title: "Corporate Yoga",
    text: "Yoga programs for teams and workplaces.",
    href: "/corporate",
  },
  {
    icon: Laptop,
    title: "Online Yoga Classes",
    text: "Practise from home with live online guidance.",
    href: "/online-yoga-classes",
  },
];

const whyUs = [
  {
    icon: Users,
    title: "For every level",
    text: "Satvik Yoga focuses on making yoga approachable for beginners and regular practitioners alike.",
  },
  {
    icon: Compass,
    title: "Progressive practice",
    text: "Students can develop their practice gradually, without rushing into advanced postures.",
  },
  {
    icon: Sparkles,
    title: "Mind and body",
    text: "Classes bring together movement, breath awareness and mindful attention.",
  },
];

const steps = [
  {
    n: "01",
    title: "Get in touch",
    text: "Message Satvik Yoga on WhatsApp to ask about classes, schedules and availability.",
  },
  {
    n: "02",
    title: "Share your goals",
    text: "Tell us your experience level and what you would like from your yoga practice.",
  },
  {
    n: "03",
    title: "Choose a class",
    text: "Pick the style and format that suits you, from group classes to online options.",
  },
  {
    n: "04",
    title: "Start practising",
    text: "Begin with the foundations and build a steady routine at your own pace.",
  },
];

const faqs = [
  {
    q: "Who is the best yoga teacher in Gurgaon?",
    a: "The best yoga teacher depends on your goals, experience and comfort. Look for clear instruction, attention to safety, a welcoming approach and consistent guidance. You can contact Satvik Yoga to learn about our classes and see whether they suit you.",
  },
  {
    q: "How do I find a good yoga teacher near me?",
    a: "Start by deciding what you want from yoga, such as flexibility, strength, relaxation or breathing practice. Then speak to the teacher, ask about class structure and level, and choose a class where you feel comfortable.",
  },
  {
    q: "Is there a yoga teacher for beginners in Gurgaon?",
    a: "Yes. Satvik Yoga welcomes beginners and focuses on foundational postures, breathing awareness and a comfortable pace. You do not need to be flexible to begin.",
  },
  {
    q: "Can I learn yoga if I live in Faridabad or elsewhere in Delhi NCR?",
    a: "People from Faridabad and other Delhi NCR areas can contact Satvik Yoga to learn about current class options, including online yoga classes that can be joined from home.",
  },
  {
    q: "What yoga styles can I learn?",
    a: "Satvik Yoga offers guidance in styles such as Ashtanga Yoga, Hatha Yoga, pranayama and meditation, therapeutic yoga and corporate yoga. Visit our classes page to see what is available.",
  },
  {
    q: "Do you offer personal guidance or group classes?",
    a: "Contact Satvik Yoga to ask about the group classes, personal guidance and online options currently available, along with schedules.",
  },
  {
    q: "Can working professionals learn yoga with a teacher?",
    a: "Yes. Working professionals can include yoga in their routine according to their schedule. We also offer corporate yoga programs for teams and workplaces.",
  },
  {
    q: "Where is Satvik Yoga located?",
    a: "Satvik Yoga is based in Sector 47, Gurugram, near Subhash Chowk. Contact us for information about classes, schedules and availability.",
  },
];

/* ───────────────────────── STRUCTURED DATA ───────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Satvik Yoga",
      url: "https://www.satvikyog.co.in",
      image: "https://www.satvikyog.co.in/yoga-teacher-gurgaon-satvik-yoga.webp",
      description:
        "Yoga teacher and yoga classes in Gurgaon, serving Gurgaon, Delhi NCR and Faridabad.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Sector 47, near Subhash Chowk",
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        addressCountry: "IN",
      },
      areaServed: ["Gurgaon", "Gurugram", "Delhi NCR", "Faridabad"],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

/* ───────────────────────── DESIGN HELPERS ───────────────────────── */
const linkClass =
  "font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors";

const glassBtn =
  "group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/40 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-primary hover:-translate-y-0.5 transition-all duration-300";

function Heading({
  children,
  light = false,
  center = false,
}: {
  children: ReactNode;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <AnimateOnScroll>
      <div className={`mb-12 md:mb-16 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
        <h2
          className={`font-heading text-3xl md:text-5xl font-bold leading-tight ${
            light ? "text-white" : "text-text-dark"
          }`}
        >
          {children}
        </h2>
        <div
          className={`mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent ${
            center ? "mx-auto" : ""
          }`}
        />
      </div>
    </AnimateOnScroll>
  );
}

function PhotoArch({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative aspect-[3/4] rounded-t-[999px] rounded-b-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-cream">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 440px, 90vw"
        className="object-cover"
      />
    </div>
  );
}

/* ───────────────────────── PAGE ───────────────────────── */
export default function FamousYogaTeacherGurgaonPage() {
  const hasProfile =
    teacher.name ||
    teacher.title ||
    teacher.experience ||
    teacher.certifications.length > 0 ||
    teacher.about;

  return (
    <main className="pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-text-dark pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-40 -right-24 w-[30rem] h-[30rem] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-text-dark/60" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
          {/* Text */}
          <AnimateOnScroll>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-accent font-semibold text-sm mb-6 backdrop-blur-md">
              <MapPin className="w-4 h-4" />
              <span>Gurgaon · Delhi NCR · Faridabad</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Famous Yoga Teacher in{" "}
              <span className="text-accent">Gurgaon, Delhi NCR</span> &amp;
              Faridabad
            </h1>

            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-5">
              Looking for a famous yoga teacher in Gurgaon? Satvik Yoga offers
              guided yoga classes for beginners and regular practitioners, with
              attention to posture, breathing, movement and consistency.
            </p>
            <p className="text-white/70 text-base md:text-lg leading-relaxed mb-10">
              People in Gurgaon, Delhi NCR and Faridabad can contact Satvik Yoga
              to learn about class options and find a practice that suits their
              level and goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <WhatsAppButton
                size="lg"
                message="Hi, I am looking for a yoga teacher in Gurgaon. Can you share the class details?"
                className="bg-gradient-to-r from-accent to-amber-300 text-text-dark hover:from-white hover:to-white hover:text-primary border-none shadow-lg shadow-accent/30 !mx-0 !w-auto"
              >
                Talk to Our Yoga Teacher
              </WhatsAppButton>
              <Link href="/classes" className={glassBtn}>
                Get Our Classes Detail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>

          {/* Photo */}
          <AnimateOnScroll delay={0.2}>
            <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-5 rounded-t-[999px] rounded-b-[3rem] bg-gradient-to-tr from-accent/40 via-primary/30 to-transparent blur-2xl" />
              <div className="relative">
                <PhotoArch
                  priority
                  src="/yoga-teacher-gurgaon-satvik-yoga.webp"
                  alt="Yoga teacher in Gurgaon leading a group relaxation session at Satvik Yoga"
                />
              </div>

              <div className="absolute -left-4 bottom-10 md:-left-10 bg-white rounded-2xl shadow-xl border border-primary/10 px-5 py-4 flex items-center gap-3 animate-bounce-slow">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-heading font-bold text-text-dark leading-tight">
                    Sector 47
                  </div>
                  <div className="text-xs text-text-light">Gurugram</div>
                </div>
              </div>

              <div className="absolute -right-3 top-16 md:-right-8 hidden sm:flex bg-white rounded-2xl shadow-xl border border-primary/10 px-5 py-4 items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-accent/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-heading font-bold text-text-dark leading-tight">
                    All Levels
                  </div>
                  <div className="text-xs text-text-light">Beginner friendly</div>
                </div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── AREAS STRIP ── */}
      <section className="bg-cream border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-3">
          {areas.map((a) => (
            <span
              key={a}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 text-text-dark text-sm font-semibold shadow-sm"
            >
              <MapPin className="w-4 h-4 text-primary" />
              {a}
            </span>
          ))}
        </div>
      </section>

      {/* ── HOW TO CHOOSE ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>How to Choose the Best Yoga Teacher in Gurgaon</Heading>

          <AnimateOnScroll>
            <p className="text-text-light text-lg leading-relaxed mb-12 max-w-3xl -mt-6">
              Many people search for the best yoga teacher in Gurgaon or a famous
              yoga teacher near them. Fame matters less than the quality of
              guidance. These are the qualities worth looking for before you
              commit to a class.
            </p>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {qualities.map((q, i) => (
              <AnimateOnScroll key={q.title} delay={(i % 3) * 0.1}>
                <div className="relative h-full overflow-hidden bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <span className="absolute -right-2 -top-4 font-heading text-8xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <q.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="relative font-heading text-xl font-bold text-text-dark mb-3">
                    {q.title}
                  </h3>
                  <p className="relative text-text-light leading-relaxed">
                    {q.text}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET THE TEACHER (shows only the details you fill in) ── */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Heading light>Yoga Teacher in Gurgaon at Satvik Yoga</Heading>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <AnimateOnScroll>
              <div className="space-y-5">
                <p className="text-white/90 text-lg leading-relaxed">
                  Satvik Yoga is based in Gurugram and offers guided yoga classes
                  for students with different levels of experience. Classes bring
                  together yoga postures, breath awareness and mindful movement.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  The focus is on helping students build a steady, sustainable
                  practice with clear guidance rather than rushing into
                  challenging postures.
                </p>

                {hasProfile && (
                  <div className="mt-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-7">
                    {teacher.name && (
                      <div className="font-heading text-2xl font-bold text-white">
                        {teacher.name}
                      </div>
                    )}
                    {teacher.title && (
                      <div className="text-accent font-semibold mb-3">
                        {teacher.title}
                      </div>
                    )}
                    {teacher.experience && (
                      <div className="text-white/90 mb-3">{teacher.experience}</div>
                    )}
                    {teacher.about && (
                      <p className="text-white/80 leading-relaxed mb-3">
                        {teacher.about}
                      </p>
                    )}
                    {teacher.certifications.length > 0 && (
                      <ul className="flex flex-wrap gap-2">
                        {teacher.certifications.map((c) => (
                          <li
                            key={c}
                            className="px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold"
                          >
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.15}>
              <div className="grid grid-cols-3 gap-4">
                {whyUs.map((w) => (
                  <div
                    key={w.title}
                    className="col-span-3 sm:col-span-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white"
                  >
                    <w.icon className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-heading font-bold text-lg mb-2">
                      {w.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {w.text}
                    </p>
                  </div>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── BEGINNERS + PHOTO ── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>Yoga Teacher in Gurgaon for Beginners</Heading>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll>
              <div className="relative max-w-md mx-auto w-full">
                <div className="absolute inset-0 bg-accent/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
                <div className="relative aspect-[9/16] max-h-[620px] mx-auto rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/pranayama-class-gurgaon-satvik-yoga.webp"
                    alt="Pranayama and breathing practice class at Satvik Yoga studio in Gurgaon"
                    fill
                    sizes="(min-width: 1024px) 440px, 90vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 via-transparent to-transparent" />
                </div>
              </div>
            </AnimateOnScroll>

            <div className="space-y-6">
              {[
                "You do not need to be flexible or experienced to begin yoga. A suitable yoga teacher introduces basic postures, breathing awareness and safe movement at a pace that feels comfortable.",
                "Beginners often benefit from learning the foundations first. With patient guidance, you can understand how to move, how to breathe and how to listen to your body before moving to more challenging practice.",
                "If you are searching for a yoga trainer or yoga instructor in Gurgaon, speak to the teacher, ask about the class structure and choose a class where you feel supported.",
              ].map((p, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div className="bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <p className="text-text-light text-lg leading-relaxed">{p}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STYLES / INTERNAL LINKS ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading center>Learn Every Style With One Yoga Teacher</Heading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {styles.map((s, i) => (
              <AnimateOnScroll key={s.title} delay={(i % 3) * 0.1}>
                <Link
                  href={s.href}
                  className="group relative block h-full bg-white p-8 rounded-3xl border border-primary/5 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <s.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <ArrowUpRight className="w-6 h-6 text-text-light group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-2">
                    {s.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{s.text}</p>
                </Link>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll>
            <p className="text-center text-text-light text-lg mt-12">
              To compare every option, visit our{" "}
              <a href="/yoga-classes-gurgaon" className={linkClass}>
                Yoga Classes in Gurgaon
              </a>{" "}
              page.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── GUIDANCE + PHOTO ── */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>Personal Guidance From a Yoga Teacher</Heading>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 lg:order-1 order-2">
              {[
                "Good yoga teaching is attentive. A teacher watches how students move, offers clear verbal cues and suggests modifications so each person can practise appropriately.",
                "Appropriate guidance on alignment and breathing helps students build awareness and confidence over time. The pace and intensity should always match the individual.",
                <>
                  If you want to practise at home or live outside Gurgaon, you
                  can also explore our{" "}
                  <a href="/online-yoga-classes" className={linkClass}>
                    Online Yoga Classes
                  </a>{" "}
                  for live guidance from wherever you are.
                </>,
              ].map((p, i) => (
                <AnimateOnScroll key={i} delay={i * 0.1}>
                  <div className="bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                    <p className="text-text-light text-lg leading-relaxed">{p}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <AnimateOnScroll delay={0.1}>
              <div className="relative max-w-md mx-auto w-full lg:order-2 order-1">
                <div className="absolute inset-0 bg-primary/15 rounded-[3rem] -translate-x-4 translate-y-4 -z-10" />
                <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/yoga-teacher-hands-on-guidance-triangle-pose.webp"
                    alt="Yoga teacher giving alignment guidance to a student in triangle pose"
                    fill
                    sizes="(min-width: 1024px) 440px, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── WORKING PROFESSIONALS ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>Yoga Teacher for Working Professionals</Heading>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <AnimateOnScroll>
              <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <p className="text-text-light text-lg leading-relaxed">
                  Busy schedules are one of the main reasons people look for a
                  personal yoga teacher in Gurgaon. A consistent practice can
                  give you dedicated time for movement, breathing and focused
                  attention, especially after long hours at a desk.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <p className="text-text-light text-lg leading-relaxed">
                  If you want yoga for your team or workplace, you can explore
                  our
                  <a
                    href="/corporate"
                    className={`${linkClass} ml-1`}
                  >
                    Corporate Yoga Classes in Gurgaon
                  </a>{" "}
                  page.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── DELHI NCR & FARIDABAD ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>Yoga Teacher in Delhi NCR and Faridabad</Heading>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <AnimateOnScroll>
              <div className="h-full bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <p className="text-text-light text-lg leading-relaxed">
                  Satvik Yoga is based in Gurugram and serves the local Gurgaon
                  area. People searching for a yoga teacher in Delhi NCR or
                  Faridabad can contact Satvik Yoga to learn about available
                  classes, schedules and online options.
                </p>
              </div>
            </AnimateOnScroll>
            <AnimateOnScroll delay={0.1}>
              <div className="h-full bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                <p className="text-text-light text-lg leading-relaxed">
                  Whether you are searching for the best yoga teacher near me,
                  a yoga guru in Gurgaon or a yoga instructor in your part of
                  Delhi NCR, a quick conversation can help you understand which
                  class and format suit you.
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── HOW TO START ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading center>How to Start Learning Yoga With Us</Heading>

          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10" />
            {steps.map((s, i) => (
              <AnimateOnScroll key={s.n} delay={i * 0.1}>
                <div className="relative h-full bg-white p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 text-center">
                  <div className="relative z-10 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-heading text-2xl font-bold shadow-lg mb-6">
                    {s.n}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                    {s.title}
                  </h3>
                  <p className="text-text-light leading-relaxed">{s.text}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOCATION ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading>Yoga Teacher Near Sector 47, Gurgaon</Heading>
          <AnimateOnScroll>
            <div className="max-w-3xl bg-cream p-8 rounded-3xl border border-primary/5 flex gap-5 items-start hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <p className="text-text-light text-lg leading-relaxed">
                Satvik Yoga is located in Sector 47, Gurugram, near Subhash
                Chowk. If you are searching for a yoga teacher in Gurgaon,
                contact Satvik Yoga for information about current classes,
                schedules and availability.
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Heading center>Frequently Asked Questions About Yoga Teachers</Heading>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} delay={(i % 4) * 0.05}>
                <details className="group bg-white rounded-2xl border border-primary/5 hover:border-primary/20 open:border-primary/30 open:shadow-lg transition-all duration-300">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 md:p-7">
                    <h3 className="font-heading text-lg md:text-xl font-bold text-text-dark">
                      {f.q}
                    </h3>
                    <span className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-open:bg-primary transition-colors">
                      <ChevronDown className="w-5 h-5 text-primary group-open:text-white group-open:rotate-180 transition-transform duration-300" />
                    </span>
                  </summary>
                  <p className="px-6 md:px-7 pb-6 md:pb-7 text-text-light leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary-dark py-20 md:py-28">
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Yoga With a Teacher in Gurgaon Today
            </h2>
            <p className="text-white/90 text-lg mb-5 leading-relaxed max-w-2xl mx-auto">
              Looking for the best yoga teacher in Gurgaon, Delhi NCR or
              Faridabad? Satvik Yoga provides a supportive environment for
              beginners and regular practitioners who want to build a steady,
              mindful practice.
            </p>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact Satvik Yoga to learn more about available classes,
              schedules and practice options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <WhatsAppButton
                size="lg"
                message="Hi, I'd like to book a trial yoga class with your yoga teacher in Gurgaon."
                className="bg-gradient-to-r from-accent to-amber-300 text-text-dark hover:from-white hover:to-white border-none shadow-xl shadow-black/20 !mx-0 !w-auto"
              >
                Book a Trial Class
              </WhatsAppButton>
              <Link href="/classes" className={glassBtn}>
                Get Our Classes Detail
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Sticky WhatsApp bar (mobile only) ── */}
      <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
        <WhatsAppButton
          size="lg"
          message="Hi, I am looking for a yoga teacher in Gurgaon. Can you share the class details?"
          className="w-full bg-gradient-to-r from-accent to-amber-300 text-text-dark border-none shadow-xl shadow-black/30"
        >
          Chat With Our Yoga Teacher
        </WhatsAppButton>
      </div>
    </main>
  );
}
