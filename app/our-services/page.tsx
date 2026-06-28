import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function OurServicesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
        <Image
          src="/Images/site/hero.jpg"
          alt="Our Services - Al Qaswa Marine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062644]/70 via-[#062644]/40 to-[#062644]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            Our Services
          </h1>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 py-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="relative w-full aspect-[4/5] bg-gray-100 overflow-hidden">
            <Image
              src="/Images/site/about-main.jpg"
              alt="Marine services"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#0b3c6b]">
                Our Services
              </h2>
              <div className="h-[2px] flex-1 bg-blue-600/40" />
            </div>

            <p className="text-blue-600 font-semibold leading-relaxed">
              We are supplier of the main engine and auxiliary engine and its
              spare parts. New, Recondition and Second-hand engine parts as per
              client requirement.
            </p>

            <ul className="list-disc pl-6 text-gray-700 space-y-2 leading-relaxed">
              <li>
                We supply 4-stroke engine parts such as Crankshaft, Cylinder
                Block, Bed plate, Camshafts, Cylinder heads, Cylinder Liners,
                Pistons, Connecting rods, Fuel pumps, Cross-head pin, Main
                bearings, all other parts.
              </li>
              <li>Repair and fully overhauled of 4-stroke engines parts.</li>
              <li>
                Service &amp; supply of 2-stroke engine spare parts and supply
                such as Cylinder heads, Cylinder Liners, Piston skirts, Piston
                Rods, Piston Crowns, Piston pin, Valve Spindles, Valve Seats,
                Valve cages, Rotators, Valve springs, Injectors, Fuel pumps,
                Fuel pipes &amp; other parts.
              </li>
              <li>Overhaul turbocharger of the 4-stroke and 2-stroke engines.</li>
              <li>
                Supply complete main engines and auxiliary engines and generator
                sets too.
              </li>
              <li>
                Supply Hydraulic pumps &amp; motors, Air compressors, Purifiers,
                Ref. Compressors, Governors &amp; its new spares.
              </li>
              <li>
                We deal in marine &amp; industrial automation and navigation
                equipment.
              </li>
            </ul>

            <p className="text-blue-600 font-semibold leading-relaxed pt-2">
              Our workshop is ready for you 365 days a year / 24 hours a day for
              your engine care.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

