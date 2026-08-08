import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Yoga Classes in Gurgaon | Satvik Yoga",
  description:
    "Looking for the best yoga classes in Gurgaon? Satvik Yoga offers Hatha, Ashtanga, Prenatal Yoga, Meditation, Pranayama and wellness classes for different levels.",

  keywords: [
    "best yoga classes in Gurgaon",
    "yoga classes in Gurgaon",
    "yoga classes in Gurugram",
    "best yoga studio in Gurgaon",
    "yoga studio in Gurgaon",
    "Satvik Yoga Gurgaon",
    "Hatha Yoga Gurgaon",
    "Ashtanga Yoga Gurgaon",
    "Prenatal Yoga Gurgaon",
    "Pranayama classes Gurgaon",
    "meditation classes Gurgaon",
    "yoga for beginners Gurgaon",
    "corporate yoga Gurgaon",
  ],

  alternates: {
    canonical: "https://www.satvikyog.co.in/yoga-classes-gurgaon",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function YogaClassesGurgaonPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Best Yoga Classes in Gurgaon
          </h1>

          <p className="text-lg text-text-light leading-relaxed mb-8">
            Satvik Yoga offers expert-led yoga classes in Gurgaon for
            beginners and experienced practitioners. Our approach combines
            traditional yoga practices with mindful movement, breathing,
            meditation and holistic wellness.
          </p>

          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes at Satvik Yoga
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Whether you are starting your yoga journey or looking to deepen
            your existing practice, Satvik Yoga provides a welcoming
            environment with experienced guidance and thoughtfully designed
            sessions.
          </p>

          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Our Yoga Practices
          </h2>

          <ul className="space-y-3 text-text-light mb-10">
            <li>• Hatha Yoga</li>
            <li>• Ashtanga Yoga</li>
            <li>• Prenatal Yoga</li>
            <li>• Pranayama</li>
            <li>• Meditation</li>
            <li>• Yoga for Beginners</li>
            <li>• Corporate Yoga</li>
          </ul>

          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Why Choose Satvik Yoga?
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga focuses on building a balanced practice that supports
            flexibility, strength, breathing, relaxation and overall
            well-being. Our sessions are suitable for people with different
            experience levels and wellness goals.
          </p>

          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes in Gurgaon for Beginners
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            If you are new to yoga, our beginner-friendly approach can help
            you understand basic yoga postures, breathing techniques and
            mindful practices at a comfortable pace.
          </p>

          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Start Your Yoga Journey
          </h2>

          <p className="text-text-light leading-relaxed">
            Looking for yoga classes in Gurgaon? Explore Satvik Yoga and
            discover a mindful approach to movement, breathing and wellness.
            Contact us to learn more about available classes and timings.
          </p>

        </div>
      </section>
    </main>
  );
}
