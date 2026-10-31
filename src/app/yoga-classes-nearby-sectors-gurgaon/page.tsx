
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Home Yoga Classes Near Sector 36, 44, 45, 46 & Other Areas Gurgaon | Satvik Yoga",
  description:
    "Looking for home yoga classes near Sector 36, 36A, Sector 44, 45, 46, 48, 49, 51, 29, 30, 33, 34 or 35 in Gurgaon? Contact Satvik Yoga for personal yoga sessions at home.",
  keywords: [
    "home yoga classes in Gurgaon",
    "yoga instructor near me Gurgaon",
    "yoga classes near Sector 36 Gurgaon",
    "yoga classes near Sector 44 Gurgaon",
    "yoga classes near Sector 45 Gurgaon",
    "yoga classes near Sector 46 Gurgaon",
    "yoga classes near Sector 48 Gurgaon",
    "yoga classes near Sector 49 Gurgaon",
    "yoga classes near Sector 51 Gurgaon",
    "yoga classes near Sector 29 Gurgaon",
    "yoga classes near Sector 30 Gurgaon",
    "yoga classes near Sector 33 Gurgaon",
    "yoga classes near Sector 34 Gurgaon",
    "yoga classes near Sector 35 Gurgaon",
    "personal yoga trainer Gurgaon",
    "home yoga instructor Gurgaon",
  ],
  alternates: {
    canonical:
      "https://www.satvikyog.co.in/yoga-classes-nearby-sectors-gurgaon",
  },
  openGraph: {
    title: "Home Yoga Classes in Nearby Sectors of Gurgaon | Satvik Yoga",
    description:
      "Explore personal home yoga sessions in selected nearby sectors of Gurgaon. Contact Satvik Yoga to check location availability.",
    url: "https://www.satvikyog.co.in/yoga-classes-nearby-sectors-gurgaon",
    siteName: "Satvik Yoga",
    type: "website",
  },
};

const nearbyAreas = [
  {
    title: "Sector 36 and 36A",
    description:
      "Residents of Sector 36 and Sector 36A can contact us to enquire about personal yoga sessions at home.",
  },
  {
    title: "Sector 44, 45 and 46",
    description:
      "Looking for a yoga instructor near Sector 44, 45 or 46? Ask us about available home yoga sessions in your area.",
  },
  {
    title: "Sector 48, 49 and 51 – Sohna Road Side",
    description:
      "If you live around Sector 48, 49 or 51 near Sohna Road, contact Satvik Yoga to check whether home sessions are available at your location.",
  },
  {
    title: "Sector 29 and 30 – Cyber City Side",
    description:
      "Residents and working professionals around Sector 29 and 30 can enquire about personal yoga classes and convenient home sessions.",
  },
  {
    title: "Sector 33, 34 and 35",
    description:
      "We also welcome enquiries from Sector 33, 34 and 35 for individual yoga sessions at home, subject to instructor availability.",
  },
];

const faqs = [
  {
    question: "Do you provide home yoga classes in Sector 36 and 36A Gurgaon?",
    answer:
      "You can contact Satvik Yoga to check home yoga class availability in Sector 36 and 36A. Sessions depend on your exact location and instructor availability.",
  },
  {
    question: "Can I book a personal yoga instructor near Sector 44, 45 or 46?",
    answer:
      "Yes, you can enquire about personal yoga sessions near Sector 44, 45 and 46. Share your location and preferred schedule to check availability.",
  },
  {
    question: "Do you offer yoga classes near Sohna Road?",
    answer:
      "You can enquire about home yoga sessions in Sector 48, 49 and 51 on the Sohna Road side of Gurgaon. Availability is confirmed according to the exact address.",
  },
  {
    question: "Are home yoga classes available near Sector 29 and 30?",
    answer:
      "Please contact us with your location in Sector 29 or 30. We can check whether a home yoga session can be arranged.",
  },
  {
    question: "What types of yoga classes can I enquire about?",
    answer:
      "You can enquire about Hatha Yoga, therapeutic yoga, flexibility-focused yoga and personal yoga sessions. The suitable class depends on your goals and individual requirements.",
  },
  {
    question: "How can I check whether my address is serviceable?",
    answer:
      "Send your sector, society or complete locality and preferred timing through WhatsApp. We will confirm availability before you book.",
  },
];

