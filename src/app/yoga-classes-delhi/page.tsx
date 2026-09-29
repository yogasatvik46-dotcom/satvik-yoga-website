import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yoga Classes in Delhi | Hatha & Online Yoga | Satvik Yoga",
  description:
    "Explore yoga classes in Delhi with Satvik Yoga. Enquire about Hatha Yoga, therapeutic yoga and guided online yoga classes for beginners and regular practitioners in Delhi.",
  keywords: [
    "Yoga Classes in Delhi",
    "Yoga Classes Delhi",
    "Yoga Teacher in Delhi",
    "Hatha Yoga Classes Delhi",
    "Hatha Yoga Delhi",
    "Therapeutic Yoga Delhi",
    "Online Yoga Classes Delhi",
    "Yoga for Beginners Delhi",
    "Yoga Instructor Delhi",
  ],
  alternates: {
    canonical: "https://www.satvikyog.co.in/yoga-classes-delhi",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Yoga Classes in Delhi | Satvik Yoga",
    description:
      "Enquire about guided yoga classes in Delhi with Satvik Yoga, including Hatha Yoga, therapeutic-oriented practices and online yoga classes.",
    url: "https://www.satvikyog.co.in/yoga-classes-delhi",
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Classes in Delhi | Satvik Yoga",
    description:
      "Explore guided yoga options for students in Delhi with Satvik Yoga.",
  },
};

