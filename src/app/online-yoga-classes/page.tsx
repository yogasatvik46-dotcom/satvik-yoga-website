import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Online Yoga Classes in India | Satvik Yoga",

  description:
    "Join online yoga classes with Satvik Yoga from anywhere in India. Guided yoga sessions for beginners and regular practitioners with postures, breathing practices, mindful movement and relaxation.",

  keywords: [
    "Online Yoga Classes in India",
    "Online Yoga Classes",
    "Online Yoga Classes for Beginners",
    "Online Hatha Yoga Classes",
    "Online Yoga Classes India",
    "Yoga Classes Online India",
    "Online Yoga Instructor India",
    "Online Yoga for Beginners",
    "Online Therapeutic Yoga",
    "Online Yoga Classes from Home",
  ],

  alternates: {
    canonical: "https://www.satvikyog.co.in/online-yoga-classes",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Online Yoga Classes in India | Satvik Yoga",
    description:
      "Join guided online yoga classes with Satvik Yoga from anywhere in India. Practice yoga from home with structured instruction for beginners and regular practitioners.",
    url: "https://www.satvikyog.co.in/online-yoga-classes",
    siteName: "Satvik Yoga",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Online Yoga Classes in India | Satvik Yoga",
    description:
      "Join guided online yoga classes from anywhere in India with Satvik Yoga.",
  },
};

