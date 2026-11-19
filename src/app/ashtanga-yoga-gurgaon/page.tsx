import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import {
  Dumbbell,
  StretchHorizontal,
  Scale,
  User,
  Wind,
  BrainCircuit,
  CalendarCheck,
} from "lucide-react";

/* ───────────── METADATA (unchanged – keeps your SEO) ───────────── */
export const metadata: Metadata = {
  title: "Ashtanga Yoga Classes in Gurgaon & Gurugram | Satvik Yoga",

  description:
    "Join Ashtanga Yoga classes in Gurgaon with Satvik Yoga. Explore a structured yoga practice combining postures, breath awareness, movement and mindful practice for beginners and regular practitioners.",

  keywords: [
    "Ashtanga Yoga Classes in Gurgaon",
    "Ashtanga Yoga Gurgaon",
    "Ashtanga Yoga Classes in Gurugram",
    "Ashtanga Yoga Gurugram",
    "Ashtanga Yoga in Delhi NCR",
    "Ashtanga Yoga Classes Near Me",
    "Ashtanga Yoga for Beginners",
    "Beginner Ashtanga Yoga Gurgaon",
    "Traditional Ashtanga Yoga Gurgaon",
    "Yoga Classes Gurgaon",
  ],

  alternates: {
    canonical: "https://www.satvikyog.co.in/ashtanga-yoga-gurgaon",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Ashtanga Yoga Classes in Gurgaon & Gurugram | Satvik Yoga",
    description:
      "Learn Ashtanga Yoga in Gurgaon with guided movement, yoga postures, breath awareness and mindful practice at Satvik Yoga.",
    url: "https://www.satvikyog.co.in/ashtanga-yoga-gurgaon",
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ashtanga Yoga Classes in Gurgaon | Satvik Yoga",
    description:
      "Explore guided Ashtanga Yoga classes in Gurgaon for beginners and regular practitioners.",
  },
};

/* ───────────── Small layout helpers (design only) ───────────── */