const faqs = [
  {
    question: "Do you offer yoga classes for students in Delhi?",
    answer:
      "Satvik Yoga welcomes enquiries from students in Delhi who are interested in guided yoga practice. Contact us to ask about current class availability and suitable options.",
  },
  {
    question: "Can beginners join yoga classes in Delhi?",
    answer:
      "Yes. Beginners can enquire about suitable yoga sessions based on their experience level. Yoga practice can be introduced gradually with appropriate guidance.",
  },
  {
    question: "Do you offer Hatha Yoga for students in Delhi?",
    answer:
      "Satvik Yoga offers Hatha Yoga as part of its guided yoga practice. Students in Delhi can contact us to enquire about available options.",
  },
  {
    question: "Can I join online yoga classes from Delhi?",
    answer:
      "Yes. Students in Delhi can enquire about Satvik Yoga's online yoga classes and practice from home with guided instruction.",
  },
  {
    question: "Do you offer therapeutic yoga for students in Delhi?",
    answer:
      "Students in Delhi can contact Satvik Yoga to enquire about therapeutic-oriented yoga practices and whether a particular practice is appropriate for their individual needs.",
  },
  {
    question: "How can I enquire about yoga classes in Delhi?",
    answer:
      "Contact Satvik Yoga with your location, experience level and preferred type of yoga. We can then provide information about available classes and online practice options.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function YogaClassesDelhiPage() {
  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Satvik Yoga
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-text-dark leading-tight mb-6">
              Yoga Classes in Delhi
            </h1>

            <p className="text-lg text-text-light leading-relaxed mb-6">
              Satvik Yoga welcomes enquiries from students in Delhi who are
              looking for guided yoga practice. Explore Hatha Yoga, therapeutic
              yoga-oriented practices and online yoga classes designed for
              beginners and regular practitioners.
            </p>

            <p className="text-text-light leading-relaxed mb-8">
              Whether you are beginning your yoga journey or looking for a
              consistent practice, you can contact Satvik Yoga to understand
              the available class and online practice options.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-block px-6 py-3 rounded-lg font-semibold underline"
              >
                Enquire About Yoga Classes
              </Link>

              <Link
                href="/online-yoga-classes"
                className="inline-block px-6 py-3 rounded-lg font-semibold underline"
              >
                Online Yoga Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-5">
            Guided Yoga Practice for Students in Delhi
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Yoga can be practiced at different levels and adapted according to
            a student's experience, comfort and goals. Satvik Yoga focuses on
            guided practice that may include yoga postures, mindful movement,
            breathing awareness and relaxation.
          </p>

          <p className="text-text-light leading-relaxed">
            If you are based in Delhi and want to learn yoga with instructor
            guidance, contact Satvik Yoga to enquire about available options.
            Online classes are also available for students who prefer to
            practice from home.
          </p>
        </div>
      </section>

      {/* Types of Yoga */}
      <section className="py-16 bg-white border-t border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-8">
            Yoga Classes Available for Delhi Students
          </h2>

          <div className="space-y-10">
            {/* Hatha */}
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Hatha Yoga
              </h3>

              <p className="text-text-light leading-relaxed mb-4">
                Hatha Yoga can provide a structured approach to yoga practice
                through postures, movement, breathing awareness and relaxation.
                Students in Delhi can enquire about Hatha Yoga options with
                Satvik Yoga.
              </p>

              <Link
                href="/hatha-yoga-gurgaon"
                className="font-semibold underline"
              >
                Explore Hatha Yoga
              </Link>
            </div>

            {/* Therapeutic */}
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Therapeutic Yoga
              </h3>

              <p className="text-text-light leading-relaxed mb-4">
                Therapeutic-oriented yoga practices can be considered according
                to an individual's movement, breathing, comfort and practice
                requirements. Contact Satvik Yoga to discuss available options.
              </p>

              <Link
                href="/therapeutic-yoga-gurgaon"
                className="font-semibold underline"
              >
                Explore Therapeutic Yoga
              </Link>
            </div>

            {/* Beginners */}
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Yoga for Beginners
              </h3>

              <p className="text-text-light leading-relaxed">
                Beginners can learn foundational yoga postures, movement
                patterns, breathing awareness and relaxation gradually with
                appropriate instruction.
              </p>
            </div>

            {/* Online */}
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Online Yoga Classes from Delhi
              </h3>

              <p className="text-text-light leading-relaxed mb-4">
                If you are in Delhi and prefer practicing from home, Satvik
                Yoga also offers online yoga classes for students across India.
                Online sessions provide guided instruction without requiring
                regular travel to a physical class.
              </p>

              <Link
                href="/online-yoga-classes"
                className="font-semibold underline"
              >
                Explore Online Yoga Classes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-5">
            Who Can Join Yoga Classes in Delhi?
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Yoga practice can be suitable for people with different levels of
            experience. The appropriate class should depend on individual
            requirements, experience and comfort.
          </p>

          <ul className="text-text-light leading-relaxed list-disc pl-6 space-y-3">
            <li>Beginners learning yoga for the first time</li>
            <li>Regular yoga practitioners</li>
            <li>Working professionals</li>
            <li>Students</li>
            <li>People who prefer practicing yoga at home</li>
            <li>People looking for guided online yoga classes</li>
          </ul>
        </div>
      </section>

      {/* Why Satvik */}
      <section className="py-16 bg-white border-t border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-5">
            Guided Yoga Practice With Satvik Yoga
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga provides guided yoga practice focused on mindful
            movement, yoga postures, breathing awareness and relaxation.
            Students can enquire about available practice options according to
            their experience and preferences.
          </p>

          <p className="text-text-light leading-relaxed mb-6">
            If you are in Delhi, share your location, experience level and
            preferred type of yoga when contacting us. This helps us understand
            which available practice option may be suitable for you.
          </p>

          <Link href="/about" className="font-semibold underline">
            Learn More About Satvik Yoga
          </Link>
        </div>
      </section>

      {/* Delhi + India */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-5">
            Yoga Classes for Students in Delhi and Across India
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga accepts enquiries from students in Delhi as well as
            students from other parts of India who want to learn yoga online.
            Online classes can be a convenient option when distance or schedule
            makes regular in-person attendance difficult.
          </p>

          <p className="text-text-light leading-relaxed">
            Students from cities such as Gurgaon, Mumbai, Bengaluru, Ahmedabad,
            Jaipur, Pune, Hyderabad, Chennai and Kolkata can also enquire about
            available online yoga practice options.
          </p>
        </div>
      </section>

      {/* Gurgaon Connection */}
      <section className="py-16 bg-white border-t border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-5">
            Satvik Yoga in Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga also offers local yoga options in Gurgaon, Gurugram.
            Students looking specifically for Gurgaon yoga classes can explore
            the dedicated local page below.
          </p>

          <Link
            href="/yoga-classes-gurgaon"
            className="font-semibold underline"
          >
            Explore Yoga Classes in Gurgaon
          </Link>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            How to Enquire About Yoga Classes in Delhi
          </h2>

          <ol className="text-text-light leading-relaxed list-decimal pl-6 space-y-3">
            <li>Contact Satvik Yoga about your yoga practice requirements.</li>
            <li>Share your location and experience level.</li>
            <li>Tell us which type of yoga you are interested in.</li>
            <li>Ask about current class or online practice availability.</li>
            <li>Choose a suitable available practice option.</li>
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-8">
            Frequently Asked Questions About Yoga Classes in Delhi
          </h2>

          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {faq.question}
                </h3>

                <p className="text-text-light leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-5">
            Looking for Yoga Classes in Delhi?
          </h2>

          <p className="text-text-light leading-relaxed max-w-2xl mx-auto mb-8">
            Contact Satvik Yoga to enquire about available yoga classes,
            Hatha Yoga, therapeutic-oriented practices and online yoga classes
            for students in Delhi.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-block px-7 py-3 rounded-lg font-semibold underline"
            >
              Enquire Now
            </Link>

            <Link
              href="/online-yoga-classes"
              className="inline-block px-7 py-3 rounded-lg font-semibold underline"
            >
              Online Yoga Classes
            </Link>

            <Link
              href="/yoga-classes-gurgaon"
              className="inline-block px-7 py-3 rounded-lg font-semibold underline"
            >
              Gurgaon Yoga Classes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