export default function NearbySectorsYogaPage() {
  return (
    <main className="bg-white text-text-dark">
      {/* Hero Section */}
      <section className="bg-[#f5f8f3] py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-700 mb-3">
            Personal Yoga Sessions in Gurgaon
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Home Yoga Classes in Nearby Sectors of Gurgaon
          </h1>

          <p className="text-base sm:text-lg text-text-light leading-8 max-w-3xl mx-auto mb-8">
            Looking for a personal yoga instructor near Sector 36, 36A, 44,
            45, 46, 48, 49, 51, 29, 30, 33, 34 or 35 in Gurgaon? Satvik Yoga
            welcomes enquiries for personal yoga sessions at home. Contact
            us to check availability in your area.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20Satvik%20Yoga%2C%20I%20am%20looking%20for%20home%20yoga%20classes%20in%20Gurgaon."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-green-700 px-8 py-3 text-white font-semibold hover:bg-green-800 transition"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            Personal Yoga Instructor Near You in Gurgaon
          </h2>

          <p className="text-text-light leading-8 mb-4">
            Finding time to travel to a yoga studio can be difficult with a
            busy daily routine. Personal yoga sessions at home can offer a
            convenient way to include yoga in your lifestyle.
          </p>

          <p className="text-text-light leading-8 mb-4">
            Satvik Yoga is based near the Sector 39 and Jharsa area of Gurgaon.
            We welcome enquiries from nearby residential and commercial
            sectors for home yoga sessions. Our instructor visits students
            at home where the location and schedule are serviceable.
          </p>

          <p className="text-text-light leading-8">
            Whether your goal is to improve flexibility, build a regular yoga
            routine or explore therapeutic yoga, you can contact us to discuss
            your requirements and suitable class options.
          </p>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-[#f8faf7] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
            Areas We Welcome Enquiries From
          </h2>

          <p className="text-text-light text-center leading-8 max-w-3xl mx-auto mb-10">
            We welcome home yoga enquiries from the following sectors of
            Gurgaon. Actual service availability depends on the exact address,
            travel distance and instructor schedule.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nearbyAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-3">
                  {area.title}
                </h3>
                <p className="text-text-light leading-7">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Why Choose Personal Yoga Classes at Home?
          </h2>

          <div className="space-y-5 text-text-light leading-8">
            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Convenient Home Sessions
              </h3>
              <p>
                Practise yoga at home without travelling to a studio. Session
                arrangements can be discussed according to location and
                availability.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Individual Attention
              </h3>
              <p>
                Personal sessions allow the instructor to understand your
                experience, comfort level and yoga goals.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Yoga for Different Goals
              </h3>
              <p>
                Enquire about yoga practices for flexibility, general fitness,
                relaxation and a consistent daily routine.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Discuss Your Preferred Schedule
              </h3>
              <p>
                Share your preferred days and timings so that available
                session options can be discussed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Yoga Services */}
      <section className="bg-[#f8faf7] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Yoga Classes You Can Enquire About
          </h2>

          <div className="space-y-5 text-text-light leading-8">
            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Hatha Yoga
              </h3>
              <p>
                Explore traditional yoga postures, breathing practices and
                mindful movement through Hatha Yoga sessions.
              </p>
              <Link
                href="/hatha-yoga-gurgaon"
                className="text-green-700 font-semibold underline"
              >
                Explore Hatha Yoga
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Therapeutic Yoga
              </h3>
              <p>
                Enquire about therapeutic yoga practices based on your
                individual needs and suitability.
              </p>
              <Link
                href="/therapeutic-yoga-gurgaon"
                className="text-green-700 font-semibold underline"
              >
                Explore Therapeutic Yoga
              </Link>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text-dark">
                Personal Yoga Sessions
              </h3>
              <p>
                Discuss one-to-one home yoga sessions according to your
                location, experience and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            How to Enquire About Home Yoga Classes
          </h2>

          <ol className="list-decimal pl-6 space-y-3 text-text-light leading-8">
            <li>Contact Satvik Yoga through WhatsApp.</li>
            <li>Share your sector, society or exact locality in Gurgaon.</li>
            <li>Tell us your preferred days and timings.</li>
            <li>Discuss your yoga goals and preferred class type.</li>
            <li>Confirm availability before scheduling your sessions.</li>
          </ol>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#f8faf7] py-14 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-5"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {faq.question}
                </h3>
                <p className="text-text-light leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#edf5eb]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-5">
            Looking for a Home Yoga Instructor in Gurgaon?
          </h2>

          <p className="text-text-light leading-8 mb-8">
            Contact Satvik Yoga with your sector and location. We will help
            you check whether personal home yoga sessions are available in
            your area.
          </p>

          <a
            href="https://wa.me/91XXXXXXXXXX?text=Hello%20Satvik%20Yoga%2C%20please%20share%20details%20about%20home%20yoga%20classes%20in%20my%20area."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-green-700 px-8 py-3 text-white font-semibold hover:bg-green-800 transition"
          >
            Contact Satvik Yoga
          </a>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-text-light mb-4">
            Explore more yoga services:
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <Link
              href="/classes"
              className="text-green-700 underline font-medium"
            >
              Yoga Classes
            </Link>
            <Link
              href="/hatha-yoga-gurgaon"
              className="text-green-700 underline font-medium"
            >
              Hatha Yoga Gurgaon
            </Link>
            <Link
              href="/therapeutic-yoga-gurgaon"
              className="text-green-700 underline font-medium"
            >
              Therapeutic Yoga
            </Link>
            <Link
              href="/contact"
              className="text-green-700 underline font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