function Section({
  heading,
  tone = "white",
  paras,
  children,
}: {
  heading: string;
  tone?: "white" | "cream";
  paras?: ReactNode[];
  children?: ReactNode;
}) {
  return (
    <section
      className={`py-16 md:py-24 ${tone === "cream" ? "bg-cream" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="mb-10 md:mb-14 max-w-3xl">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark leading-tight">
              {heading}
            </h2>
            <div className="mt-5 h-1 w-20 rounded-full bg-primary" />
          </div>
        </AnimateOnScroll>

        {paras && (
          <div
            className={`grid gap-6 md:gap-8 ${
              paras.length > 1 ? "md:grid-cols-2" : "max-w-3xl"
            }`}
          >
            {paras.map((p, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <p className="text-text-light text-lg leading-relaxed">{p}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

const linkClass =
  "font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors";

const benefits = [
  { label: "Strength and physical stability", icon: Dumbbell, color: "text-primary", bg: "bg-primary/10" },
  { label: "Flexibility and mobility", icon: StretchHorizontal, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Balance and coordination", icon: Scale, color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Body awareness", icon: User, color: "text-rose-500", bg: "bg-rose-500/10" },
  { label: "Breath awareness", icon: Wind, color: "text-sky-500", bg: "bg-sky-500/10" },
  { label: "Concentration and mindful attention", icon: BrainCircuit, color: "text-violet-500", bg: "bg-violet-500/10" },
  { label: "Consistency in a regular yoga routine", icon: CalendarCheck, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const faqs = [
  {
    q: "What is Ashtanga Yoga?",
    a: "Ashtanga Yoga is a structured yoga practice associated with sequences of postures coordinated with breathing and focused attention.",
  },
  {
    q: "Is Ashtanga Yoga suitable for beginners?",
    a: "Beginners can learn Ashtanga Yoga by starting with foundational postures, movement and breathing awareness. The practice should progress according to the individual's experience and comfort.",
  },
  {
    q: "Do I need to be flexible to start Ashtanga Yoga?",
    a: "You do not need advanced flexibility to begin. Flexibility and movement ability can develop gradually through appropriate and consistent practice.",
  },
  {
    q: "What does an Ashtanga Yoga class include?",
    a: "An Ashtanga Yoga class may include a structured sequence of postures coordinated with breath and focused attention. The exact class format depends on the teacher and level of the students.",
  },
  {
    q: "What are the benefits of Ashtanga Yoga?",
    a: "Regular practice may support strength, mobility, balance, coordination, body awareness, breath awareness and concentration.",
  },
  {
    q: "Can working professionals practice Ashtanga Yoga?",
    a: "Yes. Working professionals can include Ashtanga Yoga in a regular movement and wellness routine according to their schedule and individual level.",
  },
  {
    q: "Where can I learn Ashtanga Yoga in Gurgaon?",
    a: "Satvik Yoga is based in Sector 47, Gurugram, near Subhash Chowk. Contact Satvik Yoga for information about Ashtanga Yoga classes, schedules and availability.",
  },
];

/* ───────────── PAGE ───────────── */
export default function AshtangaYogaGurgaonPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-text-dark relative overflow-hidden">
        <Image
          src="/ashtanga-yoga-gurgaon-hero.webp"
          alt="Ashtanga Yoga practice at sunrise in Gurgaon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-dark via-text-dark/70 to-text-dark/30" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ashtanga Yoga Classes in Gurgaon
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              Satvik Yoga offers guided Ashtanga Yoga classes in Gurgaon for
              beginners and regular practitioners. Ashtanga Yoga is a structured
              practice that brings together yoga postures, movement, breath
              awareness and focused attention.
            </p>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              The practice can help students develop consistency, body awareness
              and a deeper understanding of the relationship between movement
              and breath. Whether you are new to Ashtanga Yoga or already have a
              regular practice, appropriate guidance can help you develop your
              practice progressively.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <Link
    href="/classes"
    className="inline-flex items-center justify-center px-8 py-4 rounded-full text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-colors"
  >
    Get Our Classes Detail
  </Link>
            <WhatsAppButton
              size="lg"
              message="Hi, I am interested in Ashtanga Yoga classes in Gurgaon. Can you share the class details?"
              className="bg-accent text-text-dark hover:bg-white hover:text-accent border-none mx-auto shadow-lg shadow-accent/20"
            >
              Enquire on WhatsApp
            </WhatsAppButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── What is Ashtanga ── */}
      <Section
        tone="cream"
        heading="What Is Ashtanga Yoga?"
        paras={[
          "Ashtanga Yoga is a traditional yoga system associated with a structured sequence of postures. The practice combines movement with breath and encourages students to develop a consistent and focused approach to their practice.",
          "Ashtanga practice can involve physical postures, coordinated breathing and focused attention. The pace and intensity of practice should be appropriate for the individual, particularly for people who are new to the style.",
        ]}
      />

      {/* ── Class photo ── */}
      <section className="pt-16 pb-4 md:pt-24 md:pb-4 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative">
              <div className="absolute inset-0 bg-accent/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
              <div className="relative aspect-[4/3] md:aspect-[16/9] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/ashtanga-yoga-class-gurgaon.webp"
                  alt="Ashtanga Yoga class in Gurgaon with students practicing on yoga mats"
                  fill
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/60 via-transparent to-transparent" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── Gurgaon & Gurugram ── */}
      <Section
        heading="Ashtanga Yoga Classes in Gurgaon and Gurugram"
        paras={[
          "Satvik Yoga provides a welcoming environment for people interested in learning and practicing Ashtanga Yoga in Gurgaon. Classes can be suitable for students who are beginning their yoga journey as well as practitioners who want to develop a more consistent practice.",
          "The practice can be approached progressively, allowing students to become familiar with postures, movement patterns and breath awareness before advancing to more challenging aspects of the practice.",
        ]}
      />

      {/* ── Beginners ── */}
      <Section
        tone="cream"
        heading="Ashtanga Yoga for Beginners"
        paras={[
          "Beginners do not need to be highly flexible or experienced to start learning Ashtanga Yoga. A suitable introduction can focus on basic postures, movement, breathing awareness and learning how to approach the practice safely.",
          "Ashtanga is a practice that develops over time. Beginners should focus on learning the foundations rather than trying to complete advanced sequences immediately.",
        ]}
      />

      {/* ── Structure ── */}
      <Section
        heading="Understanding the Ashtanga Yoga Practice"
        paras={[
          "A key characteristic of Ashtanga Yoga is its structured approach to practice. Students work through a sequence of yoga postures while coordinating movement and breath.",
          "Regular practice allows students to become familiar with the sequence and gradually develop greater awareness of movement, breathing and concentration.",
        ]}
      />

      {/* ── Breath ── */}
      <Section
        tone="cream"
        heading="Ashtanga Yoga and Breath Awareness"
        paras={[
          "Breath awareness plays an important role in Ashtanga Yoga. Students learn to coordinate breathing with physical movement and develop greater awareness of the breath during their practice.",
          "Learning to maintain comfortable and steady breathing can help students stay focused during the practice. Breathing should not be forced, and beginners should learn appropriate techniques under suitable guidance.",
        ]}
      />

      {/* ── Benefits ── */}
      <Section heading="Benefits of Ashtanga Yoga">
        <AnimateOnScroll>
          <p className="text-text-light text-lg leading-relaxed mb-10 max-w-3xl">
            A consistent yoga practice can support physical movement and mindful
            awareness. Depending on the individual and the nature of their
            practice, Ashtanga Yoga may help support:
          </p>
        </AnimateOnScroll>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <li key={b.label}>
              <AnimateOnScroll delay={i * 0.08}>
                <div className="h-full bg-cream p-6 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start group">
                  <div
                    className={`w-14 h-14 rounded-2xl ${b.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <b.icon className={`w-7 h-7 ${b.color}`} />
                  </div>
                  <span className="font-heading text-lg font-bold text-text-dark leading-snug">
                    {b.label}
                  </span>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Consistency ── */}
      <Section
        tone="cream"
        heading="Building a Consistent Ashtanga Yoga Practice"
        paras={[
          "Consistency is an important part of developing an Ashtanga Yoga practice. Rather than focusing only on difficult postures, students can benefit from gradually learning the sequence and establishing a sustainable routine.",
          "The practice can be adjusted according to experience, mobility and individual circumstances. Listening to the body and respecting personal limits is an important part of maintaining a sustainable practice.",
        ]}
      />

      {/* ── Working Professionals ── */}
      <Section
        heading="Ashtanga Yoga for Working Professionals"
        paras={[
          "Working professionals may choose Ashtanga Yoga as part of a regular movement and wellness routine. A consistent practice can provide dedicated time for physical movement, breathing awareness and focused attention.",
          <>
            If you are looking for yoga programs for employees or workplace
            wellness, you can also explore our
            <a href="/corporate-yoga-gurgaon" className={`${linkClass} ml-1`}>
              Corporate Yoga Classes in Gurgaon
            </a>{" "}
            page.
          </>,
        ]}
      />

      {/* ── Hatha ── */}
      <Section
        tone="cream"
        heading="Ashtanga Yoga Compared With Hatha Yoga"
        paras={[
          "Hatha Yoga and Ashtanga Yoga both include physical postures and breath awareness, but their approaches can be different. Hatha Yoga generally gives students more time to explore individual postures, while Ashtanga follows a more structured sequence-based approach.",
          <>
            If you prefer a more measured approach to learning individual
            postures and foundational yoga practices, you can explore our
            <a href="/hatha-yoga-gurgaon" className={`${linkClass} ml-1`}>
              Hatha Yoga Classes in Gurgaon
            </a>{" "}
            page.
          </>,
        ]}
      />

      {/* ── Gurgaon NCR ── */}
      <Section
        heading="Ashtanga Yoga in Gurgaon and Delhi NCR"
        paras={[
          "Satvik Yoga is based in Gurugram and serves the local Gurgaon area. People searching for Ashtanga Yoga in Gurgaon, Gurugram or nearby Delhi NCR areas can contact Satvik Yoga to learn more about available classes and schedules.",
        ]}
      />

      {/* ── Why Satvik ── */}
      <Section
        tone="cream"
        heading="Why Choose Satvik Yoga for Ashtanga Yoga?"
        paras={[
          "Satvik Yoga focuses on making yoga approachable for students with different levels of experience. Ashtanga Yoga can be explored progressively, with attention to movement, breathing and consistency.",
          "Students can develop their practice gradually instead of rushing into advanced postures. Appropriate modifications and guidance can help practitioners work within their current level of ability.",
        ]}
      />

      {/* ── Location ── */}
      <Section
        heading="Ashtanga Yoga Classes Near Sector 47, Gurgaon"
        paras={[
          "Satvik Yoga is located in Sector 47, Gurugram, near Subhash Chowk. If you are searching for Ashtanga Yoga classes in Gurgaon, contact Satvik Yoga for information about current classes, schedules and availability.",
        ]}
      />

      {/* ── Explore ── */}
      <Section
        tone="cream"
        heading="Explore More Yoga Classes in Gurgaon"
        paras={[
          <>
            If you would like to explore different yoga practices, visit our
            <a href="/yoga-classes-gurgaon" className={`${linkClass} ml-1`}>
              Yoga Classes in Gurgaon
            </a>{" "}
            page to learn more about the classes available at Satvik Yoga.
          </>,
        ]}
      />

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-10 md:mb-14 max-w-3xl">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                Frequently Asked Questions About Ashtanga Yoga
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-primary" />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} delay={(i % 2) * 0.1}>
                <div className="h-full bg-cream p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <h3 className="font-heading text-xl font-bold text-text-dark mb-3">
                    {f.q}
                  </h3>
                  <p className="text-text-light leading-relaxed">{f.a}</p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-20 md:py-24 bg-primary relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <AnimateOnScroll>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Ashtanga Yoga Practice in Gurgaon
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Looking for Ashtanga Yoga classes in Gurgaon? Satvik Yoga provides
              a supportive environment for beginners and regular practitioners
              who want to explore structured yoga practice, movement, breathing
              awareness and focused attention.
            </p>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact Satvik Yoga to learn more about available Ashtanga Yoga
              classes, schedules and practice options in Gurugram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton
                size="lg"
                message="Hi, I'd like to book a trial Ashtanga Yoga class in Gurgaon."
                className="bg-accent hover:text-accent text-text-dark hover:bg-white border-none"
              >
                Book a Trial Class
              </WhatsAppButton>
              <WhatsAppButton
                size="lg"
                message="Hi, can you share the Ashtanga Yoga class schedule and details?"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
              >
                Get Class Details
              </WhatsAppButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