export default function OnlineYogaClassesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Online Yoga Classes in India
          </h1>

          <p className="text-lg text-text-light leading-relaxed mb-6">
            Satvik Yoga offers guided online yoga classes for students across
            India. Practice yoga from the comfort of your home with structured
            sessions covering yoga postures, mindful movement, breathing
            practices and relaxation.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Whether you are a beginner starting your yoga journey or an
            experienced practitioner looking for a consistent routine, online
            yoga classes can provide a convenient way to learn and practice
            with instructor guidance.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold underline"
            >
              Enquire About Online Yoga Classes
            </a>

            <a
              href="/yoga-classes-gurgaon"
              className="inline-block px-6 py-3 rounded-lg font-semibold underline"
            >
              Yoga Classes in Gurgaon
            </a>
          </div>
        </div>
      </section>

      {/* Online Classes */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Join Online Yoga Classes From Anywhere in India
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            You do not need to be located in Gurgaon to learn with Satvik Yoga.
            Our online yoga classes allow students from different cities and
            parts of India to practice from their own homes.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Online sessions can be especially convenient for people with busy
            schedules, students who travel frequently, working professionals
            and anyone who prefers practicing yoga at home.
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Practice from the comfort of your home</li>
            <li>Guided instruction during the session</li>
            <li>Suitable options for beginners and regular practitioners</li>
            <li>Structured yoga practice</li>
            <li>Breathing and relaxation practices</li>
            <li>Convenient access from different locations across India</li>
          </ul>
        </div>
      </section>

      {/* Who Can Join */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Who Can Join Our Online Yoga Classes?
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Online yoga classes can be suitable for people with different
            levels of experience. The appropriate class and practice should
            always depend on your individual needs, experience and comfort.
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Beginners who want to learn yoga step by step</li>
            <li>Regular yoga practitioners</li>
            <li>Working professionals</li>
            <li>Students</li>
            <li>People who prefer practicing yoga at home</li>
            <li>People who cannot regularly attend an in-person class</li>
          </ul>
        </div>
      </section>

      {/* Types of Classes */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-8">
            Types of Online Yoga Classes
          </h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Online Hatha Yoga
              </h3>

              <p className="text-text-light leading-relaxed">
                Learn Hatha Yoga through guided online sessions focusing on
                yoga postures, breathing awareness, mindful movement and
                relaxation.
              </p>

              <a
                href="/hatha-yoga-gurgaon"
                className="font-semibold underline inline-block mt-3"
              >
                Explore Hatha Yoga
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Online Therapeutic Yoga
              </h3>

              <p className="text-text-light leading-relaxed">
                Explore guided yoga practices designed around individual
                movement, breathing and relaxation needs. Contact Satvik Yoga
                to understand which online practice may be appropriate for
                you.
              </p>

              <a
                href="/therapeutic-yoga-gurgaon"
                className="font-semibold underline inline-block mt-3"
              >
                Explore Therapeutic Yoga
              </a>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Online Yoga for Beginners
              </h3>

              <p className="text-text-light leading-relaxed">
                Beginners can learn foundational postures, movement patterns,
                breathing awareness and relaxation gradually with appropriate
                instruction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-text-dark mb-3">
                Online Yoga for Working Professionals
              </h3>

              <p className="text-text-light leading-relaxed">
                Online yoga can provide working professionals with a convenient
                way to include movement, breathing and relaxation in a busy
                routine.
              </p>

              <a
                href="/corporate-yoga-gurgaon"
                className="font-semibold underline inline-block mt-3"
              >
                Explore Corporate Yoga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Class Experience */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            What Happens in an Online Yoga Class?
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            The exact structure of an online class can vary according to the
            type of session, the instructor and the students participating.
          </p>

          <p className="text-text-light leading-relaxed mb-6">
            A session may include preparation movements, yoga postures,
            breathing awareness, mindful movement and relaxation.
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Preparation and gentle movement</li>
            <li>Guided yoga postures</li>
            <li>Breathing awareness</li>
            <li>Mindful movement</li>
            <li>Relaxation</li>
          </ul>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Benefits of Practicing Yoga Online
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Online yoga can make regular practice more convenient by removing
            the need to travel to a studio. The benefits of yoga practice vary
            from person to person and depend on the nature and consistency of
            the practice.
          </p>

          <ul className="text-text-light leading-relaxed mb-10 list-disc pl-6 space-y-2">
            <li>Convenient practice from home</li>
            <li>Less travel time</li>
            <li>Structured guidance during sessions</li>
            <li>Opportunity to develop a consistent routine</li>
            <li>Greater awareness of movement and breathing</li>
            <li>Time for relaxation and mindful practice</li>
          </ul>
        </div>
      </section>

      {/* Guidance */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Guided Yoga Practice With Satvik Yoga
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Learning yoga with appropriate guidance can help students
            understand postures, movement and breathing practices more clearly.
            Online classes provide an opportunity to learn while practicing in
            your own home environment.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Students should practice within a comfortable range and communicate
            with the instructor about relevant limitations or concerns before
            participating in practices that may not be suitable for them.
          </p>

          <a
            href="/about"
            className="font-semibold underline"
          >
            Meet the Satvik Yoga Team
          </a>
        </div>
      </section>

      {/* India */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Online Yoga Classes for Students Across India
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga welcomes enquiries from students across India who want
            to learn yoga online. Whether you are in Delhi, Mumbai, Bengaluru,
            Ahmedabad, Jaipur, Pune, Hyderabad, Chennai, Kolkata or another
            city, you can contact us to ask about available online classes.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            Online classes are particularly useful when distance makes regular
            studio attendance difficult. You can practice from your own home
            while receiving guided instruction during the session.
          </p>
        </div>
      </section>

      {/* Gurgaon Connection */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            Satvik Yoga in Gurgaon
          </h2>

          <p className="text-text-light leading-relaxed mb-6">
            Satvik Yoga also offers in-person yoga options in Gurgaon,
            Gurugram. Our local classes are based in Sector 47, near Subhash
            Chowk.
          </p>

          <p className="text-text-light leading-relaxed mb-10">
            If you are located in Gurgaon and prefer to attend classes in
            person, explore our local yoga classes. If you live elsewhere in
            India, our online classes provide another way to practice with
            Satvik Yoga.
          </p>

          <a
            href="/yoga-classes-gurgaon"
            className="font-semibold underline"
          >
            Explore Yoga Classes in Gurgaon
          </a>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-4">
            How to Join an Online Yoga Class
          </h2>

          <ol className="text-text-light leading-relaxed mb-10 list-decimal pl-6 space-y-3">
            <li>Contact Satvik Yoga about online class availability.</li>
            <li>Tell us about your experience and practice requirements.</li>
            <li>Choose an available class or practice option.</li>
            <li>Receive the information needed to join the online session.</li>
            <li>Join the class from a suitable space at home.</li>
          </ol>

          <p className="text-text-light leading-relaxed">
            Contact us before joining if you have questions about whether a
            particular class is appropriate for your experience or needs.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark mb-8">
            Frequently Asked Questions About Online Yoga Classes
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Do you offer online yoga classes across India?
              </h3>

              <p className="text-text-light leading-relaxed">
                Yes. Satvik Yoga accepts enquiries from students across India
                who are interested in guided online yoga classes.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Are online yoga classes suitable for beginners?
              </h3>

              <p className="text-text-light leading-relaxed">
                Online yoga can be suitable for beginners when the class and
                instruction match their experience level. Beginners can learn
                foundational postures, breathing awareness and mindful movement
                gradually.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Can I join online yoga classes from Delhi?
              </h3>

              <p className="text-text-light leading-relaxed">
                Yes. Students in Delhi and other parts of India can enquire
                about available online yoga classes with Satvik Yoga.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Can I join from Mumbai, Bengaluru or another city?
              </h3>

              <p className="text-text-light leading-relaxed">
                Yes. Online classes are intended for students who cannot or do
                not want to attend an in-person class in Gurgaon. Contact
                Satvik Yoga to ask about current online options.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                What types of yoga can I learn online?
              </h3>

              <p className="text-text-light leading-relaxed">
                Available options may include Hatha Yoga, beginner yoga,
                therapeutic-oriented practices and other guided sessions.
                Contact Satvik Yoga for current class availability.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                Do I need any special equipment?
              </h3>

              <p className="text-text-light leading-relaxed">
                A comfortable space and a suitable yoga mat are generally
                helpful for online practice. Any additional requirements depend
                on the particular class.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">
                How can I enquire about online yoga classes?
              </h3>

              <p className="text-text-light leading-relaxed">
                Contact Satvik Yoga with your location, experience level and
                preferred type of yoga. We can then provide information about
                available online practice options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
            Start Your Online Yoga Practice With Satvik Yoga
          </h2>

          <p className="text-text-light leading-relaxed mb-8">
            Looking for online yoga classes in India? Contact Satvik Yoga to
            learn about current online classes, schedules and practice options.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold underline"
            >
              Enquire Now
            </a>

            <a
              href="/hatha-yoga-gurgaon"
              className="inline-block px-6 py-3 rounded-lg font-semibold underline"
            >
              Hatha Yoga Classes
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}    
