import WhatsAppButton from "./WhatsAppButton";
import type { YogaClass } from "@/data/classes";
import Link from "next/link";

interface ClassCardProps {
  yogaClass: YogaClass;
}

export default function ClassCard({ yogaClass }: ClassCardProps) {
  const image = (
    <img
      src={yogaClass.image}
      alt={yogaClass.title}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
    />
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-primary/5">
      <div className="relative h-52 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
        {yogaClass.href ? (
          <Link href={yogaClass.href} className="block w-full h-full">
            {image}
          </Link>
        ) : (
          image
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
          {yogaClass.href ? (
            <Link href={yogaClass.href}>{yogaClass.title}</Link>
          ) : (
            yogaClass.title
          )}
        </h3>
        <p className="text-text-light text-sm leading-relaxed mb-4">
          {yogaClass.description}
        </p>

        {yogaClass.href && (
          <Link
            href={yogaClass.href}
            className="inline-block mb-4 text-sm font-semibold text-primary hover:underline"
          >
            Learn more about {yogaClass.title}
          </Link>
        )}

        {/* WhatsApp CTA */}
        <WhatsAppButton
          message={`Hi, I want to know more about ${yogaClass.title}`}
          size="sm"
          className="w-full"
        >
          Inquire on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
