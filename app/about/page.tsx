import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
        <Image
          src="/Images/site/hero.jpg"
          alt="About Al Qaswa Marine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062644]/70 via-[#062644]/40 to-[#062644]/70" />
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 py-14 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="relative min-h-[460px] md:min-h-[540px]">
            <div
              className="absolute left-0 top-0 w-[78%] h-[78%] overflow-hidden"
              style={{
                clipPath:
                  "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
              }}
            >
              <Image
                src="/Images/site/about-main.jpg"
                alt="Marine logistics"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="absolute left-6 bottom-10 w-[52%] aspect-square rounded-md overflow-hidden shadow-xl border-4 border-white bg-gray-100">
              <Image
                src="/Images/site/about-overlay.jpg"
                alt="Shipping vessel"
                fill
                sizes="(min-width: 1024px) 22vw, 60vw"
                className="object-cover"
              />
            </div>

            <div className="absolute right-0 bottom-0 w-[44%] aspect-[4/3] rounded-md overflow-hidden shadow-xl border-4 border-white bg-gray-100">
              <Image
                src="/Images/site/product-3.jpg"
                alt="Marine engineering"
                fill
                sizes="(min-width: 1024px) 20vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              About Us
            </h2>

            <h3 className="text-xl md:text-2xl text-blue-600 font-extrabold">
              Al Qaswa Marine – Your Global Partner for Marine Engine Spare Parts
            </h3>

            <p className="text-gray-700 leading-relaxed">
              Looking for a reliable marine spare parts supplier you can trust
              worldwide?{" "}
              <strong>
                Al Qaswa Marine delivers — fast, dependable, and cost-effective
                solutions from India&apos;s leading marine hub.
              </strong>
            </p>

            <p className="text-gray-700 leading-relaxed">
              Strategically located in Bhavnagar and Alang, we operate at the
              heart of the global ship recycling and marine supply industry,
              giving us direct access to a vast range of quality engine
              components.
            </p>

            <h4 className="text-2xl font-extrabold text-blue-600 pt-2">
              Why International Clients Choose Al Qaswa Marine
            </h4>

            <div className="space-y-3">
              <h5 className="font-extrabold text-gray-900">
                Massive Ready Stock – Immediate Dispatch
              </h5>
              <p className="text-gray-700 leading-relaxed">
                With a <strong>75,000 sq. ft. warehouse</strong>, we maintain a
                large inventory of marine engine spare parts ready for quick
                shipment worldwide — helping you reduce vessel downtime and
                operational delays.
              </p>
            </div>

            <div className="space-y-3">
              <h5 className="font-extrabold text-gray-900">
                Complete Engine Spare Parts Solutions
              </h5>
              <p className="text-gray-700 leading-relaxed">
                We supply critical components for{" "}
                <strong>main and auxiliary engines</strong>, including:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Cylinder Heads, Liners &amp; Pistons</li>
                <li>Crankshafts &amp; Connecting Rods</li>
                <li>Fuel Pumps &amp; Injectors</li>
                <li>Turbochargers &amp; Governors</li>
                <li>Cylinder Blocks and more</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 py-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600">
              Multi-Brand Expertise
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We support a wide range of globally trusted brands such as MAN
              B&amp;W, Wärtsilä, Yanmar, Electro-Motive Diesel (EMD), Daihatsu,
              Hyundai Himsen, Deutz, Sulzer, Mitsubishi, MTU, Bergen Engines,
              Rolls-Royce, ABB, Woodward and many more.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600">
              Quality You Can Trust
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We supply genuine, OEM, and reconditioned parts, all inspected to
              meet international marine standards — ensuring performance,
              reliability, and long service life.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600">
              Competitive Pricing Advantage
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Being located in Alang allows us to offer high-quality parts at
              highly competitive prices, giving you a strong cost advantage
              without compromising reliability.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600">
              Global Supply &amp; Fast Response
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No matter where your vessel operates, our team ensures:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Quick quotations</li>
              <li>Fast order processing</li>
              <li>Reliable worldwide shipping</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-extrabold text-blue-600">
              Let&apos;s Power Your Fleet
            </h3>
            <p className="text-gray-700 leading-relaxed">
              At Al Qaswa Marine, we don&apos;t just supply parts — we deliver
              confidence, speed, and long-term value to your operations.
            </p>
            <p className="text-gray-700 leading-relaxed font-semibold">
              Partner with us to keep your vessels running efficiently —
              anywhere in the world.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

