import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import WhatsAppButton from "@/components/WhatsAppButton";
import {
  Dumbbell,
  StretchHorizontal,
  Scale,
  User,
  Wind,
  Flower2,
  Leaf,
  HeartPulse,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

/* ───────────── METADATA (unchanged – keeps your SEO) ───────────── */
export const metadata: Metadata = {
  title: "Hatha Yoga Classes in Gurgaon & Gurugram | Satvik Yoga",

  description:
    "Join Hatha Yoga classes in Gurgaon with Satvik Yoga. Learn traditional yoga postures, breathing practices, mindful movement and relaxation in a structured and beginner-friendly environment.",

  keywords: [
    "Hatha Yoga Classes in Gurgaon",
    "Hatha Yoga Gurgaon",
    "Hatha Yoga Classes in Gurugram",
    "Hatha Yoga Gurugram",
    "Hatha Yoga in Delhi NCR",
    "Hatha Yoga Classes Near Me",
    "Hatha Yoga for Beginners",
    "Beginner Hatha Yoga Gurgaon",
    "Traditional Hatha Yoga Gurgaon",
    "Yoga Classes Gurgaon",
  ],

  alternates: {
    canonical: "https://www.satvikyog.co.in/hatha-yoga-gurgaon",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Hatha Yoga Classes in Gurgaon & Gurugram | Satvik Yoga",
    description:
      "Learn Hatha Yoga in Gurgaon with guided postures, breathing practices, mindful movement and relaxation at Satvik Yoga.",
    url: "https://www.satvikyog.co.in/hatha-yoga-gurgaon",
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hatha Yoga Classes in Gurgaon | Satvik Yoga",
    description:
      "Explore guided Hatha Yoga classes in Gurgaon for beginners and regular practitioners.",
  },
};

/* ───────────── Design helpers ───────────── */

type Photo = { src: string; alt: string; side?: "left" | "right" };

function PhotoFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-accent/20 rounded-[3rem] translate-x-4 translate-y-4 -z-10" />
      <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white bg-cream">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 480px, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-dark/40 via-transparent to-transparent" />
      </div>
    </div>
  );
}

