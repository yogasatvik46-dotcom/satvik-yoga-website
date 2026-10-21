
import type { Metadata } from "next";

const pageUrl =
  "https://www.satvikyog.co.in/yoga-classes-near-jharsa-gurgaon";


const whatsappNumber = "919992725545";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hello Satvik Yoga, I am looking for home yoga classes near Sector 39 / Jharsa, Gurgaon. Please share availability, timings and fees."
)}`;

export const metadata: Metadata = {
  title: "Home Yoga Classes Near Jharsa & Sector 39 Gurgaon | Satvik Yoga",

  description:
    "Looking for home yoga classes near Jharsa, Sector 39 Gurgaon? Enquire about home-visit yoga sessions and availability near Sectors 31, 40, 37, 32 and 47.",

  keywords: [
    "Yoga Classes Near Jharsa Gurgaon",
    "Yoga Classes in Sector 39 Gurgaon",
    "Home Yoga Classes Gurgaon",
    "Yoga Teacher Near Jharsa",
    "Yoga Instructor Near Sector 39",
    "Yoga Classes in Sector 31 Gurgaon",
    "Yoga Classes in Sector 40 Gurgaon",
    "Yoga Classes in Sector 37 Gurgaon",
    "Yoga Classes in Sector 32 Gurgaon",
    "Yoga Classes in Sector 47 Gurgaon",
    "Yoga Teacher Near Medanta Gurgaon",
    "Yoga Classes Near Subhash Chowk",
    "Personal Yoga Classes Gurgaon",
  ],

  alternates: {
    canonical: pageUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Home Yoga Classes Near Jharsa & Sector 39 Gurgaon | Satvik Yoga",
    description:
      "Enquire about home-visit yoga classes near Jharsa and Sector 39, Gurgaon. Check availability for nearby sectors with Satvik Yoga.",
    url: pageUrl,
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
  },
};

const faqs = [
  {
    question: "Do you offer home yoga classes near Jharsa, Gurgaon?",
    answer:
      "Satvik Yoga accepts enquiries for home-visit yoga sessions near Sector 39 and Jharsa, Gurgaon. Share your location to confirm whether a tutor is available for your home.",
  },
  {
    question: "Which nearby sectors can enquire about home yoga classes?",
    answer:
      "Residents of Sector 39, Sector 31, Sector 40, Sector 37, Sector 32 and Sector 47 can enquire. Availability depends on the exact address, travel distance and tutor schedule.",
  },
  {
    question: "Do you provide yoga classes within 1–2 km of Sector 39?",
    answer:
      "The primary service focus is approximately 1–2 km from the tutor's base near Sector 39 and Jharsa. Actual road distance and availability must be confirmed before booking.",
  },
  {
    question: "Can I get a yoga instructor at my home?",
    answer:
      "You can enquire about a home-visit yoga session by sharing your sector, nearby landmark and preferred timings. The session depends on tutor availability and confirmation.",
  },
  {
    question: "What types of yoga classes can I enquire about?",
    answer:
      "Contact Satvik Yoga to discuss your yoga goals, experience level and the programs currently available for home visits.",
  },
  {
    question: "How can I check yoga class fees and timings?",
    answer:
      "Send an enquiry through WhatsApp with your location, preferred days and convenient timings. Satvik Yoga can confirm available slots and applicable fees.",
  },
];

export default function YogaClassesNearJharsaPage() {
  return (
    <main>
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* H1 */}
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Home Yoga Classes Near Jharsa, Sector 39 Gurgaon
          </h1>

          <p className="text-lg text-text-light leading-relaxed mb-6">
            Looking for yoga classes near your home in Gurgaon? Satvik
            Yoga welcomes enquiries for home-visit yoga sessions near
            Sector 39 and Jharsa. Residents who prefer practising yoga
            at home can contact us to check tutor availability, timings
            and suitable session options.
          </p>

          <p className="text-text-light leading-relaxed mb-6">
            The tutor's base is near Sector 39 / Jharsa, with an initial
            service focus of approximately 1–2 km. Residents in nearby
            sectors can also enquire, as actual travel distance and
            availability depend on the exact location and schedule.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Enquire on WhatsApp
          </a>

          {/* Introduction */}
          <h2 className="text-3xl font-bold text-text-dark mt-14 mb-4">
            Home Yoga Classes in Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Home yoga classes allow people to practise yoga in their
            own surroundings instead of travelling to a class location.
            Depending on availability, a home session may be arranged
            according to the student's experience, goals and preferred
            schedule.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            If you are searching for a yoga teacher near Jharsa or
            Sector 39, Gurgaon, contact Satvik Yoga with your address
            or nearest landmark. We can discuss whether a home visit
            is practical for your location.
          </p>

          {/* Sector 39 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes in Sector 39, Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Sector 39 near Jharsa is the primary target area for
            home-visit yoga enquiries. If you live nearby and prefer
            practising yoga at home, enquire about available sessions,
            suitable timings and fees.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Home visits depend on the exact address, road distance and
            tutor schedule. Contact us before making arrangements.
          </p>

          {/* Sector 31 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes Near Sector 31, Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-10">
            Residents around Sector 31 and the Jharsa / Birla area
            can enquire about home yoga sessions. Share your nearest
            landmark so that the travel distance and availability
            can be checked before booking.
          </p>

          {/* Sector 40 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes Near Sector 40 and HUDA Market
          </h2>

          <p className="text-text-light leading-relaxed mb-10">
            If you live around Sector 40 or HUDA Market, Gurgaon,
            contact Satvik Yoga to enquire about a home-visit yoga
            instructor. Availability depends on your location and
            the tutor's schedule.
          </p>

          {/* Sector 37 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes Near Sector 37 and Hero Honda Chowk
          </h2>

          <p className="text-text-light leading-relaxed mb-10">
            Residents on the Sector 37 and Hero Honda Chowk side
            can enquire about home yoga sessions. Share your exact
            locality or nearby landmark to confirm whether a visit
            can be arranged.
          </p>

          {/* Sector 32 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes Near Sector 32 and Medanta
          </h2>

          <p className="text-text-light leading-relaxed mb-10">
            If you are looking for yoga classes near Sector 32 or
            the Medanta area, contact Satvik Yoga about home-visit
            availability. The distance from the tutor's base must
            be checked before booking.
          </p>

          {/* Sector 47 */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Yoga Classes Near Sector 47 and Subhash Chowk
          </h2>

          <p className="text-text-light leading-relaxed mb-10">
            Residents near Sector 47 and Subhash Chowk can enquire
            about home yoga sessions. This area may be beyond the
            initial 1–2 km service focus, so please confirm availability
            before expecting a home visit.
          </p>

          {/* Nearby Areas */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Nearby Areas for Home Yoga Enquiries
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga's local enquiries focus on Sector 39 and
            Jharsa, with enquiries also welcomed from these Gurgaon
            locations:
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Sector 39 – Jharsa side</li>
            <li>Sector 31 – Jharsa / Birla area</li>
            <li>Sector 40 – HUDA Market area</li>
            <li>Sector 37 – Hero Honda Chowk side</li>
            <li>Sector 32 – Medanta area</li>
            <li>Sector 47 – Subhash Chowk side</li>
          </ul>

          <p className="text-text-light leading-relaxed mb-10">
            These are enquiry areas, not a guarantee of coverage
            within 1–2 km. Confirm your exact address and the available
            travel distance directly with Satvik Yoga.
          </p>

          {/* Session Information */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            What to Discuss Before Booking a Home Yoga Session
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Every student may have different goals, experience levels
            and scheduling requirements. Before arranging a home visit,
            share the information needed to discuss a suitable session.
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Your sector and nearest landmark</li>
            <li>Your preferred days and timings</li>
            <li>Your previous yoga experience</li>
            <li>Your goals and preferred session format</li>
            <li>Any questions about fees and availability</li>
          </ul>

          {/* Why Satvik */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Why Enquire with Satvik Yoga?
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga helps prospective students enquire about
            available yoga programs and suitable class options.
            For home visits near Jharsa, sharing your location first
            helps establish whether the tutor can accommodate
            your request.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Contact Satvik Yoga to discuss your requirements, preferred
            schedule and available session options. All home visits
            are subject to confirmation.
          </p>

          {/* FAQ */}
          <h2 className="text-3xl font-bold text-text-dark mb-6">
            Frequently Asked Questions
          </h2>

          {faqs.map((faq) => (
            <div key={faq.question}>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                {faq.question}
              </h3>

              <p className="text-text-light leading-relaxed mb-6">
                {faq.answer}
              </p>
            </div>
          ))}

          {/* Internal Links */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Explore More Yoga Classes in Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Explore our existing yoga pages to learn more about
            available programs. Contact us to confirm whether a
            particular program is offered as a home visit.
          </p>

          <p className="text-text-light leading-relaxed mb-6">
            Visit our
            <a
              href="/hatha-yoga-gurgaon"
              className="font-semibold underline ml-1"
            >
              Hatha Yoga Classes in Gurgaon
            </a>
            {" "}page to learn more about Hatha Yoga.
          </p>

          <p className="text-text-light leading-relaxed mb-6">
            You can also explore our
            <a
              href="/therapeutic-yoga-gurgaon"
              className="font-semibold underline ml-1"
            >
              Therapeutic Yoga
            </a>
            {" "}page for information about this program.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            For general enquiries, visit our
            <a
              href="/contact"
              className="font-semibold underline ml-1"
            >
              Contact Satvik Yoga
            </a>
            {" "}page.
          </p>

          {/* CTA */}
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Enquire About Home Yoga Classes Near Jharsa
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Looking for a yoga instructor near Sector 39, Jharsa,
            Gurgaon? Contact Satvik Yoga with your sector, nearest
            landmark and preferred timings to check home-visit
            availability.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition"
          >
            Enquire on WhatsApp
          </a>

        </div>
      </section>
    </main>
  );
}