function Section({
  heading,
  tone = "white",
  paras,
  photo,
  children,
}: {
  heading: string;
  tone?: "white" | "cream";
  paras?: ReactNode[];
  photo?: Photo;
  children?: ReactNode;
}) {
  const cards = paras && (
    <div
      className={`grid gap-6 md:gap-8 ${
        !photo && paras.length > 1 ? "md:grid-cols-2" : ""
      } ${!photo && paras.length === 1 ? "max-w-3xl" : ""}`}
    >
      {paras.map((p, i) => (
        <AnimateOnScroll key={i} delay={i * 0.1}>
          <div className="h-full bg-white p-8 rounded-3xl shadow-sm border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
            <p className="text-text-light text-lg leading-relaxed">{p}</p>
          </div>
        </AnimateOnScroll>
      ))}
    </div>
  );

  return (
    <section
      className={`py-16 md:py-24 overflow-hidden ${
        tone === "cream" ? "bg-cream" : "bg-white"
      }`}
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

        {photo ? (
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimateOnScroll
              delay={0.1}
            >
              <div
                className={`max-w-md mx-auto w-full ${
                  photo.side === "left" ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <PhotoFrame src={photo.src} alt={photo.alt} />
              </div>
            </AnimateOnScroll>
            <div
              className={photo.side === "left" ? "lg:order-2" : "lg:order-1"}
            >
              {cards}
            </div>
          </div>
        ) : (
          cards
        )}

        {children}
      </div>
    </section>
  );
}

const linkClass =
  "font-semibold text-primary underline underline-offset-4 hover:text-accent transition-colors";

const learn = [
  "Basic and intermediate yoga postures",
  "Posture and body awareness",
  "Breathing awareness",
  "Mindful movement",
  "Balance and stability",
  "Flexibility and mobility",
  "Relaxation practices",
  "Developing a consistent yoga routine",
];

const benefits = [
  { label: "Flexibility and mobility", icon: StretchHorizontal, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Strength and stability", icon: Dumbbell, color: "text-primary", bg: "bg-primary/10" },
  { label: "Balance and body awareness", icon: Scale, color: "text-amber-500", bg: "bg-amber-500/10" },
  { label: "Breathing awareness", icon: Wind, color: "text-sky-500", bg: "bg-sky-500/10" },
  { label: "Relaxation", icon: Flower2, color: "text-rose-500", bg: "bg-rose-500/10" },
  { label: "Mindful movement", icon: Sparkles, color: "text-violet-500", bg: "bg-violet-500/10" },
  { label: "A regular wellness routine", icon: Leaf, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

const faqs = [
  {
    q: "What is Hatha Yoga?",
    a: "Hatha Yoga is a traditional approach to yoga that combines physical postures, breathing practices and mindful awareness. The pace can vary depending on the teacher and class.",
  },
  {
    q: "Is Hatha Yoga good for beginners?",
    a: "Hatha Yoga can be suitable for beginners because students can learn individual postures and basic breathing practices gradually. Beginners should practice within a comfortable range and follow appropriate instruction.",
  },
  {
    q: "What do Hatha Yoga classes include?",
    a: "A Hatha Yoga class may include preparation movements, yoga postures, breathing awareness, mindful movement and relaxation. The exact structure depends on the class.",
  },
  {
    q: "How often should I practice Hatha Yoga?",
    a: "The ideal frequency depends on your schedule, experience and individual needs. A consistent practice is generally more useful than occasional intensive sessions.",
  },
  {
    q: "Can working professionals practice Hatha Yoga?",
    a: "Yes. Hatha Yoga can be included in a working professional's routine as a structured practice involving movement, breathing and relaxation.",
  },
  {
    q: "Where can I learn Hatha Yoga in Gurgaon?",
    a: "Satvik Yoga is based in Sector 47, Gurugram, near Subhash Chowk. Contact Satvik Yoga for information about Hatha Yoga classes, schedules and availability.",
  },
];

/* ───────────── PAGE ───────────── */
export default function HathaYogaGurgaonPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-text-dark relative overflow-hidden">
        <Image
          src="/hatha-yoga-classes-gurgaon-hero.webp"
          alt="Hatha Yoga classes in Gurgaon – woman practising cobra pose on a yoga mat"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-text-dark via-text-dark/75 to-text-dark/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimateOnScroll>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hatha Yoga Classes in Gurgaon
            </h1>
            <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-6 max-w-3xl mx-auto">
              Satvik Yoga offers guided Hatha Yoga classes in Gurgaon for
              beginners and regular practitioners. Hatha Yoga provides a
              structured approach to yoga through physical postures, mindful
              movement, breathing practices and relaxation.
            </p>
            <p className="text-white/75 text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              Whether you are beginning your yoga journey or looking to develop
              a more consistent practice, Hatha Yoga can provide a steady
              foundation for understanding yoga postures, breath awareness and
              mindful movement.
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
                message="Hi, I am interested in Hatha Yoga classes in Gurgaon. Can you share the class details?"
                className="bg-accent text-text-dark hover:bg-white hover:text-accent border-none shadow-lg shadow-accent/20 !mx-0 !w-auto"
              >
                Enquire on WhatsApp
              </WhatsAppButton>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── What is Hatha Yoga ── */}
      <Section
        tone="cream"
        heading="What Is Hatha Yoga?"
        photo={{
          src: "/hatha-yoga-practice-gurgaon.webp",
          alt: "Hatha Yoga practice outdoors with yoga blocks and mat – Satvik Yoga Gurgaon",
          side: "left",
        }}
        paras={[
          "Hatha Yoga is a traditional approach to yoga that brings together physical postures, breathing practices and mindful awareness. Classes generally provide time to understand and practice individual postures rather than focusing only on fast-paced movement.",
          "The practice can help students develop greater awareness of alignment, movement, breathing and relaxation. The pace and intensity of a Hatha Yoga class can vary depending on the teacher, students and style of practice.",
        ]}
      />

      {/* ── Classes ── */}
      <Section
        heading="Hatha Yoga Classes in Gurgaon and Gurugram"
        paras={[
          "Satvik Yoga provides a welcoming environment for people interested in learning and practicing Hatha Yoga in Gurgaon. Sessions can be suitable for people who are new to yoga as well as those who already have experience.",
          "A typical practice may include preparation movements, yoga postures, breathing awareness and a period of relaxation. The specific sequence and pace may vary according to the class.",
        ]}
      />

      {/* ── Beginners ── */}
      <Section
        tone="cream"
        heading="Hatha Yoga for Beginners"
        photo={{
          src: "/satvik-yoga-standing-forward-bend-gurgaon.webp",
          alt: "Satvik Yoga student practising a standing forward bend stretch for flexibility",
          side: "right",
        }}
        paras={[
          "Hatha Yoga can be a practical starting point for beginners because it allows students to learn individual postures and movement patterns with attention to comfort and technique.",
          "Beginners can gradually become familiar with basic yoga postures, breathing practices and relaxation. There is no need to compare your practice with another person's ability. Consistency and appropriate guidance are more important than forcing difficult positions.",
        ]}
      />

      {/* ── What You Learn ── */}
      <Section heading="What Do You Learn in Hatha Yoga?">
        <AnimateOnScroll>
          <p className="text-text-light text-lg leading-relaxed mb-10 max-w-3xl">
            Hatha Yoga classes can introduce students to several fundamental
            aspects of yoga practice, including:
          </p>
        </AnimateOnScroll>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {learn.map((item, i) => (
            <li key={item}>
              <AnimateOnScroll delay={i * 0.05}>
                <div className="h-full flex items-start gap-3 bg-cream p-5 rounded-2xl border border-primary/5 hover:border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="font-heading font-semibold text-text-dark leading-snug">
                    {item}
                  </span>
                </div>
              </AnimateOnScroll>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── Benefits ── */}
      <Section tone="cream" heading="Benefits of Hatha Yoga">
        <AnimateOnScroll>
          <p className="text-text-light text-lg leading-relaxed mb-10 max-w-3xl">
            Regular yoga practice can support physical movement and mindful
            awareness. Depending on the individual and the nature of the
            practice, Hatha Yoga may help support:
          </p>
        </AnimateOnScroll>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <li key={b.label}>
              <AnimateOnScroll delay={i * 0.08}>
                <div className="h-full bg-white p-6 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col items-start group">
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

      {/* ── Breathing ── */}
      <Section
        heading="Hatha Yoga and Breathing Practices"
        photo={{
          src: "/hatha-yoga-breathing-meditation-class-gurgaon.webp",
          alt: "Group breathing and meditation practice in a Hatha Yoga class at Satvik Yoga",
          side: "left",
        }}
        paras={[
          "Awareness of the breath is an important part of many Hatha Yoga practices. Students can learn to coordinate breathing with movement and develop greater awareness of their breathing patterns.",
          "Depending on the class, breathing practices may be introduced alongside physical postures and relaxation. Practices should be learned appropriately and performed without forcing the breath.",
        ]}
      />

      {/* ── Working Professionals ── */}
      <Section
        tone="cream"
        heading="Hatha Yoga for Working Professionals"
        paras={[
          "Hatha Yoga can fit into the routine of working professionals who want to make time for movement, breathing and relaxation. A consistent practice can provide a structured break from a predominantly desk-based daily routine.",
          <>
            If you are looking for workplace yoga, you can also explore our
            <a href="/corporate-yoga-gurgaon" className={`${linkClass} ml-1`}>
              Corporate Yoga Classes in Gurgaon
            </a>{" "}
            page for information about corporate and chair yoga.
          </>,
        ]}
      />

      {/* ── Hatha vs Other ── */}
      <Section
        heading="Hatha Yoga Compared With Other Yoga Styles"
        paras={[
          "Different yoga styles can have different approaches to movement and practice. Hatha Yoga generally gives students time to explore postures, breathing and awareness at a measured pace.",
          <>
            If you are interested in a more structured and dynamic traditional
            sequence, you may also explore our
            <a href="/ashtanga-yoga-gurgaon" className={`${linkClass} ml-1`}>
              Ashtanga Yoga Classes in Gurgaon
            </a>{" "}
            page.
          </>,
        ]}
      />

      {/* ── Gurgaon ── */}
      <Section
        tone="cream"
        heading="Hatha Yoga in Gurgaon and Delhi NCR"
        paras={[
          "Satvik Yoga is based in Gurugram and serves the local Gurgaon area. People looking for Hatha Yoga in Gurgaon, Gurugram or nearby Delhi NCR areas can contact Satvik Yoga to learn more about available classes and schedules.",
        ]}
      />

      {/* ── Why Satvik ── */}
      <Section
        heading="Why Choose Satvik Yoga for Hatha Yoga?"
        paras={[
          "Satvik Yoga focuses on making yoga approachable for different levels of practitioners. Hatha Yoga provides an opportunity to develop a foundation in physical postures, breathing awareness and mindful movement.",
          "Students can work at an appropriate pace while learning to understand their own movement and practice. The goal is to build a sustainable relationship with yoga rather than simply performing challenging postures.",
        ]}
      />

      {/* ── Location ── */}
      <Section
        tone="cream"
        heading="Hatha Yoga Classes Near Sector 47, Gurgaon"
        paras={[
          "Satvik Yoga is located in Sector 47, Gurugram, near Subhash Chowk. If you are searching for Hatha Yoga classes in Gurgaon, you can contact the studio for information about current classes, schedules and availability.",
        ]}
      />

      {/* ── Internal Link ── */}
      <Section
        heading="Explore More Yoga Classes in Gurgaon"
        paras={[
          <>
            If you would like to explore other yoga options, visit our
            <a href="/yoga-classes-gurgaon" className={`${linkClass} ml-1`}>
              Yoga Classes in Gurgaon
            </a>{" "}
            page to learn about the different practices and classes available at
            Satvik Yoga.
          </>,
        ]}
      />

      {/* ── FAQ ── */}
      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="mb-10 md:mb-14 max-w-3xl">
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-dark leading-tight">
                Frequently Asked Questions About Hatha Yoga
              </h2>
              <div className="mt-5 h-1 w-20 rounded-full bg-primary" />
            </div>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((f, i) => (
              <AnimateOnScroll key={f.q} delay={(i % 2) * 0.1}>
                <div className="h-full bg-white p-8 rounded-3xl border border-primary/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <HeartPulse className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <h3 className="font-heading text-xl font-bold text-text-dark">
                      {f.q}
                    </h3>
                  </div>
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
              Start Your Hatha Yoga Practice in Gurgaon
            </h2>
            <p className="text-white/90 text-lg mb-6 leading-relaxed max-w-2xl mx-auto">
              Looking for Hatha Yoga classes in Gurgaon? Satvik Yoga provides a
              welcoming environment for beginners and regular practitioners who
              want to explore yoga postures, breathing awareness, mindful
              movement and relaxation.
            </p>
            <p className="text-white/80 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Contact Satvik Yoga to learn more about available Hatha Yoga
              classes, schedules and practice options in Gurugram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <WhatsAppButton
                size="lg"
                message="Hi, I'd like to book a trial Hatha Yoga class in Gurgaon."
                className="bg-accent hover:text-accent text-text-dark hover:bg-white border-none !mx-0 !w-auto"
              >
                Book a Trial Class
              </WhatsAppButton>
              <WhatsAppButton
                size="lg"
                message="Hi, can you share the Hatha Yoga class schedule and details?"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary !mx-0 !w-auto"
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
